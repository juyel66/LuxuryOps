"use client";


import Image from "next/image";
import bgImage from "../../../../public/images/Section (1).svg"
import planeIcon from "../../../../public/images/Container (14).svg"
import planeIconBlue from "../../../../public/images/Container (15).svg"
// import dividerMobile from "../../../../public/images/Container (23).svg";


export default function ConciergeHeroSections() {

    
  return (
    <section className="relative w-full font-cardo md:h-[70vh] h-[400px] md:min-h-[600px] text-white overflow-hidden">
      
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
      <div className="relative z-10 flex items-center h-full px-4 ">
        <div className="container flex items-center justify-between w-full mx-auto">
          
          
          {/* LEFT TEXT */}
          <div className="container mx-auto">
          <div className="py-5">
            
                      <div className="flex items-center gap-5 text-xl text-yellow-500">
                        <Image src={planeIcon} alt="Plane Icon" className="w-12 h-12 mb-3" />
                      
                      </div>
            
            <p className="text-2xl text-[#a58831] tracking-wide">
              VVIP Luxury Services
            </p>
          </div>
            
            <h2 className="text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.2] font-cardo  mb-6">
            Concierge <br /> Services 
            </h2>

            <p className=" font-cardo text-[#CFCFCF] text-sm sm:text-base leading-[1.9]">
             A Bespoke World of Privilege, Curated for You
            </p>

            <div className="flex items-center">
                <Image src={planeIconBlue} alt="Plane Icon" className="w-20 h-20 md:h-40 md:w-40 " />
                <p className="text-sm text-gray-400 md:text-[17px]">SCROLL TO EXPLORE</p>
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