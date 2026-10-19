#!/bin/bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT_DIR="/Users/cristianvaduva/.gemini/antigravity-ide/brain/aa23370c-732e-4b58-869a-b4cedb5a7c72/screenshots"

# We can launch Chrome with user-data-dir and set localStorage, or use --app with localStorage script
TMP_PROFILE="/tmp/chrome_test_ar_$$"
mkdir -p "$TMP_PROFILE"

# Or simpler: create a test HTML file that sets localStorage and redirects to localhost:3000
cat << 'HTML' > /tmp/set_ar.html
<!DOCTYPE html>
<html>
<head>
<script>
localStorage.setItem('locale', 'ar');
window.location.href = 'http://localhost:3000';
</script>
</head>
<body>Redirecting to Arabic...</body>
</html>
HTML

"$CHROME" --headless=new --screenshot="$OUT_DIR/home_arabic_desktop.png" --window-size=1440,900 --hide-scrollbars --user-data-dir="$TMP_PROFILE" --virtual-time-budget=3000 "file:///tmp/set_ar.html" 2>/dev/null

rm -rf "$TMP_PROFILE" /tmp/set_ar.html
echo "Arabic capture complete!"
