import { MessageSquareText, Handshake, Lightbulb, ShieldCheck } from 'lucide-react';

export default function TrustFeatures() {
  const features = [
    {
      icon: MessageSquareText,
      title: "24/7 Konsultacijos",
      description: "Atsakome į visus jūsų klausimus bet kuriuo paros metu.",
    },
    {
      icon: Handshake,
      title: "Sąžininga sąmata",
      description: "Detali, skaidri sąmata be paslėptų mokesčių.",
    },
    {
      icon: Lightbulb,
      title: "Unikalūs sprendimai",
      description: "Kiekvienas projektas – individualiai pritaikytas jūsų poreikiams.",
    },
    {
      icon: ShieldCheck,
      title: "Pasitenkinimo garantija",
      description: "Dirbame tol, kol rezultatas viršija jūsų lūkesčius.",
    },
  ];

  return (
    <div className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 tracking-tighter">Kodėl klientai mus renkasi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-slate-200 hover:border-orange-500 transition-colors">
              <feature.icon className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
