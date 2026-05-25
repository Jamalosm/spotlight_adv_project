"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

        <div className="flex justify-between items-center px-4 md:px-10 h-16 md:h-20 max-w-7xl mx-auto">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

      

            <div className="flex flex-col leading-tight">

              <span className="text-2xl md:text-3xl font-bold tracking-wide bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              <div className="relative w-20 h-20 md:w-30 md:h-30">
              <Image
                src="/Bb.png"
                alt="Spotlight Logo"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
              </span>

          

            </div>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">

            {siteConfig.navItems.map((item) => {
              const active = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                    
                    ${
                      active
                        ? "text-yellow-400 bg-yellow-400/10"
                        : "text-gray-300 hover:text-yellow-400 hover:bg-white/5"
                    }`}
                >
                  {item.name}

                  {/* Active Glow */}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-yellow-400 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.9)]"></span>
                  )}

                </Link>
              );
            })}

          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:flex items-center justify-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.35)]"
          >
            Enquire Now
          </Link>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="md:hidden relative z-50 flex flex-col justify-center items-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03]"
          >

            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />

            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />

          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-dvh bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-xl sm:text-2xl z-40 transition-all duration-500 px-6 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >

        {siteConfig.navItems.map((item) => {
          const active = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`transition-all duration-300 ${
                active
                  ? "text-yellow-400 scale-110"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item.name}
            </Link>
          );
        })}

        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black px-8 py-3.5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.35)]"
        >
          Enquire Now
        </Link>

      </div>
    </>
  );
}
