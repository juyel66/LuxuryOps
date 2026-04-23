"use client";

import Image from "next/image";
import rightArrow from "../../../../../public/images/Component 3 copy.svg";

import starIcon from "../../../../../public/images/Icon (24).svg";
import locationIcon from "../../../../../public/images/Icon (25).svg";
import guestIcon from "../../../../../public/images/Icon (43).svg";
import bedIcon from "../../../../../public/images/Icon (27).svg";
import bathIcon from "../../../../../public/images/Icon (28).svg";
import poolIcon from "../../../../../public/images/pool.svg";
import wifiIcon from "../../../../../public/images/Icon (37).svg";
import airCondition from "../../../../../public/images/Icon (38).svg";
import cheif from "../../../../../public/images/Icon (39).svg";
import security from "../../../../../public/images/Icon (40).svg";
import pool from "../../../../../public/images/Icon (41).svg";
import parking from "../../../../../public/images/Icon (42).svg";
// import numberCounticonDynamic from "../../../../public/images/Component 3 (5).svg";
// import calendarIcon from "../../../../public/images/Component 3 (4).svg";

export default function VillaDetailsKeyFeatures() {
  return (
    <section className="w-full bg-[#05070B] text-white py-16 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="container grid grid-cols-1 gap-12 mx-auto lg:grid-cols-3 ">
        {/* LEFT */}
        <div className="space-y-8 lg:col-span-2">
          {/* LOCATION */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Image src={locationIcon} alt="" width={14} height={14} />
            St. James, Platinum Coast
          </div>

          {/* TITLE */}
          <h1 className="text-3xl leading-tight font-cardo md:text-5xl">
            Royal Westmoreland Estate
          </h1>

          {/* DESCRIPTION */}
          <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
            Perched on the prestigious Platinum Coast, this magnificent
            beachfront estate offers unparalleled luxury with breathtaking ocean
            views. The property features expansive living spaces, a stunning
            infinity pool, and direct beach access.
          </p>

          {/* RATING */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <Image src={starIcon} alt="" width={16} height={16} />
              <span>5</span>
              <span className="text-gray-400">(28 reviews)</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Image src={guestIcon} alt="" width={16} height={16} />
              <span>Up to 12 guests</span>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 ">
            <div className="flex flex-col items-center justify-center h-30 bg-[#131313] border border-[#333231] rounded-xl">
              <Image src={bedIcon} alt="" width={20} height={20} />
              <h3>6</h3>
              <p>Bedrooms</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#131313] border border-[#333231] rounded-xl">
              <Image
                src={bathIcon}
                alt=""
                width={20}
                height={20}
                className="mb-2"
              />
              <h3>7</h3>
              <p>Bathrooms</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#131313] border border-[#333231] rounded-xl">
              <Image src={poolIcon} alt="" width={20} height={20} />
              <h3>2</h3>
              <p>Pool(s)</p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-[1px] bg-white/10" />

          {/* FEATURES */}
          <div>
            <h2 className="mb-5 text-xl font-cardo">Key Features</h2>

            <div className="grid grid-cols-1 text-sm text-gray-400 sm:grid-cols-2 gap-y-3 gap-x-10">
              {[
                "Private beachfront access",
                "Infinity pool with ocean views",
                "Fully staffed with chef and butler",
                "Home cinema and entertainment room",
                "Private gym and spa",
                "Tropical gardens with outdoor dining",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* AMENITIES */}
          <div>
            <h2 className="mb-5 text-xl font-cardo">Amenities</h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { icon: wifiIcon, label: "High-Speed WiFi" },
                { icon: airCondition, label: "Air Conditioning" },
                { icon: cheif, label: "Private Chef" },
                { icon: security, label: "24/7 Security" },
                { icon: pool, label: "Private Pool" },
                { icon: parking, label: "Parking" },
              ].map((item, i) => (
                <div key={i} className="amenity-box">
                  {/* ICON BOX */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                    <Image src={item.icon} alt="" width={16} height={16} />
                  </div>

                  {/* TEXT */}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative">
          <div className="relative p-6 space-y-6 border rounded-2xl border-white/10 bg-[#131313] backdrop-blur-xl">
            <div>
              <p className="text-sm text-gray-400">From</p>
              <h2 className="text-4xl font-cardo">
                $12,500 <span className="text-sm text-gray-400">/Night</span>
              </h2>
            </div>

            {/* FORM */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input placeholder="Full Name" className="input-style" />
              <input placeholder="Email Address" className="input-style" />
              <input
                placeholder="Phone Number"
                className="input-style sm:col-span-2"
              />
              <input type="date" className="input-style" />
              <input type="date" className="input-style" />
              <input placeholder="Number of Guests" className="input-style" />
              <input placeholder="Bedrooms" className="input-style" />
              <textarea
                placeholder="Special Requirements or Questions"
                className="input-style sm:col-span-2"
                rows={4}
              />
            </div>

            {/* BUTTON */}
            <button className="w-full  bg-[#D4AF37] text-white cursor-pointer py-4 text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
              Submit Enquiry
              <Image src={rightArrow} alt="arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .input-style {
          width: 100%;
          background: #05070b;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 14px;
          border-radius: 10px;
          font-size: 14px;
          color: white;
        }

        .input-style:focus {
          border-color: #d4af37;
          outline: none;
          box-shadow: 0 0 0 1px #d4af37;
        }

        .stat-box {
          text-align: center;
          padding: 20px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(to bottom, #0b0f1a, #090c14);
        }

        .stat-box h3 {
          margin-top: 8px;
          font-size: 18px;
        }

        .stat-box p {
          font-size: 12px;
          color: #9ca3af;
        }

        .amenity-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(to bottom, #0b0f1a, #090c14);
          font-size: 13px;
        }
      `}</style>
    </section>
  );
}
