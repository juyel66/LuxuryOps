"use client";

import { Upload, Plus } from "lucide-react";

export default function AddNewService() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white p-4 md:p-8">

      {/* HEADER */}
      <h1 className="mb-6 font-serif text-2xl">Add New Service</h1>

      <div className="border-t border-[#1A1F2B] mb-6" />

      {/* ================= BASIC INFO ================= */}
      <SectionTitle title="Basic Information" />

      {/* IMAGE UPLOAD */}
      <UploadBox />

      {/* ICON */}
      <div className="mb-4">
        <label className="block mb-2 text-sm text-gray-400">Icon</label>
        <div className="border border-[#1A1F2B] rounded-md p-4 flex justify-center
        ">
          <BlueUpload />
        </div>
      </div>

      {/* SERVICE NAME */}
      <Input label="Services Name" placeholder="Services Name" />

      {/* DESCRIPTION */}
      <Textarea label="Description" />

      {/* ================= OVERVIEW ================= */}
      <SectionTitle title="Service Overview" />

      <Textarea label="Description" />

      {/* ================= FEATURES ================= */}
      <SectionTitle title="Features" />

      <div className="flex gap-3 mb-6">
        <input
          placeholder="Private beachfront access"
          className="flex-1 bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md"
        />
        <GoldAdd />
      </div>

      {/* FEATURE BLOCK */}
      <SectionTitle title="Feature" />

      <div className="border border-[#1A1F2B] rounded-md p-4 space-y-4 mb-6">

        <div className="flex gap-3">
          <input
            placeholder="High-Speed WiFi"
            className="flex-1 bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md"
          />
          <BlueUpload label="Choose Icon" />
        </div>

        <textarea
          placeholder="Description..."
          className="w-full h-[100px] bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md"
        />

        <GoldAdd />
      </div>

      {/* ================= GALLERY ================= */}
      <SectionTitle title="Service Gallery" />

      <UploadBox />

      {/* ================= FOOTER ================= */}
      <div className="border-t border-[#1A1F2B] pt-6 flex flex-col md:flex-row gap-4">

        <button className="flex-1 border border-[#C89B3C] text-[#C89B3C] py-3 rounded-md">
          CANCEL
        </button>

        <button className="flex-1 bg-[#C89B3C] text-white py-3 rounded-md font-medium">
          ADD SERVICE
        </button>

      </div>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function SectionTitle({ title }: { title: string }) {
  return <h2 className="mt-6 mb-4 text-gray-300">{title}</h2>;
}

function Input({ label, placeholder }: any) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm text-gray-400">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md"
      />
    </div>
  );
}

function Textarea({ label }: any) {
  return (
    <div className="mb-6">
      <label className="block mb-1 text-sm text-gray-400">{label}</label>
      <textarea
        placeholder="Description..."
        className="w-full h-[120px] bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md"
      />
    </div>
  );
}

function UploadBox() {
  return (
    <div className="border border-[#1A1F2B] rounded-md p-8 text-center bg-[#0B0F17] mb-6">
      <Upload  className="mx-auto mb-3 text-gray-400" />
      <p className="mb-2 text-sm text-gray-400">
        Drag & drop images here, or click to select
      </p>
      <button className="px-4 py-2 text-sm bg-blue-600 rounded-md">
        Choose Files 
      </button>
    </div>
  );
}

function BlueUpload({ label = "Choose Files" }: any) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 rounded-md">
      <Upload size={14} /> {label}
    </button>
  );
}

function GoldAdd() {
  return (
    <button className="bg-[#C89B3C] text-white  px-4 py-2 rounded-md flex items-center gap-2">
      <Plus size={14} /> Add Item
    </button>
  );
}