"use client";

import { Upload, Plus } from "lucide-react";

export default function AddVilla() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white ">

      {/* HEADER */}
      <h1 className="mb-6 font-serif text-2xl">Add Villas</h1>

      <div className="border-t border-[#1A1F2B] mb-6" />

      {/* BASIC INFO */}
      <h2 className="mb-4 text-gray-300">Basic Information</h2>

      {/* IMAGE UPLOAD */}
      <div className="border border-[#1A1F2B] rounded-md p-6 text-center mb-6 bg-[#0B0F17]">

        <Upload className="mx-auto mb-3 text-gray-400" />

        <p className="mb-2 text-sm text-gray-400">
          Drag & drop images here, or click to select
        </p>

        <button className="px-4 py-2 text-sm bg-blue-600 rounded-md">
          Choose Files
        </button>
      </div>

      {/* VILLA NAME */}
      <div className="mb-4">
        <label className="block mb-1 text-sm text-gray-400">
          Villa Name
        </label>
        <input
          placeholder="Villa Name"
          className="w-full bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md"
        />
      </div>

      {/* DESCRIPTION */}
      <div className="mb-6">
        <label className="block mb-1 text-sm text-gray-400">
          Description
        </label>
        <textarea
          placeholder="Description..."
          className="w-full h-[100px] bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md"
        />
      </div>

      {/* PRICING */}
      <h2 className="mb-4 text-gray-300">Pricing & Details</h2>

      <div className="grid gap-4 mb-4 md:grid-cols-4">

        <Input label="Price/Night ($)" placeholder="$12,500" />
        <Input label="Bedrooms" placeholder="2" />
        <Input label="Bathrooms" placeholder="1" />
        <Input label="Guests" placeholder="12" />

      </div>

      <div className="grid gap-4 mb-6 md:grid-cols-3">

        <Input label="Location" placeholder="Last Name" />

        <div>
          <label className="block mb-1 text-sm text-gray-400">
            Rating
          </label>
          <select className="w-full bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md">
            <option>5</option>
          </select>
        </div>

        <Input label="Reviews Count" placeholder="12" />

      </div>

      {/* KEY FEATURES */}
      <h2 className="mb-3 text-gray-300">Key Features</h2>

      <div className="flex gap-3 mb-6">
        <input
          placeholder="Private beachfront access"
          className="flex-1 bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md"
        />
        <button className="bg-[#C89B3C] text-white px-4 rounded-md flex items-center gap-2">
          <Plus size={16} /> Add Item
        </button>
      </div>

      {/* AMENITIES */}
      <h2 className="mb-3 text-gray-300">Amenities</h2>

      <div className="mb-6 space-y-3">

        <div className="flex gap-3">
          <input
            placeholder="High-Speed WiFi"
            className="flex-1 bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md"
          />
          <UploadBtn />
        </div>

        <div className="flex gap-3">
          <input
            placeholder="Air Conditioning"
            className="flex-1 bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md"
          />
          <UploadBtn />
        </div>

      </div>

      <button className="bg-[#C89B3C] text-white px-4 py-2 rounded-md flex items-center gap-2 mb-6">
        <Plus size={16} /> Add Item
      </button>

      {/* FOOTER */}
      <div className="border-t border-[#1A1F2B] pt-6 flex flex-col md:flex-row gap-4">

        <button className="flex-1 border border-[#C89B3C] text-[#C89B3C] py-3 rounded-md">
          CANCEL
        </button>

        <button className="flex-1 bg-[#C89B3C] text-white cursor-pointer py-3 rounded-md font-medium">
          ADD VILLA
        </button>

      </div>

    </div>
  );
}



function Input({ label, placeholder }: any) {
  return (
    <div>
      <label className="block mb-1 text-sm text-gray-400">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md"
      />
    </div>
  );
}

function UploadBtn() {
  return (
    <button className="flex items-center gap-2 bg-[#1A2A4A] text-white px-4 py-2 rounded-md text-sm">
      <Upload size={14} /> Choose Files
    </button>
  );
}