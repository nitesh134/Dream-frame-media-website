const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Global changes for responsiveness
content = content.replace(/className="text-5xl md:text-7xl/g, 'className="text-4xl sm:text-5xl md:text-7xl');
content = content.replace(/className="text-4xl md:text-6xl lg:text-7xl/g, 'className="text-3xl sm:text-4xl lg:text-6xl');
content = content.replace(/className="text-4xl md:text-6xl/g, 'className="text-3xl sm:text-4xl md:text-6xl');
content = content.replace(/className="text-4xl md:text-5xl lg:text-6xl/g, 'className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl');
content = content.replace(/className="text-4xl md:text-5xl/g, 'className="text-3xl sm:text-4xl md:text-5xl');

content = content.replace(/className="py-32 md:py-40/g, 'className="py-24 md:py-32');
content = content.replace(/mb-20/g, 'mb-12 md:mb-20');
content = content.replace(/mb-24/g, 'mb-16 md:mb-24');
content = content.replace(/mb-16/g, 'mb-10 md:mb-16');

// Additional adjustments to buttons and layouts if needed

fs.writeFileSync('src/App.tsx', content);
