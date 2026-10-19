#!/usr/bin/env bash
# Скачивает ресурсы из Figma в папку assets/.
# Ссылки временные (живут около 7 дней) — запускай сразу, не публикуй этот файл.
set -e
cd "$(dirname "$0")"
mkdir -p assets && cd assets
B=https://www.figma.com/api/mcp/asset
dl(){ curl -fsSL -o "$1" "$B/$2" && echo "ok  $1"; }

dl banner.png         e379417c-caee-4782-bc0d-1dd05bbc7611.png
dl gallery-1.png      5835c1e3-ce38-47e7-a06d-0cfccbda0221.png
dl gallery-2.png      cc130d00-f059-4adc-99b1-9cdb36464d8e.png
dl gallery-3.png      ffab77ea-1d74-4a20-9a62-5e5fe8787c29.png
dl divider-title.svg  1d97e5f1-7df8-4089-b990-c66fab2c1978.svg
dl divider-skills.svg ed9b8e20-c627-43f4-8880-32c3c938836a.svg
dl software.svg       e470f6c3-b571-4045-ba97-d33cd309bb74.svg
dl line-arrow.svg     98cdf032-af84-4eb6-92c6-473ea26a6739.svg
dl arrow-next.svg     0acdfb5c-eeda-4f56-95c5-a4e8dfab0cb0.svg
dl arrow-prev.svg     11d41269-32e6-4328-86a9-a5422956c5f7.svg
dl instagram.svg      de8a7f38-f725-45d5-a388-4dbe5493bebe.svg
dl telegram.svg       4355a351-6c58-434a-b24c-bc8c7b506ee7.svg
dl twitter.svg        3d7444ff-4564-44d0-8ad1-b99b8f9cc3df.svg
dl deviantart.svg     59c2dc5f-4b20-4fc6-86e1-5853cf9fd7fb.svg
dl artstation.svg     3b1ccc57-fce0-45f9-9621-a79c474b43eb.svg
dl tiktok.svg         c5e16391-9bbf-4033-b3de-42c6c3533093.svg
dl pinterest-mask.svg cb8a786b-7a29-412c-86ca-090c61af7d6f.svg
dl pinterest.svg      c2f3b387-e46e-4cdb-b45a-060916b22a2b.svg
dl bluesky.svg        69e54744-cb54-4785-91aa-f3a579e4ba5c.svg
echo "Готово. Открой index.html"
