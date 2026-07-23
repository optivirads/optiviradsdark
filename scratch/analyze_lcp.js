const fs = require('fs');

function analyze(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const d = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const audits = d.audits;
  
  return {
    lcpNode: audits['largest-contentful-paint-element']?.details?.items?.[0]?.node,
    lcpBreakdown: audits['lcp-breakdown']?.details?.items,
    unusedCss: audits['unused-css-rules']?.details?.overallSavingsBytes,
    unusedJs: audits['unused-javascript']?.details?.items?.map(i => ({ url: i.url, wastedBytes: i.wastedBytes })),
    bootupTime: audits['bootup-time']?.details?.items?.map(i => ({ url: i.url, total: i.total })),
    mainThread: audits['mainthread-work-breakdown']?.details?.items?.map(i => ({ group: i.group, duration: i.duration })),
    renderBlocking: audits['render-blocking-resources']?.details?.items,
  };
}

console.log('Desktop Details:\n', JSON.stringify(analyze('local-desktop.json'), null, 2));
console.log('Mobile Details:\n', JSON.stringify(analyze('local-mobile.json'), null, 2));
