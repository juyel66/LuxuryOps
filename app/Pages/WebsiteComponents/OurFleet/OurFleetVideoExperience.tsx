"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import tag from "../../../../public/images/Icon.svg";

import carVideo from "../../../../public/images/Component 16.svg";

export default function OurFleetVideoExperience() {
  return (
    <section className="px-4 py-20 text-white bg-black ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
        {/* LEFT CONTENT */}
        <div>
          {/* TAG */}
          <span className="text-[#D4AF37] bg-[#e4dbc1]/20 text-xs border border-[#D4AF37] px-3 py-1 rounded mb-4 inline-block">
            Luxury SUV
          </span>

          {/* TITLE */}
          <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] font-serif mb-4">
            Range Rover Vogue
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#9CA3AF] text-sm leading-[1.9] max-w-full">
            The Range Rover Vogue is more than just a luxury SUV; it's a
            statement of refined taste and extraordinary capability. This iconic
            vehicle seamlessly blends opulent comfort with exceptional off-road
            prowess, ensuring a first-class experience wherever your journey
            takes you.  The Vogue's sleek, timeless design is complemented by a
            meticulously crafted interior that exudes sophistication. Every
            detail, from the premium materials to the ergonomic layout, is
            designed to elevate your driving experience. Sink into plush,
            adjustable seats, wrapped in the finest leather, and enjoy the
            panoramic views through the expansive windows. 
          </p>

          {/* VIDEO */}
          <div className="mt-10">
            <h3 className="mb-4 font-serif text-lg">The Video Experience</h3>

            <div className="relative w-full md:h-[500px] h-[300px] overflow-hidden rounded-xl">
              <Image src={carVideo} alt="video" fill className="object-cover" />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-red-600 rounded-full">
                  <FaPlay className="text-xl text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="mt-12">
            <h3 className="mb-6 font-serif text-lg">
              Key Features and Amenities
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: "Luxurious Interior",
                  items: [
                    "Premium leather upholstery",
                    "Heated and ventilated seats",
                    "Panoramic sunroof",
                  ],
                },
                {
                  title: "Cutting-Edge Technology",
                  items: [
                    "Advanced infotainment system",
                    "High-quality audio system",
                    "Wi-Fi connectivity",
                  ],
                },
                {
                  title: "Off-Road Capability",
                  items: [
                    "Terrain Response system",
                    "All-wheel drive",
                    "Air suspension",
                  ],
                },
                {
                  title: "Effortless Performance",
                  items: [
                    "Powerful engine options",
                    "Smooth transmission",
                    "Precise steering",
                  ],
                },
              ].map((section, i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-xl p-5 bg-[#0B0B0B]"
                >
                  <h4 className="mb-3 font-serif">{section.title}</h4>

                  <ul className="space-y-2 text-sm text-[#9CA3AF]">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Image
                          src={tag}
                          alt="feature"
                          className="mt-0.5 h-4 w-4 shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FEATURES TAB */}
        <div className="border border-white/10 rounded-xl p-6 bg-[#0B0B0B] h-fit">
          <h3 className="mb-4 font-serif">Features Tab</h3>

          {/* SPECS */}
          <div className="grid grid-cols-3 mb-6 text-center border rounded border-white/10">
            <div className="py-3">
              <p className="text-[#D4AF37] font-semibold">5</p>
              <p className="text-xs text-[#9CA3AF]">Doors</p>
            </div>
            <div className="py-3 border-x border-white/10">
              <p className="text-[#D4AF37] font-semibold">4</p>
              <p className="text-xs text-[#9CA3AF]">Passengers</p>
            </div>
            <div className="py-3">
              <p className="text-[#D4AF37] font-semibold">1</p>
              <p className="text-xs text-[#9CA3AF]">Air-Conditioned</p>
            </div>
          </div>

          {/* FEATURE LIST */}
          <div className="mb-6 space-y-3">
            {[
              "Executive Class Seats",
              "Panoramic Roof",
              "Extensive Legroom",
              "Ambient Lighting",
              "Climate Control System",
              "Fully Air-Conditioned",
              "Sound System",
              "Elegant Finishes",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-2 border rounded border-white/10"
              >
                <Image
                  src={tag}
                  alt="feature"
                  className="mt-0.5 h-4 w-4 shrink-0"
                />
                <span className="text-sm text-[#9CA3AF]">{item}</span>
              </div>
            ))}
          </div>

          {/* <p className="mb-4 text-sm cursor-pointer text-white/60">Show More</p> */}

          {/* BUTTON */}
          <Link
            href="#"
            className="block text-center bg-[#D4AF37] text-white py-3 text-sm uppercase tracking-wider hover:opacity-90"
          >
            Book This Vehicle →
          </Link>
        </div>
      </div>
    </section>
  );
}
