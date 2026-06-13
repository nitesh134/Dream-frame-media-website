import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace flex-col sm:flex-row items-center gap-4 into full width CTA buttons
content = content.replace(/className="flex flex-col sm:flex-row items-center gap-4/g, 'className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto');

fs.writeFileSync('src/App.tsx', content);
