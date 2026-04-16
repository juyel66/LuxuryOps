"use client";

import {
  X,
  Mail,
  Phone,
  Calendar,
  BadgeCheck,
  Car,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";
import profileImage from "../../../../../public/images/Container (22).svg";


export default function DriverDetailsPage() {
  return (
    <div className="container mx-auto space-y-6 text-white bg-black ">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Profile Details
        </h1>

      </div>

      <div className="border-t border-[#1f1f1f]" />

      {/* TOP PROFILE */}
      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-4 flex items-center md:gap-20 gap-2">
        
        <div className="flex items-center gap-3">
          <Image
            src={profileImage}
            alt="driver"
            width={45}
            height={45}
            className="rounded-full"
          />

          <div>
            <h3 className="text-sm font-medium">Marcus Thompson</h3>
            <p className="text-xs text-gray-400">DRV-001</p>
          </div>
        </div>

        <span className="px-1 py-1 text-xs text-green-400 bg-green-900 rounded ">
          On Duty
        </span>
      </div>

      {/* ================= INFO GRID ================= */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        {/* PERSONAL */}
        <Card title="Personal Information">
          <Info icon={<Mail />} label="Email" value="marcus.thompson@vvipluxury.com" />
          <Info icon={<Phone />} label="Phone" value="+44 20 7946 0958" />
          <Info icon={<Calendar />} label="Joined Date" value="15 Jan 2024" />
          <Info icon={<BadgeCheck />} label="License Number" value="UK-DL-892847" />
        </Card>

        {/* VEHICLE */}
        <Card title="Vehicle Information">
          <Info icon={<Car />} label="Assigned Vehicle" value="Mercedes S-Class" />
          <Info icon={<BadgeCheck />} label="Registration" value="VIP 2026" />
          <Info icon={<MapPin />} label="Current Location" value="Airport Transfer — Heathrow T5" />
        </Card>

      </div>

      {/* ================= PERFORMANCE ================= */}
      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5">

        <h2 className="mb-4 text-sm font-medium">
          Performance Overview
        </h2>

        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-5">
          <Perf label="Total Jobs" value="142" />
          <Perf label="Total Earned" value="$18,400" highlight />
          <Perf
            label="Avg Rating"
            value={
              <span className="flex items-center justify-center gap-1">
                4.9 <Star size={14} className="text-yellow-400" />
              </span>
            }
          />
          <Perf label="Total Hours" value="1,240 hrs" />
          <Perf label="Cancelled" value="3" danger />
        </div>
      </div>

      {/* ================= RECENT JOBS ================= */}
      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5">

        <h2 className="mb-4 text-sm font-medium">Recent Jobs</h2>

        <div className="space-y-3">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#111] p-3 rounded"
            >
              <div>
                <p className="text-sm">{job.title}</p>
                <p className="text-xs text-gray-400">{job.time}</p>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-400">{job.client}</p>
                <p className="text-sm font-medium">{job.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//////////////////////////////////////////////////////////////////
// ---------------- DATA ----------------
//////////////////////////////////////////////////////////////////

const jobs = [
  {
    title: "Airport Transfer",
    time: "Today, 09:00 AM",
    client: "Mr. A. Smith",
    amount: "$340",
  },
  {
    title: "Corporate Travel",
    time: "Yesterday, 02:30 PM",
    client: "Apex Corp",
    amount: "$280",
  },
  {
    title: "Private Chauffeur",
    time: "27 Mar, 11:00 AM",
    client: "Ms. R. Johnson",
    amount: "$185",
  },
  {
    title: "Event Transport",
    time: "26 Mar, 06:00 PM",
    client: "Lady Hartfield",
    amount: "$420",
  },
  {
    title: "Airport Transfer",
    time: "25 Mar, 10:30 AM",
    client: "Mr. K. Williams",
    amount: "£310",
  },
];

//////////////////////////////////////////////////////////////////
// ---------------- COMPONENTS ----------------
//////////////////////////////////////////////////////////////////

const Card = ({ title, children }: any) => (
  <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5 space-y-4">
    <h3 className="text-sm font-medium">{title}</h3>
    {children}
  </div>
);

const Info = ({ icon, label, value }: any) => (
  <div className="flex items-center gap-3 text-sm">
    <div className="p-2 bg-[#111] rounded text-yellow-400">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p>{value}</p>
    </div>
  </div>
);

const Perf = ({ label, value, highlight, danger }: any) => (
  <div>
    <p className="text-xs text-gray-400">{label}</p>
    <p
      className={`mt-1 font-medium ${
        highlight
          ? "text-green-400"
          : danger
          ? "text-red-500"
          : "text-white"
      }`}
    >
      {value}
    </p>
  </div>
);