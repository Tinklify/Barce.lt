import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import { serviceDetails } from '@/lib/service-details';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { GHLForm } from '@/components/GHLForm';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const service = services.find(s => s.id === p.slug);
  const details = serviceDetails[p.slug];
  
  if (!service || !details) {
    return { title: 'Paslauga nerasta' };
  }

  const baseTitle = details.title.includes('Kaune')
    ? details.title
    : `${details.title} Kaune`;

  return {
    title: `${baseTitle} - Barce UAB`,
    description: `${service.shortDescription} Susisiekite su mumis jau šiandien dėl nemokamos sąmatos.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const p = await params;
  const service = services.find(s => s.id === p.slug);
  const details = serviceDetails[p.slug];

  if (!service || !details) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 border-b-4 border-orange-500">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link href="/paslaugos" className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8 font-black uppercase tracking-widest text-xs transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Grįžti į paslaugas
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">{details.title}</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16">
            
            {/* Main Content */}
            <div>
              <div className="relative aspect-video rounded-sm overflow-hidden mb-12 shadow-sm border border-slate-200">
                {/* PAKEISTI Į REALIĄ PASLAUGOS NUOTRAUKĄ */}
                <img
                  src={`https://picsum.photos/seed/${p.slug}/1200/800`}
                  alt={details.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
              </div>

              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:text-slate-600 prose-a:text-orange-600 prose-a:font-bold prose-strong:text-slate-900 prose-strong:font-black">
                {details.content}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-slate-200 hover:border-orange-500 transition-colors mb-8 sticky top-32">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Kodėl rinktis mus?</h3>
                <ul className="space-y-6 mb-8">
                  {details.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 text-orange-500">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-slate-900 font-bold">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <hr className="border-slate-100 mb-8" />
                
                <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wide">Reikalinga paslauga?</h4>
                <Link
                  href="/kontaktai"
                  className="flex items-center justify-center bg-orange-600 text-white font-bold px-8 py-4 rounded-sm hover:bg-orange-700 transition-colors uppercase text-sm tracking-widest shadow-lg shadow-orange-900/20 w-full"
                >
                  Gauti nemokamą sąmatą
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GHL Form Section directly on service page for higher conversion */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-orange-500"></span>
            <span className="text-xs font-black text-orange-500 uppercase tracking-widest">Užklausa</span>
            <span className="h-[2px] w-8 bg-orange-500"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 tracking-tighter">Aptarkime jūsų projektą</h2>
          {/* We reuse the samata form id since it's the main lead form */}
          <GHLForm id="ghl-form-samata" />
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}
