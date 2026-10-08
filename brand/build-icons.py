import pathlib
import subprocess
import time

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PUB = pathlib.Path("/Users/admin/Documents/GitHub/Portfolio/MyPortfolio/public")
TMP = pathlib.Path("/tmp/studio40/icons")
TMP.mkdir(parents=True, exist_ok=True)

GRAPHITE = "#1F1F1F"
CREAM = "#EDE7DC"
WARM = "#FAF8F4"
RATIO = 480 / 260
PATHS = [
    "M0 5H41.5V131A39 39 0 0 0 80.5 170H167V70L212 3V255H167V180H59.5A59.5 59.5 0 0 1 0 120.5Z",
    "M243 130A118.5 130 0 0 0 480 130A118.5 130 0 0 0 243 130ZM287 130A74.5 120 0 0 0 436 130A74.5 120 0 0 0 287 130Z",
]


def mark(size, fg, width_ratio=0.74, bold=True):
    """Знак ЧО, вписанный в квадрат size: ширина = width_ratio * size."""
    w = size * width_ratio
    h = w / RATIO
    x = (size - w) / 2
    y = (size - h) / 2
    extra = ' stroke="%s" stroke-width="8" stroke-linejoin="round"' % fg if bold else ""
    body = '<path d="%s"/><path d="%s" fill-rule="evenodd"/>' % (PATHS[0], PATHS[1])
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %(s)d %(s)d" width="%(s)d" height="%(s)d">'
            '<g transform="translate(%(x).2f %(y).2f) scale(%(k).5f)" fill="%(fg)s"%(e)s>%(b)s</g></svg>'
            % {"s": size, "x": x, "y": y, "k": w / 480, "fg": fg, "e": extra, "b": body})


def tile(size, bg, fg, border=None, width_ratio=0.74, rx_ratio=0.23):
    rx = round(size * rx_ratio)
    bd = ' stroke="%s" stroke-width="%s"' % (border, max(1, size / 64)) if border else ""
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %(s)d %(s)d" width="%(s)d" height="%(s)d">'
            '<rect x="0" y="0" width="%(s)d" height="%(s)d" rx="%(rx)d" fill="%(bg)s"%(bd)s/>%(m)s</svg>'
            % {"s": size, "rx": rx, "bg": bg, "bd": bd, "m": mark(size, fg, width_ratio)})


def wrap(svg, size):
    return ('<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;'
            'background:transparent}svg{display:block}</style></head><body>%s</body></html>' % svg)


def shot(svg, out, size, scale=1):
    html = TMP / (out.stem + ".html")
    html.write_text(wrap(svg, size), encoding="utf-8")
    if out.exists():
        out.unlink()
    prof = TMP / ("prof_" + out.stem)
    p = subprocess.Popen(
        [CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
         "--force-device-scale-factor=%s" % scale, "--no-first-run", "--no-default-browser-check",
         "--default-background-color=00000000",
         "--user-data-dir=%s" % prof, "--virtual-time-budget=3000",
         "--window-size=%d,%d" % (size, size), "--screenshot=%s" % out, "file://%s" % html],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(40):
        time.sleep(0.4)
        if out.exists() and out.stat().st_size > 0:
            time.sleep(0.4)
            break
    p.kill()
    return out.exists()



def ratio_for(size):
    return 0.8 if size <= 48 else 0.74


def main():
    # 1. icon.svg — основной векторный favicon (графитовая плитка + кремовый знак)
    svg512 = tile(512, GRAPHITE, CREAM, width_ratio=0.74)
    (PUB / "icon.svg").write_text(svg512, encoding="utf-8")
    print("icon.svg", len(svg512), "bytes")

    # 2. PNG-пара 32×32 под prefers-color-scheme (прозрачные углы)
    shot(tile(32, GRAPHITE, CREAM, width_ratio=0.8), TMP / "dark32.png", 32)
    shot(tile(32, WARM, GRAPHITE, border="#D8D0C2", width_ratio=0.8), TMP / "light32.png", 32)

    # 3. apple-icon.png 180×180 — полноформатный квадрат (iOS сам скругляет),
    #    знак меньше, чтобы не обрезался маской iOS.
    shot(tile(180, GRAPHITE, CREAM, width_ratio=0.58, rx_ratio=0), TMP / "apple180.png", 180)

    # 4. favicon.ico — из 256px плитки, Pillow соберёт мультиразмерность
    shot(tile(256, GRAPHITE, CREAM, width_ratio=0.78), TMP / "ico256.png", 256)

    from PIL import Image
    for src, dst in [("dark32.png", "icon-dark-32x32.png"), ("light32.png", "icon-light-32x32.png")]:
        im = Image.open(TMP / src).convert("RGBA")
        im.save(PUB / dst)
        print(dst, im.size)
    Image.open(TMP / "apple180.png").convert("RGB").save(PUB / "apple-icon.png")
    print("apple-icon.png (180, 180)")

    ico = Image.open(TMP / "ico256.png").convert("RGBA")
    ico.save(PUB / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print("favicon.ico ok")


main()
