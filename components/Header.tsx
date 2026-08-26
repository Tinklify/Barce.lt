"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
  { href: "/", label: "Pagrindinis" },
  { href: "/paslaugos", label: "Paslaugos" },
  { href: "/apie-mus", label: "Apie Mus" },
  { href: "/portfolio", label: "Atlikti Darbai" },
  { href: "/kontaktai", label: "Kontaktai" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 text-white border-b-4 border-orange-500">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/Barcelogo2-1.png"
            alt="Barce, UAB Logo"
            width={40}
            height={40}
            className="rounded-sm object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-tighter">BARCE, UAB</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:block">Generalinis Rangovas</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium uppercase tracking-wide transition-colors hover:text-orange-400",
                pathname === link.href ? "text-orange-400" : "text-slate-300"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block text-right">
            <p className="text-[10px] text-slate-400 uppercase font-bold">Skambinkite mums</p>
            <a
              href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
              className="text-sm font-bold tracking-wider text-orange-400 hover:text-orange-300 transition-colors"
            >
              {companyInfo.phone}
            </a>
          </div>
          <Link
            href="/#samata"
            className="hidden md:inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-sm uppercase text-[11px] tracking-widest transition-colors shadow-lg shadow-orange-900/20"
          >
            Gauti sąmatą
          </Link>
          
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <nav className="flex flex-col container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium uppercase tracking-wide",
                  pathname === link.href ? "text-orange-400" : "text-slate-300"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-4">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Skambinkite mums</p>
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="text-sm font-bold tracking-wider text-orange-400">
                  {companyInfo.phone}
                </a>
              </div>
              <Link
                href="/#samata"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center bg-orange-600 text-white font-bold py-3 px-6 rounded-sm uppercase text-[11px] tracking-widest w-full"
              >
                Gauti sąmatą
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}