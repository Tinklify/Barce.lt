
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function SamataResultContent() {
  const searchParams = useSearchParams();
  const [estimate, setEstimate] = useState<{ low: number; high: number; needsCustomQuote: boolean } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calculateEstimate = async () => {
      const namo_plotas = parseFloat(searchParams.get('namo_plotas') || '0');
      const vonios_skaicius = parseFloat(searchParams.get('vonios_skaicius') || '0');
      const kambariu_skaicius = parseFloat(searchParams.get('kambariu_skaicius') || '0');
      const paslaugosRaw = searchParams.get('paslaugos') || '';
      const contact_id = searchParams.get('contact_id');

      const paslaugos = paslaugosRaw.split(',').map(p => p.trim());

      const RATES_PER_M2 = {
        "Sienų/grindų/lubų apdailą": 90,
        "Namo išorės šiltinimą": 65,
        "Stogo dengimą": 60,
        "Šildymo sistemą": 80,
        "Vėdinimo sistemą": 35,
      };
      const RATE_PER_BATHROOM = 1000;
      const RATE_PER_ROOM = 400;

      let total = 0;
      let needsCustomQuote = false;

      paslaugos.forEach(service => {
        if (RATES_PER_M2[service as keyof typeof RATES_PER_M2]) {
          total += namo_plotas * RATES_PER_M2[service as keyof typeof RATES_PER_M2];
        } else if (service === "Vonios/santechnikos sistemas") {
          total += vonios_skaicius * RATE_PER_BATHROOM;
        } else if (service === "Elektros instaliaciją") {
          total += kambariu_skaicius * RATE_PER_ROOM;
        } else if (service === "Dalies namo griovimą") {
          needsCustomQuote = true;
        }
      });

      const lowEstimate = total;
      const highEstimate = total * 1.15;

      setEstimate({ low: lowEstimate, high: highEstimate, needsCustomQuote });
      setLoading(false);

      // Send update to API
      if (contact_id) {
        try {
          await fetch('/api/update-estimate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              lowEstimate,
              highEstimate,
              contact_id
            })
          });
        } catch (error) {
          console.error('Failed to update GHL:', error);
        }
      }
    };

    calculateEstimate();
  }, [searchParams]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-white bg-slate-950">Skaičiuojama...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="container mx-auto py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Preliminari sąmata: {estimate?.low.toFixed(0)}€ – {estimate?.high.toFixed(0)}€
        </h1>
        <p className="text-lg text-slate-300 text-center max-w-2xl mx-auto mb-8">
          Tai preliminari sąmata. Galutinę kainą patvirtinsime po objekto apžiūros.
        </p>
        {estimate?.needsCustomQuote && (
          <p className="text-orange-500 text-center font-bold mb-12">
            * Griovimo darbai reikalauja individualaus įvertinimo, mūsų specialistas susisieks su jumis dėl detalių.
          </p>
        )}

        <section className="mt-16 bg-slate-900 p-8 rounded-sm">
          <h2 className="text-2xl font-bold mb-6">Rezervuokite skambutį su mūsų specialistu</h2>
          <div id="ghl-calendar-embed"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function SamataResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white bg-slate-950">Kraunama...</div>}>
      <SamataResultContent />
    </Suspense>
  );
}
