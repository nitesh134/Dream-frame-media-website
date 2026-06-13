import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const originalGalleryImage = `{vid.youtubeId ? (
                      <img 
                        src={\`https://img.youtube.com/vi/\${vid.youtubeId}/maxresdefault.jpg\`} 
                        alt={vid.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#E5E5E5]"></div>
                    )}`;

const newGalleryImage = `{vid.youtubeId ? (
                      <img 
                        src={\`https://img.youtube.com/vi/\${vid.youtubeId}/hqdefault.jpg\`} 
                        alt={vid.title}
                        className={\`w-full h-full object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.35] \${galleryData.type === 'shortform' || galleryData.type === 'ugc' ? 'scale-[1.3]' : 'group-hover:scale-[1.05]'}\`}
                        style={{objectPosition: 'center 30%'}}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#E5E5E5]"></div>
                    )}`;

content = content.replace(originalGalleryImage, newGalleryImage);

// Also need to use appropriate class for the iframe inside activeVideo based on video type
// wait, we don't know the activeVideo's type. Maybe we can pass type to the activeVideo state.
let activeVideoState = `const [activeVideo, setActiveVideo] = useState<{title: string, youtubeId: string} | null>(null);`;
let activeVideoStateNew = `const [activeVideo, setActiveVideo] = useState<{title: string, youtubeId: string, type: string} | null>(null);`;
content = content.replace(activeVideoState, activeVideoStateNew);

content = content.replace(
  `setActiveVideo({ title: vid.title, youtubeId: vid.youtubeId });`,
  `setActiveVideo({ title: vid.title, youtubeId: vid.youtubeId, type: galleryData.type });`
);

content = content.replace(
  `className="w-full max-w-6xl aspect-video rounded-xl bg-black overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"`,
  `className={\`w-full bg-black overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 \${activeVideo.type === 'shortform' || activeVideo.type === 'ugc' ? 'max-w-md aspect-[9/16] rounded-2xl' : 'max-w-6xl aspect-video rounded-xl'}\`}`
);

fs.writeFileSync('src/App.tsx', content);
