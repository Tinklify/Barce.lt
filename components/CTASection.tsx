import Link from 'next/link';

export default function CTASection() {
  const reviews = [
    {
      text: "Visi darbai nuo pamatų iki stogo atlikti nepriekaištingai. Sąmata nesikeitė nuo pat pradžių.",
      author: "Tomas V."
    },
    {
      text: "Meistrai dirbo labai švariai ir atsakingai. Puikus rezultatas, ačiū!",
      author: "Lina M."
    }
  ];

  return (
    <div className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter text-slate-900">Pasirengę pradėti projektą?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">Gaukite nemokamą konsultaciją arba preliminarią sąmatą savo statybų ar renovacijos projektui jau dabar.</p>
            <Link href="/samata" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-sm uppercase tracking-widest transition-colors">
                Gauti sąmatą
            </Link>
          </div>
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="bg-slate-900 p-6 rounded-sm border-l-4 border-orange-500">
                <p className="text-slate-300 italic mb-3">&ldquo;{review.text}&rdquo;</p>
                <p className="font-bold text-orange-400">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
