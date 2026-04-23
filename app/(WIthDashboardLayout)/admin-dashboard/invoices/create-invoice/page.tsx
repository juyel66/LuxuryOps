"use client";

import { useState } from "react";
import { Plus, Calendar } from "lucide-react";

type Item = {
  description: string;
  qty: string;
  price: string;
};

export default function CreateInvoice() {
  const [items, setItems] = useState<Item[]>([
    { description: "", qty: "", price: "" },
  ]);

  const handleChange = (
    index: number,
    field: keyof Item,
    value: string
  ) => {
    const updated = [...items];
    (updated[index] as any)[field] = value;
    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { description: "", qty: "", price: "" }]);
  };

  const subtotal = items.reduce(
    (acc, item) => acc + (Number(item.qty) || 0) * (Number(item.price) || 0),
    0
  );

  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  return (
    <div className="min-h-screen bg-[#07090D] text-white mt-5">
      
      {/* HEADER */}
      <h1 className="mb-6 font-serif text-2xl md:text-3xl">
        Create New Invoice
      </h1>

      {/* CUSTOMER DETAILS */}
      <section className="mb-8">
        <h2 className="mb-4 text-lg text-gray-300">
          Customer Details
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-xs text-gray-400">
              Customer Name
            </label>
            <input
              placeholder="Mr. John Smith"
              className="w-full bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
            />
          </div>

          <div>
            <label className="block mb-2 text-xs text-gray-400">
              Email Address
            </label>
            <input
              placeholder="john@example.com"
              className="w-full bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-xs text-gray-400">
            Billing Address
          </label>
          <textarea
            placeholder="123 Mayfair Street, London, W1J 5AB"
            className="w-full bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
          />
        </div>
      </section>

      {/* INVOICE DETAILS */}
      <section className="mb-8">
        <h2 className="mb-4 text-lg text-gray-300">
          Invoice Details
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="block mb-2 text-xs text-gray-400">
              Invoice Date
            </label>
            <InputWithIcon placeholder="Choose date" />
          </div>

          <div>
            <label className="block mb-2 text-xs text-gray-400">
              Due Date
            </label>
            <InputWithIcon placeholder="Choose date" />
          </div>

          <div>
            <label className="block mb-2 text-xs text-gray-400">
              Booking Reference
            </label>
            <input
              placeholder="BK-001"
              className="w-full bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
            />
          </div>
        </div>
      </section>

      {/* LINE ITEMS */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-300">Line Items</h2>

          <button
            onClick={addItem}
            className="bg-[#C89B3C] text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm"
          >
            <Plus size={14} /> Add Item
          </button>
        </div>

        {items.map((item, i) => {
          const total = (Number(item.qty) || 0) * (Number(item.price) || 0);

          return (
            <div
              key={i}
              className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-4"
            >
              <label className="text-xs text-gray-400">
                Description
              </label>
              <label className="text-xs text-gray-400">Qty</label>
              <label  className="text-xs text-gray-400">Price($)</label>
              <label className="text-xs text-gray-400">Total</label>
              <input
                placeholder="Service description"
                value={item.description}
                onChange={(e) =>
                  handleChange(i, "description", e.target.value)
                }
                className="bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
              />

              <input
                type="number"
                placeholder="1"
                value={item.qty}
                onChange={(e) =>
                  
                  handleChange(i, "qty", e.target.value)
                }
                className="bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
              />

              <input
                type="number"
                placeholder="250"
                value={item.price}
                onChange={(e) =>
                  handleChange(i, "price", e.target.value)
                }
                className="bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
              />

              <input
                readOnly
                value={total}
                className="bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm text-gray-400"
              />
            </div>
          );
        })}
      </section>

      {/* TOTALS */}
      <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5 mb-6 text-sm">
        <div className="flex justify-between mb-2">
          <span className="text-gray-400">Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span className="text-gray-400">VAT (20%):</span>
          <span>${vat.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mt-3 font-semibold ">
          <span className="text-white-400">Total:</span>
          <span className="text-yellow-400">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* NOTES */}
      <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-300">
        Notes
      </label>
      <textarea
        placeholder="Payment terms, additional information..."
        className="w-full bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm mb-6"
      />

      {/* STATUS */}
      <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-300">
        Status
      </label>
      <input
        placeholder="Paid"
        className="w-full bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm mb-8"
      />

      {/* ACTIONS */}
      <div className="flex flex-col gap-4 md:flex-row">
        <button className="flex-1 border border-[#C89B3C] text-[#C89B3C] py-3 rounded-md">
          CANCEL
        </button>

        <button className="flex-1 bg-[#C89B3C] text-white py-3 rounded-md font-medium">
          CREATE INVOICE
        </button>
      </div>
    </div>
  );
}

/* INPUT WITH ICON */
function InputWithIcon({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className="w-full bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm pr-10"
      />
      <Calendar
        size={16}
        className="absolute text-gray-400 right-3 top-3"
      />
    </div>
  );
}