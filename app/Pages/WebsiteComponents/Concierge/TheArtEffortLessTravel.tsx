"use client";
import Image from "next/image";
import divider from "../../../../public/images/Container (17).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";

export default function TheArtEffortLessTravel() {
  return (
    <div className="relative overflow-hidden text-white bg-black font-cardo">
      
      {/* 🔥 subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#D4AF37]/10 to-transparent blur-2xl" />
      </div>

      <section className="container relative z-10 px-4 mx-auto md:py-20 md:py-28">
        
        {/* TOP GRID */}
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* LEFT */}
          <div>
            {/* Label */}
             <div className="flex items-center gap-4 mb-6">
          <span className="text-[#D4AF37] text-lg">04</span>
            <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
            <Image src={divider} alt="divider" className="hidden md:block" />
        </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl leading-tight md:text-5xl">
              The Art of Effortless Travel
            </h2>

            {/* Paragraphs */}
            <div className="max-w-xl space-y-5 text-sm leading-relaxed text-gray-400 md:text-base">
              
              <p>
                For our clients, Barbados is not simply a destination—it is an experience to be savoured.
              </p>

              <p>
                Through our concierge services, VVIP Luxury ensures that every moment of your stay is seamlessly curated, impeccably coordinated, and entirely unforgettable.
              </p>

              <p>
                From the instant your aircraft touches down to the moment of your departure, our team remains quietly at your service—anticipating needs, refining details, and delivering the kind of personalised care that transforms travel into something truly extraordinary.
              </p>

            </div>
          </div>

          {/* RIGHT GLASS CARD */}
          <div className="relative mt-4">
            
            {/* Glow border */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#D4AF37]/20 rounded-2xl" />

            {/* Card */}
            <div className="relative p-6 border md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border-white/10">
              
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#D4AF37]" />
                  24/7 Concierge availability
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#D4AF37]" />
                  Curated network of premium partners
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#D4AF37]" />
                  Proactive service philosophy
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#D4AF37]" />
                  Complete privacy & discretion
                </li>
              </ul>

            </div>
          </div>

        </div>

        {/* BOTTOM CENTER TEXT */}
        <div className="mt-20 text-center md:mt-28">
          
          {/* Divider */}
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-6" />

          {/* Title */}
          <h3 className="mb-3 text-2xl md:text-4xl">
            VVIP Luxury Concierge
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-gray-400 md:text-base">
            Because exceptional journeys deserve <br /> exceptional care.
          </p>
        </div>

      </section>
    </div>
  );
}