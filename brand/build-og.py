import pathlib
import subprocess
import time

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PUB = pathlib.Path("/Users/admin/Documents/GitHub/Portfolio/MyPortfolio/public")
TMP = pathlib.Path("/tmp/studio40")
RATIO = 480 / 260
PATHS = [
    "M0 5H41.5V131A39 39 0 0 0 80.5 170H167V70L212 3V255H167V180H59.5A59.5 59.5 0 0 1 0 120.5Z",
    "M243 130A118.5 130 0 0 0 480 130A118.5 130 0 0 0 243 130ZM287 130A74.5 120 0 0 0 436 130A74.5 120 0 0 0 287 130Z",
]
LETTERS = ["С", "Т", "У", "Д", "И", "Я"]


def mark(h, color):
    w = round(h * RATIO, 2)
    p = '<path d="%s"/><path d="%s" fill-rule="evenodd"/>' % (PATHS[0], PATHS[1])
    return '<svg viewBox="0 0 480 260" width="%s" height="%s" fill="%s">%s</svg>' % (w, h, color, p)


def vertical(h, color):
    w = round(h * RATIO, 2)
    gap = round(h * 0.145, 2)
    fs = round(h * 0.272, 2)
    spans = "".join("<span>%s</span>" % l for l in LETTERS)
    return ('<div style="display:flex;flex-direction:column;align-items:center;width:%spx;gap:%spx">'
            '<div style="display:flex;justify-content:space-between;width:100%%;font-size:%spx;line-height:1">%s</div>'
            '%s</div>' % (w, gap, fs, spans, mark(h, color)))


HTML = """<!doctype html><html lang="ru"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Cormorant+Garamond:wght@500;600&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box}
  html,body{margin:0;width:1200px;height:630px;overflow:hidden}
  body{background:#12110f;color:#fff8ee;font-family:Inter,-apple-system,Arial,sans-serif;position:relative}
  .glow{position:absolute;left:-14%;top:-30%;width:900px;height:900px;border-radius:50%;
        background:radial-gradient(circle,rgba(255,181,72,.20),rgba(255,181,72,0) 62%)}
  .photo{position:absolute;right:0;top:0;width:620px;height:630px;
         background:url('@@PUB@@/oleg-portrait.webp') center/cover no-repeat;opacity:.5;
         -webkit-mask-image:linear-gradient(to right,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 62%)}
  .inner{position:absolute;left:0;top:0;height:630px;padding:76px 88px;display:flex;flex-direction:column;justify-content:space-between}
  .name{font-family:'Cormorant Garamond',Georgia,serif;font-size:84px;font-weight:600;line-height:.95;margin:0;color:#fff8ee}
  .sub{font-size:26px;color:#D2C8BA;margin:18px 0 0}
  .rule{width:96px;height:3px;background:#ffb548;margin:30px 0 0}
</style></head><body>
  <div class="glow"></div>
  <div class="photo"></div>
  <div class="inner">
    @@LOCKUP@@
    <div>
      <p class="name">Чумаченко Олег</p>
      <p class="sub">Веб-дизайн и упаковка экспертных продуктов</p>
      <div class="rule"></div>
    </div>
  </div>
</body></html>"""
HTML = HTML.replace("@@PUB@@", str(PUB)).replace("@@LOCKUP@@", vertical(96, "#fff8ee"))

html_path = TMP / "og.html"
html_path.write_text(HTML, encoding="utf-8")

out = TMP / "og.png"
if out.exists():
    out.unlink()
p = subprocess.Popen(
    [CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
     "--force-device-scale-factor=1", "--no-first-run", "--no-default-browser-check",
     "--user-data-dir=%s" % (TMP / "prof_og"), "--virtual-time-budget=6000",
     "--window-size=1200,630", "--screenshot=%s" % out, "file://%s" % html_path],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
for _ in range(50):
    time.sleep(0.4)
    if out.exists() and out.stat().st_size > 0:
        time.sleep(0.6)
        break
p.kill()

from PIL import Image
im = Image.open(out).convert("RGB")
print("og png", im.size)
im.save(PUB / "og-preview.jpg", quality=90, optimize=True)
print("og-preview.jpg saved")
