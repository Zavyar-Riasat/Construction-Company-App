"use client"; // Add this if using Next.js App Router
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu
import clsx from 'clsx';

const pages = [
  { name: "Home", href: "/" },
  { name: "Over Ons", href: "/OverOns" },
  { name: "Contact", href: "/Contact" },
]

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative bg-white p-4 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-6xl font-bold">
          <img src="/images/logo.png" alt="logo" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {
            pages.map((page) => {
              const link = page.href;
              return (
                <li key={page.name}><Link href={link} className={clsx(
                  "hover:text-gray-500 text-xl font-bold p-2 rounded-lg",
                  {
                    'bg-gray-200 text-gray-600': pathname === link,
                  }
                )}>{page.name}</Link></li>
              )
            })
          }
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setNavOpen(true)} className="md:hidden text-neutral-500 text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Overlay */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setNavOpen(false)} // Close menu when clicking outside
        ></div>
      )}

      {/* Mobile Nav (Right Side Drawer) */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gray-100 z-50 shadow-lg transition-transform duration-300 ${navOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setNavOpen(false)}
          className="text-2xl absolute top-4 right-4"
        >
          <FaTimes />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col mt-16 space-y-3 text-center">
          {
            pages.map((page) => {
              const link = page.href;
              return (
                <li key={page.name}><Link href={link} className={clsx(
                  "text-lg block bg-gray-300 rounded-lg p-2 w-1/2 mx-auto",
                  {
                    'bg-gray-600 text-white': pathname === link,
                  }
                )}>{page.name}</Link></li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;