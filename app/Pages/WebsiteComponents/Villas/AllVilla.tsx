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
    slug: "royal-westmoreland-estate",
  },
  {
    image: img2,
    title: "Sandy Lane Private Villa",
    location: "St. James, Barbados",
    price: "$18,000",
    rating: 5,
    slug: "sandy-lane-private-villa",
  },
  {
    image: img1,
    title: "Ocean View Luxury Retreat",
    location: "Paynes Bay, Barbados",
    price: "$9,800",
    rating: 4,
    slug: "ocean-view-luxury-retreat",
  },
  {
    image: img2,
    title: "Coral Cove Beachfront Villa",
    location: "St. Peter, Barbados",
    price: "$14,200",
    rating: 5,
    slug: "coral-cove-beachfront-villa",
  },
  {
    image: img1,
    title: "Palm Grove Estate",
    location: "Holetown, Barbados",
    price: "$11,300",
    rating: 4,
    slug: "palm-grove-estate",
  },
  {
    image: img2,
    title: "Crystal Waters Residence",
    location: "Speightstown, Barbados",
    price: "$13,900",
    rating: 5,
    slug: "crystal-waters-residence",
  },
  {
    image: img1,
    title: "Sunset Ridge Villa",
    location: "St. Lucy, Barbados",
    price: "$8,700",
    rating: 4,
    slug: "sunset-ridge-villa",
  },
  {
    image: img2,
    title: "Golden Sands Mansion",
    location: "Bathsheba, Barbados",
    price: "$16,500",
    rating: 5,
    slug: "golden-sands-mansion",
  },

];

export default function AllVillas() {
  return (
    <section className="py-20 text-white bg-black md:py-28">
      <div className="container px-4 mx-auto">
        
       <div className="flex flex-col items-center justify-center mb-12 text-center">
  
  <div className="max-w-2xl font-cardo">
    <h2 className="mb-3 text-3xl italic md:text-5xl">
      Featured Destinations
    </h2>
    <p className="text-xl text-gray-400">
      Discover luxury accommodations in the world's most exclusive locations
    </p>
  </div>

</div>

        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {properties.map((item, index) => (
            <Link href="/villas/[slug]" as={`/villas/${item.slug}`}
              key={index}
              className="rounded-2xl hover:border-2 hover:border-gray-500 overflow-hidden border border-white/10 bg-[#0B0B0B]"
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
                <div className="flex items-center gap-2 mb-3 text-gray-400">
                  <Image src={locationIcon} alt="" width={18} height={18} />
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
                <div className="flex flex-wrap items-center gap-5 pt-4 text-gray-200 border-t border-white/10">
                  
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
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}