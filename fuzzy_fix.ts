import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Use fuzzy matching for whitespace
function fuzzyReplace(search: string, replace: string) {
    const searchRegex = new RegExp(search.replace(/\s+/g, '\\s+'), 'g');
    if (searchRegex.test(content)) {
        content = content.replace(searchRegex, replace);
        console.log("Fixed a block fuzzy");
    } else {
        console.log("Could not find block fuzzy");
    }
}

fuzzyReplace(
  `{item.type === 'youtube' && (
      <div className="flex flex-col gap-3 md:gap-4 w-full h-full justify-center">
        {/* Main Featured Thumbnail */}
        <div className="relative w-full aspect-[21/9] bg-[#1a1a1a] rounded-[4px] shadow-xl overflow-hidden border border-black/10 transform transition-transform duration-700 ease-[0.22,1,0.36,1]">
           <img src={\`https://img.youtube.com/vi/\${(item.thumbnails[0] as any).id}/maxresdefault.jpg\`} alt={(item.thumbnails[0] as any).title} className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-100 transition-transform duration-700" />
           <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
           <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between">
             <h4 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md pr-4">{(item.thumbnails[0] as any).title}</h4>
             <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex shrink-0 items-center justify-center border border-white/30 text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
               <Play className="w-3.5 h-3.5 ml-0.5 fill-white" />
             </div>
           </div>
        </div>
        
        {/* Grid for secondary thumbnails */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {item.thumbnails.slice(1, 4).map((thumb: any, idx: number) => (
            <div key={idx} className="relative aspect-video bg-[#1a1a1a] rounded-[4px] shadow-lg overflow-hidden border border-black/10 transition-transform duration-700 hover:-translate-y-1">
               <img src={\`https://img.youtube.com/vi/\${thumb.id}/hqdefault.jpg\`} alt={thumb.title} className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-100 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
               <div className="absolute inset-x-0 bottom-0 p-2 md:p-3">
                 <h4 className="text-white font-semibold text-[9px] md:text-[11px] leading-tight line-clamp-2 drop-shadow-md opacity-95">{thumb.title}</h4>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 border border-white/20">
                  <Play className="w-2.5 h-2.5 ml-0.5 fill-white" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}`,
  `{item.type === 'youtube' && (
                      <div className="flex flex-col gap-3 md:gap-4 w-full h-full justify-center">
                        {/* Main Featured Thumbnail */}
                        <div className="relative w-full aspect-[21/9] bg-[#1a1a1a] rounded-[4px] shadow-xl overflow-hidden border border-black/10 transform transition-transform duration-700 ease-[0.22,1,0.36,1]">
                           <img src={\`https://img.youtube.com/vi/\${(item.thumbnails[0] as any).id}/maxresdefault.jpg\`} alt={(item.thumbnails[0] as any).title} className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-100 transition-transform duration-700\" />
                           <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent\"></div>
                           <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between\">
                             <h4 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md pr-4\">{(item.thumbnails[0] as any).title}</h4>
                             <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex shrink-0 items-center justify-center border border-white/30 text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500\">
                               <Play className="w-3.5 h-3.5 ml-0.5 fill-white\" />
                             </div>
                           </div>
                        </div>
                        
                        {/* Grid for secondary thumbnails */}
                        <div className="grid grid-cols-3 gap-3 md:gap-4\">
                          {item.thumbnails.slice(1, 4).map((thumb: any, idx: number) => (
                            <div key={idx} className="relative aspect-video bg-[#1a1a1a] rounded-[4px] shadow-lg overflow-hidden border border-black/10 transition-transform duration-700 hover:-translate-y-1\">
                               <img src={\`https://img.youtube.com/vi/\${thumb.id}/hqdefault.jpg\`} alt={thumb.title} className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-100 transition-transform duration-700\" />
                               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent\"></div>
                               <div className="absolute inset-x-0 bottom-0 p-2 md:p-3\">
                                 <h4 className="text-white font-semibold text-[9px] md:text-[11px] leading-tight line-clamp-2 drop-shadow-md opacity-95\">{thumb.title}</h4>
                               </div>
                               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 border border-white/20\">
                                  <Play className="w-2.5 h-2.5 ml-0.5 fill-white\" />
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}`
);

// Fix Ecosystem steps map
fuzzyReplace(
  `{step.items.map((item, j) => (
      <div key={j} className="flex items-center gap-2">
         <div className="w-1.5 h-1.5 rounded-full border border-[#666666]"></div>
         <span className="text-xs text-[#cccccc] font-medium">{item}</span>
      </div>
   ))}
</div>
</div>`,
  `{step.items.map((item, j) => (
                                     <div key={j} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full border border-[#666666]"></div>
                                        <span className="text-xs text-[#cccccc] font-medium">{item}</span>
                                     </div>
                                  ))}
                               </div>
                            )}
                         </div>`
);

// Fix Gallery grid map
fuzzyReplace(
  `{galleryData.videos.map((vid, idx) => (
[\\s\\S]*?
))}
</div>
</div>`,
  `{galleryData.videos.map((vid, idx) => (
               <div 
                 key={idx} 
                 className="group relative cursor-pointer"
                 onClick={() => {
                   if (vid.youtubeId) {
                     setActiveVideo({ title: vid.title, youtubeId: vid.youtubeId, type: galleryData.type });
                   }
                 }}
               >
                  <div className={\`w-full bg-[#EAEAEA] rounded-[2px] mb-4 overflow-hidden border border-[#E5E5E5] relative transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group-hover:border-[#d5d5d5] \${galleryData.type === 'youtube' || galleryData.type === 'podcast' ? 'aspect-video' : 'aspect-[9/16]'}\`}>
                     {vid.youtubeId ? (
                       <img 
                         src={\`https://img.youtube.com/vi/\${vid.youtubeId}/hqdefault.jpg\`} 
                         alt={vid.title}
                         className={\`w-full h-full object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.35] \${galleryData.type === 'shortform' || galleryData.type === 'ugc' ? 'scale-[1.3]' : 'group-hover:scale-[1.05]'}\`}
                         style={{objectPosition: 'center 30%'}}
                       />
                     ) : (
                       <div className="w-full h-full bg-[#E5E5E5]"></div>
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                           <Play className="w-6 h-6 ml-1 fill-white" />
                        </div>
                     </div>
                  </div>
                  
                  <div className="px-1 mt-6 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-1">
                     <h4 className="font-bold text-[#1a1a1a] text-lg md:text-xl leading-tight mb-2 max-w-[90%]">{vid.title}</h4>
                     <span className="text-xs font-bold uppercase tracking-widest text-[#999999] flex items-center gap-2">
                        <Play className="w-3 h-3" /> Watch Video
                     </span>
                  </div>
               </div>
            ))}
          </div>
        )}
      </div>`
);

fs.writeFileSync('src/App.tsx', content);
