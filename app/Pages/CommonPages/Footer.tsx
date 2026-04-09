"use client";

import Link from "next/link";
import Image from "next/image";
import footer from "../../../public/images/Footer.svg";
import instagram from "../../../public/images/instagram.svg";
import arrowUp from "../../../public/images/arrow-up-line.svg";

const Footer = () => {
  return (
   <div>
    <footer className="w-full bg-black text-white px-4 sm:px-6 md:px-6 py-2 ">
      <div className="container mx-auto relative">

        {/* Back to top */}
        <div className="flex justify-center mb-8 md:mb-10 mt-14 md:mt-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm mb-20 flex justify-center items-center cursor-pointer md:mb-40 text-gray-400 hover:text-white transition"
          >
            <Image src={arrowUp} alt="Back to top" className="w-5 h-5" /> Back to top
          </button>
        </div>

        {/* Center SVG */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[220px] mt-16 sm:w-[320px] md:w-[520px] lg:w-[620px] opacity-25">
            <Image
              src={footer}
              alt="VIP Logo"
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* PERFECT 3-COLUMN ROW */}
        <div className="relative  z-10 mb-10 md:mb-10 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-6 text-sm text-gray-400">
          
          {/* LEFT */}
          <div className="w-full mb-10 md:flex-1 text-center md:text-left">
            <p>© 2026 VVIP Luxury. All rights reserved.</p>
          </div>

          {/* CENTER */}
          <div className="w-full md:flex-1 mb-10  flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="/">Home</Link>
            <Link href="/about">About VVIP</Link>
            <Link href="/fleet">Our Fleet</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* RIGHT */}
          <div className="w-full md:flex-1 flex justify-center md:justify-end items-center gap-2">
            <span className="text-base">
              <Image src={instagram} alt="Instagram" className="w-5 h-5" />
            </span>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>

    



   </div>
  );
};

export default Footer;