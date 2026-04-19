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
          <h1 className="font-serif text-3xl">Testimonials Management</h1>
          <p className="text-sm text-gray-400">
            Manage customer reviews and testimonials displayed on the website.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 cursor-pointer bg-[#C89B3C] text-white px-4 py-2 rounded-md text-sm"
        >
          <Plus size={16} /> Add Testimonial
        </button>
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

   
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">

          <div className="w-full max-w-3xl bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6 relative">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute text-gray-400 top-4 right-4"
            >
              <X />
            </button>

            <h2 className="mb-4 font-serif text-2xl">Add Testimonial</h2>

            <div className="border-t border-[#1A1F2B] mb-6" />

            {/* BASIC INFO */}
            <h3 className="mb-4 text-gray-300">Basic Information</h3>

            {/* NAME */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-400">Name</label>
              <input
                placeholder="Name"
                className="w-full bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md"
              />
            </div>

            {/* QUOTE */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-400">
                Quotation
              </label>
              <textarea
                placeholder="Quotation..."
                className="w-full h-[120px] bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md"
              />
            </div>

            {/* ROW */}
            <div className="grid gap-4 mb-4 md:grid-cols-2">

              <div>
                <label className="block mb-1 text-sm text-gray-400">
                  Location
                </label>
                <input
                  placeholder="Location"
                  className="w-full bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-400">
                  Rating
                </label>
                <select className="w-full bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md">
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                </select>
              </div>

            </div>

            {/* CHECKBOX */}
            <div className="flex items-start gap-2 mb-6">
              <input type="checkbox" className="mt-1 accent-[#C89B3C]" />
              <div>
                <p className="text-sm">Featured Testimonial</p>
                <p className="text-xs text-gray-400">
                  Display prominently on homepage and about page.
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex flex-col gap-4 md:flex-row">

              <button
                onClick={() => setOpen(false)}
                className="flex-1 border border-[#C89B3C] text-[#C89B3C] py-3 rounded-md"
              >
                CANCEL
              </button>

              <button className="flex-1 bg-[#C89B3C] text-black py-3 rounded-md font-medium">
                ADD TESTIMONIAL
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}