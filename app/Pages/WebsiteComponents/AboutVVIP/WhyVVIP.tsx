"use client";

export default function WhyVVIP() {
  return (
    <section className="px-4 text-white bg-black md:py-15 ">
      <div className="container grid grid-cols-1 gap-12 mx-auto co lg:grid-cols-3 lg:gap-20">
        
        {/* LEFT */}
        <div>
          {/* Top small title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-[#7A8A9A]" />
            <span className="text-[#7A8A9A] font-cardo text-sm tracking-widest uppercase">
              Why VVIP Luxury
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-cardo italic text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.2]">
            Where luxury is <br /> limitless
          </h2>
        </div>

        {/* MIDDLE */}
        <div >
          <p className="text-[#9CA3AF] font-cardo text-sm sm:text-base leading-[1.9]">
            Indulge in the epitome of luxury travel. For over a decade, we’ve
            been curating bespoke experiences for discerning clients. Our
            meticulously maintained fleet, coupled with our expert chauffeurs,
            ensures a journey defined by comfort, style, and unparalleled
            service. We prioritize punctuality, privacy, discretion, and
            personalized attention, making us the preferred choice for those who
            demand the best.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-[#9CA3AF] font-cardo text-sm sm:text-base leading-[1.9]">
            As we continue to redefine luxury transportation, we envision a
            future where every journey is an experience. Our vision is to be more
            than just a transportation service; we aspire to be your trusted
            partner, ensuring your every need is met with the utmost care and
            attention. By combining our expertise with cutting-edge technology,
            we’ll continue to elevate your travel experience, making every
            journey a masterpiece.
          </p>
        </div>
      </div>
    </section>
  );
}