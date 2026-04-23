"use client";

import React, { useState } from "react";
import { Settings, Lock, Bell, CreditCard, Trash2Icon, X } from "lucide-react";
import uploadIcon from "../../../../public/images/Icon (58).svg"
import Image from "next/image";
import { Trash2, Building2, DollarSign, PlusCircle } from "lucide-react";
import saveImage from "../../../../public/images/Icon (59).svg"

type TabType = "general" | "security" | "notifications" | "payment";

export default function SettingsTabsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("general");
  const [paymentMethodModalOpen, setPaymentMethodModalOpen] = useState(false);
    const [items, setItems] = useState([
    {
      title: "New Booking Notifications",
      desc: "Receive alerts when new bookings are made",
      active: true,
    },
    {
      title: "Payment Notifications",
      desc: "Get notified about payment status updates",
      active: true,
    },
    {
      title: "Driver Status Updates",
      desc: "Alerts when drivers update their status",
      active: true,
    },
    {
      title: "Vehicle Maintenance Reminders",
      desc: "Reminders for scheduled vehicle maintenance",
      active: true,
    },
    {
      title: "Daily Summary Reports",
      desc: "Receive daily business summary via email",
      active: false,
    },
    {
      title: "Low Availability Alerts",
      desc: "Warning when fleet availability is low",
      active: false,
    },
  ]);

  const toggleItem = (index: number) => {
    const updated = [...items];
    updated[index].active = !updated[index].active;
    setItems(updated);
  };

  

  return (
    <div className="min-h-screen mt-5 text-white bg-black">

      <div className="">

        {/* Header */}
        <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold sm:text-2xl">
              System Settings
            </h1>
            <p className="text-sm text-gray-400">
              Configure system preferences and settings
            </p>
          </div>

          <button className="px-4 py-2 text-sm text-white bg-yellow-500 rounded-lg cursor-pointer">
            + Edit Profile
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 bg-[#0B0B0F] border border-[#1A1F2B] rounded-xl p-2 mb-6">
          
          <TabButton
            icon={<Settings size={16} />}
            label="General"
            active={activeTab === "general"}
            onClick={() => setActiveTab("general")}
          />

          <TabButton
            icon={<Lock size={16} />}
            label="Security"
            active={activeTab === "security"}
            onClick={() => setActiveTab("security")}
          />

          <TabButton
            icon={<Bell size={16} />}
            label="Notifications"
            active={activeTab === "notifications"}
            onClick={() => setActiveTab("notifications")}
          />

          <TabButton
            icon={<CreditCard size={16} />}
            label="Payment Method"
            active={activeTab === "payment"}
            onClick={() => setActiveTab("payment")}
          />
        </div>

        {/* Content Area */}
        <div className="bg-[#05070B] border border-[#1A1F2B] rounded-xl p-4 sm:p-6 min-h-[400px]">

          {/* 👉 YOU WILL PUT YOUR PAGES HERE */}

          {activeTab === "general" && (
            <div>
              <div className="space-y-6">

  {/* Title */}
  <h3 className="text-[18px] text-[#9CA3AF] font-medium">
    Company Information
  </h3>

  {/* Logo */}
  <div>
    <p className="text-[13px] text-[#9CA3AF] mb-2">Logo</p>

    <div className="h-[150px] w-full border border-[#1A1F2B] rounded-md bg-[#0B0F17] flex flex-col items-center justify-center">
      
   <Image src={uploadIcon} alt="Upload Icon" width={40} height={40} />

      {/* Text */}
      <p className="text-[12px] text-[#6B7280] mb-3">
        Drag & drop images here, or click to select
      </p>

      {/* Button */}
      <button className="bg-[#2563EB] text-white text-[12px] px-4 py-[6px] rounded">
        Choose Files
      </button>
    </div>
  </div>

  {/* Form */}
  <div className="space-y-5">

    {/* Row 1 */}
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      
      <div>
        <label className="text-[13px] text-[#9CA3AF] mb-1 block">
          Company Name
        </label>
        <input
          className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
          placeholder="VIP Luxury Chauffeur Services"
        />
      </div>

      <div>
        <label className="text-[13px] text-[#9CA3AF] mb-1 block">
          Contact Email
        </label>
        <input
          className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
          placeholder="contact@vipluxury.com"
        />
      </div>

    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      
      <div>
        <label className="text-[13px] text-[#9CA3AF] mb-1 block">
          Phone Number
        </label>
        <input
          className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
          placeholder="+44 7900 000 000"
        />
      </div>

      <div>
        <label className="text-[13px] text-[#9CA3AF] mb-1 block">
          Website
        </label>
        <input
          className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
          placeholder="https://vipluxury.com"
        />
      </div>

    </div>

    {/* Address */}
    <div>
      <label className="text-[13px] text-[#9CA3AF] mb-1 block">
        Company Address
      </label>
      <textarea
        className="w-full h-[120px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] py-[12px] text-[14px] text-white placeholder:text-[#6B7280] outline-none resize-none focus:border-[#C89B3C]"
        placeholder="Company Address"
      />
    </div>

     <div>
        <label className="text-[13px] text-[#9CA3AF] mb-1 block">
          VAT
        </label>
        <input
          className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
          placeholder="20%"
        />
      </div>

    {/* Button */}
    <div className="pt-2">
      <button className="bg-[#C89B3C] text-white text-[14px] px-5 py-[10px] rounded-md font-medium hover:opacity-90 flex items-center gap-2">
        
        {/* icon */}
        <Image src={saveImage} alt="Save Icon" width={16} height={16} />

        Save Changes
      </button>
    </div>

  </div>
</div>
              <p className="text-gray-400">General Content</p>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              {/*  Security Page */}
              <div className="space-y-8">

  {/* Title */}
  <h3 className="text-[18px] text-[#9CA3AF] font-medium">
    Password & Authentication
  </h3>

  {/* Form */}
  <div className="space-y-5">

    {/* Current Password */}
    <div>
      <label className="text-[13px] text-[#9CA3AF] mb-1 block">
        Current Password
      </label>
      <input
        type="password"
        className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
        placeholder="Enter current password"
      />
    </div>

    {/* New Password */}
    <div>
      <label className="text-[13px] text-[#9CA3AF] mb-1 block">
        New Password
      </label>
      <input
        type="password"
        className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
        placeholder="Enter new password"
      />
    </div>

    {/* Confirm Password */}
    <div>
      <label className="text-[13px] text-[#9CA3AF] mb-1 block">
        Confirm New Password
      </label>
      <input
        type="password"
        className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
        placeholder="Confirm new password"
      />
    </div>

    {/* Button */}
    <div className="pt-2">
      <button className="bg-[#C89B3C] text-white text-[14px] px-5 py-[10px] rounded-md font-medium hover:opacity-90">
        Update Password
      </button>
    </div>

  </div>

  {/* Danger Zone */}
  <div className="pt-6">

    <p className="text-red-500 text-[14px] mb-3 font-medium">
      Danger Zone
    </p>

    <div className="border border-[#1A1F2B] rounded-xl p-5 bg-[#0B0F17]">

      <h4 className="text-white text-[15px] font-medium mb-1">
        Delete Account
      </h4>

      <p className="text-[#6B7280] text-[13px] mb-4">
        Once you delete your account, there is no going back. Please be certain.
      </p>

      <button className="bg-[#EF4444] text-white text-[13px] px-4 py-[8px] rounded-md flex items-center gap-2 hover:opacity-90">
        
        {/* Trash Icon */}
        <Trash2Icon size={16} />

        Delete Account
      </button>

    </div>
  </div>

</div>

            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              {/*  Notifications Page Here */}

                <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-[#0B0F17] border border-[#1A1F2B] rounded-lg px-5 py-4"
        >
          {/* Text */}
          <div>
            <p className="text-[14px] text-white font-medium">
              {item.title}
            </p>
            <p className="text-[12px] text-[#6B7280] mt-[2px]">
              {item.desc}
            </p>
          </div>

          {/* Toggle */}
          <div
            onClick={() => toggleItem(i)}
            className={`w-[38px] h-[20px] rounded-full flex items-center px-[3px] cursor-pointer transition ${
              item.active ? "bg-[#C89B3C]" : "bg-[#374151]"
            }`}
          >
            <div
              className={`w-[14px] h-[14px] rounded-full bg-white transition ${
                item.active ? "translate-x-[18px]" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        
      ))}

        {/* Save Button */}
  <button className="bg-[#C89B3C] text-white text-[14px] px-5 py-[10px] rounded-md font-medium flex items-center gap-2 hover:opacity-90">
    
    {/* Save Icon */}
     <Image src={saveImage} alt="Save Icon" width={16} height={16} />

    Save Changes
  </button>
    </div>
              
            </div>
          )}

          {activeTab === "payment" && (
            <div>
              {/*  Payment Page Here */}
            <div className="space-y-6">

  {/* Title */}
  <h3 className="text-[18px] text-[#9CA3AF] font-medium">
    Payment Method
  </h3>

  {/* List */}
  <div className="space-y-4">

    {/* Room Charged */}
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-4">

        {/* Icon Box */}
        <div className="w-[42px] h-[42px] rounded-lg bg-[#0B3B91]/20 flex items-center justify-center">
          <Building2 size={18} className="text-[#3B82F6]" />
        </div>

        <p className="text-[14px] text-white">Room Charged</p>
      </div>

      {/* Delete */}
      <Trash2 size={16} className="text-red-500 cursor-pointer" />
    </div>

    {/* Cash Payments */}
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-4">

        {/* Icon Box */}
        <div className="w-[42px] h-[42px] rounded-lg bg-[#065F46]/30 flex items-center justify-center">
          <DollarSign size={18} className="text-[#10B981]" />
        </div>

        <p className="text-[14px] text-white">Cash Payments</p>
      </div>

      {/* Delete */}
      <Trash2 size={16} className="text-red-500 cursor-pointer" />
    </div>

  </div>

  {/* Add Method */}
  <button
    type="button"
    onClick={() => setPaymentMethodModalOpen(true)}
    className="w-full border border-dashed border-[#C89B3C] rounded-lg py-4 flex items-center justify-center gap-2 text-[#C89B3C] cursor-pointer hover:bg-[#C89B3C]/10 transition"
  >

    <PlusCircle size={18} />
    <span className="text-[14px] font-medium">Add Method</span>

  </button>

  {paymentMethodModalOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="w-full max-w-3xl overflow-hidden bg-[#05070B] border border-[#1A1F2B] rounded-2xl shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1F2B]">
          <h2 className="text-lg font-semibold">Add Method</h2>
          <button
            type="button"
            onClick={() => setPaymentMethodModalOpen(false)}
            className="text-gray-400 transition hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Payment Method
            </label>
            <input
              type="text"
              placeholder="Add Payment Method"
              className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">Icon</label>
            <div className="flex items-center justify-center w-full h-16 border border-[#1A1F2B] rounded-lg bg-[#0B0F17]">
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-1.5 text-sm text-white bg-blue-600 rounded"
              >
                Upload Icon
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1A1F2B]" />

        <div className="flex flex-col gap-3 px-6 py-4 sm:flex-row">
          <button
            type="button"
            onClick={() => setPaymentMethodModalOpen(false)}
            className="w-full py-2 font-medium text-[#C89B3C] transition border border-[#C89B3C] rounded-md hover:bg-[#C89B3C]/10"
          >
            CANCEL
          </button>

          <button
            type="button"
            onClick={() => setPaymentMethodModalOpen(false)}
            className="w-full py-2 font-semibold text-white transition bg-[#C89B3C] rounded-md hover:opacity-90"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  )}

  {/* Save Button */}
  <button className="bg-[#C89B3C] text-white text-[14px] px-5 py-[10px] rounded-md font-medium flex items-center gap-2 hover:opacity-90">
    
    {/* Save Icon */}
     <Image src={saveImage} alt="Save Icon" width={16} height={16} />

    Save Changes
  </button>

</div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

/* ================= TAB BUTTON ================= */

function TabButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition ${
        active
          ? "bg-yellow-500 text-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}