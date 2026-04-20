"use client";

import {
  Eye,
  Pencil,
  Trash2,
  CheckCircle,
  Plus,
} from "lucide-react";
import img1 from "../../../../public/images/Container (32).svg"
import img2 from "../../../../public/images/Container (33).svg"
import Image from "next/image";
import Link from "next/link";


type Service = {
  id: number;
  title: string;
  description: string;
  category: string;
  features: string[];
  image: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Diplomatic Services",
    category: "Transport",
    description:
      "We understand the unique needs and protocols of diplomatic travel regarding diplomats and government officials. We offer discreet and efficient transportation services tailored to your needs.",
    image: img1,
    features: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary wait time",
      "Luggage assistance",
      "All airports covered",
    ],
  },
  {
    id: 2,
    title: "Weddings",
    category: "Transport",
    description:
      "Your wedding day is a once-in-a-lifetime event. We provide impeccable wedding transportation services ensuring elegance and comfort throughout your special day.",
    image: img2,
    features: [
      "Real-time tracking",
      "VIP arrivals",
      "Luxury vehicles",
      "Professional chauffeurs",
      "24/7 support",
    ],
  },
  {
    id: 3,
    title: "Corporate Travel",
    category: "Transport",
    description:
      "Premium corporate transport solutions for executives and business professionals with punctual and seamless service.",
    image: img1,
    features: [
      "Executive fleet",
      "On-time guarantee",
      "WiFi enabled cars",
      "Privacy focused",
      "Airport transfers",
    ],
  },
  {
    id: 4,
    title: "Airport Transfers",
    category: "Transport",
    description:
      "Reliable airport transfer service ensuring smooth pick-up and drop-off with real-time monitoring.",
    image: img2,
    features: [
      "Flight tracking",
      "No waiting charges",
      "Door-to-door service",
      "Professional drivers",
      "Luxury experience",
    ],
  },
];

export default function ServicesManagement() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white mt-5">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-3xl">Services Management</h1>
          <p className="text-sm text-gray-400">
            Manage service offerings and descriptions
          </p>
        </div>

        <Link href="/admin-dashboard/service/add-new-service" className="flex items-center gap-2 bg-[#C89B3C] text-white px-4 py-2 rounded-md text-sm font-medium">
          <Plus size={16} /> Add Service
        </Link>
      </div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-3">

        {services.map((service, index) => (
          <div
            key={service.id}
            className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl overflow-hidden"
          >

            {/* IMAGE */}
            <div className="h-[220px] relative">
                <Image src={service.image} alt={service.title} className="object-cover w-full h-full" />

            </div>

            {/* CONTENT */}
            <div className="p-5">

              {/* NUMBER + CATEGORY */}
              <p className="text-[#C89B3C] text-sm mb-2">
                {String(index + 1).padStart(2, "0")} — {service.category.toUpperCase()}
              </p>

              {/* TITLE */}
              <h2 className="mb-2 font-serif text-xl">
                {service.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>

              {/* FEATURES */}
              <ul className="mb-5 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-[#C89B3C]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* ACTIONS */}
              <div className="flex items-center gap-3">

                <button className="flex-1 bg-[#C89B3C] cursor-pointer text-white py-2 rounded-md flex items-center justify-center gap-2 text-sm">
                  <Eye size={16} /> View Details
                </button>

                <button className="p-2 border border-[#1A1F2B] cursor-pointer rounded-md hover:bg-[#111522]">
                  <Pencil size={16} />
                </button>

                <button className="p-2 cursor-pointer hover:text-red-500 border border-[#1A1F2B] rounded-md hover:bg-[#111522]">
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