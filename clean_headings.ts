import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// The main headings using 5xl md:7xl etc were replaced
// Let's just fix the specific issues using regex
content = content.replace(/text-4xl md:text-5xl lg:text-7xl/g, 'text-4xl md:text-5xl lg:text-6xl text-balance');
content = content.replace(/className="text-5xl md:text-6xl([^"]*)"/g, 'className="text-4xl md:text-5xl lg:text-6xl$1"');
content = content.replace(/className="text-4xl md:text-5xl([^"]*)"/g, 'className="text-3xl md:text-4xl lg:text-5xl$1"');

// Ensure section padding is more responsive
content = content.replace(/py-20 md:py-24/g, 'py-16 md:py-24');
content = content.replace(/py-24 md:py-32/g, 'py-20 md:py-32');
content = content.replace(/px-4 sm:px-6 md:px-8/g, 'px-5 md:px-8');

fs.writeFileSync('src/App.tsx', content);
