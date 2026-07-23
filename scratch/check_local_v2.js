const fs = require('fs');

function checkFile(filePath) {
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const cats = data.categories;
    const audits = data.audits;
    return {
      perf: Math.round((cats.performance?.score || 0) * 100),
      lcp: audits['largest-contentful-paint']?.displayValue,
      speedIndex: audits['speed-index']?.displayValue,
      fcp: audits['first-contentful-paint']?.displayValue,
      tbt: audits['total-blocking-time']?.displayValue,
      cls: audits['cumulative-layout-shift']?.displayValue,
    };
  }
  return null;
}

console.log('Optimized Desktop:', checkFile('local-desktop-v2.json'));
console.log('Optimized Mobile:', checkFile('local-mobile-v2.json'));
