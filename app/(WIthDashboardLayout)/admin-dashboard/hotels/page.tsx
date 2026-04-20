"use client";

import { FormEvent, useMemo, useState } from "react";
import { Pencil, Search, Plus, MoreVertical, Eye, Trash2, X, ChevronDown } from "lucide-react";

type HotelStatus = "Active" | "Inactive";

type HotelRecord = {
  id: number;
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
  booking: number;
  commission: string;
  status: HotelStatus;
  submittedAt: string;
};

type HotelFormState = Omit<HotelRecord, "id" | "submittedAt">;

type ModalMode = "create" | "edit";

// ---------------- DATA ----------------
const hotelsData: HotelRecord[] = [
  {
    id: 1,
    name: "The Colony Club",
    contact: "Alex Mahta",
    email: "alex@gmail.com",
    phone: "+44 7900 000 000",
    address: "Heathrow Airport",
    booking: 45,
    commission: "20%",
    status: "Active",
    submittedAt: "Sunday, March 29, 2026 at 02:30 PM",
  },
  {
    id: 2,
    name: "Sandy Lane Resort",
    contact: "Maria Stone",
    email: "maria@sandylane.com",
    phone: "+44 7900 000 111",
    address: "West Coast Road",
    booking: 35,
    commission: "18%",
    status: "Active",
    submittedAt: "Monday, March 30, 2026 at 09:10 AM",
  },
  {
    id: 3,
    name: "Fairmont Royal Pavilion",
    contact: "John Carter",
    email: "john@fairmont.com",
    phone: "+44 7900 000 222",
    address: "Porters, St. James",
    booking: 78,
    commission: "22%",
    status: "Active",
    submittedAt: "Tuesday, March 31, 2026 at 11:45 AM",
  },
  {
    id: 4,
    name: "Ocean View Hotel",
    contact: "Lisa Brown",
    email: "lisa@oceanview.com",
    phone: "+44 7900 000 333",
    address: "South Coast",
    booking: 23,
    commission: "20%",
    status: "Inactive",
    submittedAt: "Wednesday, April 01, 2026 at 03:20 PM",
  },
  {
    id: 5,
    name: "The Crane Resort",
    contact: "David Wilson",
    email: "david@crane.com",
    phone: "+44 7900 000 444",
    address: "St. Philip",
    booking: 123,
    commission: "25%",
    status: "Active",
    submittedAt: "Thursday, April 02, 2026 at 01:05 PM",
  },
  {
    id: 6,
    name: "Hilton Barbados",
    contact: "Emily Green",
    email: "emily@hilton.com",
    phone: "+44 7900 000 555",
    address: "Needhams Point",
    booking: 67,
    commission: "20%",
    status: "Active",
    submittedAt: "Friday, April 03, 2026 at 10:15 AM",
  },
];

const initialFormState: HotelFormState = {
  name: "",
  contact: "",
  email: "",
  phone: "",
  address: "",
  booking: 0,
  commission: "20%",
  status: "Active",
};

const statusFilters = ["All", "Active", "Inactive"] as const;

