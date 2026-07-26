const fs = require('fs');

if (fs.existsSync('prod-verify-mobile.json')) {
  const data = JSON.parse(fs.readFileSync('prod-verify-mobile.json', 'utf8'));
  const audits = data.audits;
  
  console.log('=== Top Main Thread Work ===');
  console.log(audits['mainthread-work-breakdown']?.details?.items);

  console.log('=== Long Tasks ===');
  const longTasks = audits['long-tasks']?.details?.items || [];
  longTasks.forEach(t => {
    console.log(`- ${t.url} | duration: ${Math.round(t.duration)}ms | start: ${Math.round(t.startTime)}ms`);
  });

  console.log('=== Bootup Time (Top Scripts) ===');
  const bootup = audits['bootup-time']?.details?.items || [];
  bootup.slice(0, 8).forEach(b => {
    console.log(`- ${b.url?.substring(0, 70)} | total: ${Math.round(b.total)}ms | scripting: ${Math.round(b.scripting)}ms`);
  });
}
