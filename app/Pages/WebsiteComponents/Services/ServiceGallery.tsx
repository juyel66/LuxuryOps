"use client";

import Image from "next/image";

// 👉 Replace with your real images
import img1 from "../../../../public/images/Image 1 (2).svg"; // top full
import img2 from "../../../../public/images/Image 2 (4).svg"; // left top 1
import img3 from "../../../../public/images/Image 3 (1).svg"; // left top 2
import img4 from "../../../../public/images/Image 4 (1).svg"; // right tall

import img5 from "../../../../public/images/Container (13).svg"; // bottom wide

export default function ServiceGallery() {
  return (
    <div className="text-white bg-black font-cardo ">
      <section className="container px-4 py-10 mx-auto">
        
        {/* Heading */}
        <h2 className="mb-12 italic text-3xl text-center md:text-4xl font-cardo">
          Service Gallery
        </h2>

        {/* Top Full Image */}
        <div className="mb-6">
          <div className="relative w-full h-[220px] md:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden">
            <Image src={img1} alt="top" fill className="object-cover" />
          </div>
        </div>

        {/* Bottom Complex Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* LEFT SECTION */}
          <div className="space-y-6 md:col-span-2">
            
            {/* Top 2 Images */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="relative h-[280px] rounded-2xl overflow-hidden">
                <Image src={img2} alt="" fill className="object-cover" />
              </div>

              <div className="relative h-[280px] rounded-2xl overflow-hidden">
                <Image src={img3} alt="" fill className="object-cover" />
              </div>
            </div>

            {/* Bottom Wide Image */}
            <div className="relative h-[200px] md:h-[350px] rounded-2xl overflow-hidden">
              <Image src={img4} alt="" fill className="object-cover" />
            </div>
          </div>

          {/* RIGHT TALL IMAGE */}
          <div className="relative h-[400px] md:h-full rounded-2xl overflow-hidden">
            <Image src={img5} alt="" fill className="object-cover" />
          </div>

        </div>
      </section>
    </div>
  );
}