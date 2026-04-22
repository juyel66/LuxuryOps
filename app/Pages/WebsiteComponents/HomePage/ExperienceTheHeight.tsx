"use client";

import Image from "next/image";
import Link from "next/link";
import rightArrow from "../../../../public/images/Component 3 copy.svg";
import heroBg from "../../../../public/images/Component 16.svg";

export default function ExperienceTheHeight() {
  return (
    <section className="relative w-full min-h-[720px] overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <Image
        src={heroBg}
        alt="Luxury Chauffeur"
        fill
        priority
        className="object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[650px] items-end px-4 pb-14 pt-20">
        <div className="container w-full mx-auto ">
          <div className="w-full lg:flex lg:items-end lg:justify-between lg:gap-10">
            <div className="container px-3 mx-auto">
              <div className="flex items-center gap-6 mb-4">
                
                <p className="text-[10px] uppercase font-cardo   tracking-[0.35em] text-[#D4AF37]">
                  Luxury Chauffeured Transport · Barbados
                </p>
              </div>

              <h1 className="mb-5 font-cardo text-[32px] md:text-[52px]  italic leading-[1.06] text-[#F5F5F5] ">
                Experience The Height Of Comfort With VVIP
              
                Luxury
              </h1>

              <p className="mb-8 max-w-[500px] md:text-[22px] font-cardo leading-[1.35] text-[#AEB2B7]">
                Discover the art of refined travel
                <br />
                with island&apos;s leading luxury chauffeur company.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-3 bg-[#D4AF37] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#c79f1f]"
              >
                BOOK NOW
                <Image src={rightArrow} alt="arrow" className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-col w-full gap-4 mt-10 lg:mt-0 lg:w-auto lg:flex-row">
              <div className="w-full px-8 border rounded min-w-56 border-white/15 bg-black/25 py-7 backdrop-blur-sm">
                <h3 className="mb-2 text-[52px] font-cardo italic leading-none text-[#D4AF37]">24/7</h3>
                <p className="text-xs uppercase tracking-wide text-[#B5BBC2]">Concierge Service</p>
              </div>

              <div className="w-full px-8 border rounded min-w-56 border-white/15 bg-black/25 py-7 backdrop-blur-sm">
                <h3 className="mb-2 text-[52px] font-cardo italic leading-none text-[#D4AF37]">15+</h3>
                <p className="text-xs uppercase tracking-wide text-[#B5BBC2]">Premium Vehicles</p>
              </div>

              <div className="w-full px-8 border rounded min-w-56 border-white/15 bg-black/25 py-7 backdrop-blur-sm">
                <h3 className="mb-2 text-[52px] font-cardo italic leading-none text-[#D4AF37]">10+</h3>
                <p className="text-xs uppercase tracking-wide text-[#B5BBC2]">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}