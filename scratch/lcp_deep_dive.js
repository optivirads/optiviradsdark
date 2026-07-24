const fs = require('fs');

function lcpDetails(filePath, label) {
  if (!fs.existsSync(filePath)) return;
  const d = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const audits = d.audits;
  
  console.log(`\n=== ${label} LCP Details ===`);
  console.log('LCP Element:', JSON.stringify(audits['largest-contentful-paint-element']?.details, null, 2));
  console.log('\nLCP Breakdown:', JSON.stringify(audits['lcp-breakdown']?.details, null, 2));
  console.log('\nLCP Discovery:', JSON.stringify(audits['lcp-discovery']?.details, null, 2));
  
  // Check third-party impact
  console.log('\n3rd Party Summary:', JSON.stringify(audits['third-party-summary']?.details?.items?.slice(0, 5), null, 2));
  
  // Check the actual network waterfall for main thread
  console.log('\nBootup Time Items:');
  const bt = audits['bootup-time']?.details?.items;
  if (bt) bt.slice(0, 8).forEach(i => console.log('  ', i.url?.substring(0, 80), 'total:', Math.round(i.total), 'ms'));
}

lcpDetails('live-desktop-v3.json', 'LIVE DESKTOP');
lcpDetails('live-mobile-v3.json', 'LIVE MOBILE');
