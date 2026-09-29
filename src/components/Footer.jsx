import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-3 space-y-4">
            <div className="inline-block py-1">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Logo size="md" theme="dark" />
              </Link>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Tenziaa Wellness and Beauty Clinic is India's premier destination for safe, effective, non-surgical body contouring, inch loss, muscle toning, and holistic wellness.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
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
              <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><a href="/#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="/#services-carousel" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="/#minimally-invasive" className="hover:text-emerald-400 transition-colors">Treatments</a></li>
              <li><Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-emerald-400 transition-colors font-semibold text-emerald-400">Clinical Blog</Link></li>
              <li><a href="/#faq" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
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
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+919363721689"
                className="flex items-center gap-2.5 text-white hover:text-emerald-400 font-bold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-900/60 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 93637 21689</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <div className="w-8 h-8 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Mon - Sun: 9:00 AM – 8:30 PM</span>
              </div>

              {/* Clinic Location */}
              <div className="flex items-start gap-2.5 text-slate-300">
                <div className="w-8 h-8 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs leading-relaxed">
                  <span className="font-semibold text-white block text-sm mb-0.5">Clinic Location</span>
                  <span className="text-slate-300">
                    10/3, 2nd Floor, Salem Main Road, Bharathipuram, Indhira Nagar, Dharmapuri, Tamil Nadu 636701
                  </span>
                </div>
              </div>

              {/* Show in Map Embed & Action */}
              <div className="pt-1 space-y-2">
                <div className="w-full h-36 rounded-xl overflow-hidden border border-slate-700/80 shadow-inner bg-slate-950 relative group">
                  <iframe
                    title="Clinic Location Map - Dharmapuri"
                    src="https://maps.google.com/maps?q=10/3,+2nd+Floor,+Salem+Main+Road,+Bharathipuram,+Indhira+Nagar,+Dharmapuri,+Tamil+Nadu+636701&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter contrast-105 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=10%2F3%2C+2nd+Floor%2C+Salem+Main+Road%2C+Bharathipuram%2C+Indhira+Nagar%2C+Dharmapuri%2C+Tamil+Nadu+636701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Show in Map / Get Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
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
