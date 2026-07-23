const fs = require('fs');
const path = require('path');

console.log('=== OptiVir Ads Full System & SEO Audit ===\n');

// 1. Check Schema Files and @id Graph Linking
const schemaDir = path.join(__dirname, '..', 'src', 'components', 'seo');
const schemaFiles = fs.readdirSync(schemaDir).filter(f => f.endsWith('.tsx'));

console.log('1. JSON-LD Schemas Audit:');
let hasOrgId = false;
let hasWikidata = false;

schemaFiles.forEach(file => {
  const content = fs.readFileSync(path.join(schemaDir, file), 'utf8');
  const mentionsOrgId = content.includes('#organization');
  const mentionsWikidata = content.includes('wikidata.org');
  if (mentionsOrgId) hasOrgId = true;
  if (mentionsWikidata) hasWikidata = true;
  console.log(`  - [${file}]: ${mentionsOrgId ? '@id Graph Linked' : 'Standalone'} ${mentionsWikidata ? '| Wikidata Entities' : ''}`);
});

console.log(`\n  Knowledge Graph @id Linking: ${hasOrgId ? '✅ PASS' : '❌ FAIL'}`);
console.log(`  Wikidata Semantic Entities: ${hasWikidata ? '✅ PASS' : '❌ FAIL'}`);

// 2. Check LLMs.txt Routes
console.log('\n2. AI Search (GEO / AEO) Endpoints:');
const llmsPath = path.join(__dirname, '..', 'src', 'app', 'llms.txt', 'route.ts');
const llmsFullPath = path.join(__dirname, '..', 'src', 'app', 'llms-full.txt', 'route.ts');
const llmsExists = fs.existsSync(llmsPath);
const llmsFullExists = fs.existsSync(llmsFullPath);
const llmsContent = llmsExists ? fs.readFileSync(llmsPath, 'utf8') : '';
const hasMatrix = llmsContent.includes('Capability & Agency Comparison Matrix');

console.log(`  - /llms.txt route: ${llmsExists ? '✅ Active' : '❌ Missing'}`);
console.log(`  - /llms-full.txt route: ${llmsFullExists ? '✅ Active' : '❌ Missing'}`);
console.log(`  - LLM Capability Matrix: ${hasMatrix ? '✅ Included' : '❌ Missing'}`);

// 3. Check Sitemap Routes
console.log('\n3. Technical SEO Crawlability:');
const sitemapPath = path.join(__dirname, '..', 'src', 'app', 'sitemap.ts');
const robotsPath = path.join(__dirname, '..', 'src', 'app', 'robots.ts');
console.log(`  - Dynamic Sitemap Generator (sitemap.ts): ${fs.existsSync(sitemapPath) ? '✅ PASS' : '❌ FAIL'}`);
console.log(`  - Robots.txt Generator (robots.ts): ${fs.existsSync(robotsPath) ? '✅ PASS' : '❌ FAIL'}`);

// 4. Content Length & Keyword Density Audit
console.log('\n4. Content Length & Keyword Density Audit:');
const servicesDir = path.join(__dirname, '..', 'src', 'app', 'services');
const serviceSubdirs = fs.readdirSync(servicesDir).filter(f => {
  return fs.statSync(path.join(servicesDir, f)).isDirectory();
});

console.log(`  Found ${serviceSubdirs.length} Service Detail Subpages:`);
serviceSubdirs.forEach(sub => {
  const pagePath = path.join(servicesDir, sub, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    const text = fs.readFileSync(pagePath, 'utf8');
    const words = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
    const hasDeepDive = text.includes('service-deep-dive-section');
    console.log(`    - /services/${sub}: ${words} code words | Deep-Dive Section: ${hasDeepDive ? '✅ Present' : '❌ Missing'}`);
  }
});

console.log('\n=== All Verification Checks Complete ===\n');
