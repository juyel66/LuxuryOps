"use client";

import Link from "next/link";
import Image from "next/image";
import footer from "../../../public/images/Footer.svg";
import instagram from "../../../public/images/instagram.svg";
import arrowUp from "../../../public/images/arrow-up-line.svg";

const Footer = () => {
  return (
   <div>
    <footer className="w-full px-4 py-2 text-white bg-black sm:px-6 md:px-6 ">
      <div className="container relative mx-auto">

        {/* Back to top */}
        <div className="flex justify-center mb-8 md:mb-10 mt-14 md:mt-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center mb-20 text-gray-400 transition cursor-pointer md:text-xl font-cardo md:mb-40 hover:text-white"
          >
            <Image src={arrowUp} alt="Back to top" className="md:h-5 md:w-5 " /> Back to top
          </button>
        </div>

        {/* Center SVG */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[220px] mt-16 sm:w-[320px] md:w-[520px] lg:w-[620px] opacity-25">
            <Image
              src={footer}
              alt="VIP Logo"
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>

        {/* PERFECT 3-COLUMN ROW */}
        <div className="relative z-10 flex flex-col w-full gap-5 mb-10 text-sm text-gray-400 md:mb-10 md:flex-row md:items-center md:justify-between md:gap-6">
          
          {/* LEFT */}
          <div className="w-full mb-10 text-center md:flex-1 md:text-left">
            <p>© 2026 VVIP Luxury. All rights reserved.</p>
          </div>

          {/* CENTER */}
          <div className="flex flex-wrap justify-center w-full gap-6 mb-10 md:flex-1 md:gap-8">
            <Link href="/">Home</Link>
            <Link href="/about">About VVIP</Link>
            <Link href="/fleet">Our Fleet</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center w-full gap-2 md:flex-1 md:justify-end">
            <span className="text-base">
              <Image src={instagram} alt="Instagram" className="w-5 h-5" />
            </span>
            <Link href="/privacy" className="transition hover:text-white">
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