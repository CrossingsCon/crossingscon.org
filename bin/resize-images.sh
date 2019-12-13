#!/bin/bash

for img in "$@"; do
    filename=$(echo $img | cut -d "." -f 1)
    extension=$(echo $img | cut -d "." -f 2)

    convert $img -resize 1920x1080 "$filename-resized.$extension"
done 