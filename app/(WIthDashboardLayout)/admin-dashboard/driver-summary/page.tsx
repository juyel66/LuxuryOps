"use client";

import { Eye, Download, Calendar } from "lucide-react";
import Image from "next/image";

export default function DriverSummary() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white  space-y-6">

      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl">Driver Summary</h1>
          <p className="text-sm text-gray-400">
            Complete driver performance summary
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 border border-[#C89B3C] text-[#C89B3C] px-4 py-2 rounded-md text-sm">
            <Eye size={16} /> Preview
          </button>

          <button className="flex items-center gap-2 bg-[#C89B3C] text-white px-4 py-2 rounded-md text-sm">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

    {/* FILTER */}
<div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-4">

  <div className="grid items-end grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

    {/* FROM */}
    <div className="flex flex-col w-full">
      <label className="mb-1 text-[14px] text-gray-400">From</label>
      <div className="flex items-center gap-2 bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md">
        <Calendar size={14} />
        <span className="text-sm">12-12-2026</span>
      </div>
    </div>

    {/* TO */}
    <div className="flex flex-col w-full">
      <label className="mb-1 text-[14px] text-gray-400">To</label>
      <div className="flex items-center gap-2 bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md">
        <Calendar size={14} />
        <span className="text-sm">12-12-2026</span>
      </div>
    </div>

    {/* DRIVER */}
    <div className="flex flex-col w-full">
      <label className="mb-1 text-[14px] text-gray-400">Driver</label>
      <select className="bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md text-sm w-full">
        <option>All Driver</option>
      </select>
    </div>

    {/* PAYSLIP TYPE */}
    <div className="flex flex-col w-full">
      <label className="mb-1 text-[14px] text-gray-400">Payslip Type</label>
      <select className="bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md text-sm w-full">
        <option>External (for Driver)</option>
      </select>
    </div>

    {/* BUTTON */}
    <div className="w-full">
      <button className="bg-[#C89B3C] text-white px-4 py-2 rounded-md text-sm w-full">
        Apply Filter
      </button>
    </div>

  </div>

</div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { label: "Total Jobs", value: "3" },
          { label: "Room Charge", value: "2", color: "text-green-400" },
          { label: "Cash Job", value: "1", color: "text-yellow-400" },
          { label: "Commission Paid", value: "BD$58", color: "text-red-400" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-4"
          >
            <p className="text-xs text-gray-400">{item.label}</p>
            <h3 className={`text-xl md:text-2xl mt-1 ${item.color || ""}`}>
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* TABLE */}
   <div className="overflow-x-auto">
  <table className="w-full text-sm text-left border-collapse">

    {/* HEADER */}
    <thead className="text-gray-400 border-b border-[#1A1F2B]">

      {/* TOP HEADER */}
      <tr>
        <th className="px-4 py-3">Rank</th>
        <th className="px-4 py-3">Driver</th>
        <th className="px-4 py-3">Total Jobs</th>
        <th className="px-4 py-3">Room Charge</th>
        <th className="px-4 py-3">Cash</th>

        <th className="px-4 py-3 text-center border-l border-[#1A1F2B]" colSpan={2}>
          Total Room Charge
        </th>

        <th className="px-4 py-3 text-center border-l border-[#1A1F2B]" colSpan={2}>
          Total Cash Payment
        </th>

        <th className="px-4 py-3 text-center border-l border-[#1A1F2B]" colSpan={2}>
          Total Delivery From Company
        </th>

        <th className="px-4 py-3 text-center border-l border-[#1A1F2B]" colSpan={2}>
          Total Delivery Payment to Company
        </th>
      </tr>

      {/* SUB HEADER */}
      <tr className="text-xs text-gray-500">
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>

        <th className="px-4 pb-2 border-l border-[#1A1F2B]">USD</th>
        <th className="px-4 pb-2">BDS</th>

        <th className="px-4 pb-2 border-l border-[#1A1F2B]">USD</th>
        <th className="px-4 pb-2">BDS</th>

        <th className="px-4 pb-2 border-l border-[#1A1F2B]">USD</th>
        <th className="px-4 pb-2">BDS</th>

        <th className="px-4 pb-2 border-l border-[#1A1F2B]">USD</th>
        <th className="px-4 pb-2">BDS</th>
      </tr>

    </thead>

    {/* BODY */}
    <tbody className="text-gray-300">

      {[1, 2, 3].map((_, i) => (
        <tr key={i} className="border-t border-[#111522]">

          <td className="px-4 py-3">{i + 1}</td>

          <td className="px-4 py-3">
            <div>
              <p className="text-white">
                {i === 0
                  ? "Ms. B. Johnson"
                  : i === 1
                  ? "Mr. A. Smith"
                  : "Mrs. D. Garcia"}
              </p>
              <p className="text-xs text-gray-500">
                DR00{i + 2}
              </p>
            </div>
          </td>

          <td className="px-4 py-3">1</td>
          <td className="px-4 py-3">1</td>

          <td className="px-4 py-3 text-green-400">
            {i === 1 ? "1" : "0"}
          </td>

          {/* GROUP DATA */}
          {[...Array(4)].map((_, g) => (
            <>
              <td className={`px-4 py-3 ${g === 0 ? "border-l border-[#1A1F2B]" : ""}`}>
                ${i === 1 ? "96.00" : "68.00"}
              </td>
              <td className="px-4 py-3">
                ${i === 1 ? "96.00" : "68.00"}
              </td>
            </>
          ))}

        </tr>
      ))}

    </tbody>

    {/* FOOTER / TOTAL */}
    <tfoot>
      <tr className="border-t border-[#1A1F2B] text-white font-semibold">

        <td className="px-4 py-3">Total</td>
        <td></td>

        <td className="px-4 py-3">3</td>
        <td className="px-4 py-3">2</td>
        <td className="px-4 py-3 text-green-400">1</td>

        {[...Array(4)].map((_, g) => (
          <>
            <td className={`px-4 py-3 ${g === 0 ? "border-l border-[#1A1F2B]" : ""}`}>
              $232.00
            </td>
            <td className="px-4 py-3">$232.00</td>
          </>
        ))}

      </tr>
    </tfoot>

  </table>
</div>
    </div>
  );
}