"use client";

import Image from "next/image";

// 👉 replace with your icons

import icon2 from "../../../../public/images/Icon (30).svg";
import icon3 from "../../../../public/images/Icon (31).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";
import icon4 from "../../../../public/images/Icon (29).svg";
import icon1 from "../../../../public/images/Icon (32).svg";

const features = [
  {
    title: "Fully vetted and certified security personnel",

    icon: icon4,
  },
  {
    title: "Subtle protection that respects privacy",
    icon: icon2,
  },
  {
    title: "Round-the-clock protection services",

    icon: icon3,
  },
  {
    title: "Special Occasion & Celebration Planning",
    icon: icon1,
  },
];

export default function ThePrivetLifeStyle() {
  return (
    <div className="text-white bg-black font-cardo">
      <section className="container px-4 py-10 mx-auto text-center md:py-10">
        {/* TOP LABEL (04 with lines both sides) */}
        <div className="items-center justify-center hidden gap-4 mb-6 md:flex">
          <span className="text-[#D4AF37] text-lg">04</span>
          <Image
            src={dividerMobile}
            alt="divider mobile"
            className="block md:hidden"
          />
          <Image
            src={dividerMobile}
            alt="divider"
            className="hidden md:block"
          />
        </div>
        <div className="flex items-center justify-start gap-4 mb-6 md:hidden">
          <span className="text-[#D4AF37] text-lg">04</span>
          <Image
            src={dividerMobile}
            alt="divider mobile"
            className="block md:hidden"
          />
          <Image
            src={dividerMobile}
            alt="divider"
            className="hidden md:block"
          />
        </div>

        {/* HEADING */}
        <h2 className="flex max-w-3xl mx-auto mb-6 text-3xl leading-tight md:hidden md:text-5xl">
          The Private Villa Lifestyle
        </h2>
        <div className="hidden md:flex">
          <h2 className="max-w-3xl mx-auto mb-6 text-3xl leading-tight md:text-5xl">
            The Private Villa Lifestyle
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-2xl mx-auto mb-12 space-y-4 text-sm leading-relaxed text-gray-400 md:text-base">
          <p>
            A private villa in Barbados offers a level of freedom and
            personalisation unmatched by traditional resorts.
          </p>

          <p>
            Whether enjoying meals prepared by your private chef, relaxing
            beside your private pool, or hosting intimate gatherings with family
            and friends, every moment is tailored to your preferences.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative p-6 text-center border rounded-2xl md:p-8 bg-[#141313] backdrop-blur-xl border-white/10"
            >
              {/* ICON CIRCLE */}
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                <Image src={item.icon} alt="icon" width={22} height={22} />
              </div>

              {/* TITLE */}
              <h3 className="mb-2 text-base md:text-lg">
                {item.title.split(" ").slice(0, -1).join(" ")} <br />
                {item.title.split(" ").slice(-1)}
              </h3>

              {/* SUBTLE GLOW */}
              <div className="absolute inset-0 border pointer-events-none rounded-2xl border-white/5" />
            </div>
          ))}
        </div>
        <p className="mt-8">
          Each service is delivered with precision, discretion, and white-glove
          care.
        </p>
      </section>
    </div>
  );
}
