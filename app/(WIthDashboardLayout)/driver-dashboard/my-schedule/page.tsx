"use client";

import React from "react";
import {
  DollarSign,
  Calendar,
  Clock,
  KeyRound,
  MapPin,
  Car,
  CheckCircle,
  CarIcon,
} from "lucide-react";

export default function DriverDashboard() {
  return (
    <div className="min-h-screen mt-5 text-white bg-black">
      <div className="mx-auto space-y-6 ">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">
            Welcome back, Marcus Thompson
          </h1>
          <p className="text-sm text-gray-400">
            Submit your daily jobs and track your earnings
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    
          <StatCard title="Today's Trips" value="20" icon={<Calendar />} />
          <StatCard title="Upcoming" value="50"  icon={<Clock />} />
          <StatCard title="Today's Earning" value="$142"  icon={<DollarSign />} />
        </div>

        {/* Today Schedule */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Today's Schedule</h2>
            <button className="bg-[#C89B3C] text-white px-4 py-2 rounded-md text-sm">
              + Submit New Job
            </button>
          </div>

          {/* Card */}
          <ScheduleCard
            name="Sarah Anderson"
            price="$240"
            status="upcoming"
            button="START TRIP"
            color="yellow"
          />

          <ScheduleCard
            name="James Wilson"
            price="$250"
            status="in progress"
            button="START TRIP"
            color="blue"
          />
        </div>

        {/* Completed */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium">Completed Trips</h2>

          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#0B0F17] border border-[#1A1F2B] rounded-lg px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-md w-9 h-9 bg-green-500/20">
                  <Calendar size={18} className="text-[#10B981]" />
                </div>
                <div>
                  <p className="text-sm">Sarah Anderson</p>
                  <p className="text-xs text-gray-400">BK-2024-144</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-yellow-400">$240</p>
                <p className="text-xs text-gray-400">31/03/2024 at 08:00</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}



function StatCard({ title, value, icon }: any) {
  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="text-xs text-gray-400">{title}</p>
        <h3 className="text-lg font-semibold">{value}</h3>
      </div>
      <div className="flex items-center justify-center w-10 h-10 text-blue-400 rounded-full bg-blue-500/20">
        {icon}
      </div>
      
      
    </div>
  );
}



function ScheduleCard({ name, price, status, button, color }: any) {
  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5 space-y-4">

      {/* Top */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-yellow-500/20">
            <Car size={18} className="text-yellow-400" />
          </div>

          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-gray-400">Mercedes-Benz S-Class</p>
          </div>

          <span className="text-[10px] bg-[#1A1F2B] px-2 py-1 rounded">
            BK-2026-146
          </span>

          <span className="text-[10px] bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
            {status}
          </span>
        </div>

        <p className="font-medium text-yellow-400">{price}</p>
      </div>

      {/* Locations */}
      <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
        <div className="flex items-start gap-2">
          <MapPin size={16} className="mt-2.5 text-yellow-400" />
          <div>
            <p className="text-xs text-gray-400">Pickup Location</p>
            <p>Heathrow Airport Terminal 5</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <MapPin size={16} className="mt-2.5 text-red-400" />
          <div>
            <p className="text-xs text-gray-400">Drop Location</p>
            <p>One Hyde Park, Knightsbridge</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <Clock size={16} className="text-gray-400" />
        <p className="text-xs text-gray-400">Pickup at 15:00</p>
        </div>

        <button
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            color === "yellow"
              ? "bg-[#C89B3C] text-white"
              : "bg-[#C89B3C] text-white"
          }`}
        >
          {button}
        </button>
      </div>
    </div>
  );
}