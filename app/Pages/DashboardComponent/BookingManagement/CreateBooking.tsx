"use client";

import { ChangeEvent, ReactNode, useMemo, useState } from "react";
import { Calendar, ChevronDown, Plus, Clock, MapPin, Plane, Users, DollarSign } from "lucide-react";

type BookingFormState = Record<string, string>;

type DriverRow = {
  driver: string;
  commission: string;
};

export default function CreateBookingForm() {
  const [form, setForm] = useState<BookingFormState>({});
  const [driverRows, setDriverRows] = useState<DriverRow[]>([
    { driver: "", commission: "" },
  ]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDriverChange = (
    index: number,
    field: keyof DriverRow,
    value: string,
  ) => {
    const updated = [...driverRows];
    updated[index][field] = value;
    setDriverRows(updated);
  };

  const addDriverRow = () => {
    setDriverRows([...driverRows, { driver: "", commission: "" }]);
  };

  const usdAmount = useMemo(() => {
    const bdsAmount = Number(form.bds || 0);
    if (!Number.isFinite(bdsAmount) || bdsAmount <= 0) {
      return "";
    }

    return (bdsAmount / 2).toFixed(0);
  }, [form.bds]);

  return (
    <div className="min-h-screen p-4 space-y-6 text-white bg-black sm:p-6">
      
      {/* HEADER */}
      <div className="border-b border-[#1f1f1f] pb-4">
        <h2 className="text-xl font-semibold text-white md:text-2xl">Create New Booking</h2>
      </div>

      {/* SECTION 1: Client & Service Details */}
      <div>
        <h3 className="mb-4 text-gray-400 md:text-xl">Client & Service Details</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Input label="Date" name="date" type="date" icon={<Calendar size={14} />} onChange={handleChange} />
          <Input label="First Name" name="firstName" type="text" placeholder="First name" onChange={handleChange} />
          <Input label="Last Name" name="lastName" type="text" placeholder="Last name" onChange={handleChange} />

          <Select label="Hotel/Entity" name="hotel" onChange={handleChange} />
          <Input label="Room Number" name="room" type="text" placeholder="e.g. 133 or N/A" onChange={handleChange} />
          <Select label="Service Type" name="service" onChange={handleChange} />

          <Select label="Choose Car" name="car" onChange={handleChange} />
          <Input label="Owner Name" value="Marcus Thompson" type="text" disabled />
          <Input label="Vehicle Registration Number" value="HL73" type="text" disabled />
        </div>

        {/* DRIVER SECTION */}
        <div className="mt-6 space-y-4">
          {driverRows.map((row, i) => (
            <div
              key={i}
              className="grid items-end grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_auto]"
            >
              <Select
                label="Assign Driver"
                name="driver"
                onChange={(e) => handleDriverChange(i, "driver", e.target.value)}
              />

              <Input
                label="Commission Rate (%)"
                name="commission"
                type="number"
                onChange={(e) => handleDriverChange(i, "commission", e.target.value)}
              />

              <div className="flex justify-start md:justify-end">
                <button
                  type="button"
                  onClick={addDriverRow}
                  className="flex items-center gap-1 px-3 py-2 text-xs text-white bg-yellow-500 rounded-md h-[38px] hover:bg-yellow-600 transition-colors"
                >
                  <Plus size={12} /> Add Car
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Pickup & Drop-off */}
      <div>
        <h3 className="mb-4 text-sm text-gray-400">Pickup & Drop-off</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="Pickup Location" name="pickup" type="text" placeholder="e.g. Colony Club Hotel"  onChange={handleChange} />
          <Input label="Drop-off Location" name="dropoff" type="text" placeholder="e.g. Grantley Adams Airport"  onChange={handleChange} />
          <Input label="Flight Number (optional)" name="flightNumber" type="text" placeholder="e.g. BA215"  onChange={handleChange} />
          <Input label="Flight Time (if airport)" name="flightTime" type="time" icon={<Clock size={14} />} onChange={handleChange} />
        </div>
      </div>

      {/* SECTION 3: Notes & Passengers */}
      <div>
        <h3 className="mb-4 text-sm text-gray-400">Notes & Passengers</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Input label="Passengers" name="passengers" type="number" placeholder="1 - 4" icon={<Users size={14} />} onChange={handleChange} />
          <Input label="Invoice Rate (BDS $)" name="bds" type="number" placeholder="256" icon={<DollarSign size={14} />} onChange={handleChange} />
          <Input label="Invoice Rate (USD $)" value={usdAmount} type="number" disabled icon={<DollarSign size={14} />} />
          <Select label="Payment Method" name="payment" onChange={handleChange} />
        </div>

        <div className="mt-4">
          <label className="block mb-1 text-xs text-gray-400">
            Special instructions, notes...
          </label>
          <textarea
          placeholder="Additional Requirements"
            name="notes"
            onChange={handleChange}
            rows={3}
            className="w-full bg-[#0b0b0b] border border-[#1f1f1f] rounded-lg p-3 text-sm text-white outline-none focus:border-yellow-500/50 transition-colors placeholder:text-gray-600"
          />
        </div>
      </div>

      {/* FOOTER INFO */}
    

      {/* FOOTER BUTTONS */}
      <div className="flex flex-col gap-3 pt-2 md:flex-row md:gap-4">
        <button className="w-full py-2.5 text-sm font-medium text-yellow-500 border border-yellow-500 rounded-lg hover:bg-yellow-500/10 transition-colors">
          CANCEL
        </button>
        <button className="w-full py-2.5 text-sm font-medium text-white cursor-pointer bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors">
          SAVE JOB ENTRY
        </button>
      </div>


      <div>
        <p className="text-[#22C55E] font-cardo">USD auto-calculated (BDS ÷ 2)</p>
        <p className="text-[#D4AF37] font-cardo">USD auto-calculated  |  Vehicle auto-fills when driver selected  |  20% commission saved per entry</p>
      </div>
    </div>
  );
}

// ========== INPUT COMPONENT ==========
type InputProps = {
  label: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  icon?: ReactNode;
  type?: string;
  placeholder?: string;
};

const Input = ({ label, name, value, onChange, disabled, icon, type = "text", placeholder }: InputProps) => (
  <div className="w-full">
    <label className="block mb-1 text-xs text-gray-400">{label}</label>
    <div className="relative">
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        type={type}
        className={`w-full rounded-lg border border-[#1f1f1f] bg-[#0b0b0b] px-3 py-2 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 ${
          icon ? "pr-8" : ""
        } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      />
      {icon && (
        <div className="absolute text-gray-400 -translate-y-1/2 right-3 top-1/2">
          {icon}
        </div>
      )}
    </div>
  </div>
);

// ========== SELECT COMPONENT ==========
type SelectProps = {
  label: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ label, name, onChange }: SelectProps) => (
  <div className="w-full">
    <label className="block mb-1 text-xs text-gray-400">{label}</label>
    <div className="relative">
      <select
        name={name}
        onChange={onChange}
        className="w-full appearance-none rounded-lg border border-[#1f1f1f] bg-[#0b0b0b] px-3 py-2 pr-8 text-sm text-white outline-none transition-colors focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20"
      >
        <option value="">Select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
      <div className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2">
        <ChevronDown size={14} />
      </div>
    </div>
  </div>
);