"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Car,
  MapPin,
  Calendar,
  User,
  Star,
  CheckCircle,
  Clock,
  X,
  CreditCard,
} from "lucide-react";

/* ================= DATA ================= */

const bookings = [
  {
    id: "BK-2026-146",
    name: "Sarah Anderson",
    car: "Mercedes-Benz S-Class",
    booked: "Booked on 10 Mar 2024",
    pickup: "Heathrow Airport Terminal 5",
    drop: "One Hyde Park, Knightsbridge",
    datetime: "15 Mar 2024 at 14:30",
    driver: "Marcus Thompson",
    price: "$240",
    status: "Completed",
  },
  {
    id: "BK-2026-146",
    name: "Sarah Anderson",
    car: "Mercedes-Benz S-Class",
    booked: "Booked on 10 Mar 2024",
    pickup: "Heathrow Airport Terminal 5",
    drop: "One Hyde Park, Knightsbridge",
    datetime: "15 Mar 2024 at 14:30",
    driver: "Marcus Thompson",
    price: "$240",
    status: "Upcoming",
  },
  {
    id: "BK-2026-146",
    name: "Sarah Anderson",
    car: "Mercedes-Benz S-Class",
    booked: "Booked on 10 Mar 2024",
    pickup: "Heathrow Airport Terminal 5",
    drop: "One Hyde Park, Knightsbridge",
    datetime: "15 Mar 2024 at 14:30",
    driver: "Marcus Thompson",
    price: "$240",
    status: "Cancelled",
  },
] as BookingItem[];

type BookingStatus = "Completed" | "Upcoming" | "Cancelled";

type BookingItem = {
  id: string;
  name: string;
  car: string;
  booked: string;
  pickup: string;
  drop: string;
  datetime: string;
  driver: string;
  price: string;
  status: BookingStatus;
};

type StatCardProps = {
  title: string;
  value: string;
  sub?: string;
  icon: React.ReactNode;
  color: "green" | "yellow" | "purple";
};

type BookingCardProps = {
  item: BookingItem;
};

/* ================= MAIN ================= */

