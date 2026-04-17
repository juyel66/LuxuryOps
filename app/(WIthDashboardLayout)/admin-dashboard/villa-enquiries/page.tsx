"use client";

import { useState } from "react";
import { Eye, Trash2, Download, X } from "lucide-react";

type Enquiry = {
  id: number;
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  message: string;
};

const enquiries: Enquiry[] = [
  {
    id: 1,
    name: "Mr. A. Smith",
    email: "smith@gmail.com",
    phone: "+1 (555) 234-5678",
    checkIn: "10 Mar 2026",
    checkOut: "19 Mar 2026",
    message: "Looking for a beachfront villa with private pool...",
  },
  {
    id: 2,
    name: "John Williams",
    email: "john.williams@mail.com",
    phone: "+44 7700 900123",
    checkIn: "12 Mar 2026",
    checkOut: "18 Mar 2026",
    message: "Need a luxury villa for honeymoon stay.",
  },
  {
    id: 3,
    name: "David Brown",
    email: "david.brown@mail.com",
    phone: "+1 (212) 555-7890",
    checkIn: "15 Mar 2026",
    checkOut: "22 Mar 2026",
    message: "Villa with ocean view and private chef required.",
  },
  {
    id: 4,
    name: "Michael Johnson",
    email: "michael.j@mail.com",
    phone: "+1 (310) 555-2233",
    checkIn: "18 Mar 2026",
    checkOut: "25 Mar 2026",
    message: "Looking for family-friendly villa with pool.",
  },
  {
    id: 5,
    name: "Robert Miller",
    email: "robert.miller@mail.com",
    phone: "+49 151 23456789",
    checkIn: "20 Mar 2026",
    checkOut: "27 Mar 2026",
    message: "Need 5-bedroom villa with garden and parking.",
  },
  {
    id: 6,
    name: "James Wilson",
    email: "james.wilson@mail.com",
    phone: "+61 412 345 678",
    checkIn: "22 Mar 2026",
    checkOut: "30 Mar 2026",
    message: "Luxury villa near beach with staff included.",
  },
  {
    id: 7,
    name: "William Taylor",
    email: "william.t@mail.com",
    phone: "+1 (646) 555-9000",
    checkIn: "25 Mar 2026",
    checkOut: "31 Mar 2026",
    message: "Modern villa with infinity pool preferred.",
  },
  {
    id: 8,
    name: "Daniel Anderson",
    email: "daniel.a@mail.com",
    phone: "+33 6 12 34 56 78",
    checkIn: "28 Mar 2026",
    checkOut: "04 Apr 2026",
    message: "Quiet villa for relaxing vacation.",
  },
  {
    id: 9,
    name: "Matthew Thomas",
    email: "matthew.t@mail.com",
    phone: "+1 (917) 555-4321",
    checkIn: "01 Apr 2026",
    checkOut: "08 Apr 2026",
    message: "Looking for villa with gym and spa.",
  },
  {
    id: 10,
    name: "Anthony Moore",
    email: "anthony.moore@mail.com",
    phone: "+44 7700 800456",
    checkIn: "05 Apr 2026",
    checkOut: "12 Apr 2026",
    message: "Need a villa for group of friends.",
  },
  {
    id: 11,
    name: "Christopher Martin",
    email: "chris.m@mail.com",
    phone: "+1 (305) 555-6789",
    checkIn: "08 Apr 2026",
    checkOut: "15 Apr 2026",
    message: "Villa with private beach access required.",
  },
  {
    id: 12,
    name: "Andrew Lee",
    email: "andrew.lee@mail.com",
    phone: "+82 10-1234-5678",
    checkIn: "10 Apr 2026",
    checkOut: "18 Apr 2026",
    message: "Minimalist villa with sea view.",
  },
  {
    id: 13,
    name: "Joshua Harris",
    email: "joshua.h@mail.com",
    phone: "+1 (213) 555-1111",
    checkIn: "12 Apr 2026",
    checkOut: "20 Apr 2026",
    message: "Looking for peaceful and luxury environment.",
  },
  {
    id: 14,
    name: "Ryan Clark",
    email: "ryan.c@mail.com",
    phone: "+1 (702) 555-2222",
    checkIn: "15 Apr 2026",
    checkOut: "22 Apr 2026",
    message: "Villa with BBQ area and outdoor seating.",
  },
  {
    id: 15,
    name: "Kevin Lewis",
    email: "kevin.l@mail.com",
    phone: "+44 7700 700789",
    checkIn: "18 Apr 2026",
    checkOut: "25 Apr 2026",
    message: "Luxury villa for anniversary trip.",
  },
  {
    id: 16,
    name: "Brian Walker",
    email: "brian.w@mail.com",
    phone: "+1 (718) 555-3333",
    checkIn: "20 Apr 2026",
    checkOut: "27 Apr 2026",
    message: "Looking for villa with large swimming pool.",
  },
  {
    id: 17,
    name: "George Hall",
    email: "george.h@mail.com",
    phone: "+49 152 98765432",
    checkIn: "22 Apr 2026",
    checkOut: "29 Apr 2026",
    message: "Villa with smart home features preferred.",
  },
  {
    id: 18,
    name: "Edward Allen",
    email: "edward.a@mail.com",
    phone: "+1 (415) 555-4444",
    checkIn: "25 Apr 2026",
    checkOut: "02 May 2026",
    message: "Need premium villa with security.",
  },
  {
    id: 19,
    name: "Jason Young",
    email: "jason.y@mail.com",
    phone: "+61 433 222 111",
    checkIn: "28 Apr 2026",
    checkOut: "05 May 2026",
    message: "Villa with scenic mountain view.",
  },
  {
    id: 20,
    name: "Mark King",
    email: "mark.king@mail.com",
    phone: "+1 (212) 555-9999",
    checkIn: "01 May 2026",
    checkOut: "08 May 2026",
    message: "Looking for ultra luxury villa with staff.",
  },
];

