"use client";

import {
  Star,
  MapPin,
  Users,
  Bed,
  Bath,
  Waves,
  Eye,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";
import img1 from "../../../../public/images/Container (32).svg"
import img2 from "../../../../public/images/Container (33).svg"
import pool from "../../../../public/images/Pool--Streamline-Sharp-Material.svg"
import star from "../../../../public/images/Icon (57).svg"
import Image from "next/image";
import Link from "next/link";

type Villa = {
  id: number;
  title: string;
  location: string;
  description: string;
  price: string;
  rating: number;
  guests: number;
  beds: number;
  baths: number;
  pools: number;
  image: string;
};

const villas: Villa[] = [
  {
    id: 1,
    title: "Royal Westmoreland Estate",
    location: "St. James, Platinum Coast",
    description:
      "Perched on the prestigious Platinum Coast, this magnificent beachfront estate offers unparalleled luxury...",
    price: "$12,500",
    rating: 5,
    guests: 6,
    beds: 6,
    baths: 7,
    pools: 2,
    image: img1
  },
  {
    id: 2,
    title: "Ocean Breeze Retreat",
    location: "Barbados Coast",
    description:
      "Luxury seaside villa with breathtaking sunset views and private infinity pool...",
    price: "$10,200",
    rating: 5,
    guests: 8,
    beds: 5,
    baths: 6,
    pools: 1,
    image: img2
  },
  {
    id: 3,
    title: "Palm Luxury Haven",
    location: "Tropical Island",
    description:
      "Experience ultimate relaxation surrounded by palm trees and crystal-clear waters...",
    price: "$9,800",
    rating: 4,
    guests: 5,
    beds: 4,
    baths: 5,
    pools: 2,
    image: img1
  },
  {
    id: 4,
    title: "Sunset Paradise Villa",
    location: "Caribbean Bay",
    description:
      "Watch stunning sunsets from your private terrace overlooking the ocean...",
    price: "$11,300",
    rating: 5,
    guests: 7,
    beds: 6,
    baths: 6,
    pools: 2,
    image: img2
  },
  {
    id: 5,
    title: "Elite Ocean Mansion",
    location: "Luxury Coastline",
    description:
      "Ultra-modern mansion with full ocean view and premium concierge service...",
    price: "$15,000",
    rating: 5,
    guests: 10,
    beds: 8,
    baths: 9,
    pools: 3,
    image: img1
  },
];

export default function VillasManagement() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white mt-5">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-3xl">Villas Management</h1>
          <p className="text-sm text-gray-400">Manage system villas</p>
        </div>

        <Link href="/admin-dashboard/villas/add-villa" className="flex items-center gap-2 bg-[#C89B3C] cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium">
          <Plus size={16} /> Add Villas
        </Link>
      </div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-3">

        {villas.map((villa) => (
          <div
            key={villa.id}
            className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl overflow-hidden"
          >

            {/* IMAGE */}
            <div className="relative h-[260px]">

              <Image src={villa.image} alt={villa.title} className="object-cover w-full h-full" />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* RATING */}
              <div className="absolute flex items-center gap-1 px-2 py-1 text-sm rounded-md top-3 left-3 bg-black/70">
                <Image src={star} alt="star" width={12} height={12} />
                {villa.rating}
              </div>

              {/* PRICE */}
              <div className="absolute px-3 py-2 text-sm rounded-md top-3 right-3 bg-black/70">
                <p className="text-xs text-gray-400">From</p>
                <p className="font-semibold">
                  {villa.price}
                  <span className="text-xs text-gray-400"> /Night</span>
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-4">

              {/* LOCATION */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-[#C89B3C]" />
                {villa.location}
              </div>

              {/* TITLE */}
              <h2 className="font-serif text-xl">{villa.title}</h2>

              {/* DESC */}
              <p className="text-sm text-gray-400 line-clamp-2">
                {villa.description}
              </p>

              {/* FEATURES */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <Users className="text-yellow-500" size={14} /> {villa.guests} Guests
                </span>
                <span className="flex items-center gap-1">
                  <Bed className="text-yellow-500" size={14} /> {villa.beds} Beds
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="text-yellow-500" size={14} /> {villa.baths} Baths
                </span>
                <span className="flex items-center gap-1">
                  <Image src={pool} alt="pool" width={14} height={14} /> {villa.pools} Pools
                </span>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-3 pt-3">

                <button className="flex-1 bg-[#C89B3C] text-white cursor-pointer py-2 rounded-md flex items-center justify-center gap-2 text-sm">
                  <Eye size={16} /> View Details
                </button>

                <button className="p-2 cursor-pointer border border-[#1A1F2B] rounded-md hover:bg-[#111522]">
                  <Pencil size={16} />
                </button>

                <button className="p-2 hover:text-red-500 cursor-pointer border border-[#1A1F2B] rounded-md hover:bg-[#111522]">
                  <Trash2 size={16} />
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}