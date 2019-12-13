#/bin/sh

for img in "$@"; do
    filename=$(echo $img | cut -d "." -f 1)
    extension=$(echo $img | cut -d "." -f 2)

    # requires imagemagick, based on google pagespeed recs https://developers.google.com/speed/docs/insights/OptimizeImages
    convert $img -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace RGB "$filename-compressed.jpg"
done