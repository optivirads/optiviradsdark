const fs = require('fs');
const d = JSON.parse(fs.readFileSync('prod-mobile.json', 'utf8'));
console.log('Mobile LCP Node:', d.audits['largest-contentful-paint-element']?.details?.items?.[0]?.node?.snippet);
