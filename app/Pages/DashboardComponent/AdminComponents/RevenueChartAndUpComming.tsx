"use client";

import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";


const chartData = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 2600 },
  { name: "Mar", value: 2400 },
  { name: "Apr", value: 3000 },
  { name: "May", value: 3400 },
  { name: "Jun", value: 2600 },
  { name: "Jul", value: 3600 },
  { name: "Aug", value: 3000 },
  { name: "Sep", value: 3300 },
  { name: "Oct", value: 2600 },
  { name: "Nov", value: 3800 },
  { name: "Dec", value: 3200 },
];

const bookings = [
  {
    name: "Mr. A. Smith",
    service: "Airport Transfer",
    time: "09:00 AM",
    status: "Confirmed",
  },
  {
    name: "Ms. R. Johnson",
    service: "Private Chauffeur",
    time: "11:30 AM",
    status: "Pending",
  },
  {
    name: "Mr. K. Williams",
    service: "Corporate Travel",
    time: "02:00 PM",
    status: "Confirmed",
  },
  {
    name: "Lady Hartfield",
    service: "Event Transport",
    time: "06:00 PM",
    status: "Confirmed",
  },
];




export default function RevenueChartAndUpComming() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 xl:grid-cols-3">
      
      {/* LEFT - CHART */}
      <div className="xl:col-span-2 bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5 sm:p-6">
        
        {/* HEADER */}
        <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-base font-semibold text-white sm:text-lg">
            Revenue Overview
          </h2>

          <div className="flex gap-2">
            {["7D", "1M", "3M", "1Y"].map((item) => (
              <button
                key={item}
                className={`px-3 py-1 text-xs sm:text-sm rounded-md transition ${
                  item === "1Y"
                    ? "bg-yellow-500 text-white"
                    : "bg-[#111] text-gray-400"
                }`}
              >

              
                
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* CHART */}
        <div className="h-[220px] sm:h-[260px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                tickLine={false}
                axisLine={false}
                fontSize={12}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  border: "1px solid #333",
                  borderRadius: "8px",
                }}
              />
              <Bar
                dataKey="value"
                fill="#1e3a8a"
                radius={[6, 6, 0, 0]}
                barSize={35}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      
      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5 sm:p-6">
        
        
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-white sm:text-lg">
            Upcoming Bookings
          </h2>

          <button className="text-xs text-yellow-500 sm:text-sm hover:underline">
            View all →
          </button>
        </div>

       
        <div className="space-y-3 sm:space-y-4">
          {bookings.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-[#111] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg"
            >
              <div>
                <p className="text-sm font-medium text-white sm:text-base">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400 sm:text-sm">
                  {item.service} · {item.time}
                </p>
              </div>

              <span
                className={`text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-md ${
                  item.status === "Confirmed"
                    ? "bg-green-900 text-green-400"
                    : "bg-yellow-900 text-yellow-400"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}