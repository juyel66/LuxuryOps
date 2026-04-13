"use client";

import { usePathname } from "next/navigation";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Martinez",
    location: "Monaco",
    text: "At VVIP Luxury Chauffeur Services we felt as though we were back home in Monaco. Amani and his team are amazing. Definitely will be booking again and again.",
  },
  {
    name: "James Wellington",
    location: "London, UK",
    text: "The level of professionalism and attention to detail exceeded all expectations. Our corporate team was impressed with the seamless service throughout our visit.",
  },
  {
    name: "Olivia Chen",
    location: "Singapore",
    text: "Impeccable service from start to finish. The chauffeur was punctual, professional, and the vehicle was absolutely pristine. True luxury transportation.",
  },
  {
    name: "Amir Rahman",
    location: "Dubai",
    text: "Every transfer was handled with complete discretion and precision. The experience felt polished, calm, and genuinely premium.",
  },
  {
    name: "Isabella Rossi",
    location: "Milan",
    text: "From the first message to the final drop-off, everything was handled flawlessly. The service felt tailored and effortless.",
  },
  {
    name: "Daniel Brooks",
    location: "New York",
    text: "Our family trip ran smoothly because of the team's coordination. The vehicle quality and service standard were both exceptional.",
  },
  {
    name: "Sophia Laurent",
    location: "Paris",
    text: "A beautiful experience in every sense. The chauffeur was attentive without being intrusive, and the ride was incredibly comfortable.",
  },
  {
    name: "Ethan Walker",
    location: "Los Angeles",
    text: "Booking was quick, communication was clear, and the entire journey felt premium. This is the standard other services should follow.",
  },
  {
    name: "Ava Thompson",
    location: "Toronto",
    text: "The consistency across every journey impressed us most. It felt reliable, luxurious, and very well managed.",
  },
  {
    name: "Lucas Meyer",
    location: "Zurich",
    text: "The attention to detail was excellent. From timing to presentation, every part of the experience was carefully considered.",
  },
  {
    name: "Mia Bennett",
    location: "Sydney",
    text: "We use VVIP for both business and leisure travel now. The team always delivers a smooth, high-end experience.",
  },
  {
    name: "Noah Patel",
    location: "Mumbai",
    text: "A dependable luxury transport partner. The professionalism and vehicle presentation were outstanding throughout.",
  },
];

function TestimonialCard({
  name,
  location,
  text,
}: {
  name: string;
  location: string;
  text: string;
}) {
  return (
    <div className="testimonial-card">
      <p className="text-[#CFCFCF] text-sm leading-[1.8] mb-6">{text}</p>

      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-[#D4AF37] text-sm font-semibold">{name}</h4>
          <span className="text-[#9CA3AF] text-xs">{location}</span>
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

  const topRow = testimonials.slice(0, 6);
  const bottomRow = testimonials.slice(6, 12);

  return (
    <section className="relative block w-full px-4 py-16 text-white bg-black font sm:px-10 md:py-24 lg:px-20 font-cardo">
      {/* BACKGROUND GLOW (like design) */}
      <div className="absolute top-0 -translate-x-1/2 pointer-events-none left-1/2 w-80 h-80 bg-linear-to-br from-yellow-500/20 via-green-400/10 to-blue-500/20 blur-3xl opacity-30 sm:left-1/3 sm:w-96 sm:h-96 sm:translate-x-0" />

      <div className="container relative z-10 mx-auto">
        {/* HEADER */}
        <div className="container mb-10">
          
          <div
            className={`${
              pathname?.startsWith("/services") ? "hidden" : "flex"
            } items-center gap-4 mb-4`}
          >
            <div className="w-10 h-px bg-[#7A8A9A]" />
            <span className="text-2xl text-gray-400 md:text-3xl">05</span>
          </div>

          <h2 className="text-[34px] sm:text-[40px] lg:text-[44px] font-cardo italic mb-4">
            Testimonials
          </h2>

          <p className="text-[#9CA3AF] md:text-[17px]  leading-[1.9]">
            At VVIP Luxury Chauffeured Services, we redefine luxury travel. Each
            testimonial highlights our commitment to elegance and excellence.
          </p>
        </div>

        {/* SLIDER */}
        <div className="space-y-6 overflow-hidden">
          <div className="marquee marquee-left">
            <div className="marquee-track">
              {topRow.concat(topRow).map((item, index) => (
                <TestimonialCard key={`top-${item.name}-${index}`} {...item} />
              ))}
            </div>
          </div>

          <div className="marquee marquee-right">
            <div className="marquee-track">
              {bottomRow.concat(bottomRow).map((item, index) => (
                <TestimonialCard key={`bottom-${item.name}-${index}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-card {
          width: 100%;
          max-width: 360px;
          flex: 0 0 360px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .marquee {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          will-change: transform;
        }

        .marquee-left .marquee-track {
          animation: marquee-left 34s linear infinite;
        }

        .marquee-right .marquee-track {
          animation: marquee-right 34s linear infinite;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 640px) {
          .testimonial-card {
            flex-basis: 290px;
            max-width: 290px;
          }
        }
      `}</style>
    </section>
  );
}
