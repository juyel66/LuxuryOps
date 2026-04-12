"use client";

import Image from "next/image";

// 👉 replace with your real image
import leftImage from "../../../../public/images/ImageWithFallback (4).svg";
import divider from "../../../../public/images/Container (17).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";

export default function ArmedUnarmed() {
  return (
    <div className="text-white bg-black font-cardo">
      <section className="container px-4 py-20 mx-auto md:py-28">
        
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="relative w-full h-[500px] md:h-[720px] rounded-2xl object-cover overflow-hidden">
              
              <Image
                src={leftImage}
                alt="security"
                fill
                className="object-cover"
              />

              {/* Bottom Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            
            {/* Top Label */}
              <div className="items-center justify-start hidden gap-4 mb-6 md:flex">
          <span className="text-[#D4AF37] text-lg">03</span>
            <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
            <Image src={dividerMobile} alt="divider" className="hidden md:block" />
        </div>
        <div className="flex items-center justify-start gap-4 mb-6 md:hidden">
          <span className="text-[#D4AF37] text-lg">03</span>
            <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
            <Image src={dividerMobile} alt="divider" className="hidden md:block" />
        </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl leading-tight md:text-5xl">
              Armed & Unarmed Protection Options
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-sm leading-relaxed text-gray-400 md:text-base">
              
              <p>
                Recognising that each client's requirements are unique, VVIP Luxury offers both armed and unarmed security solutions tailored to the nature of the visit, the level of protection required, and applicable regulatory standards.
              </p>

              <p>
                We collaborate with fully licensed security providers in Barbados, ensuring all arrangements comply with local laws while maintaining the highest standards of professionalism and discretion.
              </p>

              <p>
                Whether a subtle unarmed presence for reassurance or a more robust armed protection service is required, each deployment is carefully planned to ensure optimal safety, comfort, and peace of mind.
              </p>

            </div>

          </div>

        </div>

      </section>
    </div>
  );
}