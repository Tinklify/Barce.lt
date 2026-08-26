import Link from 'next/link';
import Image from 'next/image';
import { services, companyInfo } from '@/lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t-2 border-slate-800 text-slate-400 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Apie įmonę */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/Barcelogo2-1.png"
                alt="Barce, UAB Logo"
                width={40}
                height={40}
                className="rounded-sm object-contain"
              />
              <div className="flex flex-col leading-tight text-white">
                <span className="text-xl font-bold tracking-tighter">{companyInfo.name}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">Generalinis Rangovas</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Patikimas pilno ciklo statybos partneris Kaune ir visoje Lietuvoje. Nuo pamatų iki rakto – atsakomybė vienose rankose.
            </p>
          </div>

          {/* Paslaugos */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6">Pagrindinės paslaugos</h3>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/paslaugos/${service.id}`} className="hover:text-orange-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/paslaugos" className="text-orange-500 hover:text-orange-400 font-bold uppercase tracking-widest text-[10px]">
                  Visos paslaugos &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Nuorodos */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6">Informacija</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/apie-mus" className="hover:text-orange-400 transition-colors">Apie mus</Link></li>
              <li><Link href="/portfolio" className="hover:text-orange-400 transition-colors">Atlikti darbai</Link></li>
              <li><Link href="/kontaktai" className="hover:text-orange-400 transition-colors">Kontaktai</Link></li>
            </ul>
          </div>

          {/* Kontaktai */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6">Kontaktai</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="hover:text-orange-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-orange-400 transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-widest text-slate-500">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. Visos teisės saugomos.</p>
          <div className="flex flex-wrap gap-4 md:gap-8">
            <span>Vadovas: {companyInfo.manager}</span>
            <span>{companyInfo.address}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}