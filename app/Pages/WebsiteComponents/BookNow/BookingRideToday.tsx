"use client";

import Image from "next/image";
import bgCar from "../../../../public/images/Container (35).svg";
import rightArrow from "../../../../public/images/Component 3 copy.svg";

// icons
import calendarIcon from "../../../../public/images/Component 3 (4).svg";
import clockIcon from "../../../../public/images/Component 3 (3).svg";
import dropdownIcon from "../../../../public/images/Component 3 (2).svg";

export default function BookRideToday() {
  return (
    <section className="relative w-full px-4 py-20 overflow-hidden text-white md:px-16 lg:px-24">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src={bgCar}
        alt="car"
        fill
        className="object-cover object-center "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div className="container relative mx-auto">
        
        {/* TOP TEXT */}
        <div className="mb-10">
          <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-2">
            — Book Now
          </p>

          <h2 className="mb-4 text-3xl font-cardo md:text-5xl">
            Book Your Ride Today
          </h2>

          <p className="max-w-md text-gray-400">
            We have redefined luxury transportation with our unmatched attention to detail and dedication to excellence.
          </p>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

  {/* FIRST NAME */}
  <div>
    <label className="block mb-2 text-white">First Name</label>
    <input placeholder="First Name" className="input-style" />
  </div>

  {/* LAST NAME */}
  <div>
    <label className="block mb-2 text-white">Last Name</label>
    <input placeholder="Last Name" className="input-style" />
  </div>

  {/* MOBILE NUMBER */}
  <div>
    <label className="block mb-2 text-white">Mobile Number</label>
    <input placeholder="+44 7900 000 000" className="input-style" />
  </div>

  {/* EMAIL */}
  <div>
    <label className="block mb-2 text-white">Your Email</label>
    <input placeholder="Your Email" className="input-style" />
  </div>

  {/* SELECT */}
  <div className="md:col-span-2">
    <label className="block mb-2 text-white">Choose Car</label>
    <div className="relative">
      <input
        placeholder="Mercedes S Class"
        className="pr-10 input-style"
      />
      <span className="icon-wrap">
        <Image src={dropdownIcon} alt="" className="icon-image" />
      </span>
    </div>
  </div>

  {/* DATE */}
  <div>
    <label className="block mb-2 text-white">Choose Date</label>
    <div className="relative">
      <input placeholder="Choose Date" className="pr-10 input-style" />
      <span className="icon-wrap">
        <Image src={calendarIcon} alt="" className="icon-image" />
      </span>
    </div>
  </div>

  {/* TIME */}
  <div>
    <label className="block mb-2 text-white">Choose Time</label>
    <div className="relative">
      <input placeholder="Choose Time" className="pr-10 input-style" />
      <span className="icon-wrap">
        <Image src={clockIcon} alt="" className="icon-image" />
      </span>
    </div>
  </div>

  {/* PICK UP */}
  <div>
    <label className="block mb-2 text-white">Pick Up</label>
    <input placeholder="Enter the pick address" className="input-style" />
  </div>

  {/* DROP OFF */}
  <div>
    <label className="block mb-2 text-white">Drop Off</label>
    <input placeholder="Enter the final destination" className="input-style" />
  </div>

  {/* TEXTAREA */}
  <div className="md:col-span-2">
    <label className="block mb-2 text-white">Additional Requirements</label>
    <textarea
      placeholder="Additional Requirements - Luggage Or Physical Items"
      className="input-style"
      rows={3}
    />
  </div>

</div>

        {/* BUTTON */}
        <button className="mt-6 w-full bg-[#D4AF37] text-white py-4 uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:opacity-90 transition">
          Send Your Booking
          <Image src={rightArrow} alt="" className="w-4 h-4" />
        </button>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .input-style {
          width: 100%;
          background: rgba(0,0,0,0.6);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 14px;
          border-radius: 10px;
          font-size: 14px;
          color: white;
          backdrop-filter: blur(6px);
        }

        .input-style::placeholder {
          color: #9ca3af;
        }

        .input-style:focus {
          border-color: #d4af37;
          outline: none;
          box-shadow: 0 0 0 1px #d4af37;
        }

        .icon-wrap {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .icon-image {
          width: 18px;
          height: 18px;
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
}