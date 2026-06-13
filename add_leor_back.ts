import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const target = `                   <img src="/img_1_b4b9.png" alt="Featured Campaign Reel" className="w-full h-auto aspect-[9/16] object-cover transform transition-transform duration-700 group-hover/vid3:scale-[1.05]" />
                 </a>
               </div>
            ) : (
               <div className="relative w-full max-w-[320px] aspect-[3/4] flex items-center justify-center z-10`;

const replacement = `                   <img src="/img_1_b4b9.png" alt="Featured Campaign Reel" className="w-full h-auto aspect-[9/16] object-cover transform transition-transform duration-700 group-hover/vid3:scale-[1.05]" />
                 </a>
               </div>
            ) : brand === 'Leor' ? (
               <div className="relative w-full max-w-[460px] aspect-[5/4] sm:aspect-[4/3] flex items-center justify-center z-10 px-4">
                 
                 {/* Back small video 1 (Left) */}
                 <a href="https://www.instagram.com/reel/DHnrpPqyLyR/" target="_blank" rel="noopener noreferrer" className="absolute w-[42%] left-0 top-1/4 -translate-y-8 bg-[#1a1a1a] border border-white/30 rounded-[12px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transform -rotate-[8deg] transition-all duration-700 ease-[0.22,1,0.36,1] hover:-rotate-[4deg] hover:-translate-x-2 hover:-translate-y-10 hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.2)] overflow-hidden group/vid1 z-10 block cursor-pointer">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover/vid1:via-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                   
                   <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                     <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-75 group-hover/vid1:scale-100 transition-transform duration-500 shadow-xl">
                        <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                     </div>
                   </div>
                   
                   <div className="absolute bottom-3 left-3 flex items-center z-20 text-white font-bold text-[10px] tracking-wider drop-shadow-md pointer-events-none">
                     <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-[4px] flex items-center gap-1.5 border border-white/10">
                        <Play className="w-3 h-3 fill-white" /> 230k Views
                     </div>
                   </div>
                   
                   <img src="/leor_2.jpg" alt="Reel Preview" className="w-full h-auto aspect-[9/16] object-cover group-hover/vid1:scale-105 transition-transform duration-700" />
                 </a>
                 
                 {/* Back small video 2 (Right) */}
                 <a href="https://www.instagram.com/reel/DHA0EJCySbF/" target="_blank" rel="noopener noreferrer" className="absolute w-[42%] right-0 bottom-1/4 translate-y-8 bg-[#1a1a1a] border border-white/30 rounded-[12px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transform rotate-[8deg] transition-all duration-700 ease-[0.22,1,0.36,1] hover:rotate-[4deg] hover:translate-x-2 hover:translate-y-10 hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.2)] overflow-hidden group/vid2 z-20 block cursor-pointer">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover/vid2:via-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                   
                   <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                     <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-75 group-hover/vid2:scale-100 transition-transform duration-500 shadow-xl">
                        <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                     </div>
                   </div>
                   
                   <div className="absolute bottom-3 left-3 flex items-center z-20 text-white font-bold text-[10px] tracking-wider drop-shadow-md pointer-events-none">
                     <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-[4px] flex items-center gap-1.5 border border-white/10">
                        <Play className="w-3 h-3 fill-white" /> 155k Views
                     </div>
                   </div>
                   
                   <img src="/leor_3.jpg" alt="Reel Preview" className="w-full h-auto aspect-[9/16] object-cover group-hover/vid2:scale-105 transition-transform duration-700" />
                 </a>
                 
                 {/* Main featured video (Center) */}
                 <a href="https://www.instagram.com/reel/DHGQ2jvytK1/" target="_blank" rel="noopener noreferrer" className="absolute w-[50%] bg-[#1a1a1a] border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transform z-30 transition-all duration-700 ease-[0.22,1,0.36,1] hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden rounded-[16px] group/vid3 block cursor-pointer">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover/vid3:via-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                   
                   {/* Play button */}
                   <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                     <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-2xl transform scale-90 group-hover/vid3:scale-110 transition-transform duration-500">
                        <Play className="w-6 h-6 fill-white text-white ml-1" />
                     </div>
                   </div>
                   
                   {/* Views counter */}
                   <div className="absolute bottom-4 left-4 flex items-center z-20 text-white font-bold text-xs tracking-wider drop-shadow-lg pointer-events-none">
                     <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-[6px] flex items-center gap-1.5 border border-white/20">
                        <Play className="w-3.5 h-3.5 fill-white" /> 122k Views
                     </div>
                   </div>
                   
                   <img src="/leor_1.jpg" alt="Featured Campaign Reel" className="w-full h-auto aspect-[9/16] object-cover transform transition-transform duration-700 group-hover/vid3:scale-[1.05]" />
                 </a>
               </div>
            ) : (
               <div className="relative w-full max-w-[320px] aspect-[3/4] flex items-center justify-center z-10 transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.02]">`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync('src/App.tsx', content);
    console.log('Added Leor again via replacement!');
} else {
    console.log('Target string not found in src/App.tsx!');
}
