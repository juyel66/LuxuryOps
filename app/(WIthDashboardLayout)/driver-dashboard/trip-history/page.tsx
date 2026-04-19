"use client";

import React from "react";
import {
  Car,
  DollarSign,
  Star,
  Search,
  MapPin,
  Calendar,
} from "lucide-react";

export default function TripHistoryPage() {
  return (
    <div className="min-h-screen mt-5 text-white bg-black ">
      <div className="mx-auto space-y-6 ">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Trip History</h1>
          <p className="text-sm text-gray-400">
            View all your completed trips and earnings
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <StatCard
            title="Total Trips"
            value="5"
            icon={<Car />}
            color="purple"
          />

          <StatCard
            title="Total Earnings"
            value="$490"
            icon={<DollarSign />}
            color="blue"
          />

          <StatCard
            title="Average Rating"
            value="4.8/5.0"
            icon={<Star />}
            color="green"
          />

        </div>

        {/* Search */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-3 flex items-center gap-3">
          <Search size={18} className="text-gray-500" />
          <input
            placeholder="Search by booking ID, customer, or location..."
            className="w-full text-sm bg-transparent outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Title */}
        <h2 className="text-lg font-medium">Today's Schedule</h2>

        {/* Cards */}
        <div className="space-y-4">

          <TripCard
            name="James Wilson"
            car="Mercedes-Benz S-Class"
            price="$250"
            pickup="Heathrow Airport Terminal 5"
            drop="One Hyde Park, Knightsbridge"
            date="28/03/2026"
            rating={5}
          />

          <TripCard
            name="Sophia Turner"
            car="BMW 7 Series"
            price="$300"
            pickup="Gatwick Airport"
            drop="The Shard, London"
            date="29/03/2026"
            rating={4}
          />

        </div>

      </div>
    </div>
  );
}

/* ================= STAT CARD ================= */

function StatCard({ title, value, icon, color }: any) {
  const colorMap: any = {
    purple: "bg-purple-500/20 text-purple-400",
    blue: "bg-blue-500/20 text-blue-400",
    green: "bg-green-500/20 text-green-400",
  };

  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="text-xs text-gray-400">{title}</p>
        <h3 className="text-lg font-semibold">{value}</h3>
      </div>

      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${colorMap[color]}`}
      >
        {icon}
      </div>
    </div>
  );
}

/* ================= TRIP CARD ================= */

function TripCard({
  name,
  car,
  price,
  pickup,
  drop,
  date,
  rating,
}: any) {
  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5 space-y-4">

      {/* Top */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-yellow-500/20">
            <Car size={18} className="text-yellow-400" />
          </div>

          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-gray-400">{car}</p>
          </div>

          <span className="text-[10px] bg-[#1A1F2B] px-2 py-1 rounded">
            BK-2026-145
          </span>
        </div>

        <p className="font-medium text-yellow-400">{price}</p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1A1F2B]" />

      {/* Locations */}
      <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">

        <div className="flex gap-2">
          <MapPin size={16} className="mt-2.5 text-yellow-400" />
          <div>
            <p className="text-xs text-gray-400">Pickup Location</p>
            <p>{pickup}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <MapPin size={16} className="mt-2.5 text-red-400" />
          <div>
            <p className="text-xs text-gray-400">Drop Location</p>
            <p>{drop}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Calendar size={16} className="mt-2.5 text-gray-400" />
          <div>
            <p className="text-xs text-gray-400">Date</p>
            <p>{date}</p>
          </div>
        </div>

      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex text-yellow-400">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < rating ? "#FACC15" : "none"}
              />
            ))}
        </div>

        <p className="text-xs text-gray-400">
          {rating} Customer Rating
        </p>
      </div>

    </div>
  );
}