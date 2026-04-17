"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";
import image1 from "../../../../public/images/Image (5).svg"
import image2 from "../../../../public/images/Image (4).svg"
import image3 from "../../../../public/images/Image (5).svg"
import image4 from "../../../../public/images/Image (5).svg"
import image5 from "../../../../public/images/Image (4).svg"
import image6 from "../../../../public/images/Image (3).svg"

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Amani",
    role: "Director",
    bio: "We don’t just offer a service; we embody it. Our love for luxury travel drives us to create extraordinary experiences.",
    image: image1,
  },
  {
    id: 2,
    name: "Rico",
    role: "Director",
    bio: "It’s about transforming the luxury transport experience. That’s my mission.",
    image: image2,
  },
  {
    id: 3,
    name: "Ryan",
    role: "Luxury Chauffeur",
    bio: "I strive to create unforgettable travel experiences that go beyond expectations.",
    image: image3,
  },
  {
    id: 4,
    name: "James",
    role: "Manager",
    bio: "Ensuring premium service delivery for every journey.",
    image: image4,
  },
  {
    id: 5,
    name: "Oliver",
    role: "Coordinator",
    bio: "Luxury service coordination at its finest.",
    image: image5,
  },
  {
    id: 6,
    name: "Ethan",
    role: "Driver",
    bio: "Professional chauffeur with exceptional service mindset.",
    image: image6,
  },
];

export default function TeamManagement() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090D] text-white mt-5">
      {/* HEADER */}
      <div className="items-center justify-between mb-8 md:flex">
        <div>
          <h1 className="font-serif text-3xl">Team Management</h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage team members displayed on the About and Contact pages
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-[#C89B3C] cursor-pointer mt-5 hover:bg-[#b88a2f] px-5 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
        >
          <Plus size={16} /> Add Team Member
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
           <div className="flex items-center gap-2">
             <p className="p-1 bg-white border rounded-full"></p>
          <div>
            <p className="text-sm text-gray-400">Total Members</p>
          <h2 className="mt-2 text-2xl">6</h2>
          </div>
           </div>
        </div>

         <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-5">
           <div className="flex items-center gap-2">
             <p className="p-1 bg-green-500 border border-green-500 rounded-full"></p>
          <div>
            <p className="text-sm text-gray-400">Active</p>
          <h2 className="mt-2 text-2xl text-green-500">6</h2>
          </div>
           </div>
        </div>
      </div>

      {/* TEAM GRID */}
      <div className="grid gap-6 md:grid-cols-3">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-6 text-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={140}
              height={140}
              className="mx-auto rounded-full"
            />

            <h3 className="mt-4 font-serif text-xl">{member.name}</h3>

            <span className="inline-block mt-2 bg-[#5e533b] text-white px-4 py-1 rounded-full text-sm">
              {member.role}
            </span>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {member.bio}
            </p>

            {/* ACTIONS */}
            <div className="flex items-center gap-2 mt-6">
              <button className="flex-1 bg-[#C89B3C] text-white py-2 cursor-pointer rounded-md flex items-center justify-center gap-2 text-sm">
                <Pencil size={14} /> Edit Profile
              </button>

              <button className="p-2 border border-[#1A1F2B] hover:bg-red-500 cursor-pointer rounded-md">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-[#0B0F17] w-full max-w-3xl rounded-xl p-6 border border-[#1A1F2B]">
            
            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl">Add New Team Member</h2>
              <button onClick={() => setOpenModal(false)}>
                <X />
              </button>
            </div>

            {/* UPLOAD */}
            <div className="border border-dashed border-[#1A1F2B] rounded-lg p-8 text-center mb-6">
              <UploadCloud className="mx-auto mb-3 text-gray-400" size={30} />
              <p className="text-sm text-gray-400">
                Drag & drop images here, or click to select
              </p>
              <button className="px-4 py-1 mt-3 text-sm bg-blue-600 rounded">
                Choose Files
              </button>
            </div>

            {/* INPUTS */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Full Name"
                className="bg-[#07090D] border border-[#1A1F2B] p-3 rounded-md text-sm"
              />
              <input
                placeholder="e.g., Managing Director"
                className="bg-[#07090D] border border-[#1A1F2B] p-3 rounded-md text-sm"
              />
            </div>

            <textarea
              placeholder="Brief biography and role description..."
              className="w-full bg-[#07090D] border border-[#1A1F2B] p-3 rounded-md text-sm h-28 mb-6"
            />

            {/* ACTIONS */}
            <div className="flex gap-4">
              <button
                onClick={() => setOpenModal(false)}
                className="flex-1 border border-[#C89B3C] text-[#C89B3C] py-3 rounded-md"
              >
                CANCEL
              </button>

              <button className="flex-1 bg-[#C89B3C] text-white  cursor-pointer py-3 rounded-md font-medium">
                ADD TEAM MEMBER
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}