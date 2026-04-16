"use client";

import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import rightArrow from "../../../../public/images/Component 3 copy.svg";
import car1 from "../../../../public/images/car1.svg";
import car2 from "../../../../public/images/car2.png";
import tag from "../../../../public/images/Icon.svg";


type Fleet = {
  id: number;
  name: string;
  image: StaticImageData;
  tag?: string;
  doors: number;
  passengers: number;
  ac: number;
  features: string[];
};

const fleetData: Fleet[] = [
  {
    id: 1,
    name: "Mercedes Maybach Landjet",
    image: car1,
    tag: "Executive Sedan",
    doors: 5,
    passengers: 4,
    ac: 1,
    features: [
      "32” Samsung Frame TV With Motorised TV Lift",
      "Additional Flip Down Television",
      "Ambient Lighting With Starlight/Shooting Star Roof Lights",
    ],
  },
  {
    id: 2,
    name: "Range Rover Vogue",
    image: car2,
    tag: "Executive Sedan",
    doors: 5,
    passengers: 4,
    ac: 1,
    features: [
      "Automatic Climate Control and Air Quality Control System",
      "Executive Class Seats (Plush Leather)",
      "State-Of-The-Art Sound System",
    ],
  },
  {
    id: 3,
    name: "Range Rover Sport",
    image: car1,
    doors: 5,
    passengers: 4,
    ac: 1,
    features: [
      "Automatic Climate Control and Air Quality Control System",
      "Executive Class Seats (Plush Leather)",
      "State-Of-The-Art Sound System",
    ],
  },
  {
    id: 4,
    name: "Luxury 13 Seater Van",
    image: car2,
    doors: 4,
    passengers: 13,
    ac: 1,
    features: [
      "13 Passenger Seating",
      "Leather & Suede Seats (Plush Leather)",
      "Various USB & Type C Charging Ports",
    ],
  },
];

export default function OurFleetCard() {
  return (
    <div className="bg-black">

        <div className="container px-3 py-10 mx-auto ">
            <h1 className="text-2xl md:text-4xl font-cardo">Our Vanguard Collection: A Symphony <br /> Of Opulent Travel</h1>
            <p className="mt-5 text-[#9CA3AF] font-cardo">Step into our world where travel is transformed into a bespoke sanctuary of refinement. Our curated fleet represents the absolute pinnacle of automotive excellence, meticulously selected to provide an atmosphere of unrivaled prestige and serenity. Each vehicle in our collection serves as a rolling testament to sophisticated engineering and artisanal craftsmanship, designed specifically for those who demand the extraordinary as their standard. From the whisper-quiet cabins of our flagship sedans to the expansive, custom-appointed interiors of our luxury suites on wheels, we invite you to experience an art of the journey, redefined. Explore the embodiments of grace, power, and discretion that await.</p>
        </div>
        <section className="px-4 py-24 text-white ">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 lg:gap-10">
        
        {fleetData.map((car) => (
          <div
            key={car.id}
            className="border border-white/10 rounded-xl overflow-hidden bg-[#0B0B0B]"
          >
            
            {/* IMAGE */}
            <div className="relative w-full h-[220px]">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
              />

              {/* TAG */}
              {car.tag && (
                <span className="absolute px-3 py-1 text-xs rounded-xl top-3 left-3 bg-yellow-900/70 text-white/80">
                  {car.tag}
                </span>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-6">
              
              {/* TITLE */}
              <h3 className="mb-4 font-serif text-lg">{car.name}</h3>

              <div className="mb-4 border-t border-white/10" />

              {/* SPEC ROW */}
              <div className="flex items-center  gap-6 text-[#D4AF37] text-sm mb-4">
                <div>
                  <span className="block text-base font-semibold text-center ">{car.doors}</span>
                  <span className="text-xs text-[#9CA3AF]">Doors</span>
                </div>

                
                
                

                <div>
                  <span className="block text-base font-semibold text-center">{car.passengers}</span>
                  <span className="text-xs text-[#9CA3AF]">Passengers</span>
                </div>

                <div>
                  <span className="block text-base font-semibold text-center">{car.ac}</span>
                  <span className="text-xs text-[#9CA3AF]">Air Conditioned</span>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="mb-4 border-t border-white/10" />

              {/* FEATURES */}
              <ul className="mb-6 space-y-2">
                {car.features.map((feature, i) => (
                  <li key={i} className="flex  items-start gap-2 text-sm text-[#9CA3AF]">
                    <Image src={tag} alt="feature" className="mt-0.5 h-4 w-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BUTTON (YOUR FIXED STYLE) */}
              <div className="mt-6">
                <Link
                  href="/our-fleet/details"
                  className="inline-flex items-center gap-3 border border-white px-5 py-2 text-xs tracking-wider  uppercase transition-all duration-300 hover:bg-[#D4AF37]"
                >
                  INFO
                  <Image src={rightArrow} alt="arrow" className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
    </div>
  );
}