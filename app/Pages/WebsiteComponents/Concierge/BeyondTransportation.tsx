"use client";

export default function BeyondTransportation() {
  return (
    <div className="relative overflow-hidden text-white bg-black font-cardo">
      
      {/* 🔥 Right Side Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-full w-[40%] bg-gradient-to-l from-[#D4AF37]/20 via-transparent to-transparent blur-2xl" />
      </div>

      <section className="container relative z-10 px-4 py-20 mx-auto md:py-28">
        
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT */}
          <div>
            {/* Small Label */}
            <p className="text-[14px] tracking-[0.3em] text-[#D4AF37] uppercase mb-4">
              Our Philosophy
            </p>

            {/* Heading */}
            <h2 className="text-4xl leading-tight md:text-5xl lg:text-6xl font-cardo">
              Beyond <br /> Transportation
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl space-y-6 text-sm leading-relaxed text-gray-300 md:text-base">
            
            <p>
              At VVIP Luxury Chauffeured Transports, our philosophy has always extended far beyond transportation.
            </p>

            <p>
              For the world’s most discerning travelers, a seamless journey does not begin at the airport, nor does it end at the villa gates. It is defined by a series of carefully orchestrated moments—each one thoughtfully curated, discreetly managed, and flawlessly executed.
            </p>

            <p>
              Our Concierge Team and Services have therefore been created as a natural extension of our brand’s commitment to excellence, offering our clients a level of personalised assistance that reflects the finest traditions of global white-glove hospitality and private lifestyle management.
            </p>

            <p>
              From the moment you begin planning your visit to Barbados, our dedicated concierge team becomes your trusted local liaison, quietly ensuring that every detail of your stay unfolds with precision, discretion, and effortless sophistication.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}