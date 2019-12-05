#/bin/sh

# requires imagemagick, based on google pagespeed recs https://developers.google.com/speed/docs/insights/OptimizeImages
convert $1 -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace RGB $2