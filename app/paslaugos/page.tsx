import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/data';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Paslaugos | Barce, UAB',
  description: 'Visos statybos ir renovacijos paslaugos, kurias teikia Barce, UAB. Nuo pamatų iki rakto.',
};

export default function ServicesPage() {
  return (
    <>
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src="https://picsum.photos/seed/services/1920/600"
          alt="Mūsų paslaugos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Mūsų Paslaugos</h1>
        </div>
      </div>
      <div className="py-24 bg-slate-50 min-h-[calc(100vh-80px-300px)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-orange-500"></span>
              <span className="text-xs font-black text-orange-500 uppercase tracking-widest">Ką mes darome</span>
              <span className="h-[2px] w-8 bg-orange-500"></span>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Esame pilno ciklo rangovas. Viskas, ko reikia jūsų projektui – vienose rankose.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white p-10 rounded-sm border border-slate-200 hover:border-orange-500 transition-all flex flex-col h-full shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow text-sm">
                  {service.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
