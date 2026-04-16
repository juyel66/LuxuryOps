"use client";

import { Check } from "lucide-react";
import tag from "../../../../public/images/Icon.svg";
import Image from "next/image";

export default function AdminFleetDetailsFeature() {
  return (
    <div className="container px-4 py-10 mx-auto space-y-10 text-white bg-black sm:px-6 lg:px-10">
      {/* BADGE */}
      <span className="inline-block px-3 py-1 text-xs text-yellow-400 border border-yellow-500 rounded">
        LUXURY SUV
      </span>

      {/* TITLE */}
      <h1 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl">
        Range Rover Vogue
      </h1>

      {/* DESCRIPTION */}
      <p className="text-sm leading-relaxed text-gray-400 ">
        The Range Rover Vogue is more than just a luxury SUV; it's a statement
        of refined taste and extraordinary capability. This iconic vehicle
        seamlessly blends opulent comfort with exceptional off-road prowess,
        ensuring a first-class experience wherever your journey takes you.  The
        Vogue's sleek, timeless design is complemented by a meticulously crafted
        interior that exudes sophistication. Every detail, from the premium
        materials to the ergonomic layout, is designed to elevate your driving
        experience. Sink into plush, adjustable seats, wrapped in the finest
        leather, and enjoy the panoramic views through the expansive windows. 
      </p>

      {/* ================= FEATURES GRID ================= */}
      <div>
        <h2 className="mb-6 text-xl font-semibold">
          Key Features and Amenities
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FeatureCard
            title="Luxurious Interior"
            items={[
              "Premium leather upholstery",
              "Heated and ventilated front and rear seats",
              "Panoramic sunroof for breathtaking views",
              "Climate control with individual zone settings",
            ]}
          />

          <FeatureCard
            title="Cutting-Edge Technology"
            items={[
              "Advanced infotainment system with touchscreen display",
              "High-quality audio system for immersive sound",
              "Wi-Fi connectivity for seamless connectivity",
              "Driver assistance systems for enhanced safety",
            ]}
          />

          <FeatureCard
            title="Unmatched Off-Road Capability"
            items={[
              "Terrain Response 2 system for optimal performance",
              "All-wheel drive with electronic traction control",
              "Air suspension for a smooth ride on any terrain",
            ]}
          />

          <FeatureCard
            title="Effortless Performance"
            items={[
              "Powerful engine options for exhilarating acceleration",
              "Smooth-shifting automatic transmission",
              "Precise steering and responsive handling",
            ]}
          />
        </div>
      </div>

      {/* ================= FEATURES TAB ================= */}
      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5 space-y-6">
        <h2 className="text-lg font-semibold">Features Tab</h2>

        {/* STATS */}
        <div className="grid grid-cols-3 text-center border border-[#1f1f1f] rounded-lg py-4">
          <Spec value="5" label="Door" />
          <Spec value="4" label="People" />
          <Spec value="1" label="Aircondition" />
        </div>

        {/* LIST */}
        <div className="space-y-3">
          {[
            "Executive Class Seats (Plush Leather)",
            "Panoramic Roof",
            "Extensive Legroom",
            "Ambient Lighting",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-[#111] p-3 rounded"
            >
              <Check size={16} className="text-yellow-400" />
              <span className="text-sm text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ title, items }: any) => (
  <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5">
    <h3 className="mb-3 font-semibold">{title}</h3>

    <div className="space-y-2">
      {items.map((item: string, i: number) => (
        <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
          <Image src={tag} alt="feature" className="w-4 h-4 mt-1 shrink-0" />
          {item}
        </div>
      ))}
    </div>
  </div>
);

const Spec = ({ value, label }: any) => (
  <div>
    <p className="font-semibold text-yellow-400">{value}</p>
    <p className="text-xs text-gray-400">{label}</p>
  </div>
);
