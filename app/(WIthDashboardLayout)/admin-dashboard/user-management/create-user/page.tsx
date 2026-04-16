"use client";

import { Upload, X } from "lucide-react";


export default function AddNewUsers() {
  return (
    <div className="container p-4 mx-auto space-y-8 text-white bg-black sm:p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold sm:text-2xl">Add New User</h1>
        
      </div>

      <div className="border-t border-[#1f1f1f]" />

 
      <Section title="Add New User">

        {/* IMAGE UPLOAD */}
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
          <Input label="First Name" placeholder="First Name" />
          <Input label="Last Name" placeholder="Last Name" />
        </div>

        {/* CONTACT */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="Mobile Number" placeholder="+44 7900 000 000" />
          <Input label="Your Email" placeholder="Your Email" />
        </div>
      </Section>

     
      <Section title="Position Details">
        <div>
          <label className="text-sm text-gray-400">Role</label>

          <select className="w-full mt-1 bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded">
            <option>Staff</option>
            <option>Admin</option>
            <option>Driver</option>
          </select>
        </div>
      </Section>

      
      <Section title="Login Credentials">
        <Input label="Username" placeholder="username" />
        <Input label="Password" placeholder="••••••" type="password" />
        <Input label="Confirm Password" placeholder="••••••" type="password" />
      </Section>

   
      <Section title="Permissions">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            "View Bookings",
            "Create Bookings",
            "Manage Drivers",
            "Manage Fleet",
            "View Invoices",
            "Create Invoices",
            "View Reports",
            "Manage Users",
            "Process Payroll",
            "System Settings",
          ].map((item, i) => (
            <Checkbox key={i} label={item} />
          ))}
        </div>

      </Section>

      
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#1f1f1f]">
        <button className="w-full py-3 text-yellow-500 border border-yellow-500">
          CANCEL
        </button>

        <button className="w-full py-3 font-medium text-white bg-yellow-500">
          ADD USER
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

const Input = ({ label, placeholder, type = "text" }: any) => (
  <div>
    <label className="text-sm text-gray-400">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full mt-1 bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded outline-none"
    />
  </div>
);

const Checkbox = ({ label }: any) => (
  <label className="flex items-center gap-3 border border-[#1f1f1f] p-3 rounded cursor-pointer hover:bg-[#111]">
    <input type="checkbox" className="accent-yellow-500" />
    <span className="text-sm">{label}</span>
  </label>
);