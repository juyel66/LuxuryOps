"use client";

import { ReactNode, useState } from "react";
import {
  Plus,
  Building2,
  DollarSign,
  Users,
  CheckCircle,
  X,
  Mail,
  Settings,
  Trash2,
} from "lucide-react";
import callIcon from "../../../../public/images/Icon (44).svg"
import LocationIcon from "../../../../public/images/Icon (45).svg"

import Image from "next/image";

// ---------------- STAT CARDS ----------------
const stats = [
  {
    title: "Total Entities",
    value: "2",
    icon: <Building2 size={18} />,
    color: "bg-yellow-900 text-yellow-400",
  },
  {
    title: "Active",
    value: "2",
    icon: <CheckCircle size={18} />,
    color: "bg-green-900 text-green-400",
  },
  {
    title: "Total Revenue",
    value: "BD$171,150",
    icon: <DollarSign size={18} />,
    color: "bg-blue-900 text-blue-400",
  },
  {
    title: "Avg Commission",
    value: "17.5%",
    icon: <Users size={18} />,
    color: "bg-purple-900 text-purple-400",
  },
];

// ---------------- DRIVERS ----------------
const drivers = [
  { name: "Ryan Clarke", percent: "100%" },
  { name: "Tristan Breedy", percent: "100%" },
  { name: "Marcus Johnson", percent: "25%" },
  { name: "Devon Clarke", percent: "25%" },
  { name: "Andre Baptiste", percent: "100%" },
  { name: "Rasheed Ali", percent: "100%" },
];

