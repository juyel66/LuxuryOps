"use client";

import Image from "next/image";
import imgMain from "../../../../public/images/frontImage (1) copy.svg";
import imgBack from "../../../../public/images/BackImage.svg";
import rightArrow from "../../../../public/images/Component 3.svg";
import { Phone, Mail, MapPin, Clock } from "lucide-react";


export default function MakeEnquiryContact() {
  return (
  <div>

       <div className="w-full bg-[#05070B] py-12 px-4">
      <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">

        {/* PHONE */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-8 text-center hover:border-[#C89B3C] transition-all">
          <div className="flex justify-center mb-5">
            <Phone className="w-8 h-8 text-[#C89B3C]" strokeWidth={2} />
          </div>
          <h3 className="text-white text-[22px] font-semibold mb-4">
            Phone
          </h3>
          <p className="text-[#A0A6B1] text-[15px] leading-7">
            +1 (246) 249 – 7101 <br />
            +1 (246) 242 – 5851
          </p>
        </div>

        {/* EMAIL */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-8 text-center hover:border-[#C89B3C] transition-all">
          <div className="flex justify-center mb-5">
            <Mail className="w-8 h-8 text-[#C89B3C]" strokeWidth={2} />
          </div>
          <h3 className="text-white text-[22px] font-semibold mb-4">
            Email
          </h3>
          <p className="text-[#A0A6B1] text-[15px] leading-7">
            info@vvipluxury.com <br />
            bookings@vvipluxury.com
          </p>
        </div>

        {/* ADDRESS */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-8 text-center hover:border-[#C89B3C] transition-all">
          <div className="flex justify-center mb-5">
            <MapPin className="w-8 h-8 text-[#C89B3C]" strokeWidth={2} />
          </div>
          <h3 className="text-white text-[22px] font-semibold mb-4">
            Address
          </h3>
          <p className="text-[#A0A6B1] text-[15px] leading-7">
            123 Luxury Avenue <br />
            New York, NY 10001
          </p>
        </div>

        {/* HOURS */}
        <div className="bg-[#0B0F17] border border-[#1A1F2B] rounded-xl p-8 text-center hover:border-[#C89B3C] transition-all">
          <div className="flex justify-center mb-5">
            <Clock className="w-8 h-8 text-[#C89B3C]" strokeWidth={2} />
          </div>
          <h3 className="text-white text-[22px] font-semibold mb-4">
            Hours
          </h3>
          <p className="text-[#A0A6B1] text-[15px] leading-7">
            24/7 Availability <br />
            Always at your service
          </p>
        </div>

      </div>
    </div>
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
            <div>
              <label className="text-gray-300"  htmlFor="name">First Name</label>
            <input placeholder="First Name" className="mt-1 input-style" />
            </div>
           <div>
              <label className="text-gray-300"  htmlFor="name">Last Name</label>
             <input placeholder="Last Name" className="mt-1 input-style" />
           </div>

           <div>
              <label className="text-gray-300"  htmlFor="phone">Phone Number</label>
             <input placeholder="+44 7900 000 000" className="mt-1 input-style" />
           </div>
          <div>
              <label className="text-gray-300"  htmlFor="email">Email Address</label>
              <input placeholder="Your Email" className="mt-1 input-style" />
          </div>

     <div className="w-full col-span-1 space-y-2 sm:col-span-2">
  <label className="block text-gray-300" htmlFor="requirements">
    Additional Requirements
  </label>
  <textarea
    placeholder="Additional Requirements - Luggage Or Physical Items"
    className="w-full input-style"
    rows={3}
  />
</div>

<div className="w-full col-span-1 space-y-2 sm:col-span-2">
  <label className="block text-gray-300" htmlFor="message">
    Message
  </label>
  <textarea
    placeholder="Message"
    className="w-full input-style"
    rows={4}
  />
</div>

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
  </div>
  );
}