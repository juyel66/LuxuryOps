"use client";
import img1 from '../../../../public/images/img1.svg'
import img2 from '../../../../public/images/img2.svg'
import img3 from '../../../../public/images/img3.svg'
import rightArrow from '../../../../public/images/Component 3 copy.svg'

import Image from "next/image";
import Link from "next/link";




const services = [
  {
    title: "Airport Transfers",
    desc: "Experience the epitome of luxury travel from the moment you step off the plane. Our premium airport transfer service ensures a seamless and stylish journey...",
    image: img1,
  },
  {
    title: "Bespoke Private Chauffeuring",
    desc: "Experience the pinnacle of luxury travel with our bespoke chauffeuring service. Our expert chauffeurs are dedicated to providing a seamless experience...",
    image: img2,
  },
  {
    title: "Group Transportation",
    desc: "Whether it's a corporate retreat or family vacation, our group services are designed to cater to your specific needs with comfort and luxury...",
    image: img3,
  },
];

const VVIPLuxuryService = () => {
  return (
    <section className="bg-[#0A0A0A] text-white py-16 md:py-24 px-4 ">

      {/* TOP CONTENT */}
      <div className="container mx-auto">

        <div className="flex items-center gap-3 mb-2">
           <div className="w-10 h-px bg-[#7A8A9A]" />
            <span className="text-2xl text-[#7A8A9A] md:text-3xl font-cardo">02</span>
          </div>

        <h2 className="font-cardo italic text-[32px] sm:text-[42px] md:text-[56px] leading-[116%] mb-6">
          VVIP Luxury <br />
          Services
        </h2>

        <p className="hidden max-w-xl mb-8 text-sm leading-relaxed text-gray-400 md:flex sm:text-base">
          Our diverse fleet and committed team empowers us to deliver a <br /> comprehensive suite of luxury transportation services.
        </p>
        <p className="max-w-xl mb-8 text-sm leading-relaxed text-gray-400 md:hidden sm:text-base">
          Our diverse fleet and committed team empowers us to deliver a  comprehensive suite of luxury transportation services.
        </p>

      <div className="mt-6 sm:mt-8">
            <Link
              href="#"
              className="inline-flex items-center  gap-3 border bg-white/10 border-white  px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-[#D4AF37] "
            >
              EXPLORE <Image src={rightArrow} alt="arrow" className="w-4 h-4" />
            </Link>
          </div>
      </div>

      {/* CARDS */}
      <div className="container grid grid-cols-1 gap-6 mx-auto mt-14 sm:grid-cols-2 lg:grid-cols-3">

        {services.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group"
          >

            {/* IMAGE */}
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 transition" />

            {/* CONTENT */}
            <div className="absolute bottom-0 z-10 p-6">
              <h3 className="mb-2 text-2xl italic font-cardo">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 line-clamp-4">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default VVIPLuxuryService;