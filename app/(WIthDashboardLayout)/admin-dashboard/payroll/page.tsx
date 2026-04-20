"use client";

import {
  DollarSign,
  CheckCircle,
  Users,
  Calendar,
  Search,
  Plus,
  AlertCircle,
  X,

} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Payroll() {
  const [open, setOpen] = useState(false);

  const rows = [
    {
      id: "PAY-001",
      name: "Ms. B. Johnson",
      code: "DR002",
      salary: "$4,500",
      bonus: "+$850",
      deduction: "-$450",
      total: "$4,900",
      status: "Paid",
    },
    {
      id: "PAY-002",
      name: "Dr. C. Lee",
      code: "DR003",
      salary: "$4,200",
      bonus: "+$620",
      deduction: "-$420",
      total: "$4,400",
      status: "Pending",
    },
    {
      id: "PAY-003",
      name: "Mr. E. Martinez",
      code: "DR005",
      salary: "$4,800",
      bonus: "+$950",
      deduction: "-$480",
      total: "$5,270",
      status: "Processing",
    },
    {
      id: "PAY-003",
      name: "Mr. E. Martinez",
      code: "DR005",
      salary: "$4,800",
      bonus: "+$950",
      deduction: "-$480",
      total: "$5,270",
      status: "Processing",
    },
    {
      id: "PAY-003",
      name: "Mr. E. Martinez",
      code: "DR005",
      salary: "$4,800",
      bonus: "+$950",
      deduction: "-$480",
      total: "$5,270",
      status: "Processing",
    },
    {
      id: "PAY-003",
      name: "Mr. E. Martinez",
      code: "DR005",
      salary: "$4,800",
      bonus: "+$950",
      deduction: "-$480",
      total: "$5,270",
      status: "Processing",
    },
    {
      id: "PAY-003",
      name: "Mr. E. Martinez",
      code: "DR005",
      salary: "$4,800",
      bonus: "+$950",
      deduction: "-$480",
      total: "$5,270",
      status: "Processing",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090D] text-white mt-5">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl">Driver Payroll & Payslips</h1>
          <p className="text-sm text-gray-400">
            Manage chauffeur earnings, Colony Club deductions & generate payslips
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 cursor-pointer bg-[#C89B3C] px-5 py-2 rounded-md text-white font-medium"
        >
          <Plus size={16} /> Generate Payslips
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { icon: DollarSign, value: "$23,150", label: "Total Payroll", color: "#C89B3C" },
          { icon: CheckCircle, value: "2/5", label: "Payments Processed", color: "#22c55e" },
          { icon: Users, value: "$3,620", label: "Total Bonuses", color: "#eab308" },
          { icon: Calendar, value: "$2,170", label: "Total Deductions", color: "#ef4444" },
        ].map((c, i) => (
          <div key={i} className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg"
              style={{ background: `${c.color}20` }}>
              <c.icon size={18} color={c.color} />
            </div>
            <h2 className="text-xl">{c.value}</h2>
            <p className="text-sm text-gray-400">{c.label}</p>
          </div>
        ))}
      </div>

      {/* SEARCH */}
      <div className="flex gap-3">
        <div className="flex items-center flex-1 bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md">
          <Search size={16} className="mr-2 text-gray-400" />
          <input placeholder="Search..." className="w-full text-sm bg-transparent outline-none"/>
        </div>

        <button className="bg-[#0B0F17] border border-[#1A1F2B] px-4 py-2 rounded-md text-sm cursor-pointer">
          Pay Period
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-[#1A1F2B]">
            <tr>
              <th className="p-3 text-left">Payroll ID</th>
              <th className="text-left">Driver</th>
              <th>Base</th>
              <th>Bonus</th>
              <th>Deduction</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-[#1A1F2B] text-center">
                <td className="text-[#C89B3C] text-left p-3">{r.id}</td>
                <td className="text-left">
                  <p>{r.name}</p>
                  <p className="text-xs text-gray-500">{r.code}</p>
                </td>
                <td>{r.salary}</td>
                <td className="text-green-400">{r.bonus}</td>
                <td className="text-red-400">{r.deduction}</td>
                <td className="text-[#C89B3C]">{r.total}</td>
                <td>19 Mar 2026</td>
                <td>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    r.status === "Paid"
                      ? "bg-green-900/30 text-green-400"
                      : "bg-yellow-900/30 text-yellow-400"
                  }`}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">

          <div className="w-full max-w-3xl bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6 relative">

            {/* CLOSE */}
            <button onClick={() => setOpen(false)} className="absolute text-gray-400 right-4 top-4">
              <X />
            </button>

            <h2 className="font-serif text-2xl">Process Payroll</h2>
            <p className="mb-6 text-sm text-gray-400">Step 1 of 2</p>

            <div className="border-t border-[#1A1F2B] mb-6"/>

            {/* ALERT */}
            <div className="bg-[#3A2A00]/40 border border-[#C89B3C] p-4 rounded-md flex gap-3 mb-6">
              <AlertCircle className="text-[#C89B3C]" />
              <div>
                <p className="text-sm font-medium">Payroll Period Setup</p>
                <p className="text-xs text-gray-400">
                  Select the pay period for this payroll run.
                </p>
              </div>
            </div>

            <h3 className="mb-4 text-lg">Pay Period Information</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Period Name</label>
                <input placeholder="Period Name" className="w-full mt-1 bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md"/>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm text-gray-400">Period Start Date</label>
                  <input type="date" className="w-full mt-1 bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md"/>
                </div>

                <div>
                  <label className="text-sm text-gray-400">Period End Date</label>
                  <input type="date" className="w-full mt-1 bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md"/>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 border border-[#C89B3C] text-[#C89B3C] py-3 rounded-md"
              >
                CANCEL
              </button>

              <Link href="/admin-dashboard/payroll/process-payroll" className="flex-1 bg-[#C89B3C] text-center text-white py-3 rounded-md font-medium">
                CONTINUE TO PAYMENT DETAILS
              </Link>
            </div>

          </div>
        </div>
      )}


      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
          <p className="text-sm text-gray-400">Average Salary</p>
          <h3 className="mt-1 text-xl">$4,630</h3>
          <p className="mt-1 text-xs text-gray-500">
            Per driver this period
          </p>
        </div>

        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
          <p className="text-sm text-gray-400">Bonus Rate</p>
          <h3 className="mt-1 text-xl">17%</h3>
          <p className="mt-1 text-xs text-green-400">
            Of base salary
          </p>
        </div>

        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
          <p className="text-sm text-gray-400">Deduction Rate</p>
          <h3 className="mt-1 text-xl">10%</h3>
          <p className="mt-1 text-xs text-gray-500">
            Of base salary
          </p>
        </div>

      </div>

    </div>
  );
}