export default function VillaEnquiries() {
  const [selected, setSelected] = useState<Enquiry | null>(null);

  return (
    <div className="min-h-screen bg-[#07090D] text-white p-4 md:p-8">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl">
            Villa Enquiries
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage villa booking enquiries and customer requests
          </p>
        </div>

        <button className="bg-[#C89B3C] w-full md:w-auto justify-center hover:bg-[#b88a2f] px-5 py-2 rounded-lg flex items-center gap-2 text-sm">
          <Download size={16} /> Export
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl overflow-hidden">
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm">
            <thead className="text-gray-400 border-b border-[#1A1F2B]">
              <tr>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Check In</th>
                <th className="p-4 text-left">Check Out</th>
                <th className="p-4 text-left">Message</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {enquiries.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#111522] hover:bg-[#0F1420]"
                >
                  <td className="p-4 whitespace-nowrap">{item.name}</td>
                  <td className="p-4 text-gray-400 whitespace-nowrap">{item.email}</td>
                  <td className="p-4 text-gray-400 whitespace-nowrap">{item.phone}</td>
                  <td className="p-4 text-gray-400 whitespace-nowrap">{item.checkIn}</td>
                  <td className="p-4 text-gray-400 whitespace-nowrap">{item.checkOut}</td>
                  <td className="p-4 text-gray-400 max-w-[200px] truncate">
                    {item.message}
                  </td>

                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button onClick={() => setSelected(item)}>
                        <Eye size={18} />
                      </button>
                      <button>
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
          <p>Showing 20 of 20 enquiries</p>

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
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    
    <div className="w-full max-w-2xl bg-[#0B0F17] rounded-xl p-8 border border-[#1A1F2B] relative">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 border-b border-[#1A1F2B] pb-4">
        <h2 className="font-serif text-2xl">Enquiry Details</h2>
        <button onClick={() => setSelected(null)}>
          <X />
        </button>
      </div>

      <div className="space-y-6 text-sm">
        
        <div>
          <p className="text-gray-400">Customer Name</p>
          <h3 className="mt-1 text-lg">{selected.name}</h3>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-gray-400">Email</p>
            <p className="mt-1">{selected.email}</p>
          </div>

          <div>
            <p className="text-gray-400">Phone</p>
            <p className="mt-1">{selected.phone}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-gray-400">Check In</p>
            <p className="mt-1">Wednesday, April 15, 2026</p>
          </div>

          <div>
            <p className="text-gray-400">Check Out</p>
            <p className="mt-1">Wednesday, April 22, 2026</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-gray-400">Number of Guests</p>
            <p className="mt-1">6</p>
          </div>

          <div>
            <p className="text-gray-400">Bedrooms Required</p>
            <p className="mt-1">3</p>
          </div>
        </div>

        <div>
          <p className="text-gray-400">Special Requirements</p>
          <div className="bg-[#07090D] border border-[#1A1F2B] p-4 rounded-md mt-2">
            Looking for a beachfront villa with private pool for family vacation.
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