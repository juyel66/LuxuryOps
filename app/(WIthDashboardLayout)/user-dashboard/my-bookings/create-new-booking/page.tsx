"use client";

import React from "react";
import { X, Calendar, Clock, ChevronDown } from "lucide-react";

export default function CreateBookingPage() {
  return (
    <div className="flex items-center justify-center mt-5 text-white bg-black">
      
      {/* Container */}
      <div className="w-full  bg-[#05070B] border border-[#1A1F2B] rounded-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1F2B]">
          <h2 className="text-2xl font-semibold">Create New Booking</h2>
          <button className="text-gray-400 hover:text-white">
           
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">

          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <Input label="First Name" placeholder="First Name" />
            <Input label="Last Name" placeholder="Last Name" />

            <Input label="Mobile Number" placeholder="+44 7900 000 000" />
            <Input label="Your Email" placeholder="Your Email" />

          </div>

          {/* Choose Car */}
          <div>
            <label className="label">Choose Car</label>
            <div className="flex items-center justify-between input">
              Mercedes S Class
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label className="label">Choose Date</label>
              <div className="flex items-center justify-between input">
                <span className="text-gray-400">Choose Date</span>
                <Calendar size={16} className="text-gray-400" />
              </div>
            </div>

            <div>
              <label className="label">Choose Time</label>
              <div className="flex items-center justify-between input">
                <span className="text-gray-400">Choose Time</span>
                <Clock size={16} className="text-gray-400" />
              </div>
            </div>

          </div>

          {/* Pickup + Drop */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <Input label="Pick Up" placeholder="Enter the pick address" />
            <Input label="Drop Off" placeholder="Enter the final destination" />

          </div>

          {/* Textarea */}
          <div>
            <label className="label">Additional Requirements</label>
            <textarea
              placeholder="Additional Requirements - Luggage Or Physical Items"
              className="input h-[120px] resize-none py-3"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row gap-4 p-6 border-t border-[#1A1F2B]">

          <button className="w-full border border-[#C89B3C] text-[#C89B3C] py-3 rounded-md text-sm font-medium">
            CANCEL
          </button>

          <button className="w-full bg-[#C89B3C] text-white py-3 rounded-md text-sm font-medium">
            CREATE BOOKING
          </button>

        </div>

      </div>
    </div>
  );
}



function Input({ label, placeholder }: any) {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
}

/* ================= STYLES ================= */

const styles = `
.label {
  font-size: 13px;
  color: #9CA3AF;
  margin-bottom: 6px;
  display: block;
}

.input {
  width: 100%;
  height: 44px;
  background: #0B0F17;
  border: 1px solid #1A1F2B;
  border-radius: 6px;
  padding: 0 14px;
  font-size: 14px;
  color: white;
  outline: none;
}
`;

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = styles;
  document.head.appendChild(style);
}