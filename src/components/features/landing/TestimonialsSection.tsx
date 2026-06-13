import {
  CheckCheck,
} from "lucide-react";
import React from "react";

export function TestimonialsSection() {
  const conversations = [
    {
      name: "Manabendra",
      title: "CEO, Krazy Tech",
      initials: "M",
      time: "10:42 AM",
      messages: [
        {
          sender: "client",
          text: "Honestly, we never expected this quality because the footage was just a screen recording from a Zoom meeting.\n\nBut your team transformed it into such a professional and engaging video. The storytelling, editing flow, and visuals were way beyond our expectations.\n\nReally enjoyed working with you, Nitesh. Looking forward to the next project together.",
          time: "10:39 AM",
        },
        {
          sender: "dfm",
          text: "Thank you so much, sir.\n\nThat means a lot, especially because the raw footage quality was challenging. Glad you loved the final output. Excited to work together again soon 🚀",
          time: "10:42 AM",
        },
      ],
    },
    {
      name: "Rishabh Mahipal",
      title: "Founder & CEO, Maximalist",
      initials: "RM",
      time: "2:15 PM",
      messages: [
        {
          sender: "client",
          text: "Your team has seriously strong technical knowledge when it comes to video editing and content structuring.\n\nWhat I liked most was that you people actually understand retention, pacing, and audience psychology instead of just adding random effects.\n\nGreat experience working with Dream Frame Media.",
          time: "2:12 PM",
        },
        {
          sender: "dfm",
          text: "Really appreciate that, Rishabh 🙌\n\nWe always try to combine creativity with strategy so the content doesn’t just look good but also performs. Loved working on your project.",
          time: "2:15 PM",
        },
      ],
    },
    {
      name: "Shivam Saluja",
      title: "Founder & CEO, ROB Production",
      initials: "SS",
      time: "4:30 PM",
      messages: [
        {
          sender: "client",
          text: "Bro, I already texted you earlier but again I want to say this...\n\nOne of the videos crossed 3.5 million views 🔥\n\nEven the UGC content performed insanely well. The edits, hooks, and pacing were exactly what the audience connected with.\n\nCrazy results.",
          time: "4:22 PM",
        },
        {
          sender: "dfm",
          text: "That’s huge 🔥\n\nHappy to see the strategy and editing translating into real numbers. Appreciate the trust, brother. More viral campaigns loading 🚀",
          time: "4:30 PM",
        },
      ],
    },
    {
      name: "Rahul",
      title: "Marketing Director",
      initials: "R",
      time: "9:15 AM",
      messages: [
        {
          sender: "client",
          text: "Finally started getting inbound leads consistently.\n\nYour content strategy actually worked for us instead of just generating vanity engagement.\n\nThe biggest difference was how the videos positioned our offer and communicated trust. Great work by your team.",
          time: "9:10 AM",
        },
        {
          sender: "dfm",
          text: "That’s exactly the goal 🙌\n\nViews are nice, but inbound leads and conversions are what truly matter. Glad the strategy delivered results for your brand.",
          time: "9:15 AM",
        },
      ],
    },
    {
      name: "Ajay Bhardwaj",
      title: "Founder, Prayden",
      initials: "AB",
      time: "11:20 AM",
      messages: [
        {
          sender: "client",
          text: "Loved working with you, Nitesh.\n\nYour team’s understanding, communication, and technical execution are honestly unbelievable. Every video your team edited performed well and helped generate quality leads for our clients.\n\nYou people don’t just edit videos, you understand business outcomes too.",
          time: "11:15 AM",
        },
        {
          sender: "dfm",
          text: "Thank you so much, Ajay sir 🙏\n\nWe always try to approach content from both a creative and business perspective. Really grateful for the trust and long-term collaboration.",
          time: "11:20 AM",
        },
      ],
    },
    {
      name: "Supriya",
      title: "Project Head, Gargi College",
      initials: "S",
      time: "5:45 PM",
      messages: [
        {
          sender: "client",
          text: "Thank you for creating such a beautiful documentary for our NGO initiative.\n\nEvery team member appreciated the effort, emotions, and storytelling your team brought into the project.\n\nThe final film genuinely connected with everyone emotionally.",
          time: "5:30 PM",
        },
        {
          sender: "dfm",
          text: "Thank you, ma’am 🙏\n\nProjects with real impact always mean a lot to us. Glad the documentary connected emotionally with your team and audience.",
          time: "5:45 PM",
        },
      ],
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 md:mb-20 border-b border-[#E5E5E5] pb-4 uppercase">
          07 CLIENT Testimonials
        </div>

        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-6 md:mb-8 leading-[1.1]">
            Real Conversations,
            <br className="hidden md:block" /> Real Results
          </h2>
          <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-2xl">
            Feedback from clients who trusted us with their videos, campaigns,
            and ongoing content production.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {conversations.map((chat, i) => (
            <div
              key={i}
              className={`break-inside-avoid bg-white border border-[#E5E5E5] rounded-3xl overflow-hidden shadow-[0_4px_15px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 relative origin-center group ${i % 3 === 0 ? "-rotate-1" : i % 3 === 1 ? "rotate-1" : "-rotate-[0.5deg]"}`}
            >
              {/* Header */}
              <div className="bg-white px-5 py-4 flex items-center gap-3 border-b border-[#E5E5E5] relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#f0f2f5] border-none flex items-center justify-center text-xs font-bold text-[#8b959a] shrink-0">
                  {chat.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#111b21] text-[15px] leading-tight flex items-center gap-2">
                    {chat.name}
                  </div>
                  <div className="text-[11px] text-[#667781] mt-0.5 font-medium flex items-center gap-1">
                    {chat.title}{" "}
                    <span className="w-1 h-1 bg-[#d1d7db] rounded-full"></span>{" "}
                    <span className="text-[#00a884]">online</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="bg-[#efeae2] p-5 space-y-3 shadow-inner relative">
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>
                {chat.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col relative z-10 ${msg.sender === "client" ? "items-start" : "items-end"}`}
                  >
                    <div
                      className={`px-3.5 py-2 rounded-2xl max-w-[85%] text-[14.5px] leading-[1.4] shadow-[0_1px_1px_rgba(0,0,0,0.06)] whitespace-pre-wrap ${
                        msg.sender === "client"
                          ? "bg-white text-[#111b21] rounded-tl-sm"
                          : "bg-[#e7f8e0] text-[#111b21] rounded-tr-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div
                      className={`text-[10px] text-[#667781] mt-1 flex items-center gap-1 ${msg.sender === "client" ? "self-start pl-1" : "self-end pr-1"}`}
                    >
                      {msg.time}
                      {msg.sender === "dfm" && (
                        <CheckCheck className="w-[14px] h-[14px] text-[#34B7F1]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
