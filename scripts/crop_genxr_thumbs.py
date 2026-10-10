from PIL import Image
import glob, os

src_dir = "C:/Users/jolan/projects/jolanda/imgs/genxr"
for f in sorted(glob.glob(os.path.join(src_dir, "*.png"))):
    im = Image.open(f)
    w, h = im.size
    # keep the top half of the cover (masthead/headline area)
    crop_h = h // 2
    top = im.crop((0, 0, w, crop_h))
    top.save(f)
    print(os.path.basename(f), "original", im.size, "-> cropped", top.size)
