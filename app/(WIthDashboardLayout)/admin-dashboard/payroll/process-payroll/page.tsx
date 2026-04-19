"use client";

import { AlertCircle } from "lucide-react";

export default function ProcessPayrollStep2() {
  const employees = [
    {
      name: "Michael Thompson",
      role: "Managing Director",
      amount: 8500,
      bonus: 0,
      deduction: 1020,
      net: "$7,480",
      checked: true,
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      amount: 8500,
      bonus: 300,
      deduction: 900,
      net: "$5,600",
      checked: true,
    },
    {
      name: "David Lee",
      role: "UX Designer",
      amount: 8500,
      bonus: 200,
      deduction: 500,
      net: "$4,200",
      checked: true,
    },
    {
      name: "Emily Chen",
      role: "Software Engineer",
      amount: 8500,
      bonus: 500,
      deduction: 750,
      net: "$6,750",
      checked: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090D] text-white p-4 md:p-8 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="font-serif text-3xl">Process Payroll</h1>
        <p className="text-sm text-gray-400">Step 2 of 2</p>
      </div>

      <div className="border-t border-[#1A1F2B]" />

      {/* ALERT */}
      <div className="bg-gradient-to-r from-[#3A2A00] to-[#1A1300] border border-[#C89B3C] rounded-md p-4 flex gap-3">
        <AlertCircle className="text-[#C89B3C]" size={18} />
        <div>
          <p className="text-sm font-medium">Review Payment Details</p>
          <p className="text-xs text-gray-400">
            Review and adjust individual payments. Add bonuses or modify deductions as needed before processing.
          </p>
        </div>
      </div>

      {/* SUMMARY CARD */}
      <div className="grid grid-cols-3 gap-4 bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6 text-center">
        <div>
          <p className="text-sm text-gray-400">Total Employees</p>
          <h2 className="mt-1 text-xl">7</h2>
        </div>

        <div>
          <p className="text-sm text-gray-400">Total Amount</p>
          <h2 className="text-xl mt-1 text-[#C89B3C]">$34,320</h2>
        </div>

        <div>
          <p className="text-sm text-gray-400">Period</p>
          <h2 className="mt-1 text-xl">April</h2>
        </div>
      </div>

      {/* SECTION TITLE */}
      <h2 className="text-lg text-gray-300">Employee Payments</h2>

      {/* EMPLOYEES */}
      <div className="space-y-4">
        {employees.map((emp, i) => (
          <div
            key={i}
            className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5"
          >
            {/* TOP */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked={emp.checked}
                  className="accent-[#C89B3C]"
                />
                <div>
                  <p className="font-medium">{emp.name}</p>
                  <p className="text-xs text-gray-500">{emp.role}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-400">Net Pay</p>
                <p className="text-[#C89B3C] font-medium">{emp.net}</p>
              </div>
            </div>

            {/* INPUTS */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

              {/* TOTAL */}
              <div>
                <label className="block mb-1 text-xs text-gray-400">
                  Total Amount
                </label>
                <input
                  type="number"
                  defaultValue={emp.amount}
                  className="w-full bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md"
                />
              </div>

              {/* BONUS */}
              <div>
                <label className="block mb-1 text-xs text-gray-400">
                  Bonus
                </label>
                <input
                  type="number"
                  defaultValue={emp.bonus}
                  className="w-full bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md"
                />
              </div>

              {/* DEDUCTION */}
              <div>
                <label className="block mb-1 text-xs text-gray-400">
                  Deductions
                </label>
                <input
                  type="number"
                  defaultValue={emp.deduction}
                  className="w-full bg-[#07090D] border border-[#1A1F2B] px-3 py-2 rounded-md"
                />
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* FOOTER BUTTONS */}
      <div className="flex flex-col gap-4 mt-8 md:flex-row">

        <button className="flex-1 border border-[#C89B3C] text-[#C89B3C] py-3 rounded-md">
          BACK
        </button>

        <button className="flex-1 bg-[#C89B3C] text-white py-3 rounded-md font-medium">
          PROCESS PAYROLL ($24,030)
        </button>

      </div>

    </div>
  );
}