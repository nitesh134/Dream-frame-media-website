import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Also make buttons themselves responsive
content = content.replace(/className="h-14 px-8/g, 'className="w-full sm:w-auto h-14 px-8');
content = content.replace(/className="h-16 px-10/g, 'className="w-full sm:w-auto h-16 px-10');
content = content.replace(/className="h-14 px-10/g, 'className="w-full sm:w-auto h-14 px-10');

// Clean up duplicate w-full sm:w-auto
content = content.replace(/w-full sm:w-auto w-full sm:w-auto/g, 'w-full sm:w-auto');

fs.writeFileSync('src/App.tsx', content);
