"use client";

import Link from "next/link";
import rightArrow from "../../../../public/images/Component 3 copy.svg";
import Image from "next/image";





const HomePageHeroSections = () => {
  return (
    <section className=" relative w-full h-[82vh] overflow-hidden  text-white">

      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="https://res.cloudinary.com/dqkczdjjs/video/upload/v1775770184/Video_Project_1_qkitjj.mp4" type="video/mp4" />
      </video>

      
      <div className="absolute inset-0 z-10" />

    
      <div className="container relative z-20 flex items-center h-full px-4 mx-auto md:px-0 ">
        <div className="max-w-3xl">

         
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl text-gray-400 md:text-3xl">— 01</span>
          </div>

          <span className="text-yellow-500  md:text-[18px] text-[17px]  tracking-widest uppercase block mb-4">
           — Executive Chauffeur Services
          </span>

          
          <h1
            className="font-cardo italic font-normal leading-[116%]
            text-[38px] sm:text-[40px] md:text-[56px] lg:text-[72px]"
          >
            VVIP <br />
            Luxury Chauffeur <br />
            Services
          </h1>

          
          <p className="hidden max-w-xl mt-4 text-xl leading-relaxed text-gray-300 md:flex font-cardo sm:mt-6">
           Experience Barbados with the island's premier chauffeur service, <br /> offering unmatched elegance and excellence.
          </p>

          <p className="flex max-w-xl mt-4 text-xl leading-relaxed text-gray-300 md:hidden font-cardo sm:mt-6 sm:text-base">
           Experience Barbados with the island's premier chauffeur service,  offering unmatched elegance and excellence.
          </p>

         
          <div className="mt-6 sm:mt-8">
            <Link
              href="#"
              className="inline-flex items-center  gap-3 border bg-white/10 border-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-[#D4AF37] "
            >
              DISCOVER <Image src={rightArrow} alt="arrow" className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

      
      <div className="absolute inset-0 z-20 hidden mb-40 pointer-events-none md:block">
        <div className="container flex items-end justify-end h-full px-4 pb-10 mx-auto sm:px-6 md:px-16">
          <div className="flex flex-col items-center">
            <span className="rotate-90 text-[10px] sm:text-xs tracking-widest text-gray-300 mb-4">
              Scroll
            </span>
            <div className="w-px h-12 bg-gray-400 sm:h-16" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomePageHeroSections;