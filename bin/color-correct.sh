#!/bin/sh

blue="7%"
green="0%"
red="0%"
white="2%"

for img in "$@"; do
    filename=$(echo $img | cut -d "." -f 1)
    extension=$(echo $img | cut -d "." -f 2)

    # Make the really yellow images less so
    convert $img -fill blue -colorize $blue -fill green -colorize $green -fill red -colorize $red -fill white -colorize $white "$filename-color-corrected.jpg"
done