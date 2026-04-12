"use client";

import Image from "next/image";
import heroBg from "@/public/images/airport-bg.jpg"; 
import planeIcon from "@/public/images/Icon.svg";

export default function ServiceDetailsHeroSection() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Airport Transfers"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Container */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl text-white">
          
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-6">
            <Image src={planeIcon} alt="icon" width={18} height={18} />
            <div className="w-10 h-[1px] bg-[#D4AF37]" />
            <p className="text-sm text-[#D4AF37] tracking-wide">
              Seamless Journey from Terminal to Destination
            </p>
          </div>

          {/* Heading */}
          <h1 className="mb-6 font-serif text-5xl leading-tight md:text-6xl">
            Airport Transfers
          </h1>

          {/* Description */}
          <p className="max-w-xl text-lg leading-relaxed text-gray-300">
            Experience the pinnacle of airport transportation with our premium
            chauffeur service. From the moment you land to your final destination,
            we ensure every detail is handled with precision and care.
          </p>
        </div>
      </div>

      {/* Right Scroll Indicator */}
      <div className="absolute flex flex-col items-center text-white right-6 bottom-10">
        <div className="w-[1px] h-20 bg-white/40 mb-2" />
        <p className="text-sm tracking-widest rotate-90">Scroll</p>
      </div>
    </section>
  );
}