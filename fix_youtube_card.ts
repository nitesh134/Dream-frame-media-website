import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace the works definition
content = content.replace(
  /title: "YouTube Content",[ \t\n\r]*desc: "Long-form storytelling engineered for audience retention and authority positioning.",[ \t\n\r]*link: "\/work\/youtube",[ \t\n\r]*type: "youtube",[ \t\n\r]*thumbnails: \[1, 2, 3\]/s,
  `title: "YouTube Content", 
      desc: "Long-form storytelling engineered for audience retention and authority positioning.",
      link: "/work/youtube",
      type: "youtube",
      thumbnails: [
        { id: "whqtsndQSJY", title: "Behind the Brand: WebBee" },
        { id: "dzFkpJWxAew", title: "Chaco Canyon's Discovery" },
        { id: "75tDIk3Temo", title: "Credit Card Channel Soch" },
        { id: "cCX87blRnJw", title: "Real Estate Tips" }
      ]`
);

// Replace the YouTube rendering
const currentYtRender = `{item.type === 'youtube' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
                         <div className="col-span-1 sm:col-span-2 aspect-video bg-[#ebebeb] rounded-[4px] shadow-lg relative overflow-hidden border border-white"></div>
                         <div className="hidden sm:block aspect-video bg-[#f0f0f0] rounded-[4px] shadow-md relative overflow-hidden border border-white"></div>
                         <div className="hidden sm:block aspect-video bg-[#e0e0e0] rounded-[4px] shadow-md relative overflow-hidden border border-white"></div>
                      </div>
                    )}`;

const newYtRender = `{item.type === 'youtube' && (
                      <div className="flex flex-col gap-3 md:gap-4 w-full h-full justify-center">
                        {/* Main Featured Thumbnail */}
                        <div className="relative w-full aspect-[21/9] bg-black rounded-xl shadow-xl overflow-hidden border border-[#E5E5E5] transform transition-transform duration-700 ease-[0.22,1,0.36,1]">
                           <img src={\`https://img.youtube.com/vi/\${(item.thumbnails[0] as any).id}/maxresdefault.jpg\`} alt={(item.thumbnails[0] as any).title} className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-100 transition-transform duration-700" />
                           <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                           <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between">
                             <h4 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md pr-4">{(item.thumbnails[0] as any).title}</h4>
                             <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex shrink-0 items-center justify-center border border-white/30 text-white shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                               <Play className="w-3.5 h-3.5 ml-0.5 fill-white" />
                             </div>
                           </div>
                        </div>
                        
                        {/* Grid for secondary thumbnails */}
                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                          {item.thumbnails.slice(1, 4).map((thumb: any, idx: number) => (
                            <div key={idx} className="relative aspect-video bg-black rounded-lg shadow-md overflow-hidden border border-[#E5E5E5] transition-transform duration-700 hover:-translate-y-1">
                               <img src={\`https://img.youtube.com/vi/\${thumb.id}/hqdefault.jpg\`} alt={thumb.title} className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-100 transition-transform duration-700" />
                               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                               <div className="absolute inset-x-0 bottom-0 p-2 md:p-3">
                                 <h4 className="text-white font-bold text-[9px] md:text-xs leading-tight line-clamp-2 drop-shadow-md opacity-90">{thumb.title}</h4>
                               </div>
                               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                  <Play className="w-2.5 h-2.5 ml-0.5 fill-white" />
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}`;

content = content.replace(currentYtRender, newYtRender);

fs.writeFileSync('src/App.tsx', content);
