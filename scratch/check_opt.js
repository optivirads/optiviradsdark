const fs = require('fs');

function check(filePath, label) {
  if (!fs.existsSync(filePath)) { console.log(label + ': NOT FOUND'); return; }
  const d = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const cats = d.categories;
  const audits = d.audits;
  console.log(`\n=== ${label} ===`);
  console.log('Performance:', Math.round((cats.performance?.score || 0) * 100));
  console.log('FCP:', audits['first-contentful-paint']?.displayValue);
  console.log('LCP:', audits['largest-contentful-paint']?.displayValue);
  console.log('TBT:', audits['total-blocking-time']?.displayValue);
  console.log('CLS:', audits['cumulative-layout-shift']?.displayValue);
  console.log('SI:', audits['speed-index']?.displayValue);
  console.log('Main Thread:', audits['mainthread-work-breakdown']?.displayValue);
  console.log('Bootup:', audits['bootup-time']?.displayValue);
}

check('opt-desktop.json', 'OPTIMIZED DESKTOP');
check('opt-mobile.json', 'OPTIMIZED MOBILE');
