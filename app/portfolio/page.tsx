import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Atlikti darbai | Barce, UAB',
  description: 'Barce, UAB atliktų statybos, renovacijos ir apdailos darbų galerija.',
};

import CTASection from '@/components/CTASection';

export default function PortfolioPage() {
  // Using placeholder images until actual images are uploaded
  const projects = [
    { title: "Karkasinio namo statyba", image: "/nuotraukos/20220307_172515.jpg" },
    { title: "Pilna vidaus apdaila", image: "/nuotraukos/20230118_112448.jpg" },
    { title: "Stogo keitimas ir šiltinimas", image: "/nuotraukos/20230626_131712.jpg" },
    { title: "Senos sodybos renovacija", image: "/nuotraukos/20230804_141038.jpg" },
    { title: "Fasado šiltinimas ir apdaila", image: "/nuotraukos/20231002_093629.jpg" },
    { title: "Pamatų betonavimas", image: "/nuotraukos/20231030_170420.jpg" },
    { title: "Mūrinio namo statyba", image: "/nuotraukos/20231030_170503.jpg" },
    { title: "Inžinerinių tinklų įrengimas", image: "/nuotraukos/2397292_15.jpg" },
    { title: "Projektas 9", image: "/nuotraukos/2397292_17.jpg" },
    { title: "Projektas 10", image: "/nuotraukos/2397292_19.jpg" },
    { title: "Projektas 11", image: "/nuotraukos/2397292_9.jpg" },
    { title: "Projektas 12", image: "/nuotraukos/IMG_20190220_175627.jpg" },
  ];

  return (
    <>
      <div className="py-24 bg-slate-50 min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-orange-500"></span>
              <span className="text-xs font-black text-orange-500 uppercase tracking-widest">Portfolio</span>
              <span className="h-[2px] w-8 bg-orange-500"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Atlikti Darbai</h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Peržiūrėkite mūsų įgyvendintus projektus. Nuo smulkių apdailos darbų iki pilnos namų statybos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square rounded-sm overflow-hidden mb-4 bg-slate-200 border border-slate-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
