import {
  ArrowRight,
  BarChart3,
  Building,
  Mail,
  MessageSquare,
  User,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BookingFormSection() {
  return (
    <section
      id="booking"
      className="py-16 md:py-24 px-5 md:px-8 bg-white border-b border-[#E5E5E5]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 lg:gap-32">
        <div className="md:w-1/2">
          <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-12 border-b border-[#E5E5E5] pb-4">
            09 // INITIATE SYSTEM
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8">
            Build your authority engine.
          </h2>
          <p className="text-[#666666] leading-relaxed mb-12 text-xl">
            Request a strategy call to discuss your current operational
            bottlenecks and how our infrastructure can scale your personal
            brand.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-[2px] bg-[#FAFAFA] flex items-center justify-center flex-shrink-0 border border-[#E5E5E5]">
                <Workflow className="w-5 h-5 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Systems Consultation</h4>
                <p className="text-base text-[#666666] leading-relaxed">
                  Deep dive into your current workflow.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-[2px] bg-[#FAFAFA] flex items-center justify-center flex-shrink-0 border border-[#E5E5E5]">
                <BarChart3 className="w-5 h-5 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Custom Architecture</h4>
                <p className="text-base text-[#666666] leading-relaxed">
                  Proposed data model for your content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <form className="bg-[#FAFAFA] p-10 md:p-12 border border-[#E5E5E5] rounded-[2px]">
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-black uppercase tracking-widest">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                    <input
                      type="text"
                      className="w-full h-12 pl-10 pr-4 bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all outline-none"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-black uppercase tracking-widest">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-black uppercase tracking-widest">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                  <input
                    type="email"
                    className="w-full h-12 pl-10 pr-4 bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-black uppercase tracking-widest">
                  Company / Brand URL
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                  <input
                    type="url"
                    className="w-full h-12 pl-10 pr-4 bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all outline-none"
                    placeholder="https://"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-black uppercase tracking-widest">
                  Current Challenges
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-[#999999]" />
                  <textarea
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all outline-none min-h-[100px] resize-y"
                    placeholder="Briefly describe your current content operations..."
                  ></textarea>
                </div>
              </div>

              <Button
                type="button"
                className="w-full h-14 rounded-[4px] flex items-center justify-center gap-2 mt-4"
              >
                Request Strategy Call <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

