const fs = require('fs');
const glob = require('glob');
const path = require('path');

const files = [
  'src/pages/HomePage.tsx',
  'src/pages/ExpertiseTemplate.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/ClinicPage.tsx',
  'src/pages/BlogPage.tsx',
  'src/pages/AboutPage.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/'\/images\//g, "'./images/");
    content = content.replace(/"\/images\//g, '"./images/');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + file);
  }
});
