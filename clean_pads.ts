import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// The main headings using py-24 md:py-16 md:py-24 etc were replaced
// Let's just fix the specific issues using regex
content = content.replace(/py-24\s+md:py-16\s+md:py-24/g, 'py-16 md:py-24');
content = content.replace(/py-16\s+md:py-24\s+md:py-24/g, 'py-16 md:py-24');

// Some grid cols duplication
content = content.replace(/grid-cols-1 md:grid-cols-1 md:grid-cols-2/g, 'grid-cols-1 md:grid-cols-2');

fs.writeFileSync('src/App.tsx', content);
