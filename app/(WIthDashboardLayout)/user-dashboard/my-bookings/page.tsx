"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  XCircle,
  Search,
  ChevronDown,
  MapPin,
  Download,
  Car,
} from "lucide-react";
import Link from "next/link";

/* ================= DUMMY DATA ================= */

const bookingsData = [
  {
    id: "BK-2026-146",
    car: "Mercedes-Benz S-Class",
    driver: "Marcus Thompson",
    pickup: "Heathrow Airport Terminal 5",
    drop: "One Hyde Park, Knightsbridge",
    date: "30/03/2024 at 15:00",
    price: "$240",
    status: "Confirmed",
  },
  {
    id: "BK-2026-147",
    car: "Mercedes-Benz S-Class",
    driver: "Marcus Thompson",
    pickup: "Heathrow Airport Terminal 5",
    drop: "One Hyde Park, Knightsbridge",
    date: "30/03/2024 at 15:00",
    price: "$240",
    status: "Pending",
  },
  {
    id: "BK-2026-148",
    car: "Mercedes-Benz S-Class",
    driver: "Marcus Thompson",
    pickup: "Heathrow Airport Terminal 5",
    drop: "One Hyde Park, Knightsbridge",
    date: "30/03/2024 at 15:00",
    price: "$240",
    status: "Cancelled",
  },
];

/* ================= MAIN ================= */

export default function MyBookingsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [open, setOpen] = useState(false);

  const filtered = bookingsData.filter((item) => {
    const matchSearch =
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.car.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All Status" || item.status === status;

    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen mt-5 text-white bg-black ">
      <div className="mx-auto space-y-6 ">

        {/* HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">My Bookings</h1>
            <p className="text-sm text-gray-400">
              View and manage your upcoming trips
            </p>
          </div>

          <Link href="/user-dashboard/my-bookings/create-new-booking" className="bg-[#C89B3C] text-white  px-4 py-2 rounded-md text-sm flex items-center gap-2">
            + New Booking
          </Link>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <StatCard title="Total Bookings" value="2" icon={<Calendar />} />
          <StatCard title="Confirmed" value="2" icon={<Clock />} />
          <StatCard title="Pending" value="1" icon={<Clock />} />
          <StatCard title="Cancelled" value="1" icon={<XCircle />} red />
        </div>

        {/* FILTER */}
        <div className="flex flex-col gap-3 lg:flex-row">

          {/* Search */}
          <div className="flex items-center flex-1 bg-[#0B0F17] border border-[#1A1F2B] rounded-lg px-3 py-2">
            <Search size={16} className="text-gray-500" />
            <input
              placeholder="Search by booking ID or customer name..."
              className="w-full ml-2 text-sm bg-transparent outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 bg-[#0B0F17] border border-[#1A1F2B] px-4 py-2 rounded-lg text-sm"
            >
              {status}
              <ChevronDown size={14} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-[#0B0F17] border border-[#1A1F2B] rounded-lg shadow-lg z-50">
                {["All Status", "Confirmed", "Pending", "Cancelled"].map(
                  (s) => (
                    <div
                      key={s}
                      onClick={() => {
                        setStatus(s);
                        setOpen(false);
                      }}
                      className="px-4 py-2 text-sm hover:bg-[#1A1F2B] cursor-pointer"
                    >
                      {s}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* CARDS */}
        <div className="space-y-4">
          {filtered.map((item) => (
            <BookingCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
}

/* ================= STAT ================= */

function StatCard({ title, value, icon, red }: any) {
  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="text-xs text-gray-400">{title}</p>
        <h3 className="text-lg font-semibold">{value}</h3>
      </div>

      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          red ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"
        }`}
      >
        {icon}
      </div>
    </div>
  );
}

/* ================= BOOKING CARD ================= */

function BookingCard({ item }: any) {
  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5 space-y-4">

      {/* Top */}
      <div className="flex flex-wrap items-center justify-between gap-3">

        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-yellow-500/20">
            <Car size={18} className="text-yellow-400" />
          </div>

          <div>
            <p className="text-sm font-medium">{item.car}</p>
            <p className="text-xs text-gray-400">
              Driver: {item.driver}
            </p>
          </div>

          <span className="text-[10px] bg-[#1A1F2B] px-2 py-1 rounded">
            {item.id}
          </span>

          <span className="text-[10px] bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
            {item.status}
          </span>
        </div>

        <p className="font-medium text-yellow-400">{item.price}</p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1A1F2B]" />

      {/* Locations */}
      <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">

        <div className="flex gap-2">
          <MapPin size={16} className="mt-2.5 text-yellow-400" />
          <div>
            <p className="text-xs text-gray-400">Pickup Location</p>
            <p>{item.pickup}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <MapPin size={16} className="mt-2.5 text-red-400" />
          <div>
            <p className="text-xs text-gray-400">Drop Location</p>
            <p>{item.drop}</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="flex flex-wrap items-center justify-between gap-3">

        <p className="text-xs text-gray-400">{item.date}</p>

        <button className="bg-[#C89B3C] text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <Download size={14} />
          Download
        </button>
      </div>

    </div>
  );
}