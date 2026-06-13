import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Global changes for responsiveness mapping

// Py mappings
content = content.replace(/py-40/g, 'py-24 md:py-32');
content = content.replace(/py-32/g, 'py-20 md:py-24');

// Text replacements for headers
content = content.replace(/text-5xl md:text-7xl/g, 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl');
content = content.replace(/text-4xl md:text-6xl/g, 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl');
content = content.replace(/text-4xl md:text-5xl/g, 'text-3xl sm:text-4xl md:text-5xl');

// Add consistent tracking-tight to avoid overflow on big text
// and break-words for long headings
content = content.replace(/text-4xl sm:text-5xl/g, 'text-4xl sm:text-5xl text-wrap-balance');
content = content.replace(/text-3xl sm:text-4xl/g, 'text-3xl sm:text-4xl text-wrap-balance');

// Make specific adjustments in Navbar for mobile layout
// Ensuring all links close menu and layout is decent is already done

// Adjust case studies / grid scaling
content = content.replace(/grid-cols-2 md:grid-cols-3/g, 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3');
content = content.replace(/grid-cols-2 md:grid-cols-4/g, 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4');
content = content.replace(/grid-cols-2 lg:grid-cols-4/g, 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4');

// Ensure video thumbnails stack completely and properly on mobile
content = content.replace(/w-\[80%\] aspect-[a-z0-9\/]+/g, 'w-full md:w-[80%] aspect-video');

// Service pages Hero spacing and text
content = content.replace(/text-5xl md:text-6xl lg:text-7xl/g, 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-wrap-balance');

// Cleanup double balance
content = content.replace(/text-wrap-balance text-wrap-balance/g, 'text-wrap-balance');

fs.writeFileSync('src/App.tsx', content);
