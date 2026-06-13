import { ArrowRight, Database, Image, Layout, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "@/constants/caseStudies";

export function CaseStudyPlaceholder({ brand }: { brand: string }) {
  const caseData = CASE_STUDIES[brand];

  if (!caseData) return null;

  return (
    <div className="pt-32 pb-40 px-5 md:px-8 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#666666] hover:text-black transition-colors mb-16"
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
        </Link>

        {/* Header Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-bold text-[#1a1a1a] uppercase tracking-widest border border-[#E5E5E5] bg-white px-3 py-1.5 rounded-[2px] shadow-sm">
              {caseData.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8">
            {brand}
          </h1>
          <p className="text-2xl text-[#666666] leading-relaxed max-w-3xl">
            {caseData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Image Previews */}
          <div className="lg:col-span-7 bg-[#F9F9F9] border border-[#E5E5E5] rounded-[2px] p-8 md:p-16 flex items-center justify-center min-h-[500px] relative overflow-hidden group hover:border-[#d5d5d5] transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-50 z-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-700"></div>

            {brand === "Zeniqua Bliss" ? (
              <div className="relative w-full max-w-[460px] aspect-[5/4] sm:aspect-[4/3] flex items-center justify-center z-10 px-4">
                {/* Back small video 1 (Left) */}
                <a
                  href="https://www.instagram.com/reel/DP3vr5NDUtu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-[42%] left-0 top-1/4 -translate-y-8 bg-[#1a1a1a] border border-white/30 rounded-[12px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transform -rotate-[8deg] transition-all duration-700 ease-[0.22,1,0.36,1] hover:-rotate-[4deg] hover:-translate-x-2 hover:-translate-y-10 hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.2)] overflow-hidden group/vid1 z-10 block cursor-pointer"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover/vid1:via-transparent transition-colors duration-500 z-10 pointer-events-none"></div> */}

                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-75 group-hover/vid1:scale-100 transition-transform duration-500 shadow-xl">
                      <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                    </div>
                  </div>

                  {/* <div className="absolute bottom-3 left-3 flex items-center z-20 text-white font-bold text-[10px] tracking-wider drop-shadow-md pointer-events-none">
                    <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-[4px] flex items-center gap-1.5 border border-white/10">
                      <Play className="w-3 h-3 fill-white" /> 108k Views
                    </div>
                  </div> */}

                  <img
                    src="/images/zeniquabliss02.png"
                    alt="Reel Preview"
                    loading="lazy"
                    className="w-full h-auto aspect-[9/16] object-cover group-hover/vid1:scale-105 transition-transform duration-700"
                  />
                </a>

                {/* Back small video 2 (Right) */}
                <a
                  href="https://www.instagram.com/p/DRJpUp4CZ7M/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-[42%] right-0 bottom-1/4 translate-y-8 bg-[#1a1a1a] border border-white/30 rounded-[12px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transform rotate-[8deg] transition-all duration-700 ease-[0.22,1,0.36,1] hover:rotate-[4deg] hover:translate-x-2 hover:translate-y-10 hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.2)] overflow-hidden group/vid2 z-20 block cursor-pointer"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover/vid2:via-transparent transition-colors duration-500 z-10 pointer-events-none"></div> */}

                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-75 group-hover/vid2:scale-100 transition-transform duration-500 shadow-xl">
                      <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                    </div>
                  </div>

                  {/* <div className="absolute bottom-3 left-3 flex items-center z-20 text-white font-bold text-[10px] tracking-wider drop-shadow-md pointer-events-none">
                    <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-[4px] flex items-center gap-1.5 border border-white/10">
                      <Play className="w-3 h-3 fill-white" /> 1.2M Views
                    </div>
                  </div> */}

                  <img
                    src="/images/zeniquabliss03.png"
                    alt="Reel Preview"
                    loading="lazy"
                    className="w-full h-auto aspect-[9/16] object-cover group-hover/vid2:scale-105 transition-transform duration-700"
                  />
                </a>

                {/* Main featured video (Center) */}
                <a
                  href="https://www.instagram.com/reel/DTPTN46Cf6l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-[50%] bg-[#1a1a1a] border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transform z-30 transition-all duration-700 ease-[0.22,1,0.36,1] hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden rounded-[16px] group/vid3 block cursor-pointer"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover/vid3:via-transparent transition-colors duration-500 z-10 pointer-events-none"></div> */}

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-2xl transform scale-90 group-hover/vid3:scale-110 transition-transform duration-500">
                      <Play className="w-6 h-6 fill-white text-white ml-1" />
                    </div>
                  </div>

                  {/* Views counter */}
                  {/* <div className="absolute bottom-4 left-4 flex items-center z-20 text-white font-bold text-xs tracking-wider drop-shadow-lg pointer-events-none">
                    <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-[6px] flex items-center gap-1.5 border border-white/20">
                      <Play className="w-3.5 h-3.5 fill-white" /> 3.5M Views
                    </div>
                  </div> */}

                  <img
                    src="/images/zeniquabliss01.png"
                    alt="Featured Campaign Reel"
                    loading="lazy"
                    className="w-full h-auto aspect-[9/16] object-cover transform transition-transform duration-700 group-hover/vid3:scale-[1.05]"
                  />
                </a>
              </div>
            ) : brand === "Leor" ? (
              <div className="relative w-full max-w-[460px] aspect-[5/4] sm:aspect-[4/3] flex items-center justify-center z-10 px-4">
                {/* Back small video 1 (Left) */}
                <a
                  href="https://www.instagram.com/reel/DHnrpPqyLyR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-[42%] left-0 top-1/4 -translate-y-8 bg-[#1a1a1a] border border-white/30 rounded-[12px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transform -rotate-[8deg] transition-all duration-700 ease-[0.22,1,0.36,1] hover:-rotate-[4deg] hover:-translate-x-2 hover:-translate-y-10 hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.2)] overflow-hidden group/vid1 z-10 block cursor-pointer"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover/vid1:via-transparent transition-colors duration-500 z-10 pointer-events-none"></div> */}

                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-75 group-hover/vid1:scale-100 transition-transform duration-500 shadow-xl">
                      <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                    </div>
                  </div>

                  {/* <div className="absolute bottom-3 left-3 flex items-center z-20 text-white font-bold text-[10px] tracking-wider drop-shadow-md pointer-events-none">
                    <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-[4px] flex items-center gap-1.5 border border-white/10">
                      <Play className="w-3 h-3 fill-white" /> 230k Views
                    </div>
                  </div> */}

                  <img
                    src="/images/leor02.png"
                    alt="Reel Preview"
                    loading="lazy"
                    className="w-full h-auto aspect-[9/16] object-cover group-hover/vid1:scale-105 transition-transform duration-700"
                  />
                </a>

                {/* Back small video 2 (Right) */}
                <a
                  href="https://www.instagram.com/reel/DHA0EJCySbF/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-[42%] right-0 bottom-1/4 translate-y-8 bg-[#1a1a1a] border border-white/30 rounded-[12px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transform rotate-[8deg] transition-all duration-700 ease-[0.22,1,0.36,1] hover:rotate-[4deg] hover:translate-x-2 hover:translate-y-10 hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.2)] overflow-hidden group/vid2 z-20 block cursor-pointer"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover/vid2:via-transparent transition-colors duration-500 z-10 pointer-events-none"></div> */}

                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-75 group-hover/vid2:scale-100 transition-transform duration-500 shadow-xl">
                      <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                    </div>
                  </div>

                  {/* <div className="absolute bottom-3 left-3 flex items-center z-20 text-white font-bold text-[10px] tracking-wider drop-shadow-md pointer-events-none">
                    <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-[4px] flex items-center gap-1.5 border border-white/10">
                      <Play className="w-3 h-3 fill-white" /> 155k Views
                    </div>
                  </div> */}

                  <img
                    src="/images/leor03.png"
                    alt="Reel Preview"
                    loading="lazy"
                    className="w-full h-auto aspect-[9/16] object-cover group-hover/vid2:scale-105 transition-transform duration-700"
                  />
                </a>

                {/* Main featured video (Center) */}
                <a
                  href="https://www.instagram.com/reel/DHGQ2jvytK1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-[50%] bg-[#1a1a1a] border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transform z-30 transition-all duration-700 ease-[0.22,1,0.36,1] hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden rounded-[16px] group/vid3 block cursor-pointer"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover/vid3:via-transparent transition-colors duration-500 z-10 pointer-events-none"></div> */}

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-2xl transform scale-90 group-hover/vid3:scale-110 transition-transform duration-500">
                      <Play className="w-6 h-6 fill-white text-white ml-1" />
                    </div>
                  </div>

                  {/* Views counter */}
                  {/* <div className="absolute bottom-4 left-4 flex items-center z-20 text-white font-bold text-xs tracking-wider drop-shadow-lg pointer-events-none">
                    <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-[6px] flex items-center gap-1.5 border border-white/20">
                      <Play className="w-3.5 h-3.5 fill-white" /> 122k Views
                    </div>
                  </div> */}

                  <img
                    src="/images/leor01.png"
                    alt="Featured Campaign Reel"
                    loading="lazy"
                    className="w-full h-auto aspect-[9/16] object-cover transform transition-transform duration-700 group-hover/vid3:scale-[1.05]"
                  />
                </a>
              </div>
            ) : (
              <div className="relative w-full max-w-[320px] aspect-[3/4] flex items-center justify-center z-10 transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.02]">
                {/* Back card */}
                <div className="absolute w-[80%] h-[90%] bg-white border border-[#E5E5E5] rounded-[4px] shadow-sm transform -rotate-6 -translate-x-8 transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:-rotate-12 group-hover:-translate-x-16 group-hover:shadow-md flex flex-col overflow-hidden">
                  <div className="h-8 border-b border-[#E5E5E5] bg-[#F5F5F5] w-full shrink-0 flex items-center px-4"></div>
                  <div className="flex-1 flex items-center justify-center">
                    <Image className="w-8 h-8 text-[#E5E5E5]" />
                  </div>
                </div>

                {/* Middle card */}
                <div className="absolute w-[85%] h-[95%] bg-white border border-[#E5E5E5] rounded-[4px] shadow-md transform rotate-3 translate-x-6 transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:rotate-6 group-hover:translate-x-12 group-hover:shadow-lg flex flex-col overflow-hidden">
                  <div className="h-8 border-b border-[#E5E5E5] bg-[#F5F5F5] w-full shrink-0 flex items-center px-4"></div>
                  <div className="flex-1 flex items-center justify-center">
                    <Image className="w-10 h-10 text-[#E5E5E5]" />
                  </div>
                </div>

                {/* Front card - Mobile mockup style */}
                <div className="absolute w-[90%] h-[100%] bg-white border border-[#E5E5E5] shadow-2xl transform z-10 transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.05] group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden rounded-[8px]">
                  {/* Notch area */}
                  <div className="absolute top-0 inset-x-0 h-5 flex justify-center mt-3 z-20">
                    <div className="w-20 h-4 bg-[#E5E5E5] rounded-full"></div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1 bg-[#F9F9F9] flex flex-col items-center justify-center relative border-b border-[#E5E5E5]">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F5] to-transparent pointer-events-none"></div>
                      <Image className="w-14 h-14 mb-4 text-[#CCCCCC] relative z-10 drop-shadow-sm" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#999999] relative z-10">
                        Premium Campaign Visual
                      </span>
                    </div>
                    <div className="h-28 bg-white p-5 flex flex-col gap-3 justify-center">
                      <div className="h-2.5 bg-[#F0F0F0] rounded w-3/4"></div>
                      <div className="h-2.5 bg-[#F0F0F0] rounded w-1/2"></div>
                      <div className="h-2.5 bg-[#F0F0F0] rounded w-5/6 mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Case Details */}
          <div className="lg:col-span-5 flex items-center pt-8 lg:pt-0">
            <div className="w-full">
              {/* Client Header Info */}
              <div className="mb-12">
                <span className="inline-block px-3 py-1 bg-[#F5F5F5] border border-[#E5E5E5] rounded-[4px] text-xs font-bold uppercase tracking-widest text-[#666666] mb-8">
                  {caseData.category}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-tight leading-[1.1]">
                  {brand}
                </h1>
                <p className="text-lg md:text-xl text-[#666666] leading-relaxed">
                  {caseData.description}
                </p>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-3 flex items-center gap-2">
                    <Layout className="w-3.5 h-3.5" /> Project Scope
                  </h3>
                  <p className="text-[#1a1a1a] text-[15px] leading-relaxed font-medium">
                    {caseData.role}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-3 flex items-center gap-2">
                    <Database className="w-3.5 h-3.5" /> Data & Results
                  </h3>
                  <ul className="space-y-2">
                    {caseData.results.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#00E5FF] mt-1 shrink-0 text-lg leading-none select-none">
                          •
                        </span>
                        <span className="text-[#1a1a1a] text-[15px] leading-relaxed font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Strategy Highlights */}
              <div className="mb-12">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-4 flex items-center gap-2">
                  <Star className="w-3.5 h-3.5" /> Strategic Execution
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caseData.execution.map((item: string, i: number) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white border border-[#E5E5E5] rounded-[4px] text-[13px] font-bold text-[#1a1a1a] shadow-sm hover:border-[#CCCCCC] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.2em] transform transition-all duration-300 hover:bg-black hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 rounded-[2px]"
              >
                Back to Selected Works <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