export default function UserOverviewPage() {
  const [filter, setFilter] = useState("All Bookings");
  const [open, setOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  const filtered =
    filter === "All Bookings"
      ? bookings
      : bookings.filter((b) => b.status === filter);

  return (
    <div className="min-h-screen mt-5 text-white bg-black ">
      <div className="mx-auto space-y-6 ">

        {/* STATS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">

          <StatCard title="Completed" value="2" icon={<CheckCircle />} color="green" />
          <StatCard title="Upcoming" value="2" icon={<Clock />} color="yellow" />
          <StatCard title="Total Spent" value="$850" icon={<CreditCard />} color="yellow" />
          <StatCard title="This Month" value="142" sub="Total bookings" icon={<Car />} color="purple" />

        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col gap-3 lg:flex-row">

          <div className="flex items-center flex-1 bg-[#0B0F17] border border-[#1A1F2B] rounded-lg px-3 py-2">
            <Search size={16} className="text-gray-500" />
            <input
              placeholder="Search by booking ID or customer name..."
              className="w-full ml-2 text-sm bg-transparent outline-none"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 bg-[#0B0F17] border border-[#1A1F2B] px-4 py-2 rounded-lg text-sm"
            >
              {filter}
              <ChevronDown size={14} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-[#0B0F17] border border-[#1A1F2B] rounded-lg z-50">
                {["All Bookings", "Completed", "Upcoming", "Cancelled"].map(
                  (item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setFilter(item);
                        setOpen(false);
                      }}
                      className="px-4 py-2 text-sm hover:bg-[#1A1F2B] cursor-pointer"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* TITLE */}
        <div>
          <h2 className="text-lg font-medium">Booking History</h2>
          <p className="text-xs text-gray-400">All bookings (6)</p>
        </div>

        {/* CARDS */}
        <div className="space-y-4">
          {filtered.map((item, i) => (
            <BookingCard key={i} item={item} onAddReview={() => setReviewOpen(true)} />
          ))}
        </div>

        {reviewOpen && <AddReviewModal onClose={() => setReviewOpen(false)} />}

      </div>
    </div>
  );
}

/* ================= STAT ================= */

function StatCard({ title, value, sub, icon, color }: StatCardProps) {
  const colors: Record<StatCardProps["color"], string> = {
    green: "bg-green-500/20 text-green-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    purple: "bg-purple-500/20 text-purple-400",
  };

  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="text-xs text-gray-400">{title}</p>
        <h3 className="text-lg font-semibold">{value}</h3>
        {sub && <p className="text-xs text-gray-400">{sub}</p>}
      </div>

      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colors[color]}`}>
        {icon}
      </div>
    </div>
  );
}

/* ================= BOOKING CARD ================= */

function BookingCard({ item, onAddReview }: BookingCardProps & { onAddReview: () => void }) {
  const statusStyle: Record<BookingStatus, string> = {
    Completed: "bg-green-500/20 text-green-400",
    Upcoming: "bg-yellow-500/20 text-yellow-400",
    Cancelled: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5 space-y-4">

      {/* Top */}
      <div className="flex flex-wrap items-center justify-between gap-3">

        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-yellow-500/20">
            <Car size={18} className="text-yellow-400" />
          </div>

          <div>
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-xs text-gray-400">{item.car}</p>
            <p className="text-xs text-gray-500">{item.booked}</p>
          </div>

          <span className="text-[10px] bg-[#1A1F2B] px-2 py-1 rounded">
            {item.id}
          </span>

          <span className={`text-[10px] px-2 py-1 rounded ${statusStyle[item.status]}`}>
            {item.status}
          </span>
        </div>

        <p className="font-medium text-yellow-400">{item.price}</p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1A1F2B]" />

      {/* Info Grid */}
      <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">

        <div className="flex gap-2">
          <MapPin size={16} className="text-yellow-400 mt-2.5" />
          <div>
            <p className="text-xs text-gray-400">Pickup Location</p>
            <p>{item.pickup}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Calendar size={16} className="mt-2.5 text-yellow-400" />
          <div>
            <p className="text-xs text-gray-400">Pickup Date & Time</p>
            <p>{item.datetime}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <User size={16} className="mt-2.5 text-yellow-400" />
          <div>
            <p className="text-xs text-gray-400">Assigned Driver</p>
            <p>{item.driver}</p>
          </div>
        </div>

        <div className="flex gap-2 md:col-span-2">
          <MapPin size={16} className="mt-2.5 text-red-400" />
          <div>
            <p className="text-xs text-gray-400">Drop Location</p>
            <p>{item.drop}</p>
          </div>
        </div>

        {/* Button */}
        {item.status === "Completed" && (
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={onAddReview}
              className="bg-[#C89B3C] text-white cursor-pointer px-4 py-2 rounded-md text-sm flex items-center gap-2"
            >
              <Star className="" size={14} />
              Add Review
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

/* ================= REVIEW MODAL ================= */

function AddReviewModal({ onClose }: { onClose: () => void }) {
  const [rating, setRating] = useState("5");
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="w-full max-w-3xl rounded-2xl border border-[#1A1F2B] bg-[#05070B]">
        <div className="flex items-center justify-between border-b border-[#1A1F2B] px-6 py-4">
          <h2 className="text-lg font-semibold">Add Review</h2>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <h3 className="text-sm text-gray-400">Basic Information</h3>

          <div>
            <label className="text-xs text-gray-400">Quotation</label>
            <textarea
              placeholder="Quotation..."
              className="mt-1 h-[100px] w-full resize-none rounded-md border border-[#1A1F2B] bg-[#0B0F17] px-3 py-2 text-sm outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs text-gray-400">Location</label>
              <input
                placeholder="Location"
                className="mt-1 h-[42px] w-full rounded-md border border-[#1A1F2B] bg-[#0B0F17] px-3 text-sm outline-none"
              />
            </div>

            <div className="relative">
              <label className="text-xs text-gray-400">Rating</label>

              <button
                type="button"
                onClick={() => setDropdown(!dropdown)}
                className="mt-1 flex h-[42px] w-full items-center justify-between rounded-md border border-[#1A1F2B] bg-[#0B0F17] px-3 text-sm"
              >
                {rating}
                <ChevronDown size={14} />
              </button>

              {dropdown && (
                <div className="absolute z-50 mt-2 w-full rounded-md border border-[#1A1F2B] bg-[#0B0F17]">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <div
                      key={value}
                      onClick={() => {
                        setRating(String(value));
                        setDropdown(false);
                      }}
                      className="cursor-pointer px-3 py-2 text-sm hover:bg-[#1A1F2B]"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#1A1F2B] p-6 sm:flex-row">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-md border border-[#C89B3C] py-2 text-sm text-[#C89B3C]"
          >
            CANCEL
          </button>

          <button type="button" className="w-full rounded-md bg-[#C89B3C] py-2 text-sm font-medium text-white">
            ADD REVIEW
          </button>
        </div>
      </div>
    </div>
  );
}