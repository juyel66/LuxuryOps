// components/StatsCards.tsx

"use client";

import { Calendar, DollarSign, Users, Car, FileText } from "lucide-react";

type StatCard = {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
};

const stats: StatCard[] = [
  {
    title: "Total Bookings",
    value: "248",
    subtitle: "↑ +12% this month",
    icon: <Calendar size={18} />,
    iconBg: "bg-[#3a2f0b]",
    iconColor: "text-yellow-400",
  },
  {
    title: "Monthly Revenue",
    value: "$38,400",
    subtitle: "↑ +8% vs last month",
    icon: <DollarSign size={18} />,
    iconBg: "bg-[#0d3a2f]",
    iconColor: "text-green-400",
  },
  {
    title: "Active Drivers",
    value: "14",
    subtitle: "2 currently on duty",
    icon: <Users size={18} />,
    iconBg: "bg-[#2d1b4d]",
    iconColor: "text-purple-400",
  },
  {
    title: "Fleet Availability",
    value: "32/50",
    subtitle: "18 vehicles booked",
    icon: <Car size={18} />,
    iconBg: "bg-[#3a2a0d]",
    iconColor: "text-yellow-500",
  },
  {
    title: "Pending Invoices",
    value: "7",
    subtitle: "$4,200 outstanding",
    icon: <FileText size={18} />,
    iconBg: "bg-[#3a0d0d]",
    iconColor: "text-red-400",
  },
];

export default function StatsCards() {
  return (
    <div className="w-full p-6 bg-black">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl border border-[#1f1f1f] bg-[#0b0b0b] p-5 text-white shadow-md hover:border-[#2a2a2a] transition-all duration-300"
          >
            {/* ICON */}
            <div
              className={`absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-lg ${item.iconBg}`}
            >
              <div className={`${item.iconColor}`}>{item.icon}</div>
            </div>

            {/* TITLE */}
            <p className="mb-3 text-sm text-gray-400">{item.title}</p>

            {/* VALUE */}
            <h2 className="mb-2 text-2xl font-semibold tracking-wide">
              {item.value}
            </h2>

            {/* SUBTEXT */}
            <p
              className={`text-sm ${
                item.subtitle.includes("↑") ? "text-green-400" : "text-gray-400"
              }`}
            >
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}