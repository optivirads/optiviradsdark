const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'app', 'services');

const dirs = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

dirs.forEach(dir => {
  const pagePath = path.join(servicesDir, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    if (!content.includes('FaqWrapper')) {
      // Add import
      content = `import FaqWrapper from '@/components/seo/FaqWrapper';\n` + content;
      
      // Inject before </main>
      content = content.replace(
        /<\/main>/g, 
        `  <FaqWrapper pageKey="${dir}" />\n    </main>`
      );
      
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log(`Updated ${pagePath}`);
    }
  }
});

// Also update locations/[city]/page.tsx
const locationsPath = path.join(__dirname, 'src', 'app', 'locations', '[city]', 'page.tsx');
if (fs.existsSync(locationsPath)) {
  let content = fs.readFileSync(locationsPath, 'utf8');
  if (!content.includes('FaqWrapper')) {
    content = `import FaqWrapper from '@/components/seo/FaqWrapper';\n` + content;
    content = content.replace(
      /<\/main>/g, 
      `  {/* @ts-expect-error Async Server Component */}\n      <FaqWrapper pageKey={location.slug} />\n    </main>`
    );
    fs.writeFileSync(locationsPath, content, 'utf8');
    console.log(`Updated ${locationsPath}`);
  }
}
