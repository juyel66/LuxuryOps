"use client";

import React, { useState } from "react";
import { Settings, Lock, Bell, CreditCard, Trash2Icon, X } from "lucide-react";
import uploadIcon from "../../../../public/images/Icon (58).svg";
import Image from "next/image";
import { Trash2, Building2, DollarSign, PlusCircle } from "lucide-react";
import saveImage from "../../../../public/images/Icon (59).svg";

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
          

       
        </div>

        {/* Content Area */}
        <div className="bg-[#05070B] border border-[#1A1F2B] rounded-xl p-4 sm:p-6 min-h-[400px]">
          {/* 👉 YOU WILL PUT YOUR PAGES HERE */}

          {activeTab === "general" && (
            <div>
                <div className="bg-[#05070B]  rounded-2xl p-5 sm:p-6 space-y-8">

  {/* ===== Personal Details ===== */}
  <div className="space-y-6">

    <h3 className="text-[16px] text-[#9CA3AF] font-medium">
      Personal Details
    </h3>

    {/* Profile Upload */}
    <div>
      <p className="text-[13px] text-[#9CA3AF] mb-2">Profile</p>

      <div className="h-[150px] w-full border border-[#1A1F2B] rounded-md bg-[#0B0F17] flex flex-col items-center justify-center">
        
        {/* Upload Icon */}
        <svg
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[#6B7280] mb-2"
          fill="none"
        >
          <path d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16" />
        </svg>

        <p className="text-[12px] text-[#6B7280] mb-3">
          Drag & drop images here, or click to select
        </p>

        <button className="bg-[#2563EB] text-white text-[12px] px-4 py-[6px] rounded">
          Choose Files
        </button>
      </div>
    </div>

    {/* Name + Email */}
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

      <div>
        <label className="text-[13px] text-[#9CA3AF] mb-1 block">
          Full Name
        </label>
        <input
          className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
          placeholder="Marcus Thompson"
        />
      </div>

      <div>
        <label className="text-[13px] text-[#9CA3AF] mb-1 block">
          Email
        </label>
        <input
          className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
          placeholder="marcus.thompson@vipluxury.com"
        />
      </div>

    </div>

    {/* Phone */}
    <div>
      <label className="text-[13px] text-[#9CA3AF] mb-1 block">
        Phone Number
      </label>
      <input
        className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
        placeholder="+44 7900 000 000"
      />
    </div>

    {/* Address */}
    <div>
      <label className="text-[13px] text-[#9CA3AF] mb-1 block">
        Address
      </label>
      <textarea
        className="w-full h-[120px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] py-[12px] text-[14px] text-white placeholder:text-[#6B7280] outline-none resize-none focus:border-[#C89B3C]"
        placeholder="Address"
      />
    </div>

  </div>

  {/* ===== Vehicle Details ===== */}
  <div className="space-y-6">

    <h3 className="text-[16px] text-[#9CA3AF] font-medium">
      Vehicle Details
    </h3>

    {/* Model + Registration */}
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

      <div>
        <label className="text-[13px] text-[#9CA3AF] mb-1 block">
          Vehicle Model
        </label>
        <input
          className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
          placeholder="Mercedes-Benz S-Class"
        />
      </div>

      <div>
        <label className="text-[13px] text-[#9CA3AF] mb-1 block">
          Registration
        </label>
        <input
          className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
          placeholder="W24 LUX"
        />
      </div>

    </div>

    {/* License */}
    <div>
      <label className="text-[13px] text-[#9CA3AF] mb-1 block">
        Driver License Number
      </label>
      <input
        className="w-full h-[44px] bg-[#0B0F17] border border-[#1A1F2B] rounded-md px-[14px] text-[14px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#C89B3C]"
        placeholder="THOMP85104KM99AQ"
      />
    </div>

  </div>

  {/* ===== Button ===== */}
  <div className="pt-2">
    <button className="bg-[#C89B3C] text-white text-[14px] px-5 py-[10px] rounded-md font-medium flex items-center gap-2 hover:opacity-90">
      
      <Image src={saveImage} alt="Save Icon" width={16} height={16} />

      Save Changes
    </button>
  </div>

</div>
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
                      Once you delete your account, there is no going back.
                      Please be certain.
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
           <div className="bg-[#05070B]  rounded-2xl p-5 sm:p-6 space-y-6">

  {/* Title */}
  <h3 className="text-[16px] text-[#9CA3AF] font-medium">
    Notification Preferences
  </h3>

  {/* List */}
  <div className="space-y-4">

    {[
      {
        title: "New Booking Alerts",
        desc: "Get notified when new trips are assigned",
        active: true,
      },
      {
        title: "Booking Updates",
        desc: "Receive updates about trip changes",
        active: true,
      },
      {
        title: "Payment Alerts",
        desc: "Get notified when payments are processed",
        active: true,
      },
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-center justify-between bg-[#0B0F17] border border-[#1A1F2B] rounded-lg px-5 py-4"
      >

        {/* Left */}
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
          className={`w-[38px] h-[20px] rounded-full flex items-center px-[3px] ${
            item.active ? "bg-[#C89B3C]" : "bg-[#374151]"
          }`}
        >
          <div
            className={`w-[14px] h-[14px] rounded-full bg-white ${
              item.active ? "translate-x-[18px]" : "translate-x-0"
            }`}
          />
        </div>

      </div>
    ))}

  </div>

  {/* Button */}
  <div className="pt-2">
    <button className="bg-[#C89B3C] text-white text-[14px] px-5 py-[10px] rounded-md font-medium flex items-center gap-2 hover:opacity-90">
      
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
        active ? "bg-yellow-500 text-white" : "text-gray-400 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
