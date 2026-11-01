"""Favicon and app icons from the brand's square favicon export: the FS monogram on black.
Usage: python3 scripts/make_icon.py ~/Desktop/Business/Branding src

Source: Branding/03 - Digital & Social Assets/Favicon.png (512x512), used as supplied and
only resized.
"""
import sys, os
from PIL import Image
brand, root = sys.argv[1], sys.argv[2]
tile = Image.open(os.path.join(brand, "03 - Digital & Social Assets", "Favicon.png")).convert("RGB")
for size, name in ((512, "icon-512.png"), (192, "icon-192.png"), (180, "apple-touch-icon.png")):
    tile.resize((size, size), Image.LANCZOS).save(f"{root}/{name}", optimize=True)
tile.save(f"{root}/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("icons done")
