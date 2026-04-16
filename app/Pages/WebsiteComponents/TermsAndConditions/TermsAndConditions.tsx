"use client";

export default function TermsAndConditions() {
  return (
    <section className="w-full bg-[#05070B] text-white py-16 px-4 ">
      
      <div className="container grid grid-cols-1 mx-auto border-t md:grid-cols-2 border-white/10">

        {terms.map((item, i) => (
          <div
            key={i}
            className="p-4 border-b border-white/10 "
          >
            {/* GOLD LINE */}
            <div className="w-10 h-[2px] bg-[#D4AF37] mb-4" />

            {/* TITLE */}
            <h2 className="mb-4 text-2xl leading-snug font-cardo md:text-3xl">
              {item.title}
            </h2>

            {/* CONTENT */}
            <div className="space-y-3 text-sm leading-relaxed text-gray-400">
              {item.content}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

const terms = [
  {
    title: "1. Scope of Services",
    content: (
      <>
        <p>VVIP Luxury Chauffeured Transports (“VVIP Luxury”) provides premium ground transportation solutions, including chauffeur-driven services, executive transfers, and luxury vehicle rentals within Barbados.</p>
        <p>All services are curated as bespoke logistical experiences and are delivered subject to availability, operational feasibility, and confirmed booking parameters.</p>
      </>
    ),
  },
  {
    title: "2. Booking & Confirmation Protocol",
    content: (
      <>
        <p>2.1 All service requests are subject to written confirmation by VVIP Luxury.</p>
        <p>2.2 A booking shall only be deemed confirmed upon receipt of the required deposit or full payment, as specified at the time of reservation.</p>
        <p>2.3 Clients are responsible for reviewing all confirmations issued and must notify the Company immediately of any discrepancies.</p>
        <p>2.4 VVIP Luxury reserves the right to decline or cancel any booking at its sole discretion prior to confirmation.</p>
      </>
    ),
  },
  {
    title: "3. Payment Terms",
    content: (
      <>
        <p>3.1 Deposits may be required to secure all reservations, particularly for peak periods, specialty vehicles, or multi-day engagements.</p>
        <p>3.2 Full settlement may be required prior to service commencement unless otherwise agreed in writing.</p>
        <p>3.3 All rates are quoted in United States Dollars (USD) unless otherwise specified.</p>
        <p>3.4 Failure to remit payment within stipulated timelines may result in cancellation without liability.</p>
      </>
    ),
  },
  {
    title: "4. Service Modifications & Cancellations",
    content: (
      <>
        <p>4.1 Any request for amendment must be submitted in writing and is subject to availability and potential rate adjustments.</p>
        <p>4.2 Cancellation policies vary depending on the nature of the service, vehicle class, and notice period provided.</p>
        <p>4.3 Late cancellations, no-shows, or same-day amendments may incur full-service charges.</p>
        <p>4.4 VVIP Luxury reserves the right to impose minimum notice periods for cancellations during high-demand periods.</p>
      </>
    ),
  },
  {
    title: "5. Chauffeur & Service Standards",
    content: (
      <>
        <p>5.1 All chauffeurs engaged by VVIP Luxury are professionally trained, licensed, and operate under strict standards of discretion, punctuality, and presentation.</p>
        <p>5.2 While every effort is made to maintain punctuality, VVIP Luxury shall not be held liable for delays caused by circumstances beyond its control.</p>
        <p>5.3 Clients are expected to adhere to agreed pickup times. Excessive waiting time may incur additional charges.</p>
      </>
    ),
  },
  {
    title: "6. Vehicle Usage & Conduct",
    content: (
      <>
        <p>6.1 Clients agree to utilize all vehicles in a respectful and lawful manner.</p>
        <p>6.2 Smoking, illicit substances, and unlawful conduct within vehicles are strictly prohibited.</p>
        <p>6.3 VVIP Luxury reserves the right to terminate any service without refund in instances of misconduct.</p>
        <p>6.4 Any damage caused to vehicles shall be charged accordingly.</p>
      </>
    ),
  },
  {
    title: "7. Self-Drive Luxury Rentals (Where Applicable)",
    content: (
      <>
        <p>7.1 Clients renting vehicles without chauffeur must present valid identification and meet minimum age requirements.</p>
        <p>7.2 A security deposit may be required and held against damages or breaches of agreement.</p>
        <p>7.3 The renter assumes full responsibility for the vehicle during the rental period.</p>
        <p>7.4 Vehicles must not be used for racing, subletting, or unlawful purposes.</p>
      </>
    ),
  },
  {
    title: "8. Liability & Limitation of Responsibility",
    content: (
      <>
        <p>8.1 VVIP Luxury operates as a principal service provider and may collaborate with third-party affiliates.</p>
        <p>8.2 The Company shall not be liable for indirect or consequential losses.</p>
        <p>8.3 Personal belongings remain the client’s responsibility.</p>
        <p>8.4 Maximum liability shall be limited to the value of the service booked.</p>
      </>
    ),
  },
  {
    title: "9. Force Majeure",
    content: (
      <p>VVIP Luxury shall not be held liable for failure or delay due to events beyond reasonable control, including natural disasters, civil unrest, mechanical failures, or public health emergencies.</p>
    ),
  },
  {
    title: "10. Privacy & Data Usage",
    content: (
      <>
        <p>10.1 Client information is collected solely to deliver services and enhance experience.</p>
        <p>10.2 Personal data will not be sold or disclosed to unauthorized third parties.</p>
        <p>10.3 By engaging VVIP Luxury, clients consent to reasonable data usage.</p>
      </>
    ),
  },
  {
    title: "11. Website Use & Intellectual Property",
    content: (
      <>
        <p>11.1 All content, branding, imagery, and materials belong to VVIP Luxury.</p>
        <p>11.2 Unauthorized reproduction or commercial use is prohibited.</p>
        <p>11.3 The Company reserves the right to modify website content at any time.</p>
      </>
    ),
  },
  {
    title: "12. Amendments to Terms",
    content: (
      <p>VVIP Luxury reserves the right to revise these Terms at any time. Continued use constitutes acceptance.</p>
    ),
  },
  {
    title: "13. Governing Law & Jurisdiction",
    content: (
      <p>These Terms shall be governed by the laws of Barbados. Any disputes shall be subject to the courts of Barbados.</p>
    ),
  },
  {
    title: "14. Acceptance of Terms",
    content: (
      <p>By confirming a booking or utilizing any service, the client acknowledges and agrees to these Terms in full.</p>
    ),
  },
];