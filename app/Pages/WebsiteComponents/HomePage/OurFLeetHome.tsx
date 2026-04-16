"use client";

import Image from "next/image";
import Link from "next/link";

import car1 from "../../../../public/images/PLY314-web 2.svg";
import car2 from "../../../../public/images/PLY314-web 2 (1).svg";
import rightArrow from "../../../../public/images/Component 3 copy.svg";
import chekckBox from "../../../../public/images/checkbox-circle-line.svg";


export default function OurFleetHome() {
  return (
    <section className="px-4 text-white bg-black md:py-24 ">
      <div className="container mx-auto ">
        
        {/* TOP CONTENT */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-[#7A8A9A]" />
            <span className="text-2xl text-gray-400 md:text-3xl">04</span>
          </div>

          <h2 className="text-[34px] sm:text-[40px] lg:text-[44px] font-cardo italic mb-4">
            Our Fleet
          </h2>

          <p className="text-[#9CA3AF] max-w-[500px] text-sm sm:text-base leading-[1.9] mb-6">
            Our commitment to excellence is reflected in our modern fleet of luxurious vehicles.
          </p>

            <div className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-3 border border-white px-6 py-3 text-xs sm:text-sm tracking-wider   hover:text-white uppercase transition-all duration-300 hover:bg-[#D4AF37] "
            >
              VIEW THE FLEET
              <Image src={rightArrow} alt="arrow" className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CAR CARDS */}
        <div className="grid items-end grid-cols-1 gap-12 md:grid-cols-3 lg:gap-20">
          
          {/* CARD 1 */}
          <div className="pb-3 text-center group">
            <div className="relative w-full h-[220px] sm:h-[260px] mb-6">
              <Image
                src={car1}
                alt="Range Rover Vogue"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mb-3 font-serif text-lg">
              Range Rover Vogue
            </h3>

            <div className="flex justify-center items-center gap-5 text-[#9CA3AF] text-sm">
              <div className="flex items-center gap-2">
                <Image src={chekckBox} alt="feature" className="w-4 h-4" />
                <span>5 Doors</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src={chekckBox} alt="feature" className="w-4 h-4" />
                <span>4 Passengers</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src={chekckBox} alt="feature" className="w-4 h-4" />
                <span>Aircondition</span>
              </div>
            </div>
          </div>
          
          {/* CARD 1 */}
          <div className="text-center group">
            <div className="relative w-full h-[220px] sm:h-[260px] mb-6">
              <Image
                src={car1}
                alt="Range Rover Vogue"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mb-3 font-serif text-lg">
              Range Rover Vogue
            </h3>

            <div className="flex justify-center items-center gap-5 text-[#9CA3AF] text-sm">
              <div className="flex items-center gap-2">
                <Image src={chekckBox} alt="feature" className="w-4 h-4" />
                <span>5 Doors</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src={chekckBox} alt="feature" className="w-4 h-4" />
                <span>4 People</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src={chekckBox} alt="feature" className="w-4 h-4" />
                <span>Aircondition</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="text-center group">
            <div className="relative w-full h-[220px] sm:h-[260px] mb-6">
              <Image
                src={car2}
                alt="Range Rover Sport"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mb-3 font-serif text-lg">
              Range Rover Sport
            </h3>

            <div className="flex justify-center items-center gap-5 text-[#9CA3AF] text-sm">
              <div className="flex items-center gap-2">
                <Image src={chekckBox} alt="feature" className="w-4 h-4" />
                <span>5 Doors</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src={chekckBox} alt="feature" className="w-4 h-4" />
                <span>4 People</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src={chekckBox} alt="feature" className="w-4 h-4" />
                <span>Aircondition</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}