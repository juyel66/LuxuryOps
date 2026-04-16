"use client";

import Image from "next/image";
import bgImage from "../../../../public/images/Section (3).svg";
import heroIcon from "../../../../public/images/Icon (23).svg";
import planeIcon from "../../../../public/images/Container (14).svg";
import eye from "../../../../public/images/Container (26).svg";
import heroRounded from "../../../../public/images/Container (25).svg";

export default function VillasHeroSections() {
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
      <div className="relative z-10 flex items-center h-full px-4">
        <div className="container flex items-center justify-between w-full mx-auto">
          {/* LEFT TEXT */}
          <div className="container mx-auto">
            <div className="py-5">
              <div className="flex items-center gap-5 text-xl text-yellow-500">
                <Image
                  src={heroIcon}
                  alt="Plane Icon"
                  className="w-12 h-12 mb-3"
                />
                <Image
                  src={planeIcon}
                  alt="Plane Icon"
                  className="w-12 h-12 mb-3"
                />
              </div>

              <p className="text-2xl text-[#a58831] tracking-wide">
                Private Residences in Barbados
              </p>
            </div>

            <h2 className="text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.2] font-cardo  mb-6">
              Villas & <br /> Accommodation
            </h2>

            <p className=" font-cardo text-[#CFCFCF] text-[18px] leading-[1.9]">
              Private Residences in Barbados
            </p>

               <div className="p-5 mt-5 mb-5 border md:hidden rounded-xl bg-white/5 backdrop-blur-xl border-white/10">
            <p className="text-sm leading-relaxed text-gray-300">
              Exclusive access to the island's most prestigious estates through
              our trusted villa management partners
            </p>
          </div>
          </div>

       

          {/* RIGHT SCROLL INDICATOR */}
          <div className="items-center hidden gap-10 mt-22 md:flex">
            {/* FLOATING CARD */}
            <div className="p-5 mt-20 border rounded-xl bg-white/5 backdrop-blur-xl border-white/10">
              <p className="text-sm leading-relaxed text-gray-300">
                Exclusive access to the island's most prestigious estates
                through our trusted villa management partners
              </p>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="flex flex-col items-center gap-3 mt-35">
              <span className="text-sm tracking-widest rotate-90 text-white/70">
                Scroll
              </span>
              <div className="w-[1px] h-20 bg-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
