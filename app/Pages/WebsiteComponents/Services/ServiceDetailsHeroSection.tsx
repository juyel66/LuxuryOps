"use client";


import Image from "next/image";
import bgImage from "../../../../public/images/Section.svg"
import planeIcon from "../../../../public/images/Container (6).svg"


export default function OurFleet() {

    
  return (
    <section className="relative w-full md:h-[70vh] h-[400px] md:min-h-[600px] text-white overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src={bgImage}
        alt="VVIP Luxury Car"
        fill
        priority
        className="object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-10 lg:px-20">
        <div className="container flex items-center justify-between w-full mx-auto">
          
          
          {/* LEFT TEXT */}
          <div className="container mx-auto">
          <div className="py-5">
                     <Image src={planeIcon} alt="icon" width={150} height={150} /> 
            
            <p className="text-sm text-[#776a43] tracking-wide">
              Seamless Journey from Terminal to Destination
            </p>
          </div>
            
            <h2 className="text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.2] font-cardo  mb-6">
             Airport Transfers
            </h2>

            <p className="flex md:hidden font-cardo text-[#CFCFCF] text-sm sm:text-base leading-[1.9]">
             Experience the pinnacle of airport transportation with our  premium chauffeur service. From the moment you land to  your final destination, we ensure every detail is handled with precision and care.
            </p>
            <p className="md:flex hidden font-cardo text-[#CFCFCF] text-sm sm:text-base leading-[1.9]">
             Experience the pinnacle of airport transportation with our <br /> premium chauffeur service. From the moment you land to <br /> your final destination, we ensure every detail is handled with precision and care.
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