// ---------------- MAIN COMPONENT ----------------
export default function EntityManagement() {
  const [modal, setModal] = useState<"add" | "commission" | null>(null);

  return (
    <div className="mt-5 space-y-6 text-white">
      
      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div>
          <h1 className="text-2xl font-semibold">Entity Management</h1>
          <p className="text-sm text-gray-400">
            Manage entities like Colony Club where all drivers work
          </p>
        </div>

        <button
          onClick={() => setModal("add")}
          className="flex items-center justify-center w-full gap-2 px-4 py-2 text-white bg-yellow-500 rounded-lg sm:w-auto"
        >
          <Plus size={16} /> Add Entity
        </button>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <StatCard key={i} {...item} />
        ))}
      </div>

      {/* FILTER BAR */}
      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-4 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        
        <div className="flex flex-wrap gap-2">
          {["All", "Active", "Inactive"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg text-sm ${
                tab === "All"
                  ? "bg-yellow-500 text-black"
                  : "bg-[#111] text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <input
          placeholder="Search entity..."
          className="bg-[#111] border border-gray-400 px-4 py-2 rounded-lg text-sm outline-none w-full lg:max-w-md"
        />
      </div>

      {/* ENTITY CARDS */}
      <div className="space-y-6">
        <EntityCard onOpenCommission={() => setModal("commission")} />
        <EntityCard onOpenCommission={() => setModal("commission")} />
      </div>

      {/* ADD ENTITY MODAL */}
      {modal === "add" && (
        <Modal onClose={() => setModal(null)}>
          <h2 className="mb-6 text-xl sm:text-2xl">Add New Entity</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Entity Name" />
            <Input label="Contact Person" />
            <Input label="Email" />
            <Input label="Mobile Number" />
          </div>

          <textarea className="w-full mt-4 bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded" placeholder="Address..." />

          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
            <Input label="Commission Rate (%)" />

            <select className="bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <textarea className="w-full mt-4 bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded" placeholder="Notes..." />

          <div className="p-3 mt-4 text-xs text-blue-300 rounded bg-blue-900/30">
            Tip: Drivers auto added with default commission.
          </div>

          <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:gap-4">
            <button className="w-full py-3 text-yellow-500 border border-yellow-500">
              CANCEL
            </button>
            <button className="w-full py-3 text-black bg-yellow-500">
              SAVE
            </button>
          </div>
        </Modal>
      )}

      {/* COMMISSION MODAL */}
      {modal === "commission" && (
        <Modal onClose={() => setModal(null)}>
          <h2 className="mb-6 text-xl sm:text-2xl">Driver Commission Rates</h2>

          <div className="max-h-[52vh] space-y-3 overflow-y-auto pr-1">
            {drivers.map((d, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#1f1f1f] bg-[#111] p-3 sm:p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{d.name}</p>
                  <p className="text-xs text-gray-400">
                    Owns Vehicle
                  </p>
                  </div>

                <div className="flex flex-col w-full gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                  <div className="flex items-center w-full gap-2 sm:w-auto">
                    <span className="text-xs text-gray-400 whitespace-nowrap">Rate</span>
                  <input
                    type="number"
                    defaultValue={100}
                    className="w-full rounded border border-[#1f1f1f] bg-[#0b0b0b] p-2 text-center sm:w-20"
                  />
                  </div>

                  <span className="px-2 py-1 text-xs text-center text-green-400 bg-green-900 rounded whitespace-nowrap">
                    Auto: 100%
                  </span>
                </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 mt-4 text-xs text-blue-300 rounded bg-blue-900/30">
            Entity takes 20%, remaining goes to drivers.
          </div>

          <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:gap-4">
            <button className="w-full py-3 text-yellow-500 border border-yellow-500">
              CANCEL
            </button>
            <button className="w-full py-3 text-black bg-yellow-500">
              SAVE
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

type StatCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
  color: string;
};

const StatCard = ({ title, value, icon, color }: StatCardProps) => (
  <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5">
    <div className="flex items-center gap-2 mb-5">
        <div className={`p-2 rounded-lg ${color}`}>{icon}</div>
      <p className="text-sm text-gray-400">{title}</p>
      
    </div>
    <h2 className="text-2xl font-semibold">{value}</h2>
  </div>
);

type EntityCardProps = {
  onOpenCommission: () => void;
};

const EntityCard = ({ onOpenCommission }: EntityCardProps) => (
  <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-4 sm:p-5 space-y-4">

    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        
    <div className="flex min-w-0 gap-3">

  {/* ICON */}
  <div className="p-3 mt-2 rounded-lg shrink-0 md:mt-0 md:bg-yellow-500/20">
    <Building2 size={18} className="text-yellow-400" />
  </div>

  {/* CONTENT */}
  <div className="flex-1 min-w-0">

    {/* TITLE */}
    <h3 className="text-sm font-semibold leading-tight sm:text-base">
      Hilton Barbados Resort
      <span className="ml-2 inline-block px-2 py-0.5 text-[10px] sm:text-xs text-green-400 bg-green-900 rounded">
        Active
      </span>
    </h3>

    {/* CONTACT INFO */}
    <div className="flex flex-col gap-1 mt-2 sm:mt-1 sm:flex-row sm:items-center sm:gap-3">

      {/* PHONE */}
      <div className="flex items-center gap-1">
        <Image src={callIcon} alt="Call" height={12} width={12} />
        <p className="text-xs text-gray-400 truncate">
          +1 246-426-0200
        </p>
      </div>

      {/* EMAIL */}
      <div className="flex items-center min-w-0 gap-1">
        <Mail size={12} className="text-gray-400" />
        <p className="text-xs text-gray-400 truncate">
          reservations@hiltonbarbados.com
        </p>
      </div>

    </div>
  </div>
</div>

      
    <div className="flex items-center justify-center gap-2">
      <button
        type="button"
        className="flex items-center justify-center w-9 h-9 rounded-md bg-[#111] text-red-400 hover:bg-red-500/10"
        aria-label="Delete entity"
      >
        <Trash2 size={16} />
      </button>
      <button
        type="button"
        onClick={onOpenCommission}
        className="flex items-center justify-center w-9 h-9 rounded-md bg-[#111] text-gray-300 hover:bg-[#1a1a1a] hover:text-white"
        aria-label="Entity settings"
      >
        <Settings size={16} />
      </button>
    </div>
    </div>


     <div className="flex flex-col gap-2 mt-3 sm:flex-row sm:justify-between sm:items-center sm:mt-6">
        <p className="mt-1 text-xs text-gray-500">
            Contact: Michael Thompson
          </p>

          <div className="flex mt-1 text-xs text-gray-500">
            <Image src={LocationIcon} alt="Call" className="inline" height={12} width={12} />
            
            <span className="ml-1">Needham&apos;s Point, St. Michael, Barbados</span>
          </div>

     </div>
    <div className="grid grid-cols-1 gap-3 bg-[#111] p-4 rounded-lg text-sm sm:grid-cols-2 lg:grid-cols-4">
      <MiniStat title="Entity Commission" value="20%" color="text-yellow-400" />
      <MiniStat title="Total Bookings" value="156" color="text-green-400" />
      <MiniStat title="Total Revenue" value="$45,670" color="text-blue-400" />
      <MiniStat title="Active Drivers" value="3" />
    </div>

    <div>
  <p className="mb-2 text-sm text-gray-400">
    Driver Commission Rates:
  </p>

  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
    {drivers.map((d, i) => (
      <DriverChip key={i} {...d} />
    ))}
  </div>
</div>

    <div className="p-3 text-xs text-yellow-400 border rounded bg-yellow-500/5 border-yellow-500/20">
      Note: <span className="font-medium text-gray-500" >Premier entity — all drivers work here</span>
    </div>
  </div>
);

type MiniStatProps = {
  title: string;
  value: string;
  color?: string;
};

const MiniStat = ({ title, value, color }: MiniStatProps) => (
  <div>
    <p className="text-xs text-gray-400">{title}</p>
    <p className={`font-medium ${color}`}>{value}</p>
  </div>
);

type DriverChipProps = {
  name: string;
  percent: string;
};

const DriverChip = ({ name, percent }: DriverChipProps) => (
  <div className="bg-[#111] px-4 py-3 rounded text-sm">
    <p>{name}</p>
    <p className="font-medium text-yellow-400">{percent}</p>
  </div>
);

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => (
  <div className="fixed inset-0 z-50 flex items-start justify-center p-3 overflow-y-auto bg-black/80 sm:items-center sm:p-6">
    <div className="bg-black border border-[#1f1f1f] rounded-2xl w-full max-w-4xl p-4 sm:p-8 relative my-4 sm:my-0">
      <button
        onClick={onClose}
        className="absolute text-gray-400 right-4 top-4 sm:right-6 sm:top-6"
      >
        <X size={20} />
      </button>
      {children}
    </div>
  </div>
);

type InputProps = {
  label: string;
};

const Input = ({ label }: InputProps) => (
  <div>
    <label className="block mb-1 text-xs text-gray-400">{label}</label>
    <input className="w-full bg-[#0b0b0b] border border-[#1f1f1f] p-3 rounded" />
  </div>
);