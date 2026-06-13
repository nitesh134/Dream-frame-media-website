import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const originalShortformRender = `{(item.type === 'shortform' || item.type === 'ugc') && (
                      <div className="flex gap-2 md:gap-4 items-center justify-center w-full h-full">
                        <div className="w-1/3 aspect-[9/16] bg-[#efefef] rounded-[4px] shadow-lg border border-white overflow-hidden transform group-hover:-rotate-3 transition-transform duration-700"></div>
                        <div className="w-1/3 aspect-[9/16] bg-[#ebebeb] rounded-[4px] shadow-xl border border-white overflow-hidden z-10 transform scale-110 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="w-1/3 aspect-[9/16] bg-[#e5e5e5] rounded-[4px] shadow-lg border border-white overflow-hidden transform group-hover:rotate-3 transition-transform duration-700"></div>
                      </div>
                    )}`;

const newShortformRender = `{item.type === 'shortform' && (
                      <div className="flex gap-2 md:gap-4 items-center justify-center w-full h-full pt-4">
                        {item.thumbnails.slice(0, 3).map((thumb: any, idx: number) => (
                           <div key={idx} className={\`w-1/3 aspect-[9/16] bg-[#1a1a1a] rounded-[4px] shadow-xl border border-black/10 overflow-hidden relative transition-transform duration-700 ease-[0.22,1,0.36,1] \${idx === 0 ? 'transform group-hover:-rotate-2 group-hover:-translate-y-2' : idx === 1 ? 'transform scale-110 z-10 group-hover:-translate-y-4' : 'transform group-hover:rotate-2 group-hover:-translate-y-2'}\`}>
                             <img src={\`https://img.youtube.com/vi/\${thumb.id}/hqdefault.jpg\`} alt={thumb.title} className="w-full h-full object-cover origin-center transform scale-[1.3] group-hover:scale-[1.35] transition-transform duration-700" style={{objectPosition: 'center 30%'}} />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                             
                             <div className="absolute inset-x-0 bottom-0 p-2 md:p-3 flex flex-col justify-end">
                               <h4 className="text-white font-bold text-[8px] md:text-[10px] leading-tight line-clamp-2 drop-shadow-md pb-1">{thumb.title}</h4>
                             </div>
                             
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 border border-white/20 z-20">
                                <Play className="w-3.5 h-3.5 ml-0.5 fill-white" />
                             </div>
                           </div>
                        ))}
                      </div>
                    )}
                    {item.type === 'ugc' && (
                      <div className="flex gap-2 md:gap-4 items-center justify-center w-full h-full">
                        <div className="w-1/3 aspect-[9/16] bg-[#efefef] rounded-[4px] shadow-lg border border-white overflow-hidden transform group-hover:-rotate-3 transition-transform duration-700"></div>
                        <div className="w-1/3 aspect-[9/16] bg-[#ebebeb] rounded-[4px] shadow-xl border border-white overflow-hidden z-10 transform scale-110 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="w-1/3 aspect-[9/16] bg-[#e5e5e5] rounded-[4px] shadow-lg border border-white overflow-hidden transform group-hover:rotate-3 transition-transform duration-700"></div>
                      </div>
                    )}`;

content = content.replace(originalShortformRender, newShortformRender);
fs.writeFileSync('src/App.tsx', content);
