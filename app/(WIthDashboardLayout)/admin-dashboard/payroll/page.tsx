"use client";

import {
  DollarSign,
  CheckCircle,
  Users,
  Calendar,
  Search,
  Plus,
} from "lucide-react";
import Link from "next/link";

export default function Payroll() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white p-4 md:p-8 space-y-6">

      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl">
            Driver Payroll & Payslips
          </h1>
          <p className="text-sm text-gray-400">
            Manage chauffeur earnings, Colony Club deductions & generate payslips
          </p>
        </div>

        <Link href="/admin-dashboard/payroll/generate-payslips" className="flex items-center gap-2 bg-[#C89B3C] text-white px-5 py-2 rounded-md text-sm font-medium">
          <Plus size={16} /> Generate Payslips
        </Link>
      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        {/* CARD */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
          <div className="w-10 h-10 bg-[#1F1A0A] rounded-lg flex items-center justify-center mb-4">
            <DollarSign className="text-[#C89B3C]" size={18} />
          </div>
          <h2 className="text-xl">$23,150</h2>
          <p className="mt-1 text-sm text-gray-400">Total Payroll</p>
        </div>

        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-green-900/30">
            <CheckCircle className="text-green-400" size={18} />
          </div>
          <h2 className="text-xl">2/5</h2>
          <p className="mt-1 text-sm text-gray-400">Payments Processed</p>
        </div>

        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-yellow-900/30">
            <Users className="text-yellow-400" size={18} />
          </div>
          <h2 className="text-xl">$3,620</h2>
          <p className="mt-1 text-sm text-gray-400">Total Bonuses</p>
        </div>

        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-red-900/30">
            <Calendar className="text-red-400" size={18} />
          </div>
          <h2 className="text-xl">$2,170</h2>
          <p className="mt-1 text-sm text-gray-400">Total Deductions</p>
        </div>

      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-center gap-2 flex-1 bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-3 py-2">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Search by payroll ID or driver name..."
            className="w-full text-sm bg-transparent outline-none"
          />
        </div>

        <select className="bg-[#0B0F17] border border-[#1A1F2B] px-3 py-2 rounded-md text-sm">
          <option>Pay Period</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">

          <thead className="text-gray-400 border-b border-[#1A1F2B]">
            <tr>
              <th className="p-3 text-left">Payroll ID</th>
              <th className="text-left">Driver</th>
              <th>Base Salary</th>
              <th>Bonuses</th>
              <th>Deductions</th>
              <th>Total Pay</th>
              <th>Payment Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                id: "PAY-001",
                name: "Ms. B. Johnson",
                salary: "$4,500",
                bonus: "+$850",
                deduction: "-$450",
                total: "$4,900",
                status: "Paid",
                color: "green",
              },
              {
                id: "PAY-002",
                name: "Dr. C. Lee",
                salary: "$4,200",
                bonus: "+$620",
                deduction: "-$420",
                total: "$4,400",
                status: "Pending",
                color: "yellow",
              },
              {
                id: "PAY-003",
                name: "Mr. E. Martinez",
                salary: "$4,800",
                bonus: "+$950",
                deduction: "-$480",
                total: "$5,270",
                status: "Processing",
                color: "yellow",
              },
            ].map((row, i) => (
              <tr key={i} className="border-b border-[#1A1F2B] text-center">
                <td className="p-3 text-left text-[#C89B3C]">{row.id}</td>

                <td className="text-left">
                  <p>{row.name}</p>
                  <p className="text-xs text-gray-500">DR00{i}</p>
                </td>

                <td>{row.salary}</td>
                <td className="text-green-400">{row.bonus}</td>
                <td className="text-red-400">{row.deduction}</td>
                <td className="text-[#C89B3C]">{row.total}</td>
                <td>19 Mar 2026</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      row.color === "green"
                        ? "bg-green-900/30 text-green-400"
                        : "bg-yellow-900/30 text-yellow-400"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

          {/* TOTAL */}
          <tfoot>
            <tr className="font-semibold text-center">
              <td className="p-3 text-left">Total</td>
              <td></td>
              <td>$21,700</td>
              <td className="text-green-400">+$3,620</td>
              <td className="text-red-400">-$2,170</td>
              <td className="text-[#C89B3C]">$23,150</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>

        </table>
      </div>

      {/* BOTTOM CARDS */}
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