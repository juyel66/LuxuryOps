"use client";


import Image from "next/image";
import bgImage from "../../../../public/images/Section (3).svg"
import heroIcon from "../../../../public/images/Icon (13).svg"
import planeIcon from "../../../../public/images/Container (14).svg"
import eye from "../../../../public/images/Container (26).svg"
import heroRounded from "../../../../public/images/Container (25).svg"


export default function SecurityHeroSections() {

    
  return (
    <section className="relative w-full font-cardo md:h-[70vh]  md:min-h-[600px] text-white overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src={bgImage}
        alt="VVIP Luxury Car"
        fill
        priority
        className="object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 " />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-10 lg:px-20">
        <div className="container flex items-center justify-between w-full mx-auto">
          
          
          {/* LEFT TEXT */}
          <div className="container mx-auto">
          <div className="py-5">
            
                      <div className="flex items-center gap-5 text-xl text-yellow-500">
                        
                        <Image src={heroIcon} alt="Plane Icon" className="w-12 h-12 mb-3" />
                        <Image src={planeIcon} alt="Plane Icon" className="w-12 h-12 mb-3" />
                      
                      </div>
            
            <p className="text-2xl text-[#a58831] tracking-wide">
              Professional Protection Services
            </p>
          </div>
            
            <h2 className="text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.2] font-cardo  mb-6">
            Security Services
            </h2>

            <p className=" font-cardo text-[#CFCFCF] text-[18px] leading-[1.9]">
             Discretion, Protection, and Absolute Peace of Mind
            </p>

            <div className="gap-10 mt-5 md:flex ">
                <div className="flex items-center gap-4 ">
                <Image src={heroRounded} alt="Plane Icon" className="md:h-12 md:w-12 " />
                <p className="text-sm text-gray-400 md:text-[17px]">Licensed Professionals</p>
            </div>
            <div className="flex items-center gap-4 mt-2 mb-2 md:mt-0">
                <Image src={eye} alt="Plane Icon" className="md:h-12 md:w-12 " />
                <p className="text-sm text-gray-400 md:text-[17px] ">24/7 Coverage</p>
            </div>
            </div>
           
            
           
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