"use client";

import React, { useEffect, useState } from "react";
import { Bell } from "lucide-react";

export default function DashboardNavbar() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = now.toLocaleString(undefined, {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setDateTime(formatted);
    };

    updateTime(); // initial
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#05070B] border-b  border-[#1A1F2B] py-3 flex items-center justify-between">

      {/* LEFT */}
      <div>
        <h1 className="text-[18px] font-semibold text-white">
          Dashboard
        </h1>
        <p className="text-[12px] text-[#6B7280] ">
          {dateTime}
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <div className="w-9 h-9 rounded-md bg-[#0B0F17] border border-[#1A1F2B] flex items-center justify-center cursor-pointer hover:border-[#C89B3C] transition">
          <Bell size={16} className="text-[#9CA3AF]" />
        </div>

        {/* User Info */}
        <div className="leading-tight text-right">
          <p className="text-[14px] text-white font-medium">
            James Admin
          </p>
          <p className="text-[12px] text-[#6B7280]">
            Administrator
          </p>
        </div>
        

      </div>

    </div>
  );
}