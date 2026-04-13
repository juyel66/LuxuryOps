"use client";

import Image from "next/image";

// import img2 from "../../../../public/images/Container (32).svg";
// import img1 from "../../../../public/images/Container (33).svg";
import img1 from "../../../../../public/images/Container (32).svg";
import img2 from "../../../../../public/images/Container (33).svg";


export default function PropertyGallery() {
  return (
    <section className="w-full px-4 py-10 bg-black md:px-10 lg:px-20">
      
      <div className="grid grid-cols-1 container mx-auto gap-4 md:grid-cols-4 h-auto md:h-[500px]">
        
        {/* LEFT BIG IMAGE */}
        <div className="relative w-full h-[250px] md:h-full md:col-span-3 rounded-xl overflow-hidden">
          <Image
            src={img1}
            alt="main"
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="flex flex-col h-full gap-4">
          
          {/* TOP */}
          <div className="relative w-full h-[120px] md:h-1/3 rounded-xl overflow-hidden">
            <Image
              src={img2}
              alt="img2"
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* MIDDLE */}
          <div className="relative w-full h-[120px] md:h-1/3 rounded-xl overflow-hidden">
            <Image
              src={img1}
              alt="img3"
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* BOTTOM */}
          <div className="relative w-full h-[120px] md:h-1/3 rounded-xl overflow-hidden">
            <Image
              src={img2}
              alt="img4"
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}