"use client";

import Image from "next/image";


import bgImage from "../../../../public/images/ImageWithFallback (3).svg";
import divider from "../../../../public/images/Container (17).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";

export default function StandardReserved() {
  return (
    <div className="relative w-full overflow-hidden text-white bg-black text-cardo">
      
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay (LEFT FOCUS) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <section className="container relative z-10 px-4 py-20 mx-auto md:py-28 lg:py-32">
        
        <div className="max-w-2xl">
          
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#D4AF37] text-lg">01</span>
            <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
            <Image src={divider} alt="divider" className="hidden md:block" />
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-3xl leading-tight md:text-5xl lg:text-6xl font-cardo">
            A Standard Reserved for the Exceptional
          </h2>

          {/* Paragraphs */}
          <div className="space-y-5 text-sm leading-relaxed text-gray-300 md:text-base">
            
            <p>
              Our concierge philosophy is guided by a simple principle: true luxury lies in anticipation.
            </p>

            <p>
              Rather than merely responding to requests, our team works proactively—anticipating needs, refining details, and coordinating each element of your stay with the utmost professionalism.
            </p>

            <p>
              Every experience is arranged through a carefully vetted network of Barbados’ most reputable providers, ensuring that each recommendation reflects the same standards of quality, reliability, discretion, and prestige that define VVIP Luxury itself.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}