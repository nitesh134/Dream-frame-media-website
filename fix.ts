import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Global changes for responsiveness
content = content.replace(/className="text-5xl md:text-7xl/g, 'className="text-4xl sm:text-5xl md:text-7xl');
content = content.replace(/className="text-4xl md:text-6xl lg:text-7xl/g, 'className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl');
content = content.replace(/className="text-4xl md:text-6xl/g, 'className="text-3xl sm:text-4xl md:text-6xl');
content = content.replace(/className="text-4xl md:text-5xl lg:text-6xl/g, 'className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl');
content = content.replace(/className="text-4xl md:text-5xl/g, 'className="text-3xl sm:text-4xl md:text-5xl');

content = content.replace(/className="py-32 md:py-40/g, 'className="py-24 md:py-32');

// Fix grids and spacing
content = content.replace(/gap-8 md:gap-12/g, 'gap-6 md:gap-8 lg:gap-12');
content = content.replace(/gap-12/g, 'gap-8 lg:gap-12');
content = content.replace(/grid md:grid-cols-2/g, 'grid grid-cols-1 md:grid-cols-2');
content = content.replace(/grid md:grid-cols-3/g, 'grid grid-cols-1 md:grid-cols-3');
content = content.replace(/px-6/g, 'px-4 sm:px-6 md:px-8');

fs.writeFileSync('src/App.tsx', content);
