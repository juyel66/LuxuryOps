"use client";

import Image from "next/image";
import img1 from "../../../../public/images/Container (5).svg"; 

export default function TheVVIPSignatureJourney() {
  return (
    <section className="px-3 py-10 text-white bg-black md:py-20">
      <div className="container grid items-center grid-cols-1 gap-16 mx-auto lg:grid-cols-2">
        
        {/* LEFT SIDE IMAGES */}
        <div className="flex gap-6">
          
          {/* Left column */}

            {/* Top Image */}
            <div className="relative w-full md:h-[400px] h-[300] overflow-hidden rounded-lg ">
              <Image
                src={img1}
                alt="Luxury interior"
                fill
                className="object-contain"
              />
            </div>

       
     

     
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.2] font-cardo italic mb-6">
            The VVIP Signature <br /> Journey
          </h2>

          {/* Paragraph */}
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-[1.9] max-w-[600px]">
            At VVIP Luxury Chauffeured Transports, we are committed to providing
            unparalleled luxury and comfort. Our meticulously curated fleet of
            premium automobiles, coupled with our highly skilled chauffeurs,
            ensures that we continue to raise the bar of luxury transportation
            in Barbados. With years of experience serving discerning clients, we
            have built a reputation for exceptional service. Our commitment to
            punctuality, discretion, and personalized attention sets us apart.
            Whether you&apos;re a corporate executive or a leisure traveler, we
            tailor our services to meet your unique needs. Experience the VVIP
            Luxury difference.
          </p>
        </div>
      </div>
    </section>
  );
}