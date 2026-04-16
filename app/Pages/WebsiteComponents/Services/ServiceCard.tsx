"use client";

import Image from "next/image";
import Link from "next/link";
import tag from "../../../../public/images/Icon.svg";
import rightArrow from "../../../../public/images/Component 3 copy.svg";
import rightArrowYellow from "../../../../public/images/Component 3 (1).svg";


import img1 from "../../../../public/images/service1.svg";
import img2 from "../../../../public/images/service2.svg";
import img3 from "../../../../public/images/service1.svg";
import img4 from "../../../../public/images/service2.svg";
import img5 from "../../../../public/images/service1.svg";
import img6 from "../../../../public/images/service2.svg";
import img7 from "../../../../public/images/service1.svg";
import img8 from "../../../../public/images/service2.svg";

type Service = {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: any;
  description: string;
  features: string[];
};

const servicesData: Service[] = [
     {
    id: 1,
    slug: "diplomatic-services",
    title: "Diplomatic Services",
    category: "Transport",
    image: img1,
    description:
      "We understand the unique needs and protocols of diplomatic travel regarding diplomats and government officials. We offer discreet and efficient transportation services tailored to your specific requirements.",
    features: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary wait time",
      "Luggage assistance",
      "All airports covered",
    ],
  },
  {
    id: 2,
    slug: "weddings",
    title: "Weddings",
    category: "Transport",
    image: img2,
    description:
      "Your wedding day is a once-in-a-lifetime event. Let us help you make it truly unforgettable. Our dedicated team ensures everything runs smoothly and elegantly.",
    features: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary wait time",
      "Luggage assistance",
      "All airports covered",
    ],
  },
  {
    id: 3,
    slug: "sightseeing-tours",
    title: "Sightseeing Tours",
    category: "Transport",
    image: img3,
    description:
      "Embark on a journey of discovery with our personalized sightseeing tours. Our knowledgeable chauffeurs guide you through Barbados’ landmarks, hidden gems, and vibrant culture.",
    features: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary wait time",
      "Luggage assistance",
      "All airports covered",
    ],
  },
  {
    id: 4,
    slug: "photo-shoots",
    title: "Photo Shoots",
    category: "Transport",
    image: img4,
    description:
      "Our fleet provides the perfect backdrop for luxury photo shoots, weddings, or corporate campaigns. Capture timeless elegance with our premium vehicles.",
    features: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary wait time",
      "Luggage assistance",
      "All airports covered",
    ],
  },
  {
    id: 5,
    slug: "corporate-events",
    title: "Corporate Events",
    category: "Transport",
    image: img5,
    description:
      "Ensure a professional impression with our corporate transport services. Designed for executives who value punctuality, comfort, and discretion.",
    features: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary wait time",
      "Luggage assistance",
      "All airports covered",
    ],
  },
  {
    id: 6,
    slug: "special-events",
    title: "Special Events",
    category: "Transport",
    image: img6,
    description:
      "Whether it’s a wedding, concert, or private celebration, our luxury transport services ensure a seamless and stylish experience.",
    features: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary wait time",
      "Luggage assistance",
      "All airports covered",
    ],
  },
  {
    id: 7,
    slug: "tailor-made-services",
    title: "Tailor Made Services",
    category: "Transport",
    image: img7,
    description:
      "Beyond our core services, we offer fully customized transport solutions tailored to your unique needs and lifestyle.",
    features: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary wait time",
      "Luggage assistance",
      "All airports covered",
    ],
  },
  {
    id: 8,
    slug: "airport-transfers",
    title: "Airport Transfers",
    category: "Transport",
    image: img8,
    description:
      "Experience the pinnacle of luxury travel from the moment you step off the plane. Seamless airport transfers with style and comfort.",
    features: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary wait time",
      "Luggage assistance",
      "All airports covered",
    ],
  },
  {
    id: 9,
    slug: "bespoke-private-chauffeuring",
    title: "Bespoke Private Chauffeuring",
    category: "Transport",
    image: img8,
    description:
      "Enjoy personalized chauffeur services tailored to your schedule and preferences. Travel in comfort and elegance.",
    features: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary wait time",
      "Luggage assistance",
      "All airports covered",
    ],
  },
  {
    id: 10,
    slug: "group-transportation",
    title: "Group Transportation",
    category: "Transport",
    image: img8,
    description:
      "Perfect for group travel, corporate outings, or family vacations. Designed to cater to your specific needs with luxury.",
    features: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary wait time",
      "Luggage assistance",
      "All airports covered",
    ],
  },
];

export default function ServiceCard() {
  return (
    <section className="px-4 text-white bg-black md:py-20 font-cardo ">
      <div className="container mx-auto space-y-16">
        
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className="grid items-center grid-cols-1 gap-8 p-6 border lg:grid-cols-2 border-white/10 rounded-xl lg:p-8"
          >
            
            {/* IMAGE */}
            <div
              className={`relative w-full h-[280px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden ${
                index % 2 !== 0 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
              
              {/* TOP */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#302d27] text-4xl font-semibold">
                  {service.id.toString().padStart(2, "0")}
                </span>
                <span className="text-[#D4AF37] text-xs uppercase tracking-widest">
                  — {service.category}
                </span>
              </div>

              {/* TITLE */}
              <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-serif mb-4">
                {service.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-[#9CA3AF] text-sm leading-[1.9] mb-6">
                {service.description}
              </p>

              {/* FEATURES */}
              <ul className="mb-8 space-y-3">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                    <Image src={tag} alt="icon" className="w-4 h-4" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">
                
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-3 border border-[#D4AF37] px-5 py-2 text-xs tracking-wider uppercase text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-white"
                >
                  Details View
                  <Image src={rightArrowYellow} alt="" className="w-6 h-6 group-hover:hidden" />
                  <Image src={rightArrow} alt="" className="hidden w-6 h-6 group-hover:block" />
                </Link>

                <Link
                  href="#"
                  className="inline-flex items-center gap-3 bg-[#D4AF37] px-7 py-3 text-xs tracking-wider uppercase text-white transition-all duration-300 hover:opacity-90"
                >
                  Book Now
                  <Image src={rightArrow} alt="" className="w-6 h-6" />
                </Link>

              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}