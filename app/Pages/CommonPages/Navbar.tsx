"use client";
import rightArrow from "../../../public/images/Component 3 copy.svg"

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../../public/images/dashboardLogo.svg";
import instagram from "../../../public/images/instagram.svg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About VVIP", href: "/about" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Services", href: "/services" },
  { label: "Concierge", href: "/concierge" },
  { label: "Security", href: "/security" },
  { label: "Villas", href: "/villas" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full lg:fixed lg:top-0 lg:left-0 z-50 flex justify-center py-2 lg:py-4 px-3 sm:px-4 lg:px-0 bg-[#121212] lg:bg-transparent transition-all duration-300">
      <div className="w-full container mx-auto">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between border border-white/15 bg-black px-4 py-2.5 lg:rounded-full lg:border-transparent lg:bg-[#111] lg:px-6 lg:py-3 transition-all duration-300 shadow-sm lg:shadow-none text-white">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src={logoImage}
              alt="logo"
              width={140}
              height={40}
              className="w-[98px] sm:w-[120px] lg:w-20 lg:h-10"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-white">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`relative text-sm transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}

                  {/* Active underline */}
                  {isActive(item.href) && (
                    <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-yellow-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/contact"
              className="bg-yellow-500 text-white flex items-center px-5 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              BOOK NOW <Image src={rightArrow} alt="arrow" className="w-5 h-5 ml-2" />
            </Link>

            <div className="flex items-center gap-4 text-white text-sm">
              <Image
                src={instagram}
                alt="Instagram"
                className="w-5 h-5"
              />
              <Link
                href="/user-dashboard/overview"
                className="opacity-70 hover:opacity-100 transition"
              >
                DASHBOARD
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex h-9 w-9 items-center justify-center border border-white/30 text-white transition hover:opacity-90"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "mt-4 max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="border border-white/15 bg-black p-4 shadow-md text-white">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg font-medium transition ${
                      isActive(item.href)
                        ? "text-yellow-400"
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2  justify-center bg-yellow-500 text-white flex items-center px-5 py-2.5 font-medium"
              >
                BOOK NOW <Image src={rightArrow} alt="arrow" className="w-4 h-4 ml-2" />
              </Link>
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;