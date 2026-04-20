"use client";

import Image from "next/image";
import icon from "../../../../public/images/Container (7).svg";
import icon1 from "../../../../public/images/Container (8).svg";
import icon2 from "../../../../public/images/Container (9).svg";
import icon3 from "../../../../public/images/Container (10).svg";
import divider from "../../../../public/images/Container (11).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";

const services = [
  {
    title: "Global Airport Coverage",
    desc: "Service available at all major international and domestic airports, with local expertise in each location.",
    icon: icon,
  },
  {
    title: "Easy Service Booking",
    desc: "Enhance your lifestyle with our Easy Booking solution, designed for modern users to manage reservations effortlessly in just a few clicks.",
    icon: icon1,
  },
  {
    title: "VIP Meet & Greet",
    desc: "Professional chauffeur meets you at arrivals with personalized name board and assistance with luggage.",
    icon: icon2,
  },
  {
    title: "24/7 Concierge Support",
    desc: "Round-the-clock assistance for any changes, special requests, or last-minute arrangements.",
    icon: icon3,
  },
];

export default function ServiceOverview() {
  return (
    <div className="overflow-hidden bg-black font-cardo">
      <section className="container px-4 py-16 mx-auto text-white md:py-24">
        
        <div className="grid items-start grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT */}
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#D4AF37] text-base md:text-lg">03</span>
              <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
              <Image src={divider} alt="divider" className="hidden md:block" />
            </div>

            <h2 className="mb-5 text-3xl md:text-5xl">
              Service Overview
            </h2>

            <p className="max-w-full text-sm leading-relaxed text-gray-400 md:max-w-lg md:text-base">
              Our airport transfer service is designed for discerning travelers who value punctuality, comfort, and discretion...
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:auto-rows-fr md:gap-8">
            
            {services.map((item, index) => (
              <div
                key={index}
                className={`relative h-full min-h-[220px] md:min-h-[250px]
                
                ${index === 0 ? "md:translate-y-6" : ""}
                ${index === 1 ? "md:-translate-y-6" : ""}
                ${index === 2 ? "md:translate-y-6" : ""}
                ${index === 3 ? "md:-translate-y-6" : ""}
                `}
              >
                {/* BACK CARD */}
                <div className="absolute top-3 right-3 w-full h-full rounded-2xl bg-[#D4AF37]/4 border border-[#D4AF37]/20 opacity-70" />

                {/* MAIN CARD */}
                <div className="relative flex flex-col h-full p-5 border rounded-2xl md:p-6 backdrop-blur-xl bg-white/5 border-white/10">
                  
                  <div className="mb-4">
                    <Image
                      src={item.icon}
                      alt="icon"
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </div>

                  <h3 className="mb-2 text-base font-semibold md:text-lg">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-gray-400 md:text-sm">
                    {item.desc}
                  </p>

                  <div className="absolute inset-0 border pointer-events-none rounded-2xl border-white/5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}