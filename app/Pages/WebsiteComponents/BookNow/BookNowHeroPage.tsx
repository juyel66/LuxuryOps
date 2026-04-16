"use client";

import Image from "next/image";
import bgImage from "../../../../public/images/image 2 (2).svg";

export default function BookNowHeroPage() {
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
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-4 ">
        <div className="container flex items-center justify-between w-full mx-auto">
   
          <div className="container mx-auto">
            <p className="mb-4 text-lg font-bold text-gray-700">
              — BOOK YOUR RIDE
            </p>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.2] font-cardo italic mb-6">
              BOOK NOW
            </h2>

            <p className="flex md:hidden font-cardo text-[#CFCFCF] text-sm sm:text-base leading-[1.9]">
             Our drivers are experienced, highly competent and professionally trained to deliver to our company standards.
            </p>

            <p className="md:flex hidden font-cardo text-[#CFCFCF] text-sm sm:text-base leading-[1.9]">
              Our drivers are experienced, highly competent and professionally <br /> trained to deliver to our company standards.
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
