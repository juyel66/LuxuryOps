"use client";

import Image from "next/image";
import imgMain from "../../../../public/images/frontImage (1) copy.svg";
import imgBack from "../../../../public/images/BackImage.svg";
import rightArrow from "../../../../public/images/Component 3.svg";


export default function MakeEnquiryContact() {
  return (
    <section className="w-full bg-[#05070B] text-white py-16 px-4 ">
      
      <div className="container grid items-center grid-cols-1 gap-12 mx-auto lg:grid-cols-2">

        {/* LEFT IMAGE STACK */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          
          {/* BACK IMAGE */}
          <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-xl overflow-hidden opacity-70">
            <Image src={imgBack} alt="" fill className="object-cover" />
          </div>

          {/* FRONT IMAGE */}
          <div className="absolute bottom-0 right-0 w-[85%] h-[85%] rounded-xl overflow-hidden shadow-2xl">
            <Image src={imgMain} alt="" fill className="object-cover" />
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="space-y-6">

          {/* SMALL TITLE */}
          <p className="text-[#D4AF37] text-xs tracking-widest uppercase">
            — Send a Message
          </p>

          {/* MAIN TITLE */}
          <h2 className="font-serif text-3xl md:text-5xl">
            Make an Enquiry
          </h2>

          {/* DESC */}
          <p className="max-w-md text-gray-400">
            Fill in the form below and our team will be in touch within 1 hour.
          </p>

          {/* FORM */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            <input placeholder="First Name" className="input-style" />
            <input placeholder="Last Name" className="input-style" />

            <input placeholder="+44 7900 000 000" className="input-style" />
            <input placeholder="Your Email" className="input-style" />

            <textarea
              placeholder="Additional Requirements - Luggage Or Physical Items"
              className="input-style sm:col-span-2"
              rows={3}
            />

            <textarea
              placeholder="Message"
              className="input-style sm:col-span-2"
              rows={4}
            />

          </div>

          {/* BUTTON */}
          <button className="w-full bg-[#D4AF37] cursor-pointer text-white py-4 text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition">
            Send Message
            <Image src={rightArrow} alt="" className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input-style {
          width: 100%;
          background: #05070b;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 14px;
          border-radius: 10px;
          font-size: 14px;
          color: white;
        }

        .input-style::placeholder {
          color: #6b7280;
        }

        .input-style:focus {
          border-color: #d4af37;
          outline: none;
          box-shadow: 0 0 0 1px #d4af37;
        }
      `}</style>
    </section>
  );
}