"use client";

import { Eye, Download } from "lucide-react";


const drivers = [
  {
    initials: "MT",
    name: "Marcus T.",
    location: "Airport - Heathrow T5",
    status: "On Duty",
    amount: "$185",
    color: "bg-yellow-500",
  },
  {
    initials: "JH",
    name: "James H.",
    location: "Corporate - Canary Wharf",
    status: "On Duty",
    amount: "$240",
    color: "bg-yellow-500",
  },
  {
    initials: "DK",
    name: "Daniel K.",
    location: "Standing by",
    status: "Available",
    amount: "$0",
    color: "bg-green-500",
  },
  {
    initials: "OA",
    name: "Omar A.",
    location: "—",
    status: "",
    amount: "",
    color: "bg-gray-500",
  },
];


const invoices = [
  {
    id: "INV-2026-0248",
    name: "Mr. A. Smith",
    amount: "$340",
    status: "Paid",
  },
  {
    id: "INV-2026-0247",
    name: "Apex Corp",
    amount: "$1,200",
    status: "Paid",
  },
  {
    id: "INV-2026-0246",
    name: "Ms. R. Johnson",
    amount: "$185",
    status: "Pending",
  },
  {
    id: "INV-2026-0245",
    name: "",
    amount: "----",
    status: "Overdue",
  },
];


export default function DriverAndRecentActivity() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 xl:grid-cols-3">
      
    
      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5 sm:p-6">
        
     
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-white sm:text-lg">
            Driver Activity
          </h2>
          <button className="text-xs text-yellow-500 sm:text-sm hover:underline">
            Manage all →
          </button>
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {drivers.map((driver, i) => (
            <div key={i} className="flex items-center justify-between">
              
              <div className="flex items-center gap-3">
                
                {/* AVATAR */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-black font-semibold ${driver.color}`}
                >
                  {driver.initials}
                </div>

                {/* INFO */}
                <div>
                  <p className="text-sm font-medium text-white">
                    {driver.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {driver.location}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <p
                  className={`text-xs ${
                    driver.status === "Available"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  {driver.status}
                </p>
                <p className="text-sm text-white">{driver.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT - INVOICES */}
      <div className="xl:col-span-2 bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5 sm:p-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-white sm:text-lg">
            Recent Invoices
          </h2>
          <button className="text-xs text-yellow-500 sm:text-sm hover:underline">
            View all →
          </button>
        </div>

        {/* LIST */}
        <div className="space-y-3">
          {invoices.map((inv, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-[#111] px-4 py-3 rounded-lg"
            >
              
              {/* LEFT */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <span className="text-xs font-medium text-yellow-500">
                  {inv.id}
                </span>
                <span className="text-sm text-white">{inv.name}</span>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-4">
                
                <span className="text-sm font-medium text-white">
                  {inv.amount}
                </span>

                {/* STATUS */}
                <span
                  className={`text-xs px-3 py-1 rounded-md ${
                    inv.status === "Paid"
                      ? "bg-green-900 text-green-400"
                      : inv.status === "Pending"
                      ? "bg-yellow-900 text-yellow-400"
                      : "bg-red-900 text-red-400"
                  }`}
                >
                  {inv.status}
                </span>

                {/* ICONS */}
                <div className="flex items-center gap-3 text-gray-400">
                  <Eye size={16} className="cursor-pointer hover:text-white" />
                  <Download size={16} className="cursor-pointer hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}