"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";

import img1 from "@/public/images/Image (6).svg";
import img2 from "@/public/images/Image (7).svg";
import img3 from "@/public/images/Image (8).svg";
import type { StaticImageData } from "next/image";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  desc: string;
};

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Amani",
    role: "Director",
    image: img1,
    desc: `"We don’t just provide a service; we live it. Our passion for luxury travel fuels our commitment to delivering extraordinary experiences. Every journey is a labor of love, meticulously crafted to exceed expectations."`,
  },
  {
    id: 2,
    name: "Rico",
    role: "Director",
    image: img2,
    desc: `"It’s about redefining and elevating the overall landscape of luxury transport experiences. That in essence describes my purpose"`,
  },
  {
    id: 3,
    name: "Ryan",
    role: "Luxury Chauffeur",
    image: img3,
    desc: `"I am dedicated to providing an exceptional level of service that goes beyond transportation. My goal is to create memorable experiences for every client, ensuring that each journey is not just a ride, but a luxurious and personalized experience ."`,
  },
  {
    id: 4,
    name: "John",
    role: "Chauffeur",
    image: img1,
    desc: `"I aim to create unforgettable travel experiences that exceed expectations. By providing exceptional service and unparalleled luxury, I strive to make every journey a cherished memory."`,
  },
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex font-cardo h-[450px] flex-col rounded-xl   bg-[#121212] p-6 text-center shadow-[0_0_0_1px_rgba(12,24,52,0.25)]">
      
      {/* IMAGE */}
      <div className="relative mx-auto mb-5 overflow-hidden border rounded-full h-36 w-36 border-white/10">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover rounded-full"
        />
      </div>

      {/* NAME */}
      <h3 className="mb-4 font-cardo text-[32px] leading-none text-[#F4F4F6]">{member.name}</h3>

      {/* ROLE */}
      <div className="mx-auto mb-5 inline-flex min-w-[145px] justify-center rounded-full bg-[#806100] px-5 py-2 text-base leading-none text-[#F5E8BF]">
        {member.role}
      </div>

      {/* DESC */}
      <p
        className="text-sm leading-[1.7] text-[#8D96A7]"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {member.desc}
      </p>
    </div>
  );
};

export default function TeamSlider() {
  return (
    <section className="px-4 py-24 text-white bg-black ">
      <div className="container mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 max-w-[700px]">
          <h2 className="mb-5 font-cardo text-[40px] italic leading-none text-[#F4F4F6] sm:text-[48px] lg:text-[56px]">
            Meet the Team
          </h2>

          <p className="max-w-[900px] text-base leading-[1.75] text-[#8D96A7] sm:text-lg">
            Introducing the passionate experts whose commitment to luxury and precision defines VVIP Luxury’s exceptional standard of service.
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          slidesPerView={3}
          spaceBetween={18}
          freeMode={true}
          modules={[FreeMode]}
          className="pt-6"
          breakpoints={{
            320: { slidesPerView: 1.05, spaceBetween: 12 },
            640: { slidesPerView: 1.35, spaceBetween: 14 },
            1024: { slidesPerView: 2.45, spaceBetween: 18 },
            1280: { slidesPerView: 3.05, spaceBetween: 18 },
          }}
        >
          {teamData.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}