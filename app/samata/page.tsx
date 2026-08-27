
'use client';

import { useState } from 'react';

const SERVICES = [
  "Sienų/grindų/lubų apdailą",
  "Namo išorės šiltinimą",
  "Stogo dengimą",
  "Vonios/santechnikos sistemas",
  "Elektros instaliaciją",
  "Šildymo sistemą",
  "Vėdinimo sistemą",
  "Dalies namo griovimą"
];

const RATES_PER_M2 = {
  "Sienų/grindų/lubų apdailą": 90,
  "Namo išorės šiltinimą": 65,
  "Stogo dengimą": 60,
  "Šildymo sistemą": 80,
  "Vėdinimo sistemą": 35,
};
const RATE_PER_BATHROOM = 1000;
const RATE_PER_ROOM = 400;
const MIN_PROJECT_THRESHOLD = 10000;

export default function SamataPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    namoPlotas: 0, voniuSkaicius: 0, kambariuSkaicius: 0,
    selectedServices: [] as string[]
  });
  const [result, setResult] = useState<{ low: number; high: number; needsCustomQuote: boolean } | null>(null);

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let total = 0;
    let needsCustomQuote = false;

    formData.selectedServices.forEach(service => {
      if (RATES_PER_M2[service as keyof typeof RATES_PER_M2]) {
        total += formData.namoPlotas * RATES_PER_M2[service as keyof typeof RATES_PER_M2];
      } else if (service === "Vonios/santechnikos sistemas") {
        total += formData.voniuSkaicius * RATE_PER_BATHROOM;
      } else if (service === "Elektros instaliaciją") {
        total += formData.kambariuSkaicius * RATE_PER_ROOM;
      } else if (service === "Dalies namo griovimą") {
        needsCustomQuote = true;
      }
    });

    const lowEstimate = total;
    const highEstimate = total * 1.15;
    
    setResult({ low: lowEstimate, high: highEstimate, needsCustomQuote });

    // Submit to API
    try {
      await fetch('/api/submit-samata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lowEstimate, highEstimate })
      });
    } catch (error) {
      console.error('Submission failed', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="container mx-auto py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Gauti nemokamą sąmatą</h1>
        
        {!result ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Vardas" required className="w-full p-3 bg-slate-800 rounded-sm" onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="El. paštas" required className="w-full p-3 bg-slate-800 rounded-sm" onChange={e => setFormData({...formData, email: e.target.value})} />
              <input type="tel" placeholder="Telefonas" required className="w-full p-3 bg-slate-800 rounded-sm" onChange={e => setFormData({...formData, phone: e.target.value})} />
              <input type="number" placeholder="Namo Plotas (m²)" required className="w-full p-3 bg-slate-800 rounded-sm" onChange={e => setFormData({...formData, namoPlotas: parseFloat(e.target.value)})} />
              <input type="number" placeholder="Vonių skaičius" required className="w-full p-3 bg-slate-800 rounded-sm" onChange={e => setFormData({...formData, voniuSkaicius: parseFloat(e.target.value)})} />
              <input type="number" placeholder="Kambarių skaičius" required className="w-full p-3 bg-slate-800 rounded-sm" onChange={e => setFormData({...formData, kambariuSkaicius: parseFloat(e.target.value)})} />
            </div>

            <div className="mb-8">
              <label className="block mb-4 font-bold">Paslaugos:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map(s => (
                  <label key={s} className="flex items-center gap-3">
                    <input type="checkbox" onChange={() => toggleService(s)} />
                    {s}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 p-4 font-bold rounded-sm uppercase tracking-widest transition-colors">
              Skaičiuoti
            </button>
          </form>
        ) : (
          <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-sm text-center">
            <h2 className="text-3xl font-bold mb-4">Preliminari sąmata: {result.low.toFixed(0)}€ – {result.high.toFixed(0)}€</h2>
            <p className="text-slate-300 mb-6">Tai preliminari sąmata. Galutinę kainą patvirtinsime po objekto apžiūros.</p>
            {result.needsCustomQuote && <p className="text-orange-500 mb-6 font-bold">* Griovimo darbai reikalauja individualaus įvertinimo.</p>}
            
            {result.low >= MIN_PROJECT_THRESHOLD ? (
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Rezervuokite skambutį su mūsų specialistu</h3>
                <p className="text-slate-300 mb-6">Norite aptarti detales? Rezervuokite trumpą skambutį su mūsų specialistu žemiau.</p>
                <iframe 
                    src={`https://link.tinklify.lt/widget/booking/AuVNa5ZlPvEoKwPIZ0s7?first_name=${encodeURIComponent(formData.name.split(' ')[0] || '')}&last_name=${encodeURIComponent(formData.name.split(' ')[1] || '')}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`} 
                    allow="payment" 
                    style={{width: "100%", border: "none", overflow: "hidden", height: "600px"}} 
                    scrolling="no" 
                    id="AuVNa5ZlPvEoKwPIZ0s7_1787856506569"
                ></iframe>
                <script src="https://link.tinklify.lt/js/form_embed.js" type="text/javascript"></script>
              </div>
            ) : (
              <p className="mt-8 text-slate-400">Jūsų projekto apimtis šiuo metu nepriklauso mūsų standartinei darbų apimčiai. Vis tiek galite susisiekti su mumis el. paštu ar telefonu, ir mielai pasikonsultuosime.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
