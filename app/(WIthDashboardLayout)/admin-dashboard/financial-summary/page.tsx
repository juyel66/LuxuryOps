"use client";

import { Calendar, Filter, Eye, Download, FileText } from "lucide-react";
import Image from "next/image";
import dollarIcons from "../../../../public/images/Icon (49).svg"
import report from "../../../../public/images/Icon (54).svg"
import dollarIconsGreen from "../../../../public/images/Icon (55).svg"
import filterIcons from "../../../../public/images/Icon (56).svg"

export default function FinancialSummary() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white  space-y-6">
      {/* HEADER */}
   <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

  {/* LEFT */}
  <div>
    <h1 className="text-xl md:text-2xl font-cardo">
      Financial Summary
    </h1>
    <p className="text-sm text-gray-400">
      Detailed breakdown of room charged and cash services
    </p>
  </div>

  {/* RIGHT BUTTONS */}
  <div className="flex flex-col w-full gap-3 sm:flex-row md:w-auto">

    <button className="flex items-center justify-center gap-2 bg-[#C89B3C] text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto">
      <FileText size={16} /> Invoice
    </button>

    <button className="flex items-center justify-center gap-2 border border-[#C89B3C] text-[#C89B3C] px-4 py-2 rounded-md text-sm w-full sm:w-auto">
      <Eye size={16} /> Preview
    </button>

    <button className="flex items-center justify-center gap-2 bg-[#C89B3C] text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto">
      <Download size={16} /> Export
    </button>

  </div>
</div>

      {/* TOP CARDS */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icons: dollarIcons,
            title: "Net Due to VVIP Luxury",
            value: "$13,010.40",
            color: "text-yellow-400",
          },
          {
            icons: report,
            title: "Total Room Charged Services",
            value: "$13,010.40",
            color: "text-blue-400",
          },
          {
            icons: dollarIconsGreen,
            title: "Total Cash Payments",
            value: "$5,768.00",
            color: "text-green-400",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5"
          >

            <div className="flex items-center gap-2">
                <Image src={card.icons} alt="icon" width={26} height={26} />
            <p className="text-sm text-gray-400">{card.title}</p>
            </div>
            <h3 className={`text-2xl font-semibold mt-2 ${card.color}`}>
              {card.value}
            </h3>
          </div>
        ))}
      </div>

      {/* FILTER */}
    {/* FILTER */}
<div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-4">

  <div className="grid items-end grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">

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
      <label className="mb-1 text-[14px] text-gray-400">To:</label>
      <div className="flex items-center gap-2 bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md">
        <Calendar size={14} />
        <span className="text-sm">12-12-2026</span>
      </div>
    </div>

    {/* DRIVER */}
    <div className="flex flex-col w-full">
      <label className="mb-1 text-[14px] text-gray-400">Payment Method</label>
      <select className="bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md text-sm w-full">
        <option>All</option>
      </select>
    </div>

    {/* PAYSLIP TYPE */}
    <div className="flex flex-col w-full">
      <label className="mb-1 text-[14px] text-gray-400">Hotel</label>
      <select className="bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md text-sm w-full">
        <option>All Entities</option>
      </select>
    </div>
    <div className="flex flex-col w-full">
      <label className="mb-1 text-[14px] text-gray-400">Driver</label>
      <select className="bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md text-sm w-full">
        <option>All Drivers</option>
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
      {/* HIGHLIGHT BAR */}
      <div className="bg-[#C89B3C] text-white  text-center py-3 rounded-md font- font-cardo">
        NET DUE TO VVIP LUXURY: $9,757.8
      </div>

      {/* TABLES */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* LEFT TABLE */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-4">
          <h3 className="mb-4 text-yellow-400">Room Charged Services</h3>

          <table className="w-full text-sm">
            <thead className="text-gray-400">
              <tr>
                <th className="py-2 text-left">Date</th>
                <th>Amount Charged (20%)</th>
                <th>Colony Club's 20%</th>
                <th>Due to VVIP- Room Charge</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <tr key={i} className="border-t border-[#1A1F2B] text-center">
                  <td className="py-2 text-left">19 Mar 2026</td>
                  <td>$2683.00</td>
                  <td>$536.60</td>
                  <td>$2146.40</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT TABLE */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-4">
          <h3 className="mb-4 text-yellow-400">Services Paid by Cash</h3>

          <table className="w-full text-sm">
            <thead className="text-gray-400">
              <tr>
                <th className="py-2 text-left">Date</th>
                <th>Amount Charged (BDS)</th>
                <th>Colony Club's 20%</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <tr key={i} className="border-t border-[#1A1F2B] text-center">
                  <td className="py-2 text-left">19 Mar 2026</td>
                  <td>$2683.00</td>
                  <td>$536.60</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CLIENT TABLE */}
      <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-4">
        <h3 className="mb-4 tracking-widest text-yellow-400 font-cardo">
          CLIENT & SERVICE DETAILS
        </h3>

      <div className="overflow-x-auto">
  <table className="w-full text-sm border-separate border-spacing-y-2">
    
    <thead className="text-gray-400">
      <tr className="text-left">
        <th className="px-4 py-1">Date</th>
        <th className="px-4 py-1">Booking ID</th>
        <th className="px-4 py-1">Customer</th>
        <th className="px-4 py-1">Entity</th>
        <th className="px-4 py-1">Room</th>
        <th className="px-4 py-1">Service</th>
        <th className="px-4 py-1">Vehicle</th>
        <th className="px-4 py-1">Reg</th>
      </tr>
    </thead>

    <tbody>
      {[1, 2, 3, 4].map((_, i) => (
        <tr
          key={i}
          className="bg-[#0B0F17] border border-[#1A1F2B] rounded-lg"
        >
          <td className="px-4 py-2">08/04/2026</td>
          <td className="px-4 py-2">#248</td>
          <td className="px-4 py-2">Mr. A Smith</td>
          <td className="px-4 py-2">The Colony Club</td>
          <td className="px-4 py-2">321</td>
          <td className="px-4 py-2">Airport Transport</td>
          <td className="px-4 py-2">Range Rover</td>
          <td className="px-4 py-2">HL73</td>
        </tr>
      ))}
    </tbody>

  </table>
</div>
      </div>
    </div>
  );
}
