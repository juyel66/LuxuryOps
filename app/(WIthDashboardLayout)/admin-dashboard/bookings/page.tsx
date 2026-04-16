"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronDown, Search, Plus } from "lucide-react";
import Link from "next/link";
import exportIcon from "../../../../public/images/exportIcon.svg";
import moreFilter from "../../../../public/images/MoreFilter.svg";


const stats = [
  {
    title: "Total Bookings",
    value: "248",
    sub: "+12.5% from last month",
    color: "text-green-400",
  },
  {
    title: "Confirmed",
    value: "186",
    sub: "75% of total",
    color: "text-yellow-400",
  },
  {
    title: "Pending",
    value: "42",
    sub: "Awaiting confirmation",
    color: "text-yellow-400",
  },
  {
    title: "Revenue (MTD)",
    value: "$185k",
    sub: "+23.1% from last month",
    color: "text-green-400",
  },
];


const bookings = [
  {
    id: "#248",
    name: "Mr. A. Smith",
    vehicle: "Range Rover Vogue",
    pickup: "Harrods, Knightsbridge",
    dropoff: "Heathrow Airport",
    amount: "$2,500",
    status: "Confirmed",
  },
  {
    id: "#249",
    name: "Ms. R. Johnson",
    vehicle: "Mercedes S-Class",
    pickup: "Mayfair Hotel",
    dropoff: "Gatwick Airport",
    amount: "$1,900",
    status: "Pending",
  },
  {
    id: "#250",
    name: "Mr. K. Williams",
    vehicle: "Rolls-Royce Ghost",
    pickup: "Chelsea Harbour",
    dropoff: "Stansted Airport",
    amount: "$3,800",
    status: "Cancelled",
  },
  {
    id: "#251",
    name: "Lady Hartfield",
    vehicle: "Bentley Bentayga",
    pickup: "Knightsbridge",
    dropoff: "Private Residence",
    amount: "$2,200",
    status: "Confirmed",
  },
  {
    id: "#252",
    name: "Mr. T. Brown",
    vehicle: "Range Rover Sport",
    pickup: "Canary Wharf",
    dropoff: "Luton Airport",
    amount: "$1,600",
    status: "Pending",
  },
  {
    id: "#253",
    name: "Mrs. E. Carter",
    vehicle: "BMW 7 Series",
    pickup: "Westminster",
    dropoff: "Heathrow Airport",
    amount: "$2,100",
    status: "Confirmed",
  },
  {
    id: "#254",
    name: "Mr. D. Green",
    vehicle: "Mercedes V-Class",
    pickup: "Belgravia",
    dropoff: "Central London",
    amount: "$980",
    status: "Cancelled",
  },
  {
    id: "#255",
    name: "Ms. L. White",
    vehicle: "Audi A8",
    pickup: "Mayfair",
    dropoff: "Private Jet Terminal",
    amount: "$2,750",
    status: "Confirmed",
  },
];

const statusOptions = ["All Status", "Confirmed", "Pending", "Cancelled"];


