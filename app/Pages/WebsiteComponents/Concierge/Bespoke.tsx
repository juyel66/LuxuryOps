"use client";

import Image from "next/image";

// 👉 replace with your icons
import icon1 from "../../../../public/images/Icon (5).svg";
import icon2 from "../../../../public/images/Icon (6).svg";
import icon3 from "../../../../public/images/Icon (7).svg";
import icon4 from "../../../../public/images/Icon (8).svg";
import icon5 from "../../../../public/images/Icon (9).svg";
import icon6 from "../../../../public/images/Icon (10).svg";
import icon7 from "../../../../public/images/Icon (11).svg";
import icon8 from "../../../../public/images/Icon (12).svg";
import divider from "../../../../public/images/Container (17).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";

const services = [
  {
    title: "Luxury Dining Reservations",
    desc: "Priority reservations at the island’s most celebrated restaurants and private dining venues.",
    icon: icon1,
  },
  {
    title: "Private Chefs & Culinary Experiences",
    desc: "Exclusive in-villa dining, curated tasting experiences, and bespoke culinary events.",
    icon: icon2,
  },
  {
    title: "Luxury Yacht & Catamaran Charters",
    desc: "Private sea excursions along Barbados’ breathtaking west coast, complete with crew, gourmet catering, and water activities.",
    icon: icon3,
  },
  {
    title: "Private Aviation & Jet Charter Coordination",
    desc: "Seamless arrangements for private jet arrivals, departures, and inter-island travel.",
    icon: icon4,
  },
  {
    title: "Wellness & Spa Services",
    desc: "In-villa spa treatments, private yoga sessions, personal trainers, and wellness retreats.",
    icon: icon5,
  },
  {
    title: "Island Tours & Cultural Experiences",
    desc: "Privately guided tours designed to reveal the most captivating landscapes, heritage sites, and hidden gems of Barbados.",
    icon: icon6,
  },
  {
    title: "VIP Event Access & Special Occasions",
    desc: "Assistance with exclusive events, celebrations, and milestone occasions.",
    icon: icon7,
  },
  {
    title: "Luxury Lifestyle Arrangements",
    desc: "From personal shopping and curated gift sourcing to last-minute requests that demand discretion and efficiency.",
    icon: icon8,
  },
];

export default function Bespoke() {
  return (
    <div className="text-white bg-[#0A0A0A] font-cardo">
      <section className="container px-4 py-20 mx-auto md:py-24">
        
        {/* Top Label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#D4AF37] text-lg">02</span>
            <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
            <Image src={divider} alt="divider" className="hidden md:block" />
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-3xl leading-tight md:text-5xl">
          Bespoke Services & Curated Experiences
        </h2>

        {/* Description */}
        <p className="max-w-2xl mb-12 text-sm text-gray-400 md:text-base">
          Our concierge services are entirely tailored to the preferences of each client, offering access to an extensive portfolio of experiences and lifestyle services throughout Barbados.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {services.map((item, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#D4AF37]/30 transition duration-300"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4">
                <Image src={item.icon} alt="icon" width={20} height={20} />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>

              {/* Subtle Border Glow */}
              <div className="absolute inset-0 border pointer-events-none rounded-2xl border-white/5" />
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}