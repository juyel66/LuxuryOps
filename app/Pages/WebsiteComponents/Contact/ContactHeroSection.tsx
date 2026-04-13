"use client";

import Image from "next/image";
import bgImage from "../../../../public/images/image 2 (2).svg";

export default function ContactHeroSection() {
  return (
    <section className="relative w-full md:h-[70vh] font-cardo h-[400px] md:min-h-[600px] text-white overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src={bgImage}
        alt="VVIP Luxury Car"
        fill
        priority
        className="object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-10 lg:px-20">
        <div className="container flex items-center justify-between w-full mx-auto">
   
          <div className="container mx-auto">
            <p className="mb-4 text-lg font-bold text-gray-700">
              — CONTACT US
            </p>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.2] font-cardo italic mb-6">
              Where luxury is limitless
            </h2>

            <p className="flex md:hidden font-cardo text-[#CFCFCF] text-sm sm:text-base leading-[1.9]">
             We have redefined luxury transportation with our unmatched attention to detail and dedication to excellence.
            </p>

            <p className="md:flex hidden font-cardo text-[#CFCFCF] text-sm sm:text-base leading-[1.9]">
              We have redefined luxury transportation with our unmatched <br /> attention to detail and dedication to excellence.
            </p>
          </div>

          {/* RIGHT SCROLL INDICATOR */}
          <div className="flex-col items-center hidden gap-4 lg:flex">
            <span className="text-sm tracking-widest rotate-90 text-white/70">
              Scroll
            </span>
            <div className="w-[1px] h-20 bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
