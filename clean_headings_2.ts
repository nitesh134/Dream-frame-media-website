import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// clean all the duplicated sizes
content = content.replace(/text-3xl\s+md:text-4xl\s+lg:text-5xl\s+md:text-5xl\s+lg:text-6xl/g, 'text-4xl lg:text-5xl');
content = content.replace(/text-3xl\s+md:text-4xl\s+lg:text-5xl\s+md:text-5xl/g, 'text-3xl md:text-4xl lg:text-5xl');

content = content.replace(/text-3xl\s+md:text-5xl\s+lg:text-6xl\s+text-balance\s+text-balance\s+lg:text-7xl\s+md:text-6xl\s+lg:text-7xl/g, 'text-4xl md:text-5xl lg:text-6xl text-balance');
content = content.replace(/text-3xl\s+md:text-5xl\s+lg:text-6xl\s+text-balance\s+text-balance/g, 'text-4xl md:text-5xl lg:text-6xl text-balance');

content = content.replace(/text-3xl\s+md:text-4xl\s+lg:text-5xl\s+lg:text-6xl\s+md:text-5xl\s+lg:text-6xl/g, 'text-4xl md:text-5xl lg:text-6xl text-balance');

content = content.replace(/text-3xl\s+md:text-4xl\s+lg:text-5xl\s+md:text-5xl\s+lg:text-7xl/g, 'text-3xl md:text-5xl lg:text-6xl text-balance');
content = content.replace(/text-3xl\s+md:text-4xl\s+lg:text-5xl\s+lg:text-6xl\s+md:text-5xl\s+lg:text-6xl\s+lg:text-7xl/g, 'text-4xl md:text-5xl lg:text-6xl text-balance');


fs.writeFileSync('src/App.tsx', content);
