"use client";

import Image from "next/image";

// 👉 replace with your image
import bgImage from "../../../../public/images/ImageWithFallback (5).svg";
import divider from "../../../../public/images/Container (17).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";


export default function TrustedByTheWorld() {
  return (
    <div className="text-white bg-black font-cardo">
      
      {/* HERO SECTION */}
      <div className="relative w-full overflow-hidden">
        
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="Luxury"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* Content */}
        <div className="container relative z-10 px-4 py-24 mx-auto md:py-32 lg:py-40">
          
          <div className="max-w-2xl">
            
            {/* Top Label */}
           <div className="flex items-center justify-start gap-4 mb-6 ml-2">
          <span className="text-[#D4AF37] text-lg">05</span>
            <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
            <Image src={divider} alt="divider" className="hidden md:block" />
        </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl leading-tight md:text-5xl lg:text-6xl">
              Trusted by the World's Most Discerning Travellers
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm leading-relaxed text-gray-300 md:text-base">
              
              <p>
                Barbados continues to attract some of the world’s most influential travellers—individuals who expect a level of security that matches the exclusivity of their surroundings.
              </p>

              <p>
                At VVIP Luxury, our role is to ensure that clients can fully enjoy the beauty, culture, and elegance of the island with complete confidence and peace of mind.
              </p>

              <p>
                Through our commitment to professionalism, discretion, and trusted partnerships, we deliver security services that reflect the same standards of excellence, reliability, and refinement that define every aspect of the VVIP Luxury experience.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="py-16 text-center md:py-20">
        
        {/* Divider */}
        <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-6" />

        {/* Title */}
        <h3 className="mb-3 text-2xl md:text-4xl">
          VVIP Luxury Security Services
        </h3>

        {/* Subtitle */}
        <p className="max-w-md mx-auto text-sm text-gray-400 md:text-base">
          Protection delivered with precision, discretion, and uncompromising professionalism.
        </p>

      </div>

    </div>
  );
}