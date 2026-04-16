"use client";

import {
  Plus,
  Shield,
  User,
  Users,
  Search,
  Mail,
  Phone,
  Pencil,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import profileImage from "../../../../public/images/Container (22).svg";
import profileImage1 from "../../../../public/images/Container (20).svg";
import profileImage2 from "../../../../public/images/Container (18).svg";
import Link from "next/link";


const users = [
  {
    name: "John doe",
    img: profileImage,
    id: "USR - 001",
    role: "Admin",
    email: "admin@vvipluxury.com",
    phone: "+44 20 7123 4567",
    status: "Active",
    permissions: ["Full Access", "User Management", "Financial Access"],
  },
  {
    name: "Alexander Smith",
    img: profileImage1,
    id: "USR - 001",
    role: "Driver",
    email: "admin@vvipluxury.com",
    phone: "+44 20 7123 4567",
    status: "Active",
    permissions: ["Booking Management", "Fleet Management"],
  },
  {
    name: "Emily Johnson",
    img: profileImage2,
    id: "USR - 001",
    role: "Staff",
    email: "admin@vvipluxury.com",
    phone: "+44 20 7123 4567",
    status: "Active",
    permissions: ["Customer Support", "Invoicing"],
  },
];


export default function UserManagementPage() {
  return (
    <div className="space-y-6 text-white sm:p-6">

    
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div>
          <h1 className="text-2xl font-semibold">User Management</h1>
          <p className="text-sm text-gray-400">
            Manage system users and permissions
          </p>
        </div>

        <Link href="/admin-dashboard/user-management/create-user"className="flex items-center gap-2 px-4 py-2 text-white bg-yellow-500 rounded-lg w-fit">
          <Plus size={16} /> Add User
        </Link>
      </div>

 
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={<Shield />} title="Admins" value="1" color="bg-purple-900 text-purple-400" />
        <StatCard icon={<User />} title="Staff" value="2" color="bg-green-900 text-green-400" />
        <StatCard icon={<Users />} title="Drivers" value="2" color="bg-yellow-900 text-yellow-400" />
      </div>

      
      <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-3 flex flex-col sm:flex-row gap-3">
        
        <div className="flex items-center gap-2 flex-1 bg-[#111] px-3 py-2 rounded">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Search by name or email..."
            className="w-full text-sm bg-transparent outline-none"
          />
        </div>

        <select className="bg-[#111] px-3 py-2 rounded text-sm">
          <option>Admin</option>
          <option>Staff</option>
          <option>Driver</option>
        </select>
      </div>

    
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[...users, ...users].map((u, i) => (
          <UserCard key={i} user={u} />
        ))}
      </div>
    </div>
  );
}



const StatCard = ({ icon, title, value, color }: any) => (
  <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl  flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className="text-xl font-semibold">{value}</h2>
    </div>

    <div className={`p-2 rounded ${color}`}>
      {icon}
    </div>
  </div>
);



const UserCard = ({ user }: any) => (
  <div className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-4 space-y-4">

<div className="flex items-center justify-between gap-4">
        {/* TOP */}
    <div className="flex items-center gap-3">
      <Image
        src={user.img}
        alt="user"
        width={40}
        height={40}
        className="w-10 h-10 rounded-full"
      />

      <div>
        <h3 className="text-sm font-medium">{user.name}</h3>
        <p className="text-xs text-gray-400">{user.id}</p>
      </div>
    </div>

    {/* ROLE BADGE */}
    <div className="flex flex-wrap gap-2">
      <Badge role={user.role} />
      <span className="px-2 py-1 text-xs text-green-400 bg-green-900 rounded">
        {user.status}
      </span>
    </div>
</div>

    {/* CONTACT */}
    <div className="space-y-1 text-xs text-gray-400">
      <div className="flex items-center gap-2">
        <Mail size={12} /> {user.email}
      </div>
      <div className="flex items-center gap-2">
        <Phone size={12} /> {user.phone}
      </div>
    </div>

    {/* META */}
    <div className="flex justify-between text-xs text-gray-500">
      
      <p>Last Login:</p>
      <p className="text-white">2 hour ago</p>
      
    </div>
    <div className="flex justify-between text-xs text-gray-500">
      
      <p>Created:</p>
      <p className="text-white">15 Jan 2025</p>
      
    </div>

    {/* PERMISSIONS */}
    <div>
      <p className="mb-1 text-xs text-gray-400">Permissions</p>

      <div className="flex flex-wrap gap-2">
        {user.permissions.map((p: string, i: number) => (
          <span
            key={i}
            className="bg-[#111] px-2 py-1 text-xs rounded"
          >
            {p}
          </span>
        ))}
        <span className="bg-[#111] px-2 py-1 text-xs rounded">
          +1 more
        </span>
      </div>
    </div>

    {/* ACTIONS */}
    <div className="flex items-center gap-2 pt-2">
      <button className="flex items-center justify-center flex-1 gap-2 py-2 text-sm text-white bg-yellow-500 rounded">
        <Pencil size={14} /> Edit Profile
      </button>

      <button className="p-2 bg-[#111] rounded hover:bg-[#1a1a1a]">
        <Trash2 size={14} />
      </button>
    </div>
  </div>
);



const Badge = ({ role }: any) => {
  const map: any = {
    Admin: "bg-purple-900 text-purple-400",
    Staff: "bg-green-900 text-green-400",
    Driver: "bg-yellow-900 text-yellow-400",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded ${map[role]}`}>
      {role}
    </span>
  );
};