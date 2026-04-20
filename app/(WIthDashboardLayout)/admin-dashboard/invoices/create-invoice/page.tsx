"use client";

import { useState } from "react";
import { Plus, Calendar } from "lucide-react";

type Item = {
  description: string;
  qty: number;
  price: number;
};

export default function CreateInvoice() {
  const [items, setItems] = useState<Item[]>([
    { description: "", qty: 1, price: 250 },
  ]);

  const handleChange = (
    index: number,
    field: keyof Item,
    value: string | number
  ) => {
    const updated = [...items];
    if (field === "description") {
      (updated[index] as any)[field] = value as string;
    } else {
      (updated[index] as any)[field] = Number(value);
    }
    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { description: "", qty: 1, price: 0 }]);
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.qty * item.price,
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
          <input
            placeholder="Mr. John Smith"
            className="bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
          />
          <input
            placeholder="john@example.com"
            className="bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
          />
        </div>

        <textarea
          placeholder="123 Mayfair Street, London, W1J 5AB"
          className="mt-4 w-full bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
        />
      </section>

      {/* INVOICE DETAILS */}
      <section className="mb-8">
        <h2 className="mb-4 text-lg text-gray-300">
          Invoice Details
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <InputWithIcon placeholder="Choose date" />
          <InputWithIcon placeholder="Choose date" />
          <input
            placeholder="BK-001"
            className="bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
          />
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
          const total = item.qty * item.price;

          return (
            <div
              key={i}
              className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-4"
            >
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
                value={item.qty}
                onChange={(e) =>
                  handleChange(i, "qty", e.target.value)
                }
                className="bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm"
              />

              <input
                type="number"
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
      <textarea
        placeholder="Payment terms, additional information..."
        className="w-full bg-[#0B0F17] border border-[#1A1F2B] p-3 rounded-md text-sm mb-6"
      />

      {/* STATUS */}
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