"use client";

import { useState } from "react";
import { Upload, X, Plus } from "lucide-react";

export default function AddVehicleForm() {
  const [features, setFeatures] = useState<string[]>([]);
  const [featureInput, setFeatureInput] = useState("");

  const addFeature = () => {
    if (featureInput.trim()) {
      setFeatures([...features, featureInput]);
      setFeatureInput("");
    }
  };

  return (
    <div className="container p-2 mx-auto space-y-8 text-white md:p-0">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Add New Vehicle
        </h1>
       
      </div>

      <div className="border-t border-[#1f1f1f]" />

      {/* ================= VEHICLE INFO ================= */}
      <Section title="Vehicle Information">

        {/* IMAGE UPLOAD */}
        <div>
          <label className="text-sm text-gray-400">Image</label>

          <div className="mt-2 border border-[#1f1f1f] rounded-lg p-6 text-center bg-[#0b0b0b]">
            <Upload className="mx-auto mb-2 text-gray-500" />
            <p className="mb-3 text-xs text-gray-400">
              Drag & drop images here, or click to select
            </p>

            <button className="px-4 py-2 text-sm bg-blue-600 rounded">
              Choose Files
            </button>
          </div>
        </div>

        {/* VIDEO URL */}
        <Input label="Add Video Url from YouTube." placeholder="url" />

        {/* OWNER */}
        <Input label="Owner Name" placeholder="Marcus Thompson" />

        {/* COMMISSION */}
        <Input label="Commission Rate (%)" placeholder="25" />

        <p className="text-xs text-gray-500">
          Default commission rate for this vehicle owner.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Input label="Fleet Name" placeholder="Mercedes-Benz" />
          <Input label="Subtitle" placeholder="The Range Rover..." />
          <Input label="Year" placeholder="2024" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Select label="Color" />
          <Input label="Registration" placeholder="ABC 123" />
          <Input label="VIN" placeholder="WDD1234567890123" />
        </div>
      </Section>

      {/* ================= SPECIFICATIONS ================= */}
      <Section title="Specifications">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Select label="Category" />
          <Input label="Passengers Capacity" placeholder="4" />
          <Input label="Luggage Capacity" placeholder="3" />
        </div>
      </Section>

      {/* ================= FEATURES TAB ================= */}
      <Section title="Features Tab">

        {/* CHECK FEATURES */}
        <div className="flex flex-col gap-3">
          <FeatureControl label="Doors" />
          <FeatureControl label="Wi-Fi" />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 mt-4 text-white bg-yellow-500 rounded w-fit">
          <Plus size={16} /> Add Item
        </button>

        {/* FEATURES INPUT */}
        <div className="mt-4">
          <label className="text-sm text-gray-400">Features</label>

          <div className="flex gap-2 mt-2">
            <input
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              className="flex-1 bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded"
              placeholder="Add feature..."
            />

            <button
              onClick={addFeature}
              className="flex items-center gap-1 px-4 text-white bg-yellow-500 rounded"
            >
              <Plus size={14} /> Add Item
            </button>
          </div>

          {/* FEATURE LIST */}
          <div className="mt-3 space-y-2">
            {features.map((f, i) => (
              <div key={i} className="text-sm text-gray-400 bg-[#111] p-2 rounded">
                {f}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= ADDITIONAL INFO ================= */}
      <Section title="Additional Info">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
         <div>
  <label className="text-sm text-gray-400">Category</label>

  <select className="w-full mt-1 bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded text-sm">
    <option value="">Select Category</option>
    <option value="luxury-sedan">Luxury Sedan</option>
    <option value="suv">SUV</option>
    <option value="executive-sedan">Executive Sedan</option>
    <option value="luxury-van">Luxury Van</option>
  </select>
</div>
          <Input label="Passengers Capacity" placeholder="4" />
          <Input label="Luggage Capacity" placeholder="3" />
          <div>
  <label className="text-sm text-gray-400">Badge</label>

  <select className="w-full mt-1 bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded text-sm">
    <option value="">Select Badge</option>
    <option value="new">New</option>
    <option value="popular">Popular</option>
    <option value="featured">Featured</option>
  </select>
</div>
        </div>

        <Input label="Title" placeholder="Key Feature Title"  />

        <div className="flex gap-2">
          <input
            className="flex-1 bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded"
            placeholder="Feature..."
          />
          <button className="px-4 text-white bg-yellow-500 rounded">
            + Add Item
          </button>
        </div>
      </Section>

      {/* STATUS */}
      <Select label="Status" />

      {/* ACTIONS */}
      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        <button className="w-full py-3 text-yellow-500 border border-yellow-500">
          CANCEL
        </button>
        <button className="w-full py-3 text-white bg-yellow-500">
          ADD VEHICLE
        </button>
      </div>
    </div>
  );
}

//////////////////////////////////////////////////////////////////
// ---------------- REUSABLE ----------------
//////////////////////////////////////////////////////////////////

const Section = ({ title, children }: any) => (
  <div className="space-y-4">
    <h2 className="text-lg text-gray-300">{title}</h2>
    {children}
  </div>
);

const Input = ({ label, placeholder }: any) => (
  <div>
    <label className="text-sm text-gray-400">{label}</label>
    <input
      placeholder={placeholder}
      className="w-full mt-1 bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded"
    />
  </div>
);

const Select = ({ label }: any) => (
  <div>
    <label className="text-sm text-gray-400">{label}</label>
    <select className="w-full mt-1 bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded">
      <option>Select</option>
    </select>
  </div>
);

const FeatureControl = ({ label }: any) => (
  <div className="flex items-center gap-3">
    <input type="checkbox" className="accent-yellow-500" />
    <span className="text-sm">{label}</span>
    <input
      type="number"
      defaultValue={4}
      className="w-20 bg-[#0b0b0b] border border-[#1f1f1f] p-2 rounded text-center"
    />
  </div>
);