// ---------------- COMPONENT ----------------
export default function HotelPartners() {
  const [filter, setFilter] = useState<"All" | HotelStatus>("All");
  const [search, setSearch] = useState("");
  const [hotels, setHotels] = useState<HotelRecord[]>(hotelsData);
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  const [modalMode, setModalMode] = useState<ModalMode>("create");
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<HotelRecord | null>(null);
  const [form, setForm] = useState<HotelFormState>(initialFormState);

  const filteredData = useMemo(() => {
    return hotels.filter((item) => {
      const matchStatus =
        filter === "All" || item.status.toLowerCase() === filter.toLowerCase();

      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.contact.toLowerCase().includes(search.toLowerCase());

      return matchStatus && matchSearch;
    });
  }, [filter, hotels, search]);

  const closeAllMenus = () => setActiveMenuId(null);

  const openCreateModal = () => {
    setModalMode("create");
    setForm(initialFormState);
    setSelectedHotel(null);
    setIsFormModalOpen(true);
    setIsDetailsModalOpen(false);
    closeAllMenus();
  };

  const openEditModal = (hotel: HotelRecord) => {
    setModalMode("edit");
    setForm({
      name: hotel.name,
      contact: hotel.contact,
      email: hotel.email,
      phone: hotel.phone,
      address: hotel.address,
      booking: hotel.booking,
      commission: hotel.commission,
      status: hotel.status,
    });
    setSelectedHotel(hotel);
    setIsFormModalOpen(true);
    setIsDetailsModalOpen(false);
    closeAllMenus();
  };

  const openDetailsModal = (hotel: HotelRecord) => {
    setSelectedHotel(hotel);
    setIsDetailsModalOpen(true);
    setIsFormModalOpen(false);
    closeAllMenus();
  };

  const handleDeleteHotel = (hotelId: number) => {
    setHotels((prev) => prev.filter((hotel) => hotel.id !== hotelId));
    if (selectedHotel?.id === hotelId) {
      setSelectedHotel(null);
      setIsDetailsModalOpen(false);
      setIsFormModalOpen(false);
    }
    closeAllMenus();
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (modalMode === "create") {
      const newHotel: HotelRecord = {
        id: Date.now(),
        ...form,
        submittedAt: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setHotels((prev) => [newHotel, ...prev]);
      setSelectedHotel(newHotel);
    } else if (selectedHotel) {
      const updatedHotel: HotelRecord = {
        ...selectedHotel,
        ...form,
      };

      setHotels((prev) =>
        prev.map((hotel) => (hotel.id === selectedHotel.id ? updatedHotel : hotel)),
      );
      setSelectedHotel(updatedHotel);
    }

    setIsFormModalOpen(false);
  };

  return (
    <div className="mt-5 space-y-6 text-white">
      
      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div>
          <h1 className="text-2xl font-semibold">Hotel Partners</h1>
          <p className="text-sm text-gray-400">
            Manage hotel partnerships and commission rates
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-yellow-500 rounded-lg"
        >
          <Plus size={16} /> Add Hotel
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat title="Active Hotels" value="4" sub="Out of 5 total" />
        <Stat title="Total Booking" value="691" sub="All-time booking" />
        <Stat title="Total Revenue" value="BD$217,150" sub="From all hotels" />
        <Stat title="Avg Commission" value="20%" sub="Average rate" />
      </div>

      {/* FILTER BAR */}
      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-4 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        
        {/* STATUS FILTER */}
        <div className="flex gap-2">
          {statusFilters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-lg text-sm ${
                filter === item
                  ? "bg-yellow-500 text-black"
                  : "bg-[#111] text-gray-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* SEARCH */}
        <div className="flex items-center bg-[#111] px-3 py-2 rounded-lg w-full lg:max-w-md">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Search hotels..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ml-2 text-sm bg-transparent outline-none"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          
          <thead className="text-gray-400 border-b border-[#1f1f1f]">
            <tr>
              <th className="p-4 text-left">Hotel Name</th>
              <th className="p-4 text-left">Contact Person</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone Number</th>
              <th className="p-4 text-left">Address</th>
              <th className="p-4 text-left">Booking</th>
              <th className="p-4 text-left">Commission</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                
                <td className="p-4 text-white">{item.name}</td>
                <td className="p-4 text-gray-400">{item.contact}</td>
                <td className="p-4 text-gray-400">{item.email}</td>
                <td className="p-4 text-gray-400">{item.phone}</td>
                <td className="p-4 text-gray-400">{item.address}</td>

                <td className="p-4 font-medium text-yellow-500">
                  {item.booking}
                </td>

                <td className="p-4 font-medium text-red-500">
                  {item.commission}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-md text-xs ${
                      item.status === "Active"
                        ? "bg-green-900 text-green-400"
                        : "bg-red-900 text-red-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="relative p-4 text-gray-400">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMenuId((current) => (current === item.id ? null : item.id))
                    }
                    className="flex items-center justify-center w-8 h-8 rounded-md transition hover:bg-[#1a1a1a] hover:text-white"
                    aria-label="Open hotel actions"
                  >
                    <MoreVertical size={16} />
                  </button>

                  {activeMenuId === item.id && (
                    <div className="absolute right-4 top-12 z-20 w-44 overflow-hidden rounded-lg border border-[#1f1f1f] bg-[#111] shadow-lg">
                      <button
                        type="button"
                        onClick={() => openEditModal(item)}
                        className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-300 transition hover:bg-[#1a1a1a] hover:text-white"
                      >
                        <Pencil size={14} /> Edit Hotel
                      </button>
                      <button
                        type="button"
                        onClick={() => openDetailsModal(item)}
                        className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-300 transition hover:bg-[#1a1a1a] hover:text-white"
                      >
                        <Eye size={14} /> View Details
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteHotel(item.id)}
                        className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-400 transition hover:bg-[#1a1a1a] hover:text-red-300"
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* FOOTER */}
        <div className="flex items-center justify-between p-4 text-sm text-gray-400">
          <span>Showing {filteredData.length} results</span>

          <div className="flex gap-2">
            <button className="px-3 py-1 bg-[#111] rounded">Previous</button>
            <button className="px-3 py-1 text-black bg-yellow-500 rounded">
              1
            </button>
            <button className="px-3 py-1 bg-[#111] rounded">2</button>
            <button className="px-3 py-1 bg-[#111] rounded">3</button>
            <button className="px-3 py-1 bg-[#111] rounded">Next</button>
          </div>
        </div>
      </div>

      {isFormModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="w-full max-w-4xl rounded-3xl bg-[#0b0b0b] p-6 text-white shadow-2xl border border-[#1f1f1f]">
            <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-5">
              <h2 className="text-2xl font-semibold">
                {modalMode === "create" ? "Add Hotel" : "Edit Hotel"}
              </h2>
              <button
                type="button"
                onClick={() => setIsFormModalOpen(false)}
                className="text-gray-400 transition hover:text-white"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="mt-6 space-y-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <ModalInput label="Hotel Name" value={form.name} onChange={(value) => setForm((prev) => ({ ...prev, name: value }))} placeholder="Hotel Name" />
                <ModalInput label="Contact Person" value={form.contact} onChange={(value) => setForm((prev) => ({ ...prev, contact: value }))} placeholder="Enter contact person" />
                <ModalInput label="Email" value={form.email} onChange={(value) => setForm((prev) => ({ ...prev, email: value }))} placeholder="Email" />
                <ModalInput label="Mobile Number" value={form.phone} onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))} placeholder="+44 7900 000 000" />
                <div className="md:col-span-2">
                  <ModalTextarea label="Address" value={form.address} onChange={(value) => setForm((prev) => ({ ...prev, address: value }))} placeholder="Address..." />
                </div>
                <ModalInput label="Commission Rate (%)" value={form.commission.replace("%", "")} onChange={(value) => setForm((prev) => ({ ...prev, commission: `${value.replace(/[^0-9.]/g, "")}%` }))} placeholder="20" type="number" />
                <ModalSelect
                  label="Status"
                  value={form.status}
                  onChange={(value) => setForm((prev) => ({ ...prev, status: value as HotelStatus }))}
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 md:flex-row md:gap-5">
                <button
                  type="button"
                  onClick={() => setIsFormModalOpen(false)}
                  className="w-full py-3 text-sm font-semibold text-yellow-500 transition-colors border border-yellow-500 rounded-lg hover:bg-yellow-500/10"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-white transition-colors bg-yellow-500 rounded-lg hover:bg-yellow-600"
                >
                  {modalMode === "create" ? "SAVE" : "UPDATE"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDetailsModalOpen && selectedHotel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="w-full max-w-4xl rounded-3xl bg-[#0b0b0b] p-6 text-white shadow-2xl border border-[#1f1f1f]">
            <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-5">
              <h2 className="text-2xl font-semibold">Hotel Details</h2>
              <button
                type="button"
                onClick={() => setIsDetailsModalOpen(false)}
                className="text-gray-400 transition hover:text-white"
                aria-label="Close details modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
              <DetailItem label="Hotel" value={selectedHotel.name} />
              <DetailItem label="Contact Person" value={selectedHotel.contact} />
              <DetailItem label="Email" value={selectedHotel.email} />
              <DetailItem label="Phone Number" value={selectedHotel.phone} />
              <DetailItem label="Address" value={selectedHotel.address} />
              <DetailItem label="Booking" value={String(selectedHotel.booking)} />
              <DetailItem label="Commission" value={selectedHotel.commission} />
              <DetailItem label="Status" value={selectedHotel.status} />
              <DetailItem label="Submitted At" value={selectedHotel.submittedAt} fullWidth />
            </div>

            <div className="flex flex-col gap-3 pt-6 md:flex-row md:gap-4">
              <button
                type="button"
                onClick={() => openEditModal(selectedHotel)}
                className="w-full py-3 text-sm font-semibold text-black transition-colors bg-yellow-500 rounded-lg hover:bg-yellow-600"
              >
                Edit Hotel
              </button>
              <button
                type="button"
                onClick={() => setIsDetailsModalOpen(false)}
                className="w-full py-3 text-sm font-semibold text-yellow-500 transition-colors border border-yellow-500 rounded-lg hover:bg-yellow-500/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------- STAT CARD ----------------
type StatProps = {
  title: string;
  value: string;
  sub: string;
};

const Stat = ({ title, value, sub }: StatProps) => (
  <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5">
    <p className="mb-2 text-sm text-gray-400">{title}</p>
    <h2 className="mb-1 text-2xl font-semibold">{value}</h2>
    <p className="text-sm text-gray-400">{sub}</p>
  </div>
);

type ModalInputProps = {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
};

const ModalInput = ({ label, value, onChange, placeholder, type = "text" }: ModalInputProps) => (
  <label className="block">
    <span className="block mb-1 text-sm text-gray-200">{label}</span>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className="w-full px-4 py-3 text-sm text-gray-100 transition-colors bg-black border rounded-lg outline-none border-slate-600 placeholder:text-slate-500 focus:border-yellow-500"
    />
  </label>
);

type ModalTextareaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const ModalTextarea = ({ label, value, onChange, placeholder }: ModalTextareaProps) => (
  <label className="block">
    <span className="block mb-1 text-sm text-gray-200">{label}</span>
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      rows={4}
      className="w-full px-4 py-3 text-sm text-gray-100 transition-colors bg-black border rounded-lg outline-none border-slate-600 placeholder:text-slate-500 focus:border-yellow-500"
    />
  </label>
);

type ModalSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const ModalSelect = ({ label, value, onChange }: ModalSelectProps) => (
  <label className="block">
    <span className="block mb-1 text-sm text-gray-200">{label}</span>
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full px-4 py-3 pr-10 text-sm text-gray-100 transition-colors bg-black border rounded-lg outline-none appearance-none border-slate-600 focus:border-yellow-500"
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <ChevronDown size={16} className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2 text-slate-500" />
    </div>
  </label>
);

type DetailItemProps = {
  label: string;
  value: string;
  fullWidth?: boolean;
};

const DetailItem = ({ label, value, fullWidth }: DetailItemProps) => (
  <div className={fullWidth ? "md:col-span-2" : ""}>
    <p className="mb-1 text-sm text-slate-400">{label}</p>
    <p className="text-base text-white">{value}</p>
  </div>
);