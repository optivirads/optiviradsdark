const fs = require('fs');
const path = require('path');

function getWords(str) {
  if (!str || typeof str !== 'string') return 0;
  // Clean HTML tags and JSX
  const clean = str.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = clean.match(/\b[A-Za-z0-9'-]+\b/g);
  return words ? words.length : 0;
}

function analyzeFileContent(filePath) {
  if (!fs.existsSync(filePath)) return 0;
  const content = fs.readFileSync(filePath, 'utf8');
  // Match string literals and text inside tags
  const stringLiterals = content.match(/(["'`](.*?)["'`]|>([^<]+)<)/g) || [];
  let totalWords = 0;
  stringLiterals.forEach(s => {
    // Ignore imports/code keywords
    if (s.includes('import ') || s.includes('export ') || s.includes('className') || s.includes('http')) return;
    totalWords += getWords(s);
  });
  return totalWords;
}

console.log('=== Accurate Page Content Audit ===');

const baseDir = path.join(__dirname, '..', 'src');

// 1. Home Page
const homeCode = fs.readFileSync(path.join(baseDir, 'app', 'page.tsx'), 'utf8');
const homeFaqs = fs.readFileSync(path.join(baseDir, 'lib', 'faqData.ts'), 'utf8');
const homeWords = getWords(homeCode) + getWords(homeFaqs);

// 2. Location Pages
const locCode = fs.readFileSync(path.join(baseDir, 'app', 'locations', '[city]', 'page.tsx'), 'utf8');
const locData = fs.readFileSync(path.join(baseDir, 'lib', 'locations.ts'), 'utf8');
const locWords = getWords(locCode) + getWords(locData);

// 3. ROAS Calculator
const roasPage = fs.readFileSync(path.join(baseDir, 'app', 'free-tools', 'roas-calculator', 'page.tsx'), 'utf8');
const roasComp = fs.readFileSync(path.join(baseDir, 'components', 'RoasCalculator.tsx'), 'utf8');
const roasWords = getWords(roasPage) + getWords(roasComp);

// 4. About Page
const aboutPage = fs.readFileSync(path.join(baseDir, 'app', 'about', 'page.tsx'), 'utf8');

// 5. Contact Page
const contactPage = fs.readFileSync(path.join(baseDir, 'app', 'contact', 'page.tsx'), 'utf8');

// 6. Services Hub Page
const servicesHub = fs.readFileSync(path.join(baseDir, 'app', 'services', 'page.tsx'), 'utf8');

// 7. WordPress Posts Mock Data
const wpFile = fs.readFileSync(path.join(baseDir, 'lib', 'wordpress.ts'), 'utf8');

console.log({
  'Home Page (/)': getWords(homeCode),
  'About Page (/about)': getWords(aboutPage),
  'Contact Page (/contact)': getWords(contactPage),
  'Services Hub (/services)': getWords(servicesHub),
  'ROAS Calculator Page': getWords(roasPage) + getWords(roasComp),
  'Location Page Template (/locations/[city])': getWords(locCode),
  'Location Mock Data (lib/locations.ts)': getWords(locData),
  'WordPress Mock Posts & FAQs (lib/wordpress.ts)': getWords(wpFile),
});
