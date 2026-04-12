"use client";

import Image from "next/image";

// 👉 replace with your real images
import img1 from "../../../../public/images/Container (18).svg";
import img2 from "../../../../public/images/Container (21).svg";
import img3 from "../../../../public/images/Container (19).svg";
import img4 from "../../../../public/images/Container (20).svg";
import img5 from "../../../../public/images/Container (22).svg";


export default function ConciergeImage() {
  return (
    <div className="text-white bg-black">
      <section className="container px-4 mx-auto md:py-20">
        
        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            
            {/* Yacht */}
            <div className="relative h-[280px] rounded-2xl overflow-hidden">
              <Image src={img1} alt="" fill className="object-cover" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold">Yacht Charters</h3>
                <p className="text-sm text-gray-300">Private Sea Excursions</p>
              </div>
            </div>

            {/* Spa */}
            <div className="relative h-[280px] rounded-2xl overflow-hidden">
              <Image src={img2} alt="" fill className="object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold">Wellness & Spa</h3>
                <p className="text-sm text-gray-300">In-Villa Treatments</p>
              </div>
            </div>
          </div>

          {/* MIDDLE (TALL) */}
          <div className="relative h-[460px] md:h-full rounded-2xl overflow-hidden">
            <Image src={img3} alt="" fill className="object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-semibold">
                Private Aviation <br /> Coordination
              </h3>
              <p className="text-sm text-gray-300">
                Seamless jet charter arrangements and <br /> inter-island travel
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            
            {/* Shopping */}
            <div className="relative h-[280px] rounded-2xl overflow-hidden">
              <Image src={img4} alt="" fill className="object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold">Personal Shopping</h3>
                <p className="text-sm text-gray-300">Curated Luxury Retail</p>
              </div>
            </div>

            {/* Dining */}
            <div className="relative h-[280px] rounded-2xl overflow-hidden">
              <Image src={img5} alt="" fill className="object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold">Fine Dining</h3>
                <p className="text-sm text-gray-300">Exclusive Reservations</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}