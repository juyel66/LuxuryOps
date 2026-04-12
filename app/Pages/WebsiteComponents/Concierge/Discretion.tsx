"use client";
import Image from "next/image";
// import divider from "../../../../public/images/Container (17).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";

export default function Discretion() {
  return (
    <div className="text-white bg-black font-cardo">
      <section className="container px-4 py-24 mx-auto text-center md:py-32">
        
        {/* Top Label */}
        <div className="flex items-center justify-start gap-4 mb-6">
          <span className="text-[#D4AF37] text-lg">03</span>
            <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
            <Image src={dividerMobile} alt="divider" className="hidden md:block" />
        </div>
        <div>
          
        </div>

        {/* Heading */}
        <h2 className="mx-auto mb-8 text-3xl leading-tight ax-w-3xl font-cardo md:text-5xl lg:text-6xl">
          Discretion. Precision. <br  className= "" />
          Absolute Trust.
        </h2>

        {/* Description */}
        <div className="max-w-2xl mx-auto space-y-5 text-sm leading-relaxed text-gray-400 md:text-base">
          
          <p>
            In the world of ultra-luxury hospitality, privacy and discretion are paramount.
          </p>

          <p>
            Our concierge services are delivered with the utmost respect for confidentiality, ensuring that every interaction, request, and arrangement is handled with the highest level of professionalism.
          </p>

          <p>
            It is this unwavering commitment to discretion that has allowed VVIP Luxury to earn the trust of travellers who expect nothing less than absolute excellence.
          </p>

        </div>
      </section>
    </div>
  );
}