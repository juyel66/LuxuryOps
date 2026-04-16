"use client";

import { Plus, MapPin, Star } from "lucide-react";
import Image from "next/image";

import star from '../../../../public/images/Icon (47).svg'

import profileImage from "../../../../public/images/Container (22).svg";
import Link from "next/link";
// import profileImage1 from "../../../../public/images/Container (20).svg";
// import profileImage2 from "../../../../public/images/Container (18).svg";

const drivers = [
  {
    id: 1,
    name: "Marcus Thompson",
    img: profileImage,
    slug: "DRV-001",
    status: "On Duty",
    location: "Airport Transfer — Heathrow T5",
    jobs: 142,
    earned: "$18,400",
    rating: 4.9,
  },
  {
    id: 2,
    name: "James Carter",
    img: profileImage,
    slug: "DRV-002",
    status: "Available",
    location: "City Ride — London",
    jobs: 98,
    earned: "$12,200",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Daniel Smith",
    img: profileImage,
    slug: "DRV-003",
    status: "On Duty",
    location: "Airport Pickup — Gatwick",
    jobs: 176,
    earned: "$21,500",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Oliver Brown",
    img: profileImage,
    slug: "DRV-004",
    status: "Off Duty",
    location: "Standby",
    jobs: 120,
    earned: "$15,000",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Liam Wilson",
    img: profileImage,
    slug: "DRV-005",
    status: "Available",
    location: "Hotel Transfer",
    jobs: 88,
    earned: "$9,800",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Noah Taylor",
    img: profileImage,
    slug: "DRV-006",
    status: "On Duty",
    location: "VIP Transport",
    jobs: 210,
    earned: "$28,000",
    rating: 5.0,
  },
];


export default function DriverManagementPage() {
  return (
    <div className="p-4 space-y-6 text-white sm:p-6">

      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div>
          <h1 className="text-2xl font-semibold">Driver Management</h1>
          <p className="text-sm text-gray-400">
            Manage chauffeurs, assignments and payroll
          </p>
        </div>

        <Link href="/admin-dashboard/drivers-management/create-driver" className="flex items-center gap-2 px-4 py-2 text-white bg-yellow-500 rounded-lg cursor-pointer w-fit">
          <Plus size={16} /> Add Driver
        </Link>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Drivers" value="14" dot="bg-white" />
        <StatCard title="On Duty" value="2" dot="bg-green-400" />
        <StatCard title="Available" value="8" dot="bg-yellow-400" />
        <StatCard title="Off Duty" value="2" dot="bg-gray-400" />
      </div>

      {/* DRIVER CARDS */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {drivers.map((driver, i) => (
          <DriverCard key={i} driver={driver} />
        ))}
      </div>
    </div>
  );
}



const StatCard = ({ title, value, dot }: any) => (
  <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5">
    <p className="mb-2 text-sm text-gray-400">{title}</p>

    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${dot}`} />
      <h2 className="text-xl font-semibold">{value}</h2>
    </div>
  </div>
);



const DriverCard = ({ driver }: any) => (
  <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-4 space-y-4">

    {/* TOP */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={driver.img}
          alt="driver"
          width={40}
          height={40}
          className="rounded-full"
        />

        <div>
          <h3 className="text-sm font-medium">{driver.name}</h3>
          <p className="text-xs text-gray-400">{driver.slug}</p>
        </div>
      </div>

      <span className="px-2 py-1 text-xs text-green-400 bg-green-900 rounded">
        {driver.status}
      </span>
    </div>

    {/* LOCATION */}
    <div className="flex items-center gap-2 text-xs text-gray-400">
      <MapPin size={12} />
      {driver.location}
    </div>

    {/* STATS */}
    <div className="grid grid-cols-3 text-center border-t border-[#1f1f1f] pt-3">
      <Info label="Total Jobs" value={driver.jobs} />
      <Info label="Earned" value={driver.earned} />
      <Info
        label="Rating"
        value={
          <span className="flex items-center justify-center gap-1">
            {driver.rating} 
            <Image src={star} alt="star" width={12} height={12} />
          </span>
        }
      />
    </div>

    {/* ACTIONS */}
    <div className="flex items-center gap-3 pt-2">
   <Link
  href={`/admin-dashboard/drivers-management/${driver.slug}`}
  className="flex items-center justify-center flex-1 py-2 text-sm text-white bg-yellow-500 rounded"
>
  View Profile
</Link>

      <button className="text-sm text-gray-400 hover:text-white">
        Payslip
      </button>
    </div>
  </div>
);



const Info = ({ label, value }: any) => (
  <div>
    <p className="text-xs text-gray-400">{label}</p>
    <p className="mt-1 text-sm font-medium">{value}</p>
  </div>
);