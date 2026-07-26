const fs = require('fs');
const path = require('path');

const page = fs.readFileSync('src/app/page.tsx', 'utf8');

function extractText(jsx) {
  let text = '';
  const matches = jsx.match(/>([^<]+)</g) || [];
  matches.forEach(m => {
    const clean = m.slice(1, -1).trim();
    if (clean && !clean.includes('import') && !clean.includes('export') && !clean.includes('className')) {
      text += ' ' + clean;
    }
  });
  return text;
}

const wp = fs.readFileSync('src/lib/wordpress.ts', 'utf8');
const reviews = fs.readFileSync('src/lib/reviews.ts', 'utf8');

const pageText = extractText(page);
const wpText = extractText(wp);
const reviewsText = extractText(reviews);

const totalWords = (pageText + ' ' + wpText + ' ' + reviewsText).split(/\s+/).filter(Boolean).length;
console.log('Page text standalone words:', pageText.split(/\s+/).filter(Boolean).length);
console.log('Total rendered page words (including FAQs & Reviews):', totalWords);
