"use client";

import {
  DollarSign,
  Calendar,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  YAxis,
} from "recharts";

const totalEarnData = [
  { month: "Oct", value: 145000 },
  { month: "Nov", value: 165000 },
  { month: "Dec", value: 180000 },
  { month: "Jan", value: 160000 },
  { month: "Feb", value: 175000 },
  { month: "Mar", value: 190000 },
];

const pieData = [
  { name: "Airport Transfer", value: 385 },
  { name: "Business Travel", value: 298 },
  { name: "VIP Events", value: 224 },
  { name: "City Tours", value: 156 },
  { name: "Long Distance", value: 112 },
];

const COLORS = ["#C89B3C", "#A87900", "#D4AF37", "#5A7FA6", "#AEB6BF"];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white pt-2 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="font-serif text-3xl">Analytics</h1>
        <p className="text-sm text-gray-400">
          Manage driver salaries and payments
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-4 md:grid-cols-4">
        <Stat icon={DollarSign} title="Total Revenue" value="$142,800" color="#22c55e" />
        <Stat icon={Calendar} title="Total Bookings" value="1,248" color="#facc15" />
        <Stat icon={TrendingUp} title="Avg Booking Value" value="$285" color="#a855f7" />
        <Stat icon={Users} title="Client Retention" value="87%" color="#facc15" />
      </div>

      {/* CHARTS */}
      <div className="grid gap-6 md:grid-cols-3">

        {/* MONTHLY REVENUE CHART */}
        <div className="lg:col-span-2 bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6">
          <h2 className="text-lg font-semibold">Monthly Revenue 2026</h2>
          <p className="mb-4 text-sm text-gray-400">
            6-month financial performance
          </p>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={totalEarnData}>
                <defs>
                  <linearGradient id="colorEarn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.65} />
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
                  stroke="#D4A017"
                  fill="url(#colorEarn)"
                  strokeWidth={2.5}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE CHART */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
          <h2>Service Distribution</h2>
          <p className="mb-4 text-sm text-gray-400">
            Bookings by service type
          </p>

          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* LEGEND */}
          <div className="mt-4 space-y-2 text-sm">
            {pieData.map((item, i) => (
              <div key={i} className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: COLORS[i] }}
                  />
                  {item.name}
                </span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="grid gap-6 md:grid-cols-2">

        {/* TOP CLIENTS */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
          <h2 className="mb-4">Top Clients by Revenue</h2>

          {[
            { name: "Apex Corp", value: "$18,200" },
            { name: "HNW Client", value: "$12,600" },
            { name: "Corporate Account X", value: "$9,200" },
            { name: "Lady Hartfield", value: "$7,600" },
          ].map((c, i) => (
            <div key={i} className="flex justify-between py-2 border-b border-[#1A1F2B]">
              <span className="text-gray-400">{i + 1}. {c.name}</span>
              <span className="text-[#C89B3C]">{c.value}</span>
            </div>
          ))}
        </div>

        {/* DRIVER PERFORMANCE */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
          <h2 className="mb-4">Driver Performance</h2>

          {[
            { name: "James Harrison", jobs: 198, earning: "$25,200", rating: "5" },
            { name: "Marcus Thompson", jobs: 142, earning: "$18,400", rating: "4.9" },
            { name: "Omar Al-Rashid", jobs: 112, earning: "$14,400", rating: "4.8" },
            { name: "Daniel Kowalski", jobs: 101, earning: "$14,100", rating: "4.7" },
          ].map((d, i) => (
            <div key={i} className="flex justify-between py-2 border-b border-[#1A1F2B]">
              <div>
                <p>{d.name}</p>
                <p className="text-xs text-gray-500">{d.jobs} jobs</p>
              </div>

              <div className="text-right">
                <p className="text-[#C89B3C]">{d.earning}</p>
                <p className="text-xs text-gray-400">{d.rating} ⭐</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* STAT CARD */
function Stat({ icon: Icon, title, value, color }: any) {
  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
      <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
        <Icon size={16} style={{ color }} />
        {title}
      </div>
      <h2 className="text-xl">{value}</h2>
    </div>
  );
}