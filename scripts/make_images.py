"""Make web-optimized logo files from the official RGB PNGs.
Usage: python3 scripts/make_images.py ~/Desktop/Business/Branding src/assets/img

Source: Branding/01 - Official Logo Files/RGB Version/PNG (Official Brand Guidelines, Oct 2026).
The designer's files are read as supplied and never changed. Only the generated WebP/PNG
outputs here are made: each is the official artwork with its empty transparent padding
trimmed off in memory and resized, which keeps every logo's proportions and lettering intact.
  01 Primary logo       windshield + wordmark (home hero, footer). The guide prefers it for
                        website hero graphics.
  03 Wordmark           lettering only (header). The guide's choice for narrow or small layouts.
  02 Extended / Light   with the service descriptor, for light backgrounds (social share card
                        on white, large enough for the descriptor to read).
File names carry the logo number so a new export never hides behind the long image cache.
The favicon and app icons are made by scripts/make_icon.py.
"""
import sys, os
from PIL import Image
brand, out = sys.argv[1], sys.argv[2]
png = os.path.join(brand, "01 - Official Logo Files", "RGB Version", "PNG")
files = {
    "logo-01-primary": ("Fresh start logo RGB-01.png", (320, 640, 1200)),
    "logo-03-wordmark": ("Fresh start logo RGB-03.png", (320, 640)),
}

def load(fn):
    im = Image.open(os.path.join(png, fn)).convert("RGBA")
    return im.crop(im.getchannel("A").getbbox())

for name, (fn, widths) in files.items():
    im = load(fn)
    for w in widths:
        r = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        r.save(f"{out}/{name}-{w}.webp", "WEBP", quality=88, method=6)
        print(f"{name}-{w}.webp", r.size)

# Social share / search image: 02 Extended / Light centered on white, 1200x630.
im = load("Fresh start logo RGB-02.png")
W, H = 1200, 630
w = 900; h = round(im.height * w / im.width)
if h > 540:
    h = 540; w = round(im.width * h / im.height)
card = Image.new("RGBA", (W, H), (255, 255, 255, 255))
card.alpha_composite(im.resize((w, h), Image.LANCZOS), ((W - w) // 2, (H - h) // 2))
card.convert("RGB").save(f"{out}/share-card-02-1200.png", optimize=True)
print("share-card-02-1200.png", card.size)
