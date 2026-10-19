#!/bin/bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT_DIR="/Users/cristianvaduva/.gemini/antigravity-ide/brain/aa23370c-732e-4b58-869a-b4cedb5a7c72/screenshots"

for lang in "ro" "en" "fr" "de" "ar"; do
  echo "Capturing $lang..."
  "$CHROME" --headless=new --screenshot="$OUT_DIR/home_lang_${lang}.png" --window-size=1440,900 --hide-scrollbars --virtual-time-budget=2000 "http://localhost:3000/?lang=${lang}" 2>/dev/null
done
echo "Languages capture complete!"
