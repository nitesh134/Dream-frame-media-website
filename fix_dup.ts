import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace('group-hover:scale-[1.02]"> transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.02]">', 'group-hover:scale-[1.02]">');

fs.writeFileSync('src/App.tsx', content);
console.log('Fixed extra classes');
