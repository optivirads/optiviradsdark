const fs = require('fs');

function extract(filePath, label) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const cats = data.categories;
  const audits = data.audits;
  
  return {
    label,
    scores: {
      performance: Math.round((cats.performance?.score || 0) * 100),
      accessibility: Math.round((cats.accessibility?.score || 0) * 100),
      bestPractices: Math.round((cats['best-practices']?.score || 0) * 100),
      seo: Math.round((cats.seo?.score || 0) * 100),
    },
    metrics: {
      fcp: { display: audits['first-contentful-paint']?.displayValue, score: audits['first-contentful-paint']?.score },
      lcp: { display: audits['largest-contentful-paint']?.displayValue, score: audits['largest-contentful-paint']?.score },
      tbt: { display: audits['total-blocking-time']?.displayValue, score: audits['total-blocking-time']?.score },
      cls: { display: audits['cumulative-layout-shift']?.displayValue, score: audits['cumulative-layout-shift']?.score },
      speedIndex: { display: audits['speed-index']?.displayValue, score: audits['speed-index']?.score },
      ttfb: { display: audits['server-response-time']?.displayValue, score: audits['server-response-time']?.score },
    },
    diagnostics: {
      unusedCss: audits['unused-css-rules']?.details?.overallSavingsBytes,
      unusedJs: audits['unused-javascript']?.details?.overallSavingsBytes,
      renderBlocking: audits['render-blocking-resources']?.details?.items,
      mainThreadWork: audits['mainthread-work-breakdown']?.displayValue,
      bootupTime: audits['bootup-time']?.displayValue,
      lcpElement: audits['largest-contentful-paint-element']?.details?.items?.[0]?.node?.snippet,
    }
  };
}

const desktop = extract('lh-desktop.json', 'Desktop');
const mobile = extract('lh-mobile.json', 'Mobile');

const parsed = { desktop, mobile };
console.log(JSON.stringify(parsed, null, 2));
fs.writeFileSync('scratch/lh_summary.json', JSON.stringify(parsed, null, 2));
