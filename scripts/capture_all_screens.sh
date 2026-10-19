#!/bin/bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT_DIR="/Users/cristianvaduva/.gemini/antigravity-ide/brain/aa23370c-732e-4b58-869a-b4cedb5a7c72/screenshots"
mkdir -p "$OUT_DIR"

PAGES=(
  ""
  "about"
  "ventures"
  "ecosystem"
  "real-estate/properties"
  "contact"
  "programare"
)

for p in "${PAGES[@]}"; do
  NAME="${p:-home}"
  SAFE_NAME=$(echo "$NAME" | tr '/' '_')
  
  echo "Capturing $SAFE_NAME Desktop..."
  "$CHROME" --headless=new --screenshot="$OUT_DIR/${SAFE_NAME}_desktop.png" --window-size=1440,1050 --hide-scrollbars "http://localhost:3000/$p" 2>/dev/null
  
  echo "Capturing $SAFE_NAME Mobile..."
  "$CHROME" --headless=new --screenshot="$OUT_DIR/${SAFE_NAME}_mobile.png" --window-size=390,844 --hide-scrollbars "http://localhost:3000/$p" 2>/dev/null
done
echo "All captures complete!"
