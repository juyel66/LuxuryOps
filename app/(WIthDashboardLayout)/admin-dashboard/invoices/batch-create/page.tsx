"use client";

import { useState } from "react";
import { ChevronRight, Plus, X } from "lucide-react";

type Invoice = {
  service: string;
  amount: number;
  booking: string;
  status: string;
};

export default function BatchCreate() {
  const [step, setStep] = useState(1);

  const [invoices, setInvoices] = useState<Invoice[]>([
    { service: "Airport Transfer", amount: 2500, booking: "BK-001", status: "Pending" },
    { service: "Airport Transfer", amount: 2500, booking: "BK-001", status: "Pending" },
  ]);


  const addInvoice = () => {
    setInvoices([
      ...invoices,
      { service: "", amount: 0, booking: "", status: "Pending" },
    ]);
  };


  const removeInvoice = (index: number) => {
    setInvoices(invoices.filter((_, i) => i !== index));
  };


  const total = invoices.reduce((acc, i) => acc + i.amount, 0);

  return (
    <div className="min-h-screen bg-[#07090D] text-white p-4 md:p-8">

      {/* HEADER */}
      <h1 className="mb-2 font-serif text-3xl">Batch Invoice Creator</h1>
      <p className="mb-6 text-gray-400">
        Set shared customer details once — create multiple invoices instantly
      </p>

      {/* ✅ STEPPER (FIXED CLICKABLE) */}
      <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-2 flex mb-8">
        {["Customer", "Invoices", "Review"].map((label, i) => {
          const stepNumber = i + 1;

          return (
            <button
              key={i}
              onClick={() => setStep(stepNumber)} // ✅ FIXED
              className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition ${
                step === stepNumber
                  ? "bg-gradient-to-r from-[#C89B3C] to-[#7a5c1c] text-black"
                  : "text-gray-400 hover:bg-[#111522]"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step === stepNumber
                    ? "bg-black/30 text-white"
                    : "bg-[#111522]"
                }`}
              >
                {stepNumber}
              </div>
              {label}
            </button>
          );
        })}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h2 className="mb-4 text-lg text-gray-300">
            Shared Customer Information
          </h2>

         <div className="grid gap-4 md:grid-cols-3">
  
  <div>
    <label className="block mb-1 text-sm text-gray-400">
      Customer Name
    </label>
    <input
      className={input}
      placeholder="Mr. John Smith"
    />
  </div>

  <div>
    <label className="block mb-1 text-sm text-gray-400">
      Email Address
    </label>
    <input
      className={input}
      placeholder="john@example.com"
    />
  </div>

  <div>
    <label className="block mb-1 text-sm text-gray-400">
      Default Currency
    </label>
    <input
      className={input}
      placeholder="USD$"
    />
  </div>

</div>

<div className="mt-4">
  <label className="block mb-1 text-sm text-gray-400">
    Billing Address
  </label>
  <textarea
    className={`${input} w-full h-[100px]`}
    placeholder="123 Mayfair Street, London, W1J 5AB"
  />
</div>

          <button
            onClick={() => setStep(2)}
            className="mt-6 bg-[#C89B3C] text-black px-6 py-3 rounded-md flex items-center gap-2"
          >
            Continue to Invoices <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <div className="flex justify-between mb-4">
            <h2 className="text-lg text-gray-300">
              Shared Customer Information
            </h2>
            <span className="text-gray-400">{invoices.length} invoices</span>
          </div>

          {invoices.map((inv, i) => (
          <div
  key={i}
  className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5 mb-4 relative"
>
  <button
    onClick={() => removeInvoice(i)}
    className="absolute p-1 text-red-500 border border-red-500 rounded-md right-4 top-4"
  >
    <X size={14} />
  </button>

  <p className="mb-4 font-medium">Invoice #{i + 1}</p>

  <div className="grid gap-4 md:grid-cols-3">
    <div>
      <label className="block mb-1 text-sm text-gray-400">
        Service Type
      </label>
      <input
        className={input}
        value={inv.service}
        onChange={(e) => {
          const copy = [...invoices];
          copy[i].service = e.target.value;
          setInvoices(copy);
        }}
      />
    </div>

    <div>
      <label className="block mb-1 text-sm text-gray-400">
        Invoice Date
      </label>
      <input type="date" className={input} placeholder="Choose date" />
    </div>

    <div>
      <label className="block mb-1 text-sm text-gray-400">
        Due Date
      </label>
      <input type="date" className={input} placeholder="Choose date" />
    </div>
  </div>

  <div className="grid gap-4 mt-4 md:grid-cols-3">
    <div>
      <label className="block mb-1 text-sm text-gray-400">
        Amount
      </label>
      <input
        type="number"
        className={input}
        value={inv.amount}
        onChange={(e) => {
          const copy = [...invoices];
          copy[i].amount = Number(e.target.value);
          setInvoices(copy);
        }}
      />
    </div>

    <div>
      <label className="block mb-1 text-sm text-gray-400">
        Booking Reference
      </label>
      <input
        className={input}
        value={inv.booking}
        onChange={(e) => {
          const copy = [...invoices];
          copy[i].booking = e.target.value;
          setInvoices(copy);
        }}
      />
    </div>

    <div>
      <label className="block mb-1 text-sm text-gray-400">
        Status
      </label>
      <select
        className={input}
        value={inv.status}
        onChange={(e) => {
          const copy = [...invoices];
          copy[i].status = e.target.value;
          setInvoices(copy);
        }}
      >
        <option>Pending</option>
        <option>Paid</option>
      </select>
    </div>
  </div>
</div>
          ))}

          {/* ADD */}
          <button
            onClick={addInvoice}
            className="w-full border border-dashed border-[#C89B3C] text-[#C89B3C] py-3 rounded-md flex items-center justify-center gap-2"
          >
            <Plus size={16} /> Add Another Invoice
          </button>

          <button
            onClick={() => setStep(3)}
            className="mt-6 bg-[#C89B3C] text-black px-6 py-3 rounded-md flex items-center gap-2"
          >
            Continue to Review <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h2 className="mb-4 text-lg text-gray-300">Review & Confirm</h2>

          <div className="p-4 mb-4 text-green-300 border border-green-700 rounded-md bg-green-900/30">
            ✓ {invoices.length} invoices ready to create for Akash.
          </div>

        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl overflow-hidden">

  {/* HEADER */}
  <div className="grid grid-cols-3 p-4 border-b border-[#1A1F2B] text-gray-400 text-sm">
    <span>Invoice</span>
    <span>Service</span>
    <span className="text-center">Amount</span>
  </div>

  {/* DATA */}
  {invoices.map((inv, i) => (
    <div
      key={i}
      className="grid grid-cols-3 p-4 border-b border-[#1A1F2B]"
    >
      <span>INV-2026-0{i + 248}</span>
      <span>{inv.service}</span>
      <span className="text-[#C89B3C] text-center">
        USD${inv.amount}
      </span>
    </div>
  ))}

  {/* TOTAL */}
 <div className="grid grid-cols-3 p-4 font-semibold border-t border-[#1A1F2B]">
  <span className="font-medium text-white">Total</span>
  <span></span>
  <span className="text-[#C89B3C] text-center">
    USD${total}
  </span>
</div>
</div>

          <button
            onClick={() => setStep(2)}
            className="mt-4 border border-[#C89B3C] text-[#C89B3C] px-4 py-2 rounded-md"
          >
            Edit
          </button>
        </div>
      )}

      {/* FOOTER */}
      <div className="flex flex-col gap-4 mt-10 md:flex-row">
        <button className="flex-1 border border-[#C89B3C] text-[#C89B3C] py-3 rounded-md">
          CANCEL
        </button>

        <button className="flex-1 bg-[#C89B3C] text-black py-3 rounded-md font-medium">
          CREATE ALL INVOICES
        </button>
      </div>
    </div>
  );
}

/* INPUT STYLE */
const input =
  "bg-[#07090D] border border-[#1A1F2B] p-3 rounded-md text-sm w-full focus:outline-none";