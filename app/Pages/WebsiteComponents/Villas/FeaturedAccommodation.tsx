"use client";

import Image from "next/image";
import Link from "next/link";

// 👉 replace images
import img1 from "../../../../public/images/Container (33).svg";
import img2 from "../../../../public/images/Container (32).svg";

// 👉 replace icons
import starIcon from "../../../../public/images/Icon (24).svg";
import locationIcon from "../../../../public/images/Icon (25).svg";
import guestIcon from "../../../../public/images/Icon (26).svg";
import bedIcon from "../../../../public/images/Icon (27).svg";
import bathIcon from "../../../../public/images/Icon (28).svg";
import poolIcon from "../../../../public/images/pool.svg";

const properties = [
  {
    image: img1,
    title: "Royal Westmoreland Estate",
    location: "St. James, Platinum Coast",
    price: "$12,500",
    rating: 5,
  },
  {
    image: img2,
    title: "Royal Westmoreland Estate",
    location: "St. James, Platinum Coast",
    price: "$12,500",
    rating: 5,
  },
];

export default function FeaturedAccommodation() {
  return (
    <section className="py-20 text-white bg-black md:py-28">
      <div className="container px-4 mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col gap-6 mb-12 md:flex-row md:items-center md:justify-between">
          
          <div className="font-cardo">
            <h2 className="mb-3 text-3xl italic md:text-5xl">
              Featured Accommodation
            </h2>
            <p className="text-gray-400">
              Discover luxury accommodations in the world's most exclusive locations
            </p>
          </div>

          {/* BUTTON */}
          <Link
            href="#"
            className="flex items-center gap-2 px-6 py-3 text-sm tracking-wide transition border border-white/30 hover:bg-white hover:text-black"
          >
            BOOK YOUR ACCOMMODATION →
          </Link>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {properties.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B0B0B]"
            >
              
              {/* IMAGE */}
              <div className="relative h-[280px] md:h-[320px]">
                
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* ⭐ RATING */}
                <div className="absolute flex items-center gap-1 px-3 py-1 text-xs rounded-full top-4 left-4 bg-black/70 backdrop-blur">
                  <Image src={starIcon} alt="" width={18} height={18} />
                  {item.rating}
                </div>

                {/* 💰 PRICE */}
                <div className="absolute px-4 py-2 text-xs rounded-lg top-4 right-4 bg-black/70 backdrop-blur">
                  <span className="block text-gray-400 text-[10px]">From</span>
                  <span className="text-sm font-semibold">
                    {item.price}
                    <span className="text-[10px] font-normal"> / Night</span>
                  </span>
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">
                
                {/* LOCATION */}
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
                  <Image src={locationIcon} alt="" width={16} height={16} />
                  {item.location}
                </div>

                {/* TITLE */}
                <h3 className="mb-3 text-xl md:text-2xl">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  Perched on the prestigious Platinum Coast, this magnificent beachfront estate offers unparalleled luxury with breathtaking ocean views.
                </p>

                {/* AMENITIES */}
                <div className="flex flex-wrap items-center gap-5 pt-4 text-xs text-gray-200 border-t border-white/10">
                  
                  <div className="flex items-center gap-2">
                    <Image src={guestIcon} alt="" width={18} height={18} />
                    6 Guests
                  </div>

                  <div className="flex items-center gap-2">
                    <Image src={bedIcon} alt="" width={18} height={18} />
                    6 Beds
                  </div>

                  <div className="flex items-center gap-2">
                    <Image src={bathIcon} alt="" width={18} height={18} />
                    7 Baths
                  </div>

                  <div className="flex items-center gap-2">
                    <Image src={poolIcon} alt="" width={18} height={18} />
                    2 Pool(s)
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}