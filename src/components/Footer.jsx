import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block py-1">
              <Logo size="md" theme="dark" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Tenziaa Wellness and Beauty Clinic is India's premier destination for safe, effective, non-surgical body contouring, inch loss, muscle toning, and holistic wellness.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                US-FDA Cleared Tech
              </span>
              <span className="text-xs text-slate-400">15,000+ Happy Clients</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">Treatments</a></li>
              <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">BMI Calculator</a></li>
              <li><a href="#results" className="hover:text-emerald-400 transition-colors">Before &amp; After</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Core Treatments
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">CryoSculpt 360° Fat Freezing</a></li>
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">UltraContour HIFU Tightening</a></li>
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">EMSculpt Neo Muscle Tone</a></li>
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">Laser Lipo Inch Loss</a></li>
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">Post-Pregnancy Mummy Sculpt</a></li>
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">Doctor Nutrition &amp; Metabolism</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+917030034567"
                className="flex items-center gap-2.5 text-white hover:text-emerald-400 font-bold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-900/60 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 7030034567</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <div className="w-8 h-8 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Mon - Sun: 9:00 AM – 8:30 PM</span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400">
                <div className="w-8 h-8 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Centers in Mumbai (Bandra &amp; South Mumbai), Delhi NCR, Bangalore, Pune</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full mt-2 py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow cursor-pointer text-center"
            >
              Book Free Appointment
            </button>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 text-xs text-slate-500 space-y-4">
          <p className="leading-relaxed">
            <strong>Medical Disclaimer:</strong> Tenziaa Wellness &amp; Beauty Clinic treatments are clinically supervised non-invasive procedures. Individual results, centimeter inch loss, and timeframes may vary depending on patient metabolism, body composition, hormonal profile, and adherence to lifestyle protocols. Free consultation includes initial scan and clinical assessment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
            <span>© {new Date().getFullYear()} Tenziaa Wellness and Beauty Clinic. All Rights Reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Clinical Standards</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
