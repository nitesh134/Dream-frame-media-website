import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Use a more robust regex for the end of the gallery map
const galleryGridRegex = /\{galleryData\.videos\.map\(\(vid, idx\) => \([\s\S]*?\}\)\)\}\s*<\/div>/g;

// We want to find the one that is preceded by the grid start of the ternary
const galleryGridReplacement = `            ))}
          </div>
        )}`;

// Actually, let's just find the exact spot.
// line 2781-2783
//            ))}
//         </div>
//       </div>

content = content.replace(
  /           \}\)\)\}\r?\n\s+<\/div>\r?\n\s+<\/div>/,
  `           }))}
          </div>
        )}
      </div>`
);

fs.writeFileSync('src/App.tsx', content);
