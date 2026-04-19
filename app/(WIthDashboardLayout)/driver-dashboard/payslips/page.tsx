"use client";

import React from "react";
import { DollarSign, FileText, Calendar, Search, Download } from "lucide-react";

export default function PayslipPage() {
  return (
    <div className="min-h-screen mt-5 text-white bg-black ">
      <div className="mx-auto space-y-6 ">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Payslips</h1>
          <p className="text-sm text-gray-400">
            Download and view your payment records
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <StatCard
            title="Total Earnings"
            value="$39,660"
            icon={<DollarSign />}
          />

          <StatCard
            title="Total Payslips"
            value="2"
            icon={<FileText />}
          />

          <StatCard
            title="Latest Payment"
            value="$14,500"
            icon={<Calendar />}
          />

        </div>

        {/* Search */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-3 flex items-center gap-3">
          <Search size={18} className="text-gray-500" />
          <input
            placeholder="Search payslips by ID or month..."
            className="w-full text-sm bg-transparent outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Payslips */}
        <div className="space-y-4">

          <PayslipCard month="March 2026" />
          <PayslipCard month="April 2026" />

        </div>

      </div>
    </div>
  );
}

/* ================= STAT ================= */

function StatCard({ title, value, icon }: any) {
  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="text-xs text-gray-400">{title}</p>
        <h3 className="text-lg font-semibold">{value}</h3>
      </div>

      <div className="flex items-center justify-center w-10 h-10 text-yellow-400 rounded-full bg-yellow-500/20">
        {icon}
      </div>
    </div>
  );
}

/* ================= PAYSLIP CARD ================= */

function PayslipCard({ month }: { month: string }) {
  return (
    <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5 space-y-4">

      {/* Top */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-yellow-500/20">
            <FileText size={18} className="text-yellow-400" />
          </div>

          <div>
            <p className="text-sm font-medium">{month}</p>
            <p className="text-xs text-gray-400">PS-2026-03</p>
          </div>
        </div>

        <button className="bg-[#C89B3C] text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 w-full sm:w-auto justify-center">
          <Download size={14} />
          Download PDF
        </button>
      </div>

      {/* Middle */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {/* Gross */}
        <div className="bg-[#070A10] border border-[#1A1F2B] rounded-lg p-4">
          <p className="text-xs text-gray-400">Gross Pay</p>
          <h3 className="mt-1 text-lg font-semibold">$18,400</h3>
        </div>

        {/* Net */}
        <div className="bg-[#C89B3C]/20 border border-[#C89B3C]/30 rounded-lg p-4">
          <p className="text-xs text-yellow-400">Net Pay</p>
          <h3 className="mt-1 text-lg font-semibold text-yellow-400">
            $14,500
          </h3>
        </div>

      </div>

      {/* Bottom */}
      <div className="grid grid-cols-3 gap-4 text-sm">

        <div>
          <p className="text-xs text-gray-400">Tax</p>
          <p className="mt-1">$3,680</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Total Trips</p>
          <p className="mt-1">42</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Hours Worked</p>
          <p className="mt-1">168h</p>
        </div>

      </div>

    </div>
  );
}