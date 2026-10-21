import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#05261c] text-emerald-100/80 pt-16 pb-12 sm:pt-20 sm:pb-16 border-t border-emerald-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-emerald-900/60">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Logo size="md" theme="dark" />
              </Link>
            </div>
            <p className="text-emerald-100/75 text-sm leading-relaxed max-w-sm">
              Explore personalised weight management, inch-loss programs, and non-surgical body-contouring treatments with professional guidance.
            </p>

            {/* Social Media Links */}
            <div className="pt-3 flex items-center gap-3">
              <span className="text-xs font-semibold text-emerald-200/90 mr-1">Follow Us:</span>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tenziaa_dharmapuri?exln=MTY4dWx1Ym9hNnZtMg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tenziaa Dharmapuri on Instagram"
                className="w-9 h-9 rounded-full bg-[#031d15] hover:bg-gradient-to-tr hover:from-amber-600 hover:via-rose-600 hover:to-purple-600 border border-emerald-700/50 hover:border-transparent flex items-center justify-center text-emerald-300 hover:text-white transition-all duration-200 shadow-xs hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/17fhyUacNy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tenziaa Dharmapuri on Facebook"
                className="w-9 h-9 rounded-full bg-[#031d15] hover:bg-[#1877F2] border border-emerald-700/50 hover:border-transparent flex items-center justify-center text-emerald-300 hover:text-white transition-all duration-200 shadow-xs hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@tenziaadharmapuri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tenziaa Dharmapuri on YouTube"
                className="w-9 h-9 rounded-full bg-[#031d15] hover:bg-[#FF0000] border border-emerald-700/50 hover:border-transparent flex items-center justify-center text-emerald-300 hover:text-white transition-all duration-200 shadow-xs hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm text-emerald-100/75">
              <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-emerald-300 transition-colors">Home</Link></li>
              <li><a href="/#about" className="hover:text-emerald-300 transition-colors">About Us</a></li>
              <li><a href="/#services-carousel" className="hover:text-emerald-300 transition-colors">Services</a></li>
              <li><a href="/#meet-team" className="hover:text-emerald-300 transition-colors">Our Team</a></li>
              <li><Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-emerald-300 transition-colors font-semibold text-emerald-300">Wellness Blog</Link></li>
              <li><a href="/#consultation" className="hover:text-emerald-300 transition-colors">Consultation</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">
              Contact &amp; Location
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

              {/* Phone, Hours & CTA */}
              <div className="space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <a
                    href="tel:+919363721689"
                    className="inline-flex items-center gap-2 text-white hover:text-emerald-300 font-bold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>+91 93637 21689</span>
                  </a>
                  <div className="flex items-center gap-1.5 text-emerald-200/70 text-xs">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>MON - SUN: 10:00 AM – 7:00 PM</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow cursor-pointer text-center"
                >
                  Book Consultation
                </button>
              </div>

              {/* Map Card & Location */}
              <div className="space-y-2.5">
                <a
                  href="https://maps.app.goo.gl/3tBv2M61P1CFB1rw6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2.5 rounded-lg bg-[#031d15] hover:bg-[#083324] border border-emerald-800/50 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs leading-tight flex-1">
                      <span className="font-semibold text-white block group-hover:text-emerald-300 transition-colors">
                        Dharmapuri Clinic
                      </span>
                      <span className="text-emerald-100/75 line-clamp-2 mt-0.5">
                        10/3, 2nd Flr, Salem Main Rd,near madhura bhai mandapam ,Indhira Nagar ,Dharmapuri, 636705
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  </div>
                </a>

                <div className="w-full h-28 sm:h-32 rounded-lg overflow-hidden border border-emerald-800/60 shadow-inner bg-[#031a13]">
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
        <div className="pt-6 text-xs text-emerald-200/60 space-y-3">
          <p className="leading-relaxed text-xs">
            <strong>Medical Disclaimer:</strong> Tenziaa Wellness Clinic Dharampuri treatments are clinically supervised non-invasive procedures. Individual results and timeframes may vary depending on patient metabolism and adherence to lifestyle protocols.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-emerald-900/60 text-xs">
            <span>© {CURRENT_YEAR} Tenziaa Wellness Clinic Dharampuri . All Rights Reserved.</span>
            <div className="flex flex-col sm:items-end items-center text-xs leading-tight">
              <span className="text-emerald-200/90 font-medium">
                ❤️Crafted by Thamizh Marketing
              </span>
              <a
                href="http://thamizhmarketing.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-colors text-emerald-300/80 underline underline-offset-2 mt-0.5"
              >
                thamizhmarketing.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
