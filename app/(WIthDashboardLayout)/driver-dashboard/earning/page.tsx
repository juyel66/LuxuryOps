"use client";

import React from "react";
import { Calendar, Filter } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ================= DUMMY DATA ================= */

const chartData = [
  { month: "Oct", value: 14500 },
  { month: "Nov", value: 16500 },
  { month: "Dec", value: 18000 },
  { month: "Jan", value: 16000 },
  { month: "Feb", value: 17500 },
  { month: "Mar", value: 19000 },
];

const weeklyData = [
  { day: "Mon", value: 850 },
  { day: "Tue", value: 900 },
  { day: "Wed", value: 650 },
  { day: "Thu", value: 1050 },
  { day: "Fri", value: 1150 },
  { day: "Sat", value: 450 },
  { day: "Sun", value: 250 },
];



export default function EarningsPage() {
  return (
    <div className="min-h-screen mt-5 text-white bg-black ">
      <div className="mx-auto space-y-6 ">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold">Earnings</h1>
          <p className="text-sm text-gray-400">
            Track your earnings and performance metrics
          </p>
        </div>

        {/* FILTER */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-4 flex flex-wrap items-center gap-3">

          <Filter size={16} className="text-yellow-400" />

          <DateBox label="From" />
          <DateBox label="To" />

          <button className="bg-[#C89B3C] text-white  px-4 py-2 rounded-md text-sm font-medium">
            Apply Filter
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard title="Room Charge Jobs" value="76" sub="Colony Club – billed" />
          <StatCard title="Cash Jobs" value="39" sub="Paid by guest directly" />
          <StatCard title="Total Jobs" value="115" sub="Mar 2–21, 2026" />
          <StatCard title="Net Payable (BDS)" value="$7,565" sub="Room earnings net" />
          <StatCard title="Cash Net (BDS)" value="$3,022" sub="After 20% hotel cut" />
          <StatCard title="$10,587" value="115" sub="Your total earnings" />
        </div>

        {/* CHART + WEEKLY */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* CHART */}
          <div className="lg:col-span-2 bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
            <h3 className="mb-4 text-lg font-medium">
              Monthly Performance
            </h3>

            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  
                  <defs>
                    <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9333EA" stopOpacity={0.4}/>
                      <stop offset="100%" stopColor="#9333EA" stopOpacity={0}/>
                    </linearGradient>
                  </defs>

                  <XAxis
                    dataKey="month"
                    stroke="#6B7280"
                    tick={{ fontSize: 12 }}
                  />

                  <YAxis
                    stroke="#6B7280"
                    tick={{ fontSize: 12 }}
                  />

                  <Tooltip
                    contentStyle={{
                      background: "#0B0F17",
                      border: "1px solid #1A1F2B",
                      borderRadius: "8px",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#EF4444"
                    strokeWidth={2}
                    fill="url(#colorFill)"
                  />

                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* WEEKLY */}
          <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5 space-y-4">

            <h3 className="text-lg font-medium">
              This Week's Breakdown
            </h3>

            {weeklyData.map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{item.day}</span>
                  <span>${item.value}</span>
                </div>

                <div className="w-full bg-[#070A10] rounded h-6">
                  <div
                    className="h-6 bg-[#C89B3C] rounded"
                    style={{ width: `${item.value / 12}%` }}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function DateBox({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 bg-[#070A10] border border-[#1A1F2B] rounded-md px-3 py-2">
      <span className="text-xs text-gray-400">{label}:</span>
      <span className="text-sm">12-12-2026</span>
      <Calendar size={14} className="text-gray-400" />
    </div>
  );
}

function StatCard({ title, value, sub }: any) {
  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-lg p-4">
      <p className="text-xs text-gray-400">{title}</p>
      <h3 className="mt-1 text-lg font-semibold">{value}</h3>
      <p className="mt-1 text-xs text-gray-400">{sub}</p>
    </div>
  );
}