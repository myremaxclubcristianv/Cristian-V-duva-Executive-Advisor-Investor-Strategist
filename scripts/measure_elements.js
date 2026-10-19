const { execSync } = require('child_process');

const script = `
  const wide = [];
  document.querySelectorAll('*').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.right > window.innerWidth + 2) {
      wide.push({
        tag: el.tagName,
        id: el.id,
        className: (el.className || '').toString().slice(0, 80),
        width: Math.round(rect.width),
        right: Math.round(rect.right)
      });
    }
  });
  console.log(JSON.stringify(wide.slice(0, 15), null, 2));
`;

// Let Chrome evaluate this expression
const cmd = `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --window-size=390,844 --run-all-compositor-stages-before-draw --virtual-time-budget=2000 --dump-dom "http://localhost:3000"`;
// Or we can inject script into a page or use node fetch
console.log("Checking page...");