export default function BookingsManagement() {
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);
  const [activeActionMenu, setActiveActionMenu] = useState<number | null>(null);

  const filteredBookings = useMemo(() => {
    if (selectedStatus === "All Status") {
      return bookings;
    }

    return bookings.filter((booking) => booking.status === selectedStatus);
  }, [selectedStatus]);

  return (
    <div className="p-4 space-y-6 text-white sm:p-6">
      
   
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Bookings Management</h1>
          <p className="text-sm text-gray-400">
            Record all driver jobs — Colony Club Barbados
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-yellow-500 border border-yellow-500 rounded-lg">
            <Plus size={16} /> Batch Create
          </button>

          <Link href="/admin-dashboard/bookings/create-booking" className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-yellow-500 rounded-lg">
            <Plus size={16} /> New Booking/Daily Jobs
          </Link>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5"
          >
            <p className="mb-2 text-sm text-gray-400">{item.title}</p>
            <h2 className="mb-1 text-2xl font-semibold">{item.value}</h2>
            <p className={`text-sm ${item.color}`}>{item.sub}</p>
          </div>
        ))}
      </div>


      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-4 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        
      
        <div className="flex items-center border border-gray-700 bg-[#111] px-3 py-2 rounded-lg w-full lg:max-w-md">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Search by booking ID or customer name..."
            className="w-full ml-2 text-sm bg-transparent outline-none"
          />
        </div>

    
        <div className="relative flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setIsStatusMenuOpen((value) => !value)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 border border-gray-400 rounded-lg bg-[#111]"
          >
            {selectedStatus}
            <ChevronDown size={14} />
          </button>

          {isStatusMenuOpen && (
            <div className="absolute left-0 top-full z-10 mt-2 w-44 overflow-hidden rounded-lg border border-[#1f1f1f] bg-[#111] shadow-lg">
              {statusOptions.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => {
                    setSelectedStatus(status);
                    setIsStatusMenuOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm transition hover:bg-[#1a1a1a] ${
                    selectedStatus === status ? "text-yellow-500" : "text-gray-400"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          )}

          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 border border-gray-400 rounded-lg bg-[#111]">
            <Image src={moreFilter} alt="More filters" width={14} height={14} />
            More Filters
          </button>

          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 border border-gray-400 rounded-lg bg-[#111]">
            <Image src={exportIcon} alt="Export" width={14} height={14} />
            Export
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-2">
        <button className="bg-[#111] text-yellow-500 px-4 py-2 rounded-lg text-sm">
          Online Booking
        </button>
        <button className="bg-[#0b0b0b] px-4 py-2 rounded-lg text-sm border border-[#1f1f1f]">
          Driver Booking
        </button>
        <button className="bg-[#0b0b0b] px-4 py-2 rounded-lg text-sm border border-[#1f1f1f]">
          Admin/Staff
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          
          {/* HEAD */}
          <thead className="text-gray-400 border-b border-[#1f1f1f]">
            <tr>
              <th className="p-4 text-left">Booking ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Pickup</th>
              <th className="p-4 text-left">Dropoff</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-[#111] hover:bg-[#111]"
                >
                  <td className="p-4 text-gray-400">{item.id}</td>
                  <td className="p-4 text-white">{item.name}</td>
                  <td className="p-4 text-gray-400">{item.vehicle}</td>
                  <td className="p-4 text-gray-400">{item.pickup}</td>
                  <td className="p-4 text-gray-400">{item.dropoff}</td>
                  <td className="p-4 font-medium text-yellow-500">
                    {item.amount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-md ${
                        item.status === "Confirmed"
                          ? "text-green-400 bg-green-900"
                          : item.status === "Pending"
                            ? "text-yellow-400 bg-yellow-900"
                            : "text-red-400 bg-red-900"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="relative p-4 text-gray-400">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveActionMenu((current) =>
                          current === i ? null : i,
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-md transition hover:bg-[#1a1a1a] hover:text-white"
                      aria-label="Open booking actions"
                    >
                      ⋮
                    </button>

                    {activeActionMenu === i && (
                      <div className="absolute right-4 top-12 z-20 w-44 overflow-hidden rounded-lg border border-[#1f1f1f] bg-[#111] shadow-lg">
                        <button
                          type="button"
                          className="w-full px-4 py-2 text-left text-sm text-gray-400 transition hover:bg-[#1a1a1a] hover:text-white"
                        >
                          Edit Booking
                        </button>
                        <button
                          type="button"
                          className="w-full px-4 py-2 text-left text-sm text-red-400 transition hover:bg-[#1a1a1a] hover:text-red-300"
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="w-full px-4 py-2 text-left text-sm text-gray-400 transition hover:bg-[#1a1a1a] hover:text-white"
                        >
                          View Details
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={8}
                  className="p-6 text-center text-gray-400"
                >
                  No bookings found for the selected status.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* FOOTER */}
        <div className="flex items-center justify-between p-4 text-sm text-gray-400">
          <span>
            Showing {filteredBookings.length} of {bookings.length} bookings
          </span>

          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-700 bg-[#111] rounded">Previous</button>
            <button className="px-3 py-1 text-black bg-yellow-500 border border-gray-700 rounded">
              1
            </button>
            <button className="px-3 py-1 border border-gray-700 bg-[#111] rounded">2</button>
            <button className="px-3 py-1 border border-gray-700 bg-[#111] rounded">3</button>
            <button className="px-3 py-1 border border-gray-700 bg-[#111] rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}