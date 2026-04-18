"use client";

import { CreditCard } from "lucide-react";

type Transaction = {
  name: string;
  date: string;
  amount: string;
  type: "credit" | "debit";
};

const transactions: Transaction[] = [
  {
    name: "Mohammed Al-Fayed",
    date: "Mar 26, 2026 14:30",
    amount: "+£2,500.00",
    type: "credit",
  },
  {
    name: "Sarah Williams",
    date: "Mar 26, 2026 16:45",
    amount: "+£850.00",
    type: "credit",
  },
  {
    name: "Fuel & Maintenance",
    date: "Mar 26, 2026 11:20",
    amount: "-£450.00",
    type: "debit",
  },
  {
    name: "Driver Payroll",
    date: "Mar 25, 2026 09:00",
    amount: "-£3,200.00",
    type: "debit",
  },
  {
    name: "David Chen",
    date: "Mar 25, 2026 18:15",
    amount: "+£1,200.00",
    type: "credit",
  },
];

export default function RecentTransactions() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white p-0 mt-5 md:p-2">

      {/* TRANSACTIONS CARD */}
      <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <p className="text-sm text-gray-400">
              Latest financial transactions
            </p>
          </div>

          <button className="border border-[#1A1F2B] px-4 py-1.5 rounded-md text-sm text-gray-300 hover:bg-[#111522]">
            View All
          </button>
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {transactions.map((tx, i) => {
            const isCredit = tx.type === "credit";

            return (
              <div
                key={i}
                className="flex items-center justify-between bg-[#07090D] border border-[#1A1F2B] rounded-lg px-4 py-4"
              >
                {/* LEFT */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                      isCredit
                        ? "bg-green-900/30"
                        : "bg-red-900/30"
                    }`}
                  >
                    <CreditCard
                      size={18}
                      className={isCredit ? "text-green-400" : "text-red-400"}
                    />
                  </div>

                  <div>
                    <p className="font-medium">{tx.name}</p>
                    <p className="text-xs text-gray-400">{tx.date}</p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p
                    className={`font-medium ${
                      isCredit ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {tx.amount}
                  </p>
                  <p className="text-xs text-gray-400">
                    {isCredit ? "Credit" : "Debit"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-3">

        {/* CARD 1 */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6">
          <p className="mb-2 text-sm text-gray-400">
            Average Transaction Value
          </p>
          <h3 className="text-2xl font-semibold">$746</h3>
          <p className="mt-2 text-sm text-green-400">
            +15.3% vs last month
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6">
          <p className="mb-2 text-sm text-gray-400">Collection Rate</p>
          <h3 className="text-2xl font-semibold">94.2%</h3>
          <p className="mt-2 text-sm text-green-400">
            +2.1% vs last month
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6">
          <p className="mb-2 text-sm text-gray-400">
            Outstanding Receivables
          </p>
          <h3 className="text-2xl font-semibold">$12,850</h3>
          <p className="mt-2 text-sm text-yellow-400">
            5 pending invoices
          </p>
        </div>

      </div>
    </div>
  );
}