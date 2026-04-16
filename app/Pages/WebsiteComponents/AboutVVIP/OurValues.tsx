"use client";

import { FaShieldAlt, FaAward, FaUsers } from "react-icons/fa";
import image1 from "../../../../public/images/Icon (2).svg"
import image2 from "../../../../public/images/Icon (3).svg"
import image3 from "../../../../public/images/Icon (4).svg"
import Image from "next/image";

export default function OurValues() {
  return (
    <section className="text-white bg-black">
      
  
      <div className="border border-white/10">
        <div className="container grid grid-cols-2 gap-8 px-4 py-12 mx-auto text-center sm:grid-cols-4">
          
          <div>
            <h3 className="text-[#D4AF37] text-2xl sm:text-3xl font-semibold">
              10+
            </h3>
            <p className="text-[#9CA3AF] text-xs sm:text-sm mt-2">
              Years of Excellence
            </p>
          </div>

          <div>
            <h3 className="text-[#D4AF37] text-2xl sm:text-3xl font-semibold">
              1000+
            </h3>
            <p className="text-[#9CA3AF] text-xs sm:text-sm mt-2">
              Transfers Completed
            </p>
          </div>

          <div>
            <h3 className="text-[#D4AF37] text-2xl sm:text-3xl font-semibold">
              5.3M
            </h3>
            <p className="text-[#9CA3AF] text-xs sm:text-sm mt-2">
              Kilometres Driven
            </p>
          </div>

          <div>
            <h3 className="text-[#D4AF37] text-2xl sm:text-3xl font-semibold">
              5 Star
            </h3>
            <p className="text-[#9CA3AF] text-xs sm:text-sm mt-2">
              5 Star Service
            </p>
          </div>

        </div>
      </div>

      
      <div className="px-4 py-24 ">
        <div className="container mx-auto text-center">
          
          {/* TITLE */}
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-cardo mb-4">
            Our Values
          </h2>

          <p className="text-[#9CA3AF] text-sm sm:text-base font-cardo mb-12">
            The principles that guide everything we do.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 gap-8 font-cardo md:grid-cols-2 lg:grid-cols-3">
            
            {/* CARD 1 */}
            <div className="p-8 text-center border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
              <Image src={image1} alt="icon" className="w-10 h-10 mx-auto mb-4" />

              <h3 className="mb-3 font-serif text-lg">
                Discretion & Security
              </h3>

              <p className="text-[#9CA3AF] text-sm leading-[1.8]">
                Your privacy and safety are our top priorities. All our chauffeurs
                undergo rigorous background checks and security training.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-8 text-center border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
             <Image src={image2} alt="icon" className="w-10 h-10 mx-auto mb-4" />

              <h3 className="mb-3 font-serif text-lg">
                Excellence
              </h3>

              <p className="text-[#9CA3AF] text-sm leading-[1.8]">
                We maintain the highest standards in vehicle maintenance,
                driver training, and customer service to ensure an exceptional
                experience.
              </p>
            </div>

           

            {/* CARD 3 */}
            <div className="p-8 text-center border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
              <Image src={image3} alt="icon" className="w-10 h-10 mx-auto mb-4" />

              <h3 className="mb-3 font-serif text-lg">
                Professional Team
              </h3>

              <p className="text-[#9CA3AF] text-sm leading-[1.8]">
                Our experienced chauffeurs are handpicked professionals who
                embody professionalism, courtesy, and discretion.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}