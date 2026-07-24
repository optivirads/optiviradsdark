const fs = require('fs');

function fullAnalysis(filePath, label) {
  if (!fs.existsSync(filePath)) { console.log(label + ': FILE NOT FOUND'); return; }
  const d = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const cats = d.categories;
  const audits = d.audits;
  
  console.log(`\n=== ${label} ===`);
  console.log('Performance:', Math.round((cats.performance?.score || 0) * 100));
  console.log('Accessibility:', Math.round((cats.accessibility?.score || 0) * 100));
  console.log('Best Practices:', Math.round((cats['best-practices']?.score || 0) * 100));
  console.log('SEO:', Math.round((cats.seo?.score || 0) * 100));
  
  console.log('\nCore Web Vitals:');
  console.log('  FCP:', audits['first-contentful-paint']?.displayValue, '(score:', audits['first-contentful-paint']?.score, ')');
  console.log('  LCP:', audits['largest-contentful-paint']?.displayValue, '(score:', audits['largest-contentful-paint']?.score, ')');
  console.log('  TBT:', audits['total-blocking-time']?.displayValue, '(score:', audits['total-blocking-time']?.score, ')');
  console.log('  CLS:', audits['cumulative-layout-shift']?.displayValue, '(score:', audits['cumulative-layout-shift']?.score, ')');
  console.log('  SI:', audits['speed-index']?.displayValue, '(score:', audits['speed-index']?.score, ')');
  console.log('  TTFB:', audits['server-response-time']?.displayValue);
  
  console.log('\nLCP Element:', JSON.stringify(audits['largest-contentful-paint-element']?.details?.items?.[0]?.node?.snippet));
  
  console.log('\nRender Blocking Resources:');
  const rb = audits['render-blocking-resources']?.details?.items;
  if (rb) rb.forEach(i => console.log('  ', i.url, '- wastedMs:', i.wastedMs));
  
  console.log('\nUnused JS (top 5):');
  const uj = audits['unused-javascript']?.details?.items;
  if (uj) uj.slice(0, 5).forEach(i => console.log('  ', i.url?.split('/').pop(), '- wasted:', Math.round(i.wastedBytes/1024), 'KB'));
  
  console.log('\nMain Thread Work:', audits['mainthread-work-breakdown']?.displayValue);
  console.log('Bootup Time:', audits['bootup-time']?.displayValue);
  console.log('DOM Size:', audits['dom-size']?.displayValue);
  
  console.log('\nImage Delivery:');
  const img = audits['modern-image-formats']?.details?.items;
  if (img) img.forEach(i => console.log('  ', i.url?.split('/').pop()?.substring(0,60), '- savings:', Math.round((i.wastedBytes||0)/1024), 'KB'));
  
  console.log('\nCache Policy Issues:');
  const cache = audits['uses-long-cache-ttl']?.details?.items;
  if (cache) cache.slice(0, 5).forEach(i => console.log('  ', i.url?.split('/').pop()?.substring(0,60), '- cacheLifetimeMs:', i.cacheLifetimeMs));
}

fullAnalysis('live-desktop-v3.json', 'LIVE DESKTOP');
fullAnalysis('live-mobile-v3.json', 'LIVE MOBILE');
