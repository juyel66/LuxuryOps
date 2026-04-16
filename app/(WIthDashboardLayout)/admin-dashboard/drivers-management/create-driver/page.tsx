"use client";

import { Upload, X } from "lucide-react";

export default function CreateDriver() {
  return (
    <div className="container p-4 mx-auto space-y-8 text-white bg-black sm:p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Add New Driver
        </h1>
        <X className="text-gray-400 cursor-pointer" />
      </div>

      <div className="border-t border-[#1f1f1f]" />

   
      <Section title="Personal Information">

        {/* IMAGE */}
        <div>
          <label className="text-sm text-gray-400">Profile Image</label>

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

        {/* NAME */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="First name" placeholder="First name" />
          <Input label="Last name" placeholder="Last name" />
        </div>

        {/* CONTACT */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Input label="Mobile number" placeholder="+44 7900 000 000" />
          <Input label="Your email" placeholder="Your email" />
          <Input label="Date of Birth" type="date" />
        </div>
      </Section>

    
      <Section title="License Information">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="License Number" placeholder="GB12345678901" />
          <Input label="License Expiry" type="date" />
        </div>
      </Section>

   
      <Section title="Login Credentials">
        <Input label="Username" placeholder="username" />
        <Input label="Password" type="password" placeholder="••••••" />
        <Input label="Confirm Password" type="password" placeholder="••••••" />
      </Section>

  
      <Section title="Address">
        <Input label="Street Address" placeholder="123 Main Street" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="City" placeholder="London" />
          <Input label="Postcode" placeholder="SW1A 1AA" />
        </div>
      </Section>


      <Section title="Emergency Contact">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="Contact Name" placeholder="Full Name" />
          <Input label="Contact Number" placeholder="+44 7900 000 000" />
        </div>
      </Section>

      {/* ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#1f1f1f]">
        <button className="w-full py-3 text-yellow-500 border border-yellow-500">
          CANCEL
        </button>

        <button className="w-full py-3 font-medium text-white bg-yellow-500">
          ADD DRIVER
        </button>
      </div>
    </div>
  );
}



const Section = ({ title, children }: any) => (
  <div className="space-y-4">
    <h2 className="text-lg text-gray-300">{title}</h2>
    {children}
  </div>
);

const Input = ({
  label,
  placeholder,
  type = "text",
}: any) => (
  <div>
    <label className="text-sm text-gray-400">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full mt-1 bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded outline-none"
    />
  </div>
);