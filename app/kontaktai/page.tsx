import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import { GHLForm } from '@/components/GHLForm';

export const metadata: Metadata = {
  title: 'Kontaktai | Barce, UAB',
  description: 'Susisiekite su Barce, UAB dėl statybos ar renovacijos darbų. Gauti nemokamą sąmatą.',
};

export default function ContactsPage() {
  return (
    <div className="py-24 bg-slate-50 min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-orange-500"></span>
            <span className="text-xs font-black text-orange-500 uppercase tracking-widest">Kontaktai</span>
            <span className="h-[2px] w-8 bg-orange-500"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Susisiekite su mumis</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Turite klausimų ar norite aptarti savo projektą? Užpildykite formą arba susisiekite nurodytais kontaktais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-white p-10 rounded-sm shadow-sm border border-slate-200 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-8 uppercase tracking-wide">Kontaktinė informacija</h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Telefonas</p>
                    <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="text-lg font-bold text-slate-900 hover:text-orange-600 transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">El. paštas</p>
                    <a href={`mailto:${companyInfo.email}`} className="text-lg font-bold text-slate-900 hover:text-orange-600 transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Būstinė / Regionas</p>
                    <p className="text-lg font-bold text-slate-900">
                      {companyInfo.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Darbo laikas</p>
                    <p className="text-lg font-bold text-slate-900">
                      I-V: 8:00 - 17:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Žemėlapis */}
            <div className="relative aspect-video rounded-sm overflow-hidden shadow-sm border border-slate-200 bg-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146908.68361715457!2d23.77443831626027!3d54.912644275184294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e72270b167d143%3A0xdc75ebecb7eeb78c!2sKaunas!5e0!3m2!1sen!2slt!4v1700000000000!5m2!1sen!2slt" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UAB Barce - Kaunas"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wide">Gauti sąmatą / Užklausa</h2>
            {/* GHL FORM PLACEHOLDER */}
            <GHLForm id="ghl-form-kontaktai" />
          </div>
        </div>
      </div>
    </div>
  );
}
