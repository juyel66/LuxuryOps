"use client";

import Image from "next/image";

// 👉 replace with your icons
import icon1 from "../../../../public/images/Icon (14).svg";
import icon2 from "../../../../public/images/Icon (15).svg";
import icon3 from "../../../../public/images/Icon (16).svg";
import icon4 from "../../../../public/images/Icon (17).svg";
import icon5 from "../../../../public/images/Icon (18).svg";
import divider from "../../../../public/images/Container (17).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";


const data = [
  {
    title: "Personal Security Detail",
    desc: "Dedicated security personnel accompanying individuals or families throughout their stay in Barbados.",
    icon: icon1,
  },
  {
    title: "Residential & Villa Security",
    desc: "Overnight or round-the-clock security presence for luxury villas and private residences.",
    icon: icon2,
  },
  {
    title: "Executive & Corporate Protection",
    desc: "Security coordination for visiting executives, corporate delegations, and international business groups.",
    icon: icon3,
  },
  {
    title: "Event & Special Occasion Security",
    desc: "Professional security presence for private events, celebrations, and exclusive gatherings.",
    icon: icon4,
  },
  {
    title: "Arrival & Departure Security Coordination",
    desc: "Additional protection support for airport arrivals, transfers, and movements across the island.",
    icon: icon5,
  },
];

export default function TailoredSecuritySolutions() {
  return (
    <div className="text-white bg-black font-cardo">
      <section className="container px-4 py-10 mx-auto md:py-10">
        
        {/* Top Label */}
         <div className="flex items-center gap-4 mb-6">
            <span className="text-[#D4AF37] text-lg">02</span>
          <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
          <Image src={divider} alt="divider" className="hidden md:block" />
          </div>

        {/* Heading */}
        <h2 className="mb-4 text-3xl md:text-5xl">
          Tailored Security Solutions
        </h2>

        {/* Description */}
        <p className="max-w-xl mb-12 text-sm text-gray-400 md:text-base">
          Our security services are designed to be fully adaptable, ensuring that each client's needs are addressed with precision and flexibility.
        </p>

        {/* Cards */}
        <div className="space-y-6">
          
          {data.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-5 md:p-6 flex items-start gap-4 md:gap-6
              border border-white/10 backdrop-blur-xl bg-white/5
              
              ${
                index % 2 === 1
                  ? "md:ml-20 lg:ml-32"
                  : "md:mr-20 lg:mr-32"
              }
              `}
            >
              {/* Icon Box */}
              <div className="min-w-[48px] h-[48px] flex items-center justify-center rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                <Image src={item.icon} alt="icon" width={20} height={20} />
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-1 text-base font-semibold md:text-lg">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </div>

              {/* Gradient Overlay (inside card) */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent opacity-40" />
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}