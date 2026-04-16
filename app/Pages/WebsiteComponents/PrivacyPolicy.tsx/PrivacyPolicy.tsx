"use client";

export default function PrivacyPolicy() {
  return (
    <section className="w-full bg-[#05070B] text-white py-16 px-4 md:px-16 ">
      
      <div className="container grid grid-cols-1 mx-auto border-t md:grid-cols-2 border-white/10">

        {data.map((item, i) => (
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
            <div className="space-y-2 text-sm leading-relaxed text-gray-400">
              {item.content}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

const data = [
  {
    title: "1. Scope of Services",
    content: (
      <p>
        VVIP Luxury’s official and sole website address is: https://www.vvipluxury.com
      </p>
    ),
  },
  {
    title: "Data Security",
    content: (
      <p>
        We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
      </p>
    ),
  },
  {
    title: "Your Privacy is Our Priority",
    content: (
      <p>
        At VVIP Luxury Chauffeured Transports, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our website.
      </p>
    ),
  },
  {
    title: "Embedded content from other websites",
    content: (
      <>
        <p>
          This website may contain embedded content from other websites, such as videos, images, and articles. This embedded content behaves
        </p>
        <p>
          As if you were visiting the original website. These external websites may collect data about you, use cookies, and employ third-party tracking technologies to monitor your interaction with their content.
        </p>
      </>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <>
        <p>We may collect limited personal information when you submit a query through our contact form. This information typically includes:</p>
        <ul className="pl-5 space-y-1 list-disc">
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your phone number</li>
          <li>A brief message</li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <ul className="pl-5 space-y-1 list-disc">
        <li>Respond to your inquiries and provide customer support</li>
        <li>Improve our website and services</li>
        <li>Analyze website traffic and usage patterns</li>
      </ul>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <ul className="pl-5 space-y-1 list-disc">
        <li>Access your personal information</li>
        <li>Request correction of any inaccuracies</li>
        <li>Request deletion of your personal information</li>
      </ul>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <p>
        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy.
      </p>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. VVIP Luxury is not obligated to notify you of any significant changes.
      </p>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <p>
        If you have any questions or concerns regarding our Privacy Policy, please contact us. By using our website, you consent to the collection and use of your information as described in this Privacy Policy.
      </p>
    ),
  },
];