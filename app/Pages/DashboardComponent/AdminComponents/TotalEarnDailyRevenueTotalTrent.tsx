"use client";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const totalEarnData = [
  { month: "Oct", value: 14500 },
  { month: "Nov", value: 16500 },
  { month: "Dec", value: 18000 },
  { month: "Jan", value: 16000 },
  { month: "Feb", value: 17500 },
  { month: "Mar", value: 19000 },
];

const dailyRevenueData = [
  { day: "Mon", value: 8000 },
  { day: "Thu", value: 12000 },
  { day: "Wed", value: 9500 },
  { day: "Tue", value: 15000 },
  { day: "Fri", value: 18000 },
  { day: "Sat", value: 22000 },
  { day: "Sun", value: 14000 },
];

const profitTrendData = [
  { month: "Oct", value: 10500 },
  { month: "Nov", value: 11500 },
  { month: "Dec", value: 13000 },
  { month: "Jan", value: 11200 },
  { month: "Feb", value: 12500 },
  { month: "Mar", value: 14000 },
];

export default function TotalEarnDailyRevenueTotalTrent() {
  return (
    <div className=" bg-[#07090D] text-white  mt-5 md:mt-0">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* TOTAL EARN */}
        <div className="lg:col-span-2 bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6">
          <h2 className="text-lg font-semibold">Total Earn</h2>
          <p className="mb-4 text-sm text-gray-400">
            6-month financial performance
          </p>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={totalEarnData}>
                <defs>
                  <linearGradient id="colorEarn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#07090D" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke="#1A1F2B" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />

                <Tooltip
                  contentStyle={{
                    background: "#0B0F17",
                    border: "1px solid #1A1F2B",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#ef4444"
                  fill="url(#colorEarn)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* DAILY REVENUE */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6">
          <h2 className="text-lg font-semibold">Daily Revenue</h2>
          <p className="mb-4 text-sm text-gray-400">
            Current week performance
          </p>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyRevenueData}>
                <CartesianGrid stroke="#1A1F2B" strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />

                <Tooltip
                  contentStyle={{
                    background: "#0B0F17",
                    border: "1px solid #1A1F2B",
                  }}
                />

                <Bar
                  dataKey="value"
                  fill="#C89B3C"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* PROFIT TREND */}
      <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6 mt-5">
        <h2 className="text-lg font-semibold">Profit Trend</h2>
        <p className="mb-4 text-sm text-gray-400">
          Monthly profit analysis
        </p>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={profitTrendData}>
              <CartesianGrid stroke="#1A1F2B" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />

              <Tooltip
                contentStyle={{
                  background: "#0B0F17",
                  border: "1px solid #1A1F2B",
                }}
              />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ r: 5, fill: "#10B981" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}