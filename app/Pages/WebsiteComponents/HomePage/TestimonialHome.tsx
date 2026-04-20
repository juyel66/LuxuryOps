"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { usePathname } from "next/navigation";
import { FaStar } from "react-icons/fa";

import { FreeMode } from "swiper/modules";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  text: string;
};

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Martinez",
    location: "Monaco",
    text: "At VVIP Luxury Chauffeur Services we felt as though we were back home in Monaco. Amani and his team are amazing. Definitely will be booking again and again.",
  },
  {
    id: 2,
    name: "James Wellington",
    location: "London, UK",
    text: "The level of professionalism and attention to detail exceeded all expectations. Our corporate team was impressed with the seamless service throughout our visit.",
  },
  {
    id: 3,
    name: "Olivia Chen",
    location: "Singapore",
    text: "Impeccable service from start to finish. The chauffeur was punctual, professional, and the vehicle was absolutely pristine. True luxury transportation.",
  },
  {
    id: 4,
    name: "Amir Rahman",
    location: "Dubai",
    text: "Every transfer was handled with complete discretion and precision. The experience felt polished, calm, and genuinely premium.",
  },
  {
    id: 5,
    name: "Isabella Rossi",
    location: "Milan",
    text: "From the first message to the final drop-off, everything was handled flawlessly. The service felt tailored and effortless.",
  },
  {
    id: 6,
    name: "Daniel Brooks",
    location: "New York",
    text: "Our family trip ran smoothly because of the team's coordination. The vehicle quality and service standard were both exceptional.",
  },
  {
    id: 7,
    name: "Sophia Laurent",
    location: "Paris",
    text: "A beautiful experience in every sense. The chauffeur was attentive without being intrusive, and the ride was incredibly comfortable.",
  },
  {
    id: 8,
    name: "Ethan Walker",
    location: "Los Angeles",
    text: "Booking was quick, communication was clear, and the entire journey felt premium. This is the standard other services should follow.",
  },
  {
    id: 9,
    name: "Ava Thompson",
    location: "Toronto",
    text: "The consistency across every journey impressed us most. It felt reliable, luxurious, and very well managed.",
  },
  {
    id: 10,
    name: "Lucas Meyer",
    location: "Zurich",
    text: "The attention to detail was excellent. From timing to presentation, every part of the experience was carefully considered.",
  },
  {
    id: 11,
    name: "Mia Bennett",
    location: "Sydney",
    text: "We use VVIP for both business and leisure travel now. The team always delivers a smooth, high-end experience.",
  },
  {
    id: 12,
    name: "Noah Patel",
    location: "Mumbai",
    text: "A dependable luxury transport partner. The professionalism and vehicle presentation were outstanding throughout.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex md:h-[200px] h-[200px] flex-col p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
      <p
        className="mb-6  leading-[1.8] text-[#CFCFCF]"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {testimonial.text}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <div>
          <h4 className="text-[#D4AF37] text-sm font-semibold">
            {testimonial.name}
          </h4>
          <span className="text-[#9CA3AF] text-xs">{testimonial.location}</span>
        </div>

        <div className="flex items-center gap-1 text-[#D4AF37] text-sm">
          <FaStar />
          <span>5.0</span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialHome() {
  const pathname = usePathname();

  return (
    <section className="relative block w-full px-4 py-16 text-white bg-black md:py-24 font-cardo">
      {/* BACKGROUND GLOW (like design) */}
      <div className="absolute top-0 left-1/2 w-[320px] h-80 -translate-x-1/2 bg-linear-to-br from-yellow-500/20 via-green-400/10 to-blue-500/20 blur-3xl opacity-30 pointer-events-none sm:left-1/3 sm:w-[400px] sm:h-[400px] sm:translate-x-0" />

      <div className="container relative z-10 mx-auto">
        {/* HEADER */}
        <div className="container mb-10">
          
          <div
            className={`${
              pathname?.startsWith("/aboutvvip") ? "hidden" : "flex"
            } items-center gap-4 mb-4`}
          >
            <div className="w-10 h-px bg-[#7A8A9A]" />
            <span className="text-2xl text-[#7A8A9A] md:text-3xl font-cardo">05</span>
          </div>

          <h2 className="text-[34px] sm:text-[40px] lg:text-[44px] font-cardo italic mb-4">
            Testimonials
          </h2>

          <p className="text-[#9CA3AF] md:text-[17px]  leading-[1.9]">
            At VVIP Luxury Chauffeured Services, we redefine luxury travel. Each
            testimonial <br /> highlights our commitment to elegance and excellence.
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          slidesPerView={3}
          spaceBetween={18}
          freeMode={true}
          loop={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="pt-6"
          breakpoints={{
            320: { slidesPerView: 1.05, spaceBetween: 12 },
            640: { slidesPerView: 1.35, spaceBetween: 14 },
            1024: { slidesPerView: 2.45, spaceBetween: 18 },
            1280: { slidesPerView: 3.05, spaceBetween: 18 },
          }}
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}