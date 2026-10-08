import pathlib

OUT = pathlib.Path("/tmp/studio40/brand-check2.html")

PATHS = [
    "M0 5H41.5V131A39 39 0 0 0 80.5 170H167V70L212 3V255H167V180H59.5A59.5 59.5 0 0 1 0 120.5Z",
    "M243 130A118.5 130 0 0 0 480 130A118.5 130 0 0 0 243 130ZM287 130A74.5 120 0 0 0 436 130A74.5 120 0 0 0 287 130Z",
]
RATIO = 480 / 260
LETTERS = ["С", "Т", "У", "Д", "И", "Я"]


def mark(h, color, bold=False):
    w = round(h * RATIO, 2)
    extra = ' stroke="%s" stroke-width="8" stroke-linejoin="round"' % color if bold else ""
    paths = '<path d="%s"/><path d="%s" fill-rule="evenodd"/>' % (PATHS[0], PATHS[1])
    return '<svg viewBox="0 0 480 260" width="%s" height="%s" fill="%s"%s>%s</svg>' % (
        w, h, color, extra, paths)


def word(fs, spread):
    spans = "".join("<span>%s</span>" % l for l in LETTERS)
    if spread:
        style = "font-size:%spx;line-height:1;width:100%%;justify-content:space-between" % fs
    else:
        style = "font-size:%spx;line-height:1;letter-spacing:.18em;margin-right:-.18em" % fs
    return '<div class="word" style="%s">%s</div>' % (style, spans)


def vertical(h, color, fs=None):
    w = round(h * RATIO, 2)
    gap = round(h * 0.145, 2)
    fs = fs or round(h * 0.272, 2)
    return (
        '<div style="display:flex;flex-direction:column;align-items:center;width:%spx;gap:%spx">' % (w, gap)
        + word(fs, True)
        + mark(h, color)
        + "</div>"
    )


def horizontal(h, color, text=35):
    gap = round(h * 0.6, 2)
    return '<div style="display:flex;align-items:flex-end;gap:%spx">%s%s</div>' % (
        gap, word(text, False), mark(h, color))


def tile(size, bg, color, inner_h=32, border=""):
    return (
        '<div style="display:grid;place-items:center;width:%spx;height:%spx;background:%s;border-radius:%spx;%s">%s</div>'
        % (size, size, bg, round(size * 0.23), border, mark(inner_h, color, True))
    )


HEAD = """<!doctype html><html lang="ru"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box}
  body{margin:0;width:1240px;background:#12110f;color:#fff8ee;
       font-family:Inter,-apple-system,"Helvetica Neue",Arial,sans-serif}
  .label{font:11px ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;
          color:#8d8477;margin:0;padding:20px 34px 12px}
  .row{display:flex;gap:44px;align-items:center;padding:0 34px}
  .dark{background:#12110f;padding:30px 34px;border-radius:14px;border:1px solid rgba(255,248,238,.12);
         display:flex;align-items:center;justify-content:center}
  .light{background:#FAF8F4;padding:30px 34px;border-radius:14px;display:flex;align-items:center;
          justify-content:center;color:#1F1F1F}
  .cap{font:11px ui-monospace,Menlo,monospace;color:#8d8477;margin:9px 0 0;text-align:center}
  figure{margin:0}
  .word{display:flex}
  header.demo{margin:0 34px;border:1px solid rgba(255,248,238,.14);border-radius:14px;background:#12110f}
  header.demo .in{display:flex;align-items:center;justify-content:space-between;gap:26px;padding:14px 28px}
  .brandtext{display:flex;flex-direction:column;line-height:1.3}
  .brandtext .name{font-size:14px;font-weight:600;letter-spacing:.02em}
  .brandtext .sub{font-size:12px;color:#D2C8BA}
  nav{display:flex;gap:26px;font-size:14px;color:#D2C8BA}
  .btn{background:#ffb548;color:#181512;border-radius:999px;padding:9px 18px;font-size:14px;white-space:nowrap}
  .strip{display:flex;gap:30px;align-items:flex-end;margin:0 34px;padding:22px 26px;border-radius:14px;
          border:1px solid rgba(255,248,238,.12)}
  .strip.lightbg{background:#FAF8F4;border-color:rgba(31,31,31,.12)}
  .icons{display:flex;gap:26px;align-items:flex-end}
</style></head><body>
"""

FOOT = """
<div style="height:24px"></div>
</body></html>
"""


def build():
    p = []
    p.append('<p class="label">02 · Вертикальная связка — надпись сверху, растянута по ширине знака</p>')
    p.append('<div class="row">')
    p.append('<figure><div class="dark">%s</div><figcaption class="cap">на тёмном · h=180</figcaption></figure>'
             % vertical(180, "#fff8ee"))
    p.append('<figure><div class="light">%s</div><figcaption class="cap">на светлом · h=180</figcaption></figure>'
             % vertical(180, "#1F1F1F"))
    p.append('</div>')
    p.append('<p class="label">03 · Горизонтальная связка (резерв) — надпись 35px, знак ЧО 40px, низ по низу</p>')
    p.append('<div class="row">')
    p.append('<figure><div class="dark">%s</div><figcaption class="cap">на тёмном</figcaption></figure>'
             % horizontal(40, "#fff8ee"))
    p.append('<figure><div class="light">%s</div><figcaption class="cap">на светлом</figcaption></figure>'
             % horizontal(40, "#1F1F1F"))
    p.append('</div>')
    p.append('<p class="label">04 · Шапка сайта (связка h=40 + две строки справа)</p>')
    p.append('<header class="demo"><div class="in">')
    p.append('<div style="display:flex;align-items:center;gap:16px">%s'
             '<div class="brandtext"><span class="name">Чумаченко Олег</span>'
             '<span class="sub">Веб-дизайн и упаковка экспертных продуктов</span></div></div>'
             % vertical(40, "#fff8ee"))
    p.append('<nav><span>Кейсы</span><span>Об авторе</span><span>Услуги</span><span>Процесс</span>'
             '<span>Контакты</span></nav><div class="btn">Обсудить проект</div>')
    p.append('</div></header>')
    p.append('<p class="label">06 · Иконки — утолщённый контур (16 / 32 / 48 / 64) и плитки</p>')
    p.append('<div class="strip">%s<div class="icons">' % mark(160, "#fff8ee", True))
    for h in (16, 32, 48, 64):
        p.append('<figure>%s<figcaption class="cap">%spx</figcaption></figure>' % (mark(h, "#fff8ee", True), h))
    p.append('</div></div>')
    p.append('<div class="strip lightbg" style="margin-top:20px"><div class="icons" '
             'style="align-items:center;gap:24px">')
    p.append('<figure>%s<figcaption class="cap">графит</figcaption></figure>' % tile(96, "#1F1F1F", "#EDE7DC"))
    p.append('<figure>%s<figcaption class="cap">светлая</figcaption></figure>'
             % tile(96, "#FAF8F4", "#1F1F1F", border="border:1px solid rgba(31,31,31,.14)"))
    p.append('<figure>%s<figcaption class="cap">терракота</figcaption></figure>' % tile(96, "#B55F45", "#FAF8F4"))
    p.append('</div></div>')
    return HEAD + "\n".join(p) + FOOT


html = build()
OUT.write_text(html, encoding="utf-8")
print("written", OUT, len(html), "bytes")
