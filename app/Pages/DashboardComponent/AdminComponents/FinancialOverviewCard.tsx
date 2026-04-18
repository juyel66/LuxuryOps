"use client";

import { ArrowUpRight, ArrowDownRight, Download } from "lucide-react";
import dollarIcons from "../../../../public/images/Icon (49).svg"
import dollarIcons1 from "../../../../public/images/Icon (50).svg"
import dollarIcon2 from "../../../../public/images/Icon (51).svg"
import dollarIcons3 from "../../../../public/images/Icon (52).svg"
import Image from "next/image";

export default function FinancialOverview() {
  return (
    <div className=" bg-[#07090D] text-white md:p-2">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl">
            Financial Overview — VVIP
          </h1>
          <p className="mt-1 text-gray-400">
            Colony Club revenue, hotel commissions & net earnings — BDS & USD
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#C89B3C] text-white px-5 py-2 rounded-md font-medium">
          <Download size={16} />
          Export
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

        {/* CARD 1 */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1F1A0A]">
              <span className="text-[#C89B3C] text-lg">
                <Image src={dollarIcons} alt="dollar" width={26} height={26} />
              </span>
            </div>
            <span className="flex items-center gap-1 text-sm text-green-400">
              <ArrowUpRight size={14} /> +23.1%
            </span>
          </div>

          <h2 className="text-2xl font-semibold">$185,000</h2>
          <p className="mt-1 text-sm text-gray-400">
            Total Revenue (MTD)
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0F2A1E]">
             <Image src={dollarIcons1} alt="dollar" width={26} height={26} />
            </div>
            <span className="flex items-center gap-1 text-sm text-green-400">
              <ArrowUpRight size={14} /> +18.5%
            </span>
          </div>

          <h2 className="text-2xl font-semibold">$136,000</h2>
          <p className="mt-1 text-sm text-gray-400">
            Net Profit (MTD)
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#2A0F12]">
              <Image src={dollarIcon2} alt="dollar" width={26} height={26} />
            </div>
            <span className="flex items-center gap-1 text-sm text-red-400">
              <ArrowDownRight size={14} /> +8.3%
            </span>
          </div>

          <h2 className="text-2xl font-semibold">$49,000</h2>
          <p className="mt-1 text-sm text-gray-400">
            Total Expenses (MTD)
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1F1A0A]">
              <span className="text-[#C89B3C] text-lg">
                <Image src={dollarIcons3} alt="dollar" width={26} height={26} />
              </span>
            </div>
            <span className="flex items-center gap-1 text-sm text-green-400">
              <ArrowUpRight size={14} /> 73.5%
            </span>
          </div>

          <h2 className="text-2xl font-semibold">73.5%</h2>
          <p className="mt-1 text-sm text-gray-400">
            Profit Margin
          </p>
        </div>

      </div>
    </div>
  );
}