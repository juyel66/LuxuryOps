"use client";

import { useState } from "react";
import { Eye, Trash2, Download } from "lucide-react";

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  additional: string;
  message: string;
};

const contacts =[
    {
  id:1,
  name: "Mr. A. Smith",
  email: "smith@gmail.com",
  phone: "+1 (555) 234-5678",
  additional: "Need regular chauffeur service for daily office commute starting next month.",
  message: "Looking for a beachfront villa with private pool for family vacation.",
},
    {
  id:1,
  name: "Mr. A. Smith",
  email: "smith@gmail.com",
  phone: "+1 (555) 234-5678",
  additional: "Need regular chauffeur service for daily office commute starting next month.",
  message: "Looking for a beachfront villa with private pool for family vacation.",
},
    {
  id:1,
  name: "Mr. A. Smith",
  email: "smith@gmail.com",
  phone: "+1 (555) 234-5678",
  additional: "Need regular chauffeur service for daily office commute starting next month.",
  message: "Looking for a beachfront villa with private pool for family vacation.",
},
    {
  id:1,
  name: "Mr. A. Smith",
  email: "smith@gmail.com",
  phone: "+1 (555) 234-5678",
  additional: "Need regular chauffeur service for daily office commute starting next month.",
  message: "Looking for a beachfront villa with private pool for family vacation.",
},
    {
  id:1,
  name: "Mr. A. Smith",
  email: "smith@gmail.com",
  phone: "+1 (555) 234-5678",
  additional: "Need regular chauffeur service for daily office commute starting next month.",
  message: "Looking for a beachfront villa with private pool for family vacation.",
},
]

export default function ContactSubmissions() {
  const [selected, setSelected] = useState<Contact | null>(null);

  return (
    <div className="min-h-screen bg-[#07090D] text-white mt-5">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl">
            Contact Submissions
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage contact form submissions and customer inquiries
          </p>
        </div>

        <button className="bg-[#C89B3C] w-full md:w-auto justify-center hover:bg-[#b88a2f] px-5 py-2 rounded-lg flex items-center gap-2 text-sm">
          <Download size={16} /> Export
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl overflow-hidden">
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-sm">
            
            <thead className="text-gray-400 border-b border-[#1A1F2B]">
              <tr>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Additional requirements</th>
                <th className="p-4 text-left">Message</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#111522] hover:bg-[#0F1420]"
                >
                  <td className="p-4 whitespace-nowrap">{item.name}</td>
                  <td className="p-4 text-gray-400 whitespace-nowrap">{item.email}</td>
                  <td className="p-4 text-gray-400 whitespace-nowrap">{item.phone}</td>

                  <td className="p-4 text-gray-400 max-w-[220px] truncate">
                    {item.additional}
                  </td>

                  <td className="p-4 text-gray-400 max-w-[220px] truncate">
                    {item.message}
                  </td>

                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="cursor-pointer" onClick={() => setSelected(item)}>
                        <Eye size={18} />
                      </button>

                      <button className="cursor-pointer hover:text-red-400">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col items-start justify-between gap-4 p-4 text-sm text-gray-400 md:flex-row md:items-center">
          <p>Showing 9 of 9 invoices</p>

          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 border border-[#1A1F2B] rounded-md">
              Previous
            </button>

            <button className="px-3 py-1 bg-[#C89B3C] text-black rounded-md">
              1
            </button>

            <button className="px-3 py-1 border border-[#1A1F2B] rounded-md">
              2
            </button>

            <button className="px-3 py-1 border border-[#1A1F2B] rounded-md">
              3
            </button>

            <button className="px-3 py-1 border border-[#1A1F2B] rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          
          <div className="w-full max-w-2xl bg-[#0B0F17] rounded-xl border border-[#1A1F2B] p-6 md:p-8">
            
            {/* HEADER */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1A1F2B]">
              <h2 className="font-serif text-2xl md:text-3xl">
                Contact Submissions Details
              </h2>

              <button onClick={() => setSelected(null)}>
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <div className="mt-6 space-y-6 text-sm">
              
              <div>
                <p className="text-gray-400">Customer Name</p>
                <h3 className="mt-1 text-lg">{selected.name}</h3>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="mt-1">{selected.email}</p>
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="mt-1">{selected.phone}</p>
                </div>
              </div>

              <div>
                <p className="text-gray-400">Additional requirements</p>
                <div className="mt-2 bg-[#07090D] border border-[#1A1F2B] p-4 rounded-md">
                  {selected.additional}
                </div>
              </div>

              <div>
                <p className="text-gray-400">Message</p>
                <div className="mt-2 bg-[#07090D] border border-[#1A1F2B] p-4 rounded-md">
                  {selected.message}
                </div>
              </div>

              <div>
                <p className="text-gray-400">Submitted At</p>
                <p className="mt-1">
                  Sunday, March 29, 2026 at 02:30 PM
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}