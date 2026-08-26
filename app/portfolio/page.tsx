import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atlikti darbai | Barce, UAB',
  description: 'Barce, UAB atliktų statybos, renovacijos ir apdailos darbų galerija.',
};

export default function PortfolioPage() {
  // Placeholder data for portfolio items
  const projects = [
    { title: "Karkasinio namo statyba", category: "Nauja statyba" },
    { title: "Pilna vidaus apdaila", category: "Apdaila" },
    { title: "Stogo keitimas ir šiltinimas", category: "Stogai" },
    { title: "Senos sodybos renovacija", category: "Renovacija" },
    { title: "Fasado šiltinimas ir apdaila", category: "Fasadai" },
    { title: "Pamatų betonavimas", category: "Pamatai" },
    { title: "Mūrinio namo statyba", category: "Nauja statyba" },
    { title: "Inžinerinių tinklų įrengimas", category: "Komunikacijos" },
  ];

  return (
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
                {/* PAKEISTI Į REALIAS NUOTRAUKAS */}
                <img
                  src={`https://picsum.photos/seed/project${i}/600/600`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors uppercase tracking-tight text-sm">
                {project.title}
              </h3>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mt-1">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
