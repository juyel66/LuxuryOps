"use client";

import { FaStar } from "react-icons/fa";

export default function TestimonialHome() {
  return (
    <section className="relative block w-full px-4 py-16 text-white bg-black font sm:px-10 md:py-24 lg:px-20 font-cardo">
      
      {/* BACKGROUND GLOW (like design) */}
      <div className="absolute top-0 left-1/2 w-[320px] h-[320px] -translate-x-1/2 bg-linear-to-br from-yellow-500/20 via-green-400/10 to-blue-500/20 blur-3xl opacity-30 pointer-events-none sm:left-1/3 sm:w-[400px] sm:h-[400px] sm:translate-x-0" />

      <div className="container relative z-10 mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 max-w-[700px]">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-[#7A8A9A]" />
            <span className="text-2xl text-gray-400 md:text-3xl">05</span>
          </div>

          <h2 className="text-[34px] sm:text-[40px] lg:text-[44px] font-cardo italic mb-4">
            Testimonials
          </h2>

          <p className="text-[#9CA3AF] md:text-[17px]  leading-[1.9]">
            At VVIP Luxury Chauffeured Services, we redefine luxury travel. Each testimonial highlights our commitment to elegance and excellence.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* CARD 1 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
            <p className="text-[#CFCFCF] text-sm leading-[1.8] mb-6">
              At VVIP Luxury Chauffeur Services we felt as though we were back home in Monaco. Amani and his team are amazing. Definitely will be booking again and again.
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-[#D4AF37] text-sm font-semibold">
                  Sarah Martinez
                </h4>
                <span className="text-[#9CA3AF] text-xs">
                  Monaco
                </span>
              </div>

              <div className="flex items-center gap-1 text-[#D4AF37] text-sm">
                <FaStar />
                <span>5.0</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
            <p className="text-[#CFCFCF] text-sm leading-[1.8] mb-6">
              The level of professionalism and attention to detail exceeded all expectations. Our corporate team was impressed with the seamless service throughout our visit.
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-[#D4AF37] text-sm font-semibold">
                  James Wellington
                </h4>
                <span className="text-[#9CA3AF] text-xs">
                  London, UK
                </span>
              </div>

              <div className="flex items-center gap-1 text-[#D4AF37] text-sm">
                <FaStar />
                <span>5.0</span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
            <p className="text-[#CFCFCF] text-sm leading-[1.8] mb-6">
              Impeccable service from start to finish. The chauffeur was punctual, professional, and the vehicle was absolutely pristine. True luxury transportation.
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-[#D4AF37] text-sm font-semibold">
                  Olivia Chen
                </h4>
                <span className="text-[#9CA3AF] text-xs">
                  Singapore
                </span>
              </div>

              <div className="flex items-center gap-1 text-[#D4AF37] text-sm">
                <FaStar />
                <span>5.0</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}