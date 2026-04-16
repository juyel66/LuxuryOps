"use client";

import Image from "next/image";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import type { StaticImageData } from "next/image";
import car1 from "../../../../public/images/car1.svg";
import car2 from "../../../../public/images/car2.png";
import tag from "../../../../public/images/Icon.svg";
import Link from "next/link";

type Vehicle = {
  id: number;
  name: string;
  image: StaticImageData;
  status: "Available" | "In Use";
  tag?: string;
  doors: number;
  passengers: number;
  wifi?: number;
  ac: number;
  slug: string;
  features: string[];
};

const vehicles: Vehicle[] = [
  {
    id: 1,
    slug: "mercedes-maybach-landjet",
    name: "Mercedes Maybach Landjet",
    image: car1,
    status: "Available",
    doors: 5,
    passengers: 4,
    wifi: 1,
    ac: 1,
    features: [
      "32” Samsung frame TV With Motorised TV Lift",
      "Additional Flip Down Television",
      "Ambient Lighting With Starlight/Shooting Star Roof Lights",
    ],
  },
  
  {
    id: 2,
    slug: "mercedes-maybach-landjet-2",
    name: "Mercedes Maybach Landjet",
    image: car1,
    status: "Available",
    doors: 5,
    passengers: 4,
    wifi: 1,
    ac: 1,
    features: [
      "32” Samsung frame TV With Motorised TV Lift",
      "Additional Flip Down Television",
      "Ambient Lighting With Starlight/Shooting Star Roof Lights",
    ],
  },
  {
    id: 3,
    slug: "range-rover-vogue",
    name: "Range Rover Vogue",
    image: car2,
    status: "In Use",
    tag: "Executive Sedan",
    doors: 5,
    passengers: 4,
    ac: 1,
    features: [
      "Automatic Climate Control and Air Quality Control System",
      "Executive Class Seats (Plush Leather)",
      "State-Of-The-Art Sound System",
    ],
  },
];

// ---------------- STATS ----------------
const stats: Array<{ title: string; value: string; sub: string; color: string }> = [
  { title: "Total Vehicles", value: "24", sub: "+2 this month", color: "text-green-400" },
  { title: "Available", value: "18", sub: "75% of fleet", color: "text-green-400" },
  { title: "In Use", value: "4", sub: "17% of fleet", color: "text-yellow-400" },
  { title: "Maintenance", value: "2", sub: "8% of fleet", color: "text-yellow-400" },
];

export default function FleetManagementDashboard() {
  return (
    <div className="p-3 space-y-5 text-white sm:p-6 sm:space-y-6">

      {/* HEADER */}
      <div className="flex flex-col justify-between gap-3 sm:gap-4 md:flex-row md:items-start">
        <div>
          <h1 className="text-2xl font-cardo sm:text-3xl md:text-3xl">
            Fleet Management
          </h1>
          <p className="mt-1 text-sm text-gray-400 sm:text-xl">
            Manage your luxury vehicle fleet
          </p>
        </div>

        <Link href="/admin-dashboard/fleet-management/add-vehicle" className="flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm text-white transition-colors bg-yellow-500 rounded-lg sm:w-fit sm:px-5 sm:py-3  hover:bg-yellow-600">
          <Plus size={16} /> Add Vehicle
        </Link>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      {/* VEHICLE CARDS */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        {vehicles.map((car) => (
          <VehicleCard key={car.id} car={car} />
        ))}
      </div>

    </div>
  );
}



type StatCardProps = {
  title: string;
  value: string;
  sub: string;
  color: string;
};

const StatCard = ({ title, value, sub, color }: StatCardProps) => (
  <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-4 sm:p-5">
    <p className="mb-3 text-sm text-gray-400">{title}</p>
    <h2 className="text-2xl font-cardo sm:text-3xl">{value}</h2>
    <p className={`mt-3 text-sm ${color}`}>{sub}</p>
  </div>
);



type VehicleCardProps = {
  car: Vehicle;
};

const VehicleCard = ({ car }: VehicleCardProps) => (
  <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl overflow-hidden">

    {/* IMAGE */}
    <div className="relative h-[190px] w-full sm:h-[210px] md:h-[230px]">
      <Image
        src={car.image}
        alt={car.name}
        fill
        className="object-cover"
      />

      {/* STATUS */}
      <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full ${
        car.status === "Available"
          ? "bg-green-900/70 text-green-400"
          : "bg-yellow-900/70 text-yellow-400"
      }`}>
        {car.status}
      </span>

      {/* TAG */}
      {car.tag && (
        <span className="absolute px-3 py-1 text-xs text-yellow-300 rounded-full bg-yellow-900/70 top-4 left-4">
          {car.tag}
        </span>
      )}
    </div>

    {/* CONTENT */}
    <div className="p-4 sm:p-5">

      {/* TITLE */}
      <h2 className="mb-4 text-2xl leading-tight font-cardo sm:mb-5 sm:text-3xl md:text-3xl">{car.name}</h2>

      <div className="mb-5 border-t border-[#1f1f1f]" />

      {/* SPECS */}
      <div className={`grid mb-5 gap-2 text-sm ${car.wifi ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"}`}>
        <Spec label="Doors" value={car.doors} />
        <Spec label="Passengers" value={car.passengers} />
        {car.wifi && <Spec label="Wi-fi" value={car.wifi} />}
        <Spec label="Air-Conditioned" value={car.ac} />
      </div>

      <div className="mb-5 border-t border-[#1f1f1f]" />

      {/* FEATURES */}
      <div className="mb-5 space-y-2">
        {car.features.map((f, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-gray-400 sm:text-lg">
            <Image src={tag} alt="feature" className="w-4 h-4 mt-1 shrink-0" />
            <span className="leading-6 wrap-break-word">{f}</span>
          </div>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-2 sm:gap-3">
        
        <Link href={`/admin-dashboard/fleet-management/${car.slug}`}className="flex items-center justify-center flex-1 gap-2 py-2 text-sm text-white transition-colors bg-yellow-500 rounded-md sm:text-base hover:bg-yellow-600">
          <Eye size={16} /> View Details
        </Link>

        <button className="p-2 border border-[#1f1f1f] bg-[#0b0b0b] rounded-md hover:bg-[#111]">
          <Pencil size={16} />
        </button>

        <button className="p-2 border border-[#1f1f1f] bg-[#0b0b0b] rounded-md hover:bg-[#111]">
          <Trash2 size={16} />
        </button>

      </div>
    </div>
  </div>
);



type SpecProps = {
  label: string;
  value: number;
};

const Spec = ({ label, value }: SpecProps) => (
  <div className="text-left">
    <p className="text-lg font-semibold text-yellow-400 sm:text-xl">{value}</p>
    <p className="text-xs text-gray-400 sm:text-base">{label}</p>
  </div>
);