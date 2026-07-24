const fs = require('fs');
const d = JSON.parse(fs.readFileSync('opt-mobile.json', 'utf8'));
const audits = d.audits;

console.log('LCP element:', JSON.stringify(audits['largest-contentful-paint-element']?.details?.items?.[0], null, 2));
console.log('\nLCP numeric (ms):', audits['largest-contentful-paint']?.numericValue);
console.log('FCP numeric (ms):', audits['first-contentful-paint']?.numericValue);
console.log('SI numeric (ms):', audits['speed-index']?.numericValue);

// Check what's blocking
console.log('\nBootup items:');
const bt = audits['bootup-time']?.details?.items;
if (bt) bt.slice(0, 10).forEach(i => console.log('  ', i.url?.substring(0, 80), ':', Math.round(i.total), 'ms'));

console.log('\nMain thread breakdown:');
const mt = audits['mainthread-work-breakdown']?.details?.items;
if (mt) mt.forEach(i => console.log('  ', i.group, ':', Math.round(i.duration), 'ms'));

// Network payload
console.log('\nTotal byte weight:', audits['total-byte-weight']?.displayValue);
