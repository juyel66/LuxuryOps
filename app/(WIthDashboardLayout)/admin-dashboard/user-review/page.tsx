"use client";

import { useState } from "react";
import { Star, Pencil, Trash2, Plus, X } from "lucide-react";
import Image from "next/image";
import star from "../../../../public/images/Icon (57).svg"

type Testimonial = {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Martinez",
    location: "Monaco",
    text: "At VVIP Luxury Chauffeur Services we felt as though we were back home in Monaco. Aman and his team are amazing.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Wellington",
    location: "London, UK",
    text: "The level of professionalism and attention to detail exceeded all expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Olivia Chen",
    location: "Singapore",
    text: "Impeccable service from start to finish. True luxury transportation.",
    rating: 5,
  },
];

export default function TestimonialsManagement() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090D] text-white p-4 md:p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-3xl">User Review Management</h1>
          <p className="text-sm text-gray-400">
            Manage customer reviews and testimonials displayed on the website.
          </p>
        </div>

 
      </div>

      {/* CARDS */}
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5"
          >
            <p className="mb-4 text-sm text-gray-300">{t.text}</p>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#C89B3C] font-medium">{t.name}</p>
                <p className="text-xs text-gray-400">{t.location}</p>
              </div>

              <div className="flex items-center gap-1 text-sm">
                <Image src={star} alt="Star" width={16} height={16} />
                {t.rating}.0
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2 mt-4">
              <button className="p-2 border border-[#1A1F2B] cursor-pointer rounded-md hover:bg-[#111522]">
                <Pencil size={14} />
              </button>
              <button className="p-2 hover:text-red-500 cursor-pointer border border-[#1A1F2B] rounded-md hover:bg-[#111522]">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

   
     
    </div>
  );
}