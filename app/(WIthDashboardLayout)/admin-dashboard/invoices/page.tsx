import React from "react";
import {
  Search,
  ChevronDown,
  Eye,
  Download,
  Trash2,
  Pencil,
  Plus,
} from "lucide-react";
import Link from "next/link";

const invoices = Array(9).fill({
  id: "INV-2026-0248",
  name: "Mr. A. Smith",
  service: "Airport Transfer",
  issue: "10 Mar 2026",
  due: "19 Mar 2026",
  amount: "$2,500",
});

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Paid":
      return "bg-emerald-500/10 text-emerald-400";
    case "Pending":
      return "bg-yellow-500/10 text-yellow-400";
    case "Overdue":
      return "bg-red-500/10 text-red-400";
    default:
      return "";
  }
};

export default function InvoicesPage() {
  return (
    <div className="min-h-screen mt-5 text-white bg-black">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h1 className="text-xl font-semibold sm:text-2xl">Invoices</h1>
          <p className="text-xs text-gray-400 sm:text-sm">
            Create, manage and track all client invoices
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row sm:w-auto">

  <Link
    href="/admin-dashboard/invoices/batch-create"
    className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm text-yellow-400 transition border border-yellow-500 rounded-lg sm:w-auto hover:bg-yellow-500/10"
  >
    <Plus size={16} />
    Batch Create
  </Link>

  <Link
    href="/admin-dashboard/invoices/create-invoice"
    className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-white transition bg-yellow-500 rounded-lg sm:w-auto hover:bg-yellow-600"
  >
    <Plus size={16} />
    New Invoice
  </Link>


</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Invoiced", value: "$142,800", color: "" },
          { label: "Paid", value: "$127,400", color: "text-emerald-400" },
          { label: "Pending", value: "$11,200", color: "text-yellow-400" },
          { label: "Overdue", value: "$4,200", color: "text-red-400" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#0B0B0F] border border-gray-800 rounded-xl p-4 sm:p-5"
          >
            <p className="text-xs text-gray-400 sm:text-sm">{item.label}</p>
            <h2 className={`text-lg sm:text-xl font-semibold ${item.color}`}>
              {item.value}
            </h2>
          </div>
        ))}
      </div>


      {/* filter   */}

   <div className="w-full mb-6">
  <div className="flex flex-col w-full gap-3 lg:flex-row lg:items-center">
    
    {/* Search */}
    <div className="flex items-center bg-[#0B0B0F] border border-gray-800 rounded-lg px-4 py-2 w-full lg:flex-1">
      <Search size={16} className="text-gray-500 shrink-0" />
      <input
        placeholder="Search invoice..."
        className="w-full px-2 text-sm bg-transparent outline-none"
      />
    </div>

    {/* Filters */}
    <div className="flex flex-col w-full gap-3 sm:flex-row lg:w-auto">
      
      <button className="w-full sm:flex-1 lg:w-auto flex items-center justify-center gap-2 bg-[#0B0B0F] border border-gray-800 px-4 py-2 rounded-lg text-sm whitespace-nowrap">
        All Status <ChevronDown size={14} />
      </button>

      <button className="w-full sm:flex-1 lg:w-auto flex items-center justify-center gap-2 bg-[#0B0B0F] border border-gray-800 px-4 py-2 rounded-lg text-sm whitespace-nowrap">
        All Currencies <ChevronDown size={14} />
      </button>

    </div>
  </div>
</div>

      {/* Table */}
      <div className="bg-[#0B0B0F] border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm min-w-[800px]">
            <thead className="text-gray-400 border-b border-gray-800">
              <tr>
                <th className="p-3 text-left sm:p-4">Invoice #</th>
                <th className="p-3 text-left sm:p-4">Customer</th>
                <th className="p-3 text-left sm:p-4">Service</th>
                <th className="p-3 text-left sm:p-4">Issue Date</th>
                <th className="p-3 text-left sm:p-4">Due Date</th>
                <th className="p-3 text-left sm:p-4">Amount</th>
                <th className="p-3 text-left sm:p-4">Status</th>
                <th className="p-3 text-left sm:p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((inv, i) => {
                const statusList = ["Paid", "Pending", "Overdue"];
                const status = statusList[i % 3];

                return (
                  <tr
                    key={i}
                    className="transition border-b border-gray-900 hover:bg-white/5"
                  >
                    <td className="p-3 text-gray-400 sm:p-4">{inv.id}</td>
                    <td className="p-3 font-medium sm:p-4">{inv.name}</td>
                    <td className="p-3 text-gray-400 sm:p-4">{inv.service}</td>
                    <td className="p-3 text-gray-400 sm:p-4">{inv.issue}</td>
                    <td className="p-3 text-gray-400 sm:p-4">{inv.due}</td>
                    <td className="p-3 font-medium text-yellow-400 sm:p-4">
                      {inv.amount}
                    </td>

                    {/* Status */}
                    <td className="p-3 sm:p-4">
                      <span
                        className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs ${getStatusStyle(
                          status
                        )}`}
                      >
                        {status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="flex flex-wrap items-center gap-2 p-3 text-gray-400 sm:p-4">
                      {status !== "Paid" && (
                        <button className="bg-emerald-600 text-white px-2 py-1 rounded text-[10px] sm:text-xs">
                          + Pay
                        </button>
                      )}
                      <Pencil size={14} className="cursor-pointer" />
                      <Eye size={14} className="cursor-pointer" />
                      <Download size={14} className="cursor-pointer" />
                      <Trash2 size={14} className="cursor-pointer" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center justify-between gap-3 p-4 text-xs text-gray-400 sm:flex-row sm:text-sm">
          <p>Showing 9 of 9 invoices</p>

          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 border border-gray-700 rounded">
              Previous
            </button>
            <button className="px-3 py-1 text-black bg-yellow-500 rounded">
              1
            </button>
            <button className="px-3 py-1 border border-gray-700 rounded">
              2
            </button>
            <button className="px-3 py-1 border border-gray-700 rounded">
              3
            </button>
            <button className="px-3 py-1 border border-gray-700 rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}