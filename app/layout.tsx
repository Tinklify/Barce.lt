import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { companyInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    default: `${companyInfo.name} | Pilno ciklo statybos įmonė Kaune`,
    template: `%s | ${companyInfo.name}`
  },
  description: 'Barce, UAB - 9 metų patirtį turinti pilno ciklo statybos įmonė Kaune. Skaidrios sąmatos, vienas rangovas visiems etapams. Namų statyba, renovacija, apdaila.',
  openGraph: {
    title: `${companyInfo.name} | Pilno ciklo statybos įmonė Kaune`,
    description: 'Barce, UAB - 9 metų patirtį turinti pilno ciklo statybos įmonė Kaune. Skaidrios sąmatos, vienas rangovas visiems etapams.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyInfo.name} | Pilno ciklo statybos įmonė Kaune`,
    description: 'Barce, UAB - 9 metų patirtį turinti pilno ciklo statybos įmonė Kaune.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": companyInfo.name,
    "image": "https://picsum.photos/800/600", // PAKEISTI Į TIKRĄ LOGO
    "@id": "",
    "url": "https://barce.lt", // PAKEISTI TIKRU DOMENU
    "telephone": companyInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kaunas",
      "addressCountry": "LT"
    },
    "description": "Pilno ciklo statybos įmonė, atliekanti statybos, renovacijos, ir apdailos darbus."
  };

  return (
    <html lang="lt">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-800" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
