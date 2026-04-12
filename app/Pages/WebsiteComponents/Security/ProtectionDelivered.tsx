"use client";

import Image from "next/image";
import bgImage from "../../../../public/images/Section (4).svg";
import divider from "../../../../public/images/Container (17).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";

export default function ProtectionDelivered() {
  return (
    <div className="relative w-full overflow-hidden text-white bg-black">
      
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Protection"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <section className="container relative z-10 px-4 py-24 mx-auto md:py-32 lg:py-40">
        
        {/* 👉 RIGHT SIDE ALIGN */}
        <div className="flex justify-end">
          <div className="max-w-2xl text-left">
            
            {/* Top Label */}
            <div className="flex items-center gap-4 mb-6">
            <span className="text-[#D4AF37] text-lg">01</span>
              <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
              <Image src={divider} alt="divider" className="hidden md:block" />
          </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl leading-tight md:text-5xl lg:text-6xl font-cardo">
              Protection Delivered with Discretion
            </h2>

            {/* Sub Text */}
            <p className="mb-4 text-sm text-gray-300 md:text-base">
              True security should never feel intrusive.
            </p>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm leading-relaxed text-gray-400 md:text-base">
              <p>
                Our philosophy is rooted in the belief that effective protection must operate with subtlety, professionalism, and situational awareness, allowing clients to move freely and comfortably while knowing that their safety is quietly and confidently managed.
              </p>

              <p>
                Every security professional we engage has been carefully vetted for experience, training, and professionalism, ensuring that our clients receive protection services aligned with the highest international standards.
              </p>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}