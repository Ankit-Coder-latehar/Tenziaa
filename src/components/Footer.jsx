import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Phone, MapPin, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#05261c] text-emerald-100/80 pt-8 pb-5 border-t border-emerald-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-emerald-900/60">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="inline-block">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Logo size="sm" theme="dark" />
              </Link>
            </div>
            <p className="text-emerald-100/75 text-xs leading-relaxed max-w-sm">
              Explore personalised weight management, inch-loss programs, and non-surgical body-contouring treatments with professional guidance.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#031d15] text-emerald-300 border border-emerald-700/50 text-[11px] font-semibold">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                ❤️Crafted by Thamizh Marketing
              </span>
              <p>http://thamizhmarketing.com/</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-emerald-100/75">
              <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-emerald-300 transition-colors">Home</Link></li>
              <li><a href="/#about" className="hover:text-emerald-300 transition-colors">About Us</a></li>
              <li><a href="/#services-carousel" className="hover:text-emerald-300 transition-colors">Services</a></li>
              <li><a href="/#meet-team" className="hover:text-emerald-300 transition-colors">Our Team</a></li>
              <li><Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-emerald-300 transition-colors font-semibold text-emerald-300">Wellness Blog</Link></li>
              <li><a href="/#consultation" className="hover:text-emerald-300 transition-colors">Consultation</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-5 space-y-2">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">
              Contact &amp; Location
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">

              {/* Phone, Hours & CTA */}
              <div className="space-y-2 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <a
                    href="tel:+919363721689"
                    className="inline-flex items-center gap-1.5 text-white hover:text-emerald-300 font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>+91 93637 21689</span>
                  </a>
                  <div className="flex items-center gap-1 text-emerald-200/70 text-[11px]">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>MON - SUN: 10:00 AM – 7:00 PM</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-2 px-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider transition-colors shadow cursor-pointer text-center"
                >
                  Book Free Consultation
                </button>
              </div>

              {/* Map Card & Location */}
              <div className="space-y-1.5">
                <a
                  href="https://maps.app.goo.gl/3tBv2M61P1CFB1rw6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2 rounded-lg bg-[#031d15] hover:bg-[#083324] border border-emerald-800/50 transition-colors"
                >
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-[11px] leading-tight flex-1">
                      <span className="font-semibold text-white block group-hover:text-emerald-300 transition-colors">
                        Dharmapuri Clinic
                      </span>
                      <span className="text-emerald-100/75 line-clamp-1">
                        10/3, 2nd Flr, Salem Main Rd, 636705
                      </span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                  </div>
                </a>

                <div className="w-full h-16 rounded-lg overflow-hidden border border-emerald-800/60 shadow-inner bg-[#031a13]">
                  <iframe
                    title="Clinic Location Map - Tenziaa Wellness & Aesthetic Clinic Dharmapuri"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.781845187768!2d78.1532946!3d12.116736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac17073aa7d7b7%3A0xefc1d1794bc0ba1a!2sTenziaa%20Wellness%20%26%20Aesthetic%20Clinic!5e0!3m2!1sen!2sin!4v1713000000000"
                    className="w-full h-full border-0 filter contrast-105 opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-3 text-[11px] text-emerald-200/60 space-y-2">
          <p className="leading-relaxed text-[11px] line-clamp-1 sm:line-clamp-none">
            <strong>Medical Disclaimer:</strong> Tenziaa treatments are clinically supervised non-invasive procedures. Individual results and timeframes may vary depending on patient metabolism and adherence to lifestyle protocols.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-emerald-900/60 text-[11px]">
            <span>© {new Date().getFullYear()} Tenziaa Dharampuri clinic. All Rights Reserved.</span>

          </div>
        </div>

      </div>
    </footer>
  );
}
