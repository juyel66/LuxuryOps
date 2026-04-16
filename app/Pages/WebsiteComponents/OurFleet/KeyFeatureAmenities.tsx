"use client";

import Image from "next/image";
import Link from "next/link";

import car1 from "../../../../public/images/Component 16.svg";
import car2 from "../../../../public/images/Component 16.svg";
import car3 from "../../../../public/images/Component 16.svg";


type Car = {
  id: number;
  title: string;
  category: string;
  image: any;
  desc: string;
};

const cars: Car[] = [
  {
    id: 1,
    title: "Rolls-Royce Phantom",
    category: "Ultra Luxury",
    image: car1,
    desc: "The Rolls-Royce Phantom is the ultimate expression of luxury and prestige. This iconic vehicle offers unparalleled comfort...",
  },
  {
    id: 2,
    title: "Range Rover Vogue",
    category: "Luxury SUV",
    image: car2,
    desc: "The Range Rover Vogue combines luxury with versatility. Perfect for those who need space without compromising...",
  },
  {
    id: 3,
    title: "Bentley Mulsanne",
    category: "Ultra Luxury",
    image: car3,
    desc: "The Bentley Mulsanne embodies British luxury at its finest. Handcrafted to perfection, it offers a serene driving experience...",
  },
];

export default function KeyFeatureAmenities() {
  return (
    <section className="px-4 py-20 text-white bg-black ">
      <div className="container mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-serif">
            You May Also Like
          </h2>

          <Link
            href="/our-fleet"
            className="text-[#D4AF37] text-sm tracking-wide hover:underline"
          >
            View All Fleet →
          </Link>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {cars.map((car) => (
            <div
              key={car.id}
              className="border border-white/10 rounded-sm overflow-hidden bg-[#0B0B0B] group transition-all duration-300 hover:border-white/30"
            >
              
              {/* IMAGE */}
              <div className="relative w-full h-[220px] overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                
                {/* CATEGORY */}
                <span className="text-[#D4AF37] text-xs mb-2 block">
                  {car.category}
                </span>

                {/* TITLE */}
                <h3 className="mb-3 font-serif text-lg sm:text-xl">
                  {car.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[#9CA3AF] text-sm leading-[1.8]">
                  {car.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}