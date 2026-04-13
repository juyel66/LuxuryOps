"use client";

import Image from "next/image";
import villaImg from "../../../../public/images/ImageWithFallback (6).svg";
import divider from "../../../../public/images/Container (17).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";

export default function VillasImage() {
  return (
    <section className="w-full text-white bg-black font-cardo">
      
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[300px] bg-black sm:h-[400px] md:h-[500px] lg:h-auto">
          <Image
            src={villaImg}
            alt="villa"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/10 via-black/35 to-black" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center">
          <div className="container px-4 py-16 mx-auto md:py-20 lg:py-24">
            
            <div className="">
              
                        {/* Top Label */}
              <div className="items-center justify-start hidden gap-4 mb-6 md:flex">
          <span className="text-[#D4AF37] text-lg">03</span>
            <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
            <Image src={divider} alt="divider" className="hidden md:block" />
        </div>
        <div className="flex items-center justify-start gap-4 mb-6 md:hidden">
          <span className="text-[#D4AF37] text-lg">03</span>
            <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
            <Image src={divider} alt="divider" className="hidden md:block" />
        </div>

              {/* HEADING */}
              <h2 className="md:flex hidden text-3xl md:text-5xl leading-[1.2] mb-6">
                A Curated Portfolio of Luxury <br /> Villas
              </h2>
              <h2 className="md:hidden flex text-3xl md:text-5xl leading-[1.2] mb-6">
                A Curated Portfolio of Luxury  Villas
              </h2>

              {/* DESCRIPTION */}
              <p className="mb-6 text-sm leading-relaxed text-gray-400 md:text-base">
                From iconic beachfront estates along the Platinum West Coast to secluded <br />ocean-view retreats, Barbados offers an exceptional collection of private <br />residences.
              </p>

              {/* BULLETS */}
              <ul className="mb-6 space-y-3 text-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#D4AF37]" />
                  Prime beachfront and ocean-view locations
                </li>

                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#D4AF37]" />
                  Architecturally distinguished private estates for families, executives, and high-profile guests
                </li>

                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#D4AF37]" />
                  Expansive pools, tropical gardens, and outdoor living spaces
                </li>

                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#D4AF37]" />
                  Dedicated villa staff including chefs, butlers, and housekeepers
                </li>
              </ul>

              {/* FOOT TEXT */}
              <p className="text-sm leading-relaxed text-gray-400">
                Each residence reflects the highest standards of comfort, exclusivity, and refined Caribbean living.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}