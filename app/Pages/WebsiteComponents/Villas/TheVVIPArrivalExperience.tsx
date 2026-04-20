"use client";
import Image from "next/image";
import divider from "../../../../public/images/Container (17).svg";
import dividerMobile from "../../../../public/images/Container (23).svg";
export default function TheVVIPArrivalExperience() {




  return (
    <section className="w-full  bg-[#05070B] text-white py-20 px-4 relative overflow-hidden">
      
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2">
        
  
        <div className="space-y-6">
          
                   <div className="items-center justify-start hidden gap-4 mb-6 md:flex">
          <span className="text-[#D4AF37] text-lg">03</span>
            <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
            <Image src={divider} alt="divider" className="hidden md:block" />
        </div>
        <div className="flex items-center justify-start gap-4 mb-6 md:hidden">
          <span className="text-[#D4AF37] text-lg">03</span>
            <Image src={dividerMobile} alt="divider mobile" className="block md:hidden" />
            <Image src={divider} alt="divider" className="hidden md:block" />
        </div>

         
          <h2 className="font-serif text-3xl leading-tight md:text-5xl ">
            The VVIP Arrival Experience
          </h2>

       
          <div className="max-w-xl space-y-4 text-sm leading-relaxed text-gray-400 md:text-base ">
            <p>
              For many of our clients, the Barbados journey begins long before they arrive at their villa.
            </p>
            <p>
              From the moment your aircraft touches down, VVIP Luxury orchestrates a seamless transition from arrival to residence.
            </p>
            <p>
              Guests are welcomed at the airport and chauffeured in our signature fleet — including the Mercedes-Maybach Landjet or Maybach Sprinter — before being discreetly escorted to their private villa.
            </p>
            <p>
              The result is an experience defined by effortless luxury, privacy, and refined service from the very first moment on island.
            </p>
          </div>
        </div>

       
        <div className="relative">
          
         
          <div className="absolute inset-0 rounded-2xl border border-[#D4AF37]/20 -translate-x-4 translate-y-4" />

          
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-8 space-y-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            
            
            <div className="space-y-2">
              <span className="text-xs text-[#D4AF37]">Step 01</span>
              <h4 className="text-lg font-medium">Airport Welcome</h4>
              <p className="text-sm text-gray-400">
                Greeted upon arrival at Grantley Adams International
              </p>
            </div>

            <div className="h-[1px] bg-white/10" />

            
            <div className="space-y-2">
              <span className="text-xs text-[#D4AF37]">Step 02</span>
              <h4 className="text-lg font-medium">Luxury Transfer</h4>
              <p className="text-sm text-gray-400">
                Chauffeured in Mercedes-Maybach fleet
              </p>
            </div>

            <div className="h-[1px] bg-white/10" />

            {/* STEP 03 */}
            <div className="space-y-2">
              <span className="text-xs text-[#D4AF37]">Step 03</span>
              <h4 className="text-lg font-medium">Villa Arrival</h4>
              <p className="text-sm text-gray-400">
                Personal welcome by villa staff
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}