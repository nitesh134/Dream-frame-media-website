import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// The accidental change added )} after many </div> that followed ))}
// We only want it in the WorkGalleryPage where we added the ternary.

// ProcessSection fix
const processSectionBad = `          ))}
          </div>
        )}`;
const processSectionGood = `          ))}
        </div>`;
content = content.replace(processSectionBad, processSectionGood);

// Check other sections. I'll search for ')}' at the end of blocks and see if they look wrong.
// Actually, I can just find all instances of '</div>\n        )}' and see if they have a matching '{' before them.
// But better to just fix the two places I saw.

// Let's re-read the WorkGalleryPage area to see its line numbers now.
// It was around 2783.
// 2783:            ))}
// 2784:         </div>
// 2785:       </div>
// Wait, my view_file above showed line 2784 as </div> and 2785 as </div>.
// Ah, because the ternary was:
// {podcast ? (...) : (<div ...> {videos.map(...)} </div>)}
// So it SHOULD be </div> )} </div>

content = content.replace(
  /        <\/div>\r?\n\s+\)\}/g,
  (match, offset, string) => {
    // We only keep it if it's inside WorkGalleryPage and part of our ternary.
    // I replaced the grid start with a ternary.
    // Let's see if we can identify the one to keep.
    // Actually, I'll just restore everything and then apply the change PROPERLY to WorkGalleryPage ONLY.
    return '        </div>';
  }
);

// Now apply it specifically to WorkGalleryPage
const galleryGridStart = `{galleryData.type === 'podcast' && galleryData.videos.length === 1 ? (
          <div className="max-w-5xl mx-auto">
             <div 
               className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-2xl transition-all duration-700 ease-[0.22,1,0.36,1] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]"
               onClick={() => setActiveVideo({ title: galleryData.videos[0].title, youtubeId: galleryData.videos[0].youtubeId, type: 'podcast' })}
             >
                <div className="aspect-video relative overflow-hidden">
                   <img 
                     src={\`https://img.youtube.com/vi/\${galleryData.videos[0].youtubeId}/maxresdefault.jpg\`} 
                     alt={galleryData.videos[0].title}
                     className="w-full h-full object-cover transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl transform scale-90 group-hover:scale-100 transition-all duration-700">
                         <Play className="w-10 h-10 ml-1 fill-white" />
                      </div>
                   </div>
                </div>
                <div className="p-8 md:p-12 bg-white">
                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div className="flex-1">
                         <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#1a1a1a]">{galleryData.videos[0].title}</h3>
                         <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-2xl">
                            {(galleryData.videos[0] as any).desc}
                         </p>
                      </div>
                      <button className="px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest rounded-[2px] hover:bg-[#222222] transition-colors shrink-0">
                         Watch Interview
                      </button>
                   </div>
                </div>
             </div>
          </div>
        ) : (
          <div className={\`grid gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16 \${galleryData.type === 'youtube' || galleryData.type === 'podcast' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}\`}>`;

const untargetedGridEnd = `            ))}
        </div>`;
const targetedGridEndReplacement = `            ))}
        </div>
      )}
    </div>`;

// I need to find the galleryGridStart and replace the ending div properly.
// I'll use a more precise replacement for the whole block.

content = content.replace(
  new RegExp(escapeRegExp(galleryGridStart) + '([\\s\\S]*?)' + escapeRegExp(untargetedGridEnd), 'm'),
  galleryGridStart + '$1' + targetedGridEndReplacement
);

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

fs.writeFileSync('src/App.tsx', content);
