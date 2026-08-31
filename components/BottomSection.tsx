import Link from 'next/link';
import ReviewsWidget from './ReviewsWidget';

export default function BottomSection() {
  return (
    <div className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter">Pasirengę pradėti?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">Gaukite nemokamą konsultaciją arba preliminarią sąmatą savo projektui jau dabar.</p>
            <Link href="/samata" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-sm uppercase tracking-widest transition-colors">
                Gauti sąmatą
            </Link>
          </div>
          <div className="bg-white p-6 rounded-sm">
            <ReviewsWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
