"use client";

import Image from "next/image";
import Link from "next/link";
import rightArrow from "../../../../public/images/Component 3 copy.svg";

export default function TheVVIPLuxuryExperience() {
  return (
    <section className="py-1 pl-4 pr-4 text-white bg-[#0A0A0A] md:py-20 ">
      <div className="container grid grid-cols-1 gap-12 mx-auto lg:grid-cols-3 lg:gap-20">
        
        
        <div>
        
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-[#7A8A9A]" />
            <span className="text-2xl text-[#7A8A9A] md:text-3xl font-cardo">03</span>
          </div>

          {/* Heading */}
          <h2 className="text-[36px]  sm:text-[42px] lg:text-[48px] leading-[1.2] font-cardo italic mb-6">
            The VVIP Luxury <br /> Experience
          </h2>

          {/* Description */}
          <p className="text-[#9CA3AF] text-sm sm:text-base leading-[1.9] max-w-[500px]">
            Where luxury is limitless. Our commitment to excellence and
            personalized service has made us the preferred choice for discerning
            clients, ensuring that our brand is synonymous with excellence.
          </p>

          {/* BUTTON */}
          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-3 border border-white px-6 py-3 text-xs sm:text-sm tracking-wider   hover:text-white uppercase transition-all duration-300 hover:bg-[#D4AF37] "
            >
              Learn More
              <Image src={rightArrow} alt="arrow" className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* MIDDLE CONTENT */}
        <div>
          <p className="text-[#CFCFCF] text-sm sm:text-base leading-[1.9]">
            Experience the pinnacle of luxury transportation with VVIP Luxury
            Chauffeured Transports. For over a decade, we have been setting the
            standard for excellence in Barbados. Our dedicated team of
            experienced chauffeurs, led by industry veteran Amani Clarke, is
            committed to providing a seamless and unforgettable journey.
            Indulge in the ultimate comfort and style of our fleet, including
            the exclusive Mercedes-Maybach Land Jet. Our vehicles are
            meticulously maintained and equipped with the latest technology to
            ensure a safe and luxurious ride.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-[#CFCFCF] text-sm sm:text-base leading-[1.9]">
            We prioritize your satisfaction and strive to exceed your
            expectations. From airport transfers to bespoke tours, our
            personalized service ensures that every detail is taken care of. As
            a family-run business, we’ve built a strong reputation for our
            personalized approach and unwavering commitment to client
            satisfaction. Our experienced chauffeurs are not just drivers; they
            are ambassadors of our brand. They possess an intimate knowledge of
            the island, ensuring the curation of once in a lifetime journeys. We
            prioritize punctuality, discretion, and a seamless travel
            experience, making us the preferred choice for discerning clients.
          </p>
        </div>
      </div>
    </section>
  );
}