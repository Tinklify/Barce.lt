import Link from 'next/link';
import { ArrowRight, CheckCircle2, Building2, HardHat, ClipboardCheck, MapPin } from 'lucide-react';
import { services } from '@/lib/data';
import { GHLForm } from '@/components/GHLForm';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* PAKEISTI Į TIKRĄ HERO NUOTRAUKĄ */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://picsum.photos/seed/construction/1920/1080"
            alt="Statybos darbai"
            className="absolute inset-0 w-full h-full object-cover"
           
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-orange-500"></span>
              <span className="text-xs font-black text-orange-500 uppercase tracking-widest">9 Metų Patirtis Rinkoje</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 text-white tracking-tighter">
              Pilno ciklo statybos partneris <span className="text-orange-500">Kaune</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium">
              Nuo idėjos ir pamatų iki pilno raktų perdavimo. Vienas patikimas rangovas visiems etapams, užtikrinantis kokybę, skaidrią sąmatą ir procesą be streso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/samata"
                className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-sm shadow-lg shadow-orange-900/50 uppercase text-sm tracking-widest transition-colors"
              >
                Gauti nemokamą sąmatą
              </Link>
              <Link
                href="/paslaugos"
                className="inline-flex items-center justify-center border-2 border-slate-700 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-sm uppercase text-sm tracking-widest transition-colors"
              >
                Mūsų paslaugos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BARCE SECTION */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Kodėl verta rinktis Barce, UAB?</h2>
            <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tighter">
              Mes keičiame statybų standartą.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-10 rounded-sm border-t-4 border-orange-500 shadow-sm">
              <div className="w-12 h-12 bg-white text-orange-500 rounded flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">9 metų patirtis</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Nuo sudėtingų renovacijų iki modernių karkasinių namų. Mūsų sukaupta patirtis leidžia numatyti ir išvengti klaidų dar prieš joms įvykstant.
              </p>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-sm border-t-4 border-orange-500 shadow-sm">
              <div className="w-12 h-12 bg-white text-orange-500 rounded flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">Vienas rangovas</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Jums nereikia ieškoti ir derinti 10 skirtingų meistrų. Atliekame visus statybos etapus nuo pamatų iki pilnos apdailos. Viena sutartis, viena atsakomybė.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-sm border-t-4 border-orange-500 shadow-sm">
              <div className="w-12 h-12 bg-white text-orange-500 rounded flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">Skaidri sąmata</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Pigiausias pasiūlymas dažnai tampa brangiausiu. Mes pateikiame detalią sąmatą, kurioje nėra paslėptų mokesčių ar &quot;nemačiau&quot; situacijų.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Mūsų Paslaugos / SEO Kryptys</h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tighter">
                Pilnas spektras statybos darbų.
              </p>
            </div>
            <Link href="/paslaugos" className="inline-flex items-center gap-2 text-orange-600 font-bold uppercase tracking-widest text-sm hover:text-orange-700 transition-colors">
              Visos paslaugos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(0, 6).map((service) => (
              <Link 
                key={service.id} 
                href={`/paslaugos/${service.id}`}
                className="group bg-white p-8 rounded-sm border border-slate-200 hover:border-orange-500 transition-all flex flex-col h-full shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-400 group-hover:text-orange-500 mb-6 transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.shortDescription}
                </p>
                <div className="flex items-center text-xs font-black uppercase tracking-widest text-orange-500">
                  Plačiau <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-slate-900 text-white border-t-4 border-orange-500">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-black text-orange-500 uppercase tracking-widest mb-4">Procesas</h2>
            <p className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tighter">
              Kaip mes dirbame?
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { title: "Konsultacija", desc: "Išklausome poreikius ir įvertiname objektą." },
              { title: "Sąmata", desc: "Pateikiame detalią, skaidrią sąmatą." },
              { title: "Sutartis", desc: "Suderiname terminus ir pasirašome sutartį." },
              { title: "Darbai", desc: "Vykdome darbus pagal sutartą grafiką." },
              { title: "Perdavimas", desc: "Priduodame objektą su garantija." }
            ].map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-14 h-14 mx-auto bg-slate-800 border-2 border-slate-700 text-orange-500 rounded-sm flex items-center justify-center font-black text-xl mb-6 relative z-10 transition-colors group-hover:border-orange-500 group-hover:bg-slate-900">
                  {i + 1}
                </div>
                {i !== 4 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-full h-[2px] bg-slate-800" />
                )}
                <h4 className="font-bold text-sm uppercase tracking-wide mb-2 text-white">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SNIPPET (Placeholder) */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Portfolio</h2>
            <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tighter">Atlikti Darbai</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* PAKEISTI Į REALIAS NUOTRAUKAS */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden group border border-slate-200">
                <img
                  src={`https://picsum.photos/seed/portfolio${i}/800/600`}
                  alt={`Atliktas darbas ${i}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/portfolio" className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-700 font-bold px-8 py-4 rounded-sm hover:bg-slate-50 transition-colors uppercase text-sm tracking-widest">
              Žiūrėti visą galeriją
            </Link>
          </div>
        </div>
      </section>

      {/* GHL REVIEWS SECTION */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Atsiliepimai</h2>
            <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tighter">
              Ką apie mus sako klientai
            </p>
          </div>
          {/* PLACEHOLDER FOR GHL REVIEWS WIDGET */}
          <div id="ghl-reviews-widget" className="min-h-[200px] flex items-center justify-center border-2 border-dashed border-slate-200 rounded-sm">
             <p className="text-slate-400">Čia bus rodomi atsiliepimai (įklijuokite GHL widget kodą)</p>
          </div>
        </div>
      </section>

      {/* CONTACT/SĄMATA SECTION */}
      <section id="samata" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-sm shadow-xl border border-slate-200 overflow-hidden grid lg:grid-cols-2">
            
            {/* Left side: Benefits */}
            <div className="p-8 md:p-12 lg:p-16 bg-white">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-orange-500"></span>
                <span className="text-xs font-black text-orange-600 uppercase tracking-widest">Užklausa</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter">
                Kodėl verta kreiptis į mus?
              </h2>
              <ul className="space-y-6">
                {[
                  "Nemokama pirminė konsultacija",
                  "Detali ir skaidri sąmata be paslėptų mokesčių",
                  "Profesionalus patarimas dėl medžiagų",
                  "Aiškus darbų grafikas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-orange-500">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-slate-800 font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side: CTA */}
            <div className="p-8 md:p-12 lg:p-16 bg-slate-900 text-white flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
              <div className="mb-8">
                <Building2 className="w-16 h-16 text-orange-500 mb-6" />
                <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Sužinokite preliminarią kainą</h3>
                <p className="text-slate-400 leading-relaxed">
                  Užpildykite skaičiuoklę ir sužinokite projekto kainą per kelias minutes.
                </p>
              </div>
              <Link href="/samata" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-sm uppercase tracking-widest transition-colors shadow-lg shadow-orange-900/20">
                Skaičiuoti sąmatą
              </Link>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
