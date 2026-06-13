import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/text-3xl sm:text-3xl sm:text-3xl sm:text-4xl/g, 'text-4xl md:text-5xl lg:text-6xl');
content = content.replace(/text-3xl sm:text-3xl sm:text-4xl/g, 'text-4xl md:text-5xl');
content = content.replace(/text-4xl sm:text-4xl sm:text-5xl/g, 'text-5xl md:text-6xl lg:text-7xl');
content = content.replace(/text-balance text-center sm:text-left /g, '');
content = content.replace(/text-balance text-center sm:text-left/g, '');

content = content.replace(/className="text-4xl md:text-5xl text-balance/g, 'className="text-3xl md:text-5xl text-balance');
content = content.replace(/className="text-5xl md:text-6xl/g, 'className="text-4xl md:text-6xl text-balance');
content = content.replace(/className="text-4xl md:text-6xl/g, 'className="text-3xl md:text-5xl lg:text-6xl text-balance');

fs.writeFileSync('src/App.tsx', content);
