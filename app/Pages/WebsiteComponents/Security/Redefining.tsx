"use client";

export default function Redefining() {
  return (
    <div className="relative overflow-hidden text-white bg-black ">
      
      {/* 🔥 Right Gold Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-full w-[40%] bg-gradient-to-l from-[#D4AF37]/20 via-transparent to-transparent blur-2xl" />
      </div>

      <section className="container relative z-10 px-4 py-20 mx-auto md:py-28">
        
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT */}
          <div>
            {/* Small Divider Line */}
            <div className="w-10 h-[2px] bg-[#D4AF37] mb-6" />

            {/* Heading */}
            <h2 className="mb-4 text-3xl leading-tight md:text-5xl font-cardo ">
              Redefining <br />
              Executive Protection
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-400">
              Trusted by High-Profile Clients Worldwide
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl space-y-6 text-sm leading-relaxed text-gray-400 md:text-base">
            
            <p className="text-white">
              At VVIP Luxury Chauffeured Transports, we recognise that for many of our clients, luxury is inseparable from privacy, discretion, and personal security.
            </p>

            <p>
              Whether welcoming high-profile individuals, corporate leaders, diplomatic delegations, or discerning families travelling privately, the assurance of a safe and carefully managed environment is paramount. Our Security Services have therefore been developed to provide a refined layer of protection that integrates seamlessly into the overall guest experience—delivered with professionalism, discretion, and the utmost respect for personal privacy.
            </p>

            <p>
              Through our carefully selected network of licensed and highly trained security professionals, VVIP Luxury offers tailored protection services designed to meet the evolving needs of modern luxury travel in Barbados.
            </p>

          </div>

        </div>
      </section>
    </div>
  );
}