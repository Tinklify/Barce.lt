import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Paslaugos | Barce, UAB',
  description: 'Visos statybos ir renovacijos paslaugos, kurias teikia Barce, UAB. Nuo pamatų iki rakto.',
};

export default function ServicesPage() {
  return (
    <div className="py-24 bg-slate-50 min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-orange-500"></span>
            <span className="text-xs font-black text-orange-500 uppercase tracking-widest">Ką mes darome</span>
            <span className="h-[2px] w-8 bg-orange-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Mūsų Paslaugos</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Esame pilno ciklo rangovas. Viskas, ko reikia jūsų projektui – vienose rankose.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link 
              key={service.id} 
              href={`/paslaugos/${service.id}`}
              className="group bg-white p-10 rounded-sm border border-slate-200 hover:border-orange-500 transition-all flex flex-col h-full shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow text-sm">
                {service.shortDescription}
              </p>
              <div className="flex items-center text-xs font-black uppercase tracking-widest text-orange-500">
                Skaityti daugiau <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
