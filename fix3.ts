import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/text-wrap-balance/g, 'text-balance text-center sm:text-left');
fs.writeFileSync('src/App.tsx', content);
