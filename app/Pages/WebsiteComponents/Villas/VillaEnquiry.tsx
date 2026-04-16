"use client";

import { Home, Users, Anchor } from "lucide-react";
import rightArrow from "../../../../public/images/Component 3 copy.svg";
import Image from "next/image";

export default function VillaEnquiry() {
  return (
    <section className="w-full bg-[#05070B] text-white py-14 px-4 ">
      
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Top Line */}
          <div className="w-12 sm:w-16 h-[2px] bg-[#D4AF37]" />

          {/* Heading */}
          <h2 className="font-serif text-2xl leading-snug sm:text-3xl md:text-5xl">
            Begin Your Barbados <br className="hidden sm:block" /> Villa Journey
          </h2>

          {/* Description */}
          <p className="max-w-md text-sm text-gray-400 sm:text-base">
            Our team would be delighted to assist you in discovering the perfect residence.
          </p>

          {/* FEATURES */}
          <div className="space-y-5 sm:space-y-6">
            
            {/* ITEM 1 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-[#0B0F1A] border border-[#D4AF37]/30">
                <Home size={16} className="text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-sm">Platinum Coast Estates</h4>
                <p className="text-xs text-gray-400">
                  Exclusive beachfront properties
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-[#0B0F1A] border border-[#D4AF37]/30">
                <Users size={16} className="text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-sm">Dedicated Staff</h4>
                <p className="text-xs text-gray-400">
                  Full villa & concierge services
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-[#0B0F1A] border border-[#D4AF37]/30">
                <Anchor size={16} className="text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-sm">Island Experiences</h4>
                <p className="text-xs text-gray-400">
                  Yacht charters & excursions
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative">
          
          {/* Glow Border */}
          

          {/* FORM CARD */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-5 sm:p-6 md:p-8 space-y-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            
            {/* Title */}
            <h3 className="mb-2 font-serif text-lg sm:text-xl">Villa Enquiry</h3>

            {/* INPUT GRID */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              
              <input type="text" placeholder="Full Name" className="input-style" />
              <input type="email" placeholder="Email Address" className="input-style" />

              <input type="text" placeholder="Phone Number" className="input-style sm:col-span-2" />

              <input type="date" className="input-style" />
              <input type="date" className="input-style" />

              <input type="number" placeholder="Number of Guests" className="input-style" />
              <input type="number" placeholder="Bedrooms" className="input-style" />

              <textarea
                placeholder="Special Requirements or Questions"
                rows={4}
                className="resize-none input-style sm:col-span-2"
              />
            </div>

            {/* BUTTON */}
            <button className="w-full bg-[#D4AF37] text-white cursor-pointer py-3.5 text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-90 transition">
              Submit Enquiry
              <Image src={rightArrow} alt="arrow" className="w-4 h-4" />
            </button>

          </div>
        </div>

      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input-style {
          width: 100%;
          background: #05070b;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 14px 14px;
          border-radius: 8px;
          font-size: 15px;
          color: white;
          outline: none;
          transition: all 0.3s ease;
        }

        .input-style::placeholder {
          color: #6b7280;
        }

        .input-style:focus {
          border-color: #d4af37;
          box-shadow: 0 0 0 1px #d4af37;
        }
      `}</style>
    </section>
  );
}