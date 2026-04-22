"use client";

export default function UniquelyConnected() {
  return (
    <div className="text-white bg-black font-cardo">
      <section className="container px-4 py-24 mx-auto md:py-28">
        
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* LEFT */}
          <div className="">
            
            {/* GOLD LINE */}
            <div className="w-12 h-[2px] bg-[#D4AF37] mb-6" />

            {/* HEADING */}
            <h2 className="text-3xl md:text-5xl leading-[1.2] mb-4">
              A Uniquely Connected Advantage
            </h2>

            {/* SUBTEXT */}
            <p className="text-xs tracking-wide text-gray-500 md:text-sm">
              Official Transportation Partners
            </p>
          </div>

          {/* RIGHT */}
          <div className="container mx-auto space-y-5 text-sm leading-relaxed text-gray-400 md:text-base bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.18)_0%,_rgba(212,175,55,0.08)_45%,_transparent_65%)]">
            
            <p>
              Barbados remains one of the Caribbean’s most celebrated luxury destinations—an island defined by pristine coastlines, world-renowned estates, and an enduring culture of refined hospitality.
            </p>

            <p>
              Through years of operating within the island’s luxury travel ecosystem, VVIP Luxury Chauffeured Transports has established trusted relationships with many of Barbados’ most respected villa management companies, real estate agencies, and property managers.
            </p>

            <p>
              As official ground transportation providers and trusted affiliates to several of Barbados’ most prestigious real estate and villa rental companies, VVIP Luxury offers a uniquely connected advantage for travellers seeking exceptional accommodation on the island.
            </p>

            <p>
              These affiliations allow us to introduce our clients to some of the island’s most prestigious villas and private residences, ensuring that every stay reflects the privacy, elegance, and personalised service expected by the world’s most discerning travellers.
            </p>

          </div>

        </div>

      </section>
    </div>
  );
}