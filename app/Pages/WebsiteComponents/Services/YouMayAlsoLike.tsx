"use client";

import Image from "next/image";
import Link from "next/link";

// 👉 Replace with your real images
import img1 from "../../../../public/images/ImageWithFallback (2).svg";
import img2 from "../../../../public/images/ImageWithFallback.svg";
import img3 from "../../../../public/images/ImageWithFallback (1).svg";
import arrow from "../../../../public/images/Component 3 (1).svg";

const data = [
  {
    id: "01",
    title: "Diplomatic Services",
    category: "TRANSPORT",
    desc: "We understand the unique needs and protocols required for diplomatic travel and offer discreet, secure transportation.",
    image: img1,
    grayscale: true,
  },
  {
    id: "02",
    title: "Weddings",
    category: "TRANSPORT",
    desc: "Your wedding day is a once-in-a-lifetime event, and we ensure luxury, elegance, and punctuality.",
    image: img2,
  },
  {
    id: "03",
    title: "Sightseeing Tours",
    category: "TRANSPORT",
    desc: "Embark on a journey of discovery with our premium sightseeing tours, tailored for comfort and style.",
    image: img3,
  },
];

export default function YouMayAlsoLike() {
  return (
    <div className="text-white bg-[#121212] font-cardo">
      <section className="container px-4 py-10 mx-auto md:py-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-cardo">
            You May Also Like
          </h2>

          <Link
            href="/services"
            className="text-sm text-[#D4AF37] hover:underline"
          >
            <div className="flex items-center">
              View All Services <Image src={arrow} alt="arrow" className="w-4 h-4 ml-1" />
            </div>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {data.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden bg-[#0B0B0B] hover:border-[#D4AF37]/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover ${
                    item.grayscale ? "grayscale" : ""
                  }`}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                
                {/* Number + Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#706a54] text-2xl">
                    {item.id}
                  </span>
                  <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase">
                    — {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-400 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}