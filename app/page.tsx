import Image from 'next/image';
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
          <Image
            src="https://picsum.photos/seed/construction/1920/1080"
            alt="Statybos darbai"
            fill
            className="object-cover"
            priority
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
                href="#samata"
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
                Pigiausias pasiūlymas dažnai tampa brangiausiu. Mes pateikiame detalią sąmatą, kurioje nėra paslėptų mokesčių ar "nemačiau" situacijų.
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
                <Image
                  src={`https://picsum.photos/seed/portfolio${i}/800/600`}
                  alt={`Atliktas darbas ${i}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
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

      {/* CONTACT/SĄMATA SECTION (Moved UP) */}
      <section id="samata" className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-orange-500"></span>
                <span className="text-xs font-black text-orange-600 uppercase tracking-widest">Užklausa</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">
                Turite projektą?<br/>Aptarkime jį.
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                Užpildykite formą ir mes susisieksime su jumis aptarti jūsų viziją, patarti bei paruošti preliminarią sąmatą.
              </p>
              
              <ul className="space-y-6 mb-10">
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

              <div className="mt-12 space-y-8">
                {/* Atsiliepimai */}
                <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-slate-200 relative">
                  <div className="absolute top-6 right-6 text-slate-100">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="flex text-orange-500 mb-4 relative z-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic leading-relaxed relative z-10">"Visi darbai nuo pamatų iki stogo atlikti nepriekaištingai. Sąmata nesikeitė nuo pat pradžių, o terminai buvo išlaikyti. Rekomenduoju UAB Barce!"</p>
                  <div className="relative z-10">
                    <p className="font-bold text-slate-900">Tomas V.</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">Namo statyba Kaune</p>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-slate-200 relative">
                  <div className="absolute top-6 right-6 text-slate-100">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="flex text-orange-500 mb-4 relative z-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic leading-relaxed relative z-10">"Meistrai dirbo labai švariai ir atsakingai. Padėjo su medžiagų parinkimu, visada atsakė į klausimus. Puikus rezultatas, ačiū!"</p>
                  <div className="relative z-10">
                    <p className="font-bold text-slate-900">Lina M.</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">Pilna apdaila</p>
                  </div>
                </div>

                {/* Kompaktiškas žemėlapis */}
                <div className="flex flex-col sm:flex-row gap-6 items-center bg-white p-2 rounded-sm border border-slate-200 shadow-sm">
                  <div className="w-full sm:w-1/2 h-32 md:h-40 rounded-sm overflow-hidden relative">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146908.68361715457!2d23.77443831626027!3d54.912644275184294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e72270b167d143%3A0xdc75ebecb7eeb78c!2sKaunas!5e0!3m2!1sen!2slt!4v1700000000000!5m2!1sen!2slt" 
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="UAB Barce - Kaunas"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 p-4 sm:p-0 sm:pr-4">
                    <div className="flex items-center gap-2 text-orange-600 mb-2">
                      <MapPin className="w-5 h-5 shrink-0" />
                      <h4 className="font-bold text-slate-900">Mus rasite</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Vykdome statybų ir renovacijos projektus Kauno mieste bei apskrityje. Susisiekite, jei jūsų objektas yra kitame mieste.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GHL FORM - LIGHT BACKGROUND */}
            <div className="bg-white p-6 md:p-8 rounded-sm text-slate-900 shadow-xl border border-slate-200 relative overflow-hidden border-t-4 border-t-orange-500 w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none text-slate-900">
                <Building2 className="w-32 h-32" />
              </div>
              <p className="text-xs uppercase font-black text-orange-500 tracking-widest mb-2 relative z-10 text-center sm:text-left">Gaukite sąmatą</p>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 relative z-10 text-center sm:text-left">Užpildykite užklausą</h3>
              <div className="relative z-10">
                <GHLForm id="ghl-form-samata" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
