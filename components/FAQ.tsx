'use client'
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    { q: "Kiek laiko užtrunka projekto parengimas?", a: "Tai priklauso nuo projekto sudėtingumo, tačiau preliminarią sąmatą pateikiame per 24 valandas." },
    { q: "Ar suteikiate darbų garantiją?", a: "Taip, visiems atliktiems darbams suteikiame ilgalaikę garantiją pagal LR įstatymus." },
    { q: "Kokiose teritorijose dirbate?", a: "Pagrindinė mūsų veikla – Kaunas ir Kauno apskritis, tačiau dirbame visoje Lietuvoje." },
    { q: "Ar padedate su statybinių medžiagų parinkimu?", a: "Taip, profesionaliai konsultuojame ir padedame išsirinkti geriausius variantus jūsų biudžetui." },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 tracking-tighter">Dažniausiai užduodami klausimai</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-sm">
              <button 
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
