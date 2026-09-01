import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Apie mus | Barce, UAB',
  description: 'Barce, UAB - 9 metų patirtį turinti pilno ciklo statybos įmonė Kaune. Skaidrios sąmatos, greitas darbas, vienas rangovas.',
};

export default function AboutPage() {
  return (
    <>
      <div className="py-24 bg-slate-50 min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-orange-500"></span>
              <span className="text-xs font-black text-orange-500 uppercase tracking-widest">Istorija</span>
              <span className="h-[2px] w-8 bg-orange-500"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Apie {companyInfo.name}</h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Esame pilno ciklo statybos partneris, įsikūręs Kaune. Mūsų tikslas – paversti statybų procesą aiškiu, prognozuojamu ir maloniu.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/nuotraukos/2397292_9.jpg"
                alt="Barce, UAB komanda atlieka darbus"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter">Mūsų filosofija:<br/><span className="text-orange-500">Skaidrumas ir Atsakomybė</span></h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Statybų rinka dažnai kenčia nuo nepatikimų rangovų ir paslėptų mokesčių. Mes pasirinkome kitą kelią. Tikime, kad didžiausia vertė klientui yra <b>ramybė</b>.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Klientai dažnai lygina kainas ir renkasi pigiausią pirminį pasiūlymą, nesuprasdami, kad pigiausia sąmata dažnai reiškia praleistus darbus, nekokybiškas medžiagas ar tiesiog apgaulę. Mes garantuojame greitą, detalią ir, svarbiausia, <b className="text-slate-900">tikslią sąmatą</b>, kurioje numatyti visi būtini žingsniai.
              </p>
              
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Mūsų įsipareigojimai:</h3>
              <ul className="space-y-4">
                {[
                  "Vienas rangovas viskam – jums nereikia derinti skirtingų meistrų",
                  "Tiksli ir detali sąmata be paslėptų eilučių",
                  "Sutartų terminų laikymasis",
                  "Švari ir tvarkinga darbo vieta",
                  `${companyInfo.yearsExperience} metų sukaupta patirtis leidžia išvengti klaidų`,
                  "Profesionalūs ir kvalifikuoti meistrai",
                  "Nuolatinė komunikacija su klientu viso proceso metu"
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
          </div>

        </div>
      </div>
      {/* REVIEWS SECTION */}
      <div className="bg-white py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Klientų atsiliepimai</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Labai profesionali komanda. Viskas vyko laiku ir pagal planą.", author: "Jonas K." },
              { text: "Džiaugiuosi rezultatu. Darbai atlikti kokybiškai ir švariai.", author: "Elena P." },
              { text: "Sąmata buvo tiksli, jokių paslėptų mokesčių. Rekomenduoju.", author: "Mantas V." }
            ].map((review, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-sm border border-slate-200">
                <p className="text-slate-600 italic mb-4">&ldquo;{review.text}&rdquo;</p>
                <p className="font-bold text-slate-900">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
