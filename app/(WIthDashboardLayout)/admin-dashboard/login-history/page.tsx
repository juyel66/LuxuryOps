"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  Trash2,
  Activity,
  Clock,
  LogOut,
  User,
} from "lucide-react";

type Login = {
  id: number;
  name: string;
  email: string;
  time: string;
  location: string;
  status: "active" | "logged_out";
};

const data: Login[] = [
  { id: 1, name: "Mr. A. Smith", email: "smith@gmail.com", time: "Mar 30 - 08:45 AM", location: "New York, USA", status: "logged_out" },
  { id: 2, name: "Mr. A. Smith", email: "smith@gmail.com", time: "Mar 30 - 09:15 AM", location: "New York, USA", status: "active" },
  { id: 3, name: "Mr. A. Smith", email: "smith@gmail.com", time: "Mar 30 - 10:15 AM", location: "New York, USA", status: "active" },
  { id: 4, name: "Mr. A. Smith", email: "smith@gmail.com", time: "Mar 30 - 10:45 AM", location: "New York, USA", status: "logged_out" },
  { id: 5, name: "Mr. A. Smith", email: "smith@gmail.com", time: "Mar 30 - 11:45 AM", location: "New York, USA", status: "active" },
  { id: 6, name: "Mr. A. Smith", email: "smith@gmail.com", time: "Mar 30 - 12:15 PM", location: "New York, USA", status: "active" },
  { id: 7, name: "Mr. A. Smith", email: "smith@gmail.com", time: "Mar 30 - 09:45 AM", location: "New York, USA", status: "active" },
  { id: 8, name: "Mr. A. Smith", email: "smith@gmail.com", time: "Mar 30 - 12:45 PM", location: "New York, USA", status: "active" },
  { id: 9, name: "Mr. A. Smith", email: "smith@gmail.com", time: "Mar 30 - 11:15 AM", location: "New York, USA", status: "logged_out" },
];

export default function CustomerLoginHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "logged_out">("all");
  const [openFilter, setOpenFilter] = useState(false);

  // FILTER LOGIC
  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#07090D] text-white p-4 md:p-8">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="font-serif text-2xl md:text-3xl">
          Customer Login History
        </h1>
        <p className="mt-1 text-sm text-gray-400">
          Track customer login activity and session information
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-4">
        <Stat icon={<User />} color="text-[#C89B3C]" bg="bg-[#1f1a0a]" label="Total Logins" value="9" />
        <Stat icon={<Activity />} color="text-green-400" bg="bg-[#0a1f17]" label="Currently Active" value="6" />
        <Stat icon={<Clock />} color="text-yellow-400" bg="bg-[#1f140a]" label="Today's Logins" value="0" />
        <Stat icon={<LogOut />} color="text-gray-400" bg="bg-[#0f1118]" label="Logged Out" value="3" />
      </div>

      {/* SEARCH + FILTER */}
      <div className="relative flex flex-col gap-3 mb-6 md:flex-row">

        {/* SEARCH */}
        <div className="flex items-center gap-2 bg-[#0B0F17] border border-[#1A1F2B] rounded-lg px-4 py-2 w-full">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Search by name, email, or location..."
            className="w-full text-sm bg-transparent outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FILTER DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setOpenFilter(!openFilter)}
            className="flex items-center justify-center gap-2 bg-[#0B0F17] border border-[#1A1F2B] px-4 py-2 rounded-lg text-sm w-full md:w-auto"
          >
            {statusFilter === "all"
              ? "All"
              : statusFilter === "active"
              ? "Active"
              : "Logged Out"}
            <ChevronDown size={16} />
          </button>

          {openFilter && (
            <div className="absolute right-0 mt-2 w-40 bg-[#0B0F17] border border-[#1A1F2B] rounded-lg shadow-lg z-10">
              {["all", "active", "logged_out"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setStatusFilter(item as any);
                    setOpenFilter(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-[#0F1420]"
                >
                  {item === "all"
                    ? "All"
                    : item === "active"
                    ? "Active"
                    : "Logged Out"}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm">
            <thead className="text-gray-400 border-b border-[#1A1F2B]">
              <tr>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Login Time</th>
                <th className="p-4 text-left">Location</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b border-[#111522] hover:bg-[#0F1420]">
                  <td className="p-4 whitespace-nowrap">{item.name}</td>
                  <td className="p-4 text-gray-400 whitespace-nowrap">{item.email}</td>
                  <td className="p-4 text-gray-400 whitespace-nowrap">{item.time}</td>
                  <td className="p-4 text-gray-400 whitespace-nowrap">{item.location}</td>

                  <td className="p-4">
                    {item.status === "active" ? (
                      <span className="bg-[#0a1f17] text-green-400 px-3 py-1 rounded-full text-xs flex items-center gap-1 w-fit">
                        <Activity size={12} /> Active
                      </span>
                    ) : (
                      <span className="bg-[#1a1d25] text-gray-300 px-3 py-1 rounded-full text-xs flex items-center gap-1 w-fit">
                        <LogOut size={12} /> Logged Out
                      </span>
                    )}
                  </td>

                  <td className="p-4 text-right">
                    <button className="cursor-pointer hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between p-4 text-sm text-gray-400">
          <p>Showing {filteredData.length} results</p>
        </div>
      </div>
    </div>
  );
}

/* 🔹 Reusable Stat Component */
function Stat({
  icon,
  color,
  bg,
  label,
  value,
}: {
  icon: React.ReactNode;
  color: string;
  bg: string;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5 flex items-center gap-4">
      <div className={`${bg} p-3 rounded-lg ${color}`}>{icon}</div>
      <div>
        <h2 className="text-xl">{value}</h2>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}