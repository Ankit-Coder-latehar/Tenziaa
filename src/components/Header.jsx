import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Phone, Calendar, Menu, X, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function Header({ onOpenBooking, onOpenBCA }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services-carousel' },
    { name: 'Treatments', href: '#minimally-invasive' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.href === '/blog') {
      navigate('/blog');
    } else if (link.href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + link.href);
      } else {
        const el = document.querySelector(link.href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* Top Banner with light green tint */}
      <div className="bg-emerald-50/80 border-b border-emerald-100 text-xs py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-800 font-medium flex-wrap">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>Special Offer: BCA Consultation at <span className="line-through text-slate-400 font-semibold">₹500</span> <span className="font-extrabold text-emerald-900">₹350</span> (30% OFF)</span>
            <button
              type="button"
              onClick={() => onOpenBCA ? onOpenBCA() : (onOpenBooking && onOpenBooking({ treatment: 'BCA Consultation & 3D Body Scan' }))}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#84cc16] hover:bg-[#65a30d] text-slate-950 hover:text-white font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow hover:scale-105 active:scale-95 cursor-pointer ml-1 sm:ml-2 shrink-0"
            >
              <span>BCA Consultation</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6 text-emerald-700">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              mon - sun : 10 am - 7pm
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              US-FDA Approved Non-Surgical Tech
            </span>
          </div>
        </div>
      </div>

      {/* Main Header matching user reference */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${isScrolled
          ? 'shadow-md border-b border-emerald-100/70 bg-white/95 backdrop-blur-md py-3'
          : 'border-b border-slate-100 py-4.5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Logo */}
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-shrink-0 group hover:opacity-90 transition-opacity"
            >
              <Logo size="md" />
            </Link>

            {/* Middle: Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-600 hover:after:w-full after:transition-all tracking-wide cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Phone Number & Book Your Appointment Pill Button */}
            <div className="flex items-center gap-4 sm:gap-7">
              {/* Phone number from user reference */}
              <a
                href="tel:+919363721689"
                className="flex items-center gap-2 text-slate-900 hover:text-emerald-700 font-semibold text-base sm:text-lg tracking-tight transition-colors group"
                title="Call Tenziaa Clinic"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-100 transition-colors shrink-0">
                  <Phone className="w-4 h-4 fill-emerald-600/20" />
                </div>
                <span className="hidden sm:inline text-sm md:text-base lg:text-lg">+91 93637 21689</span>
              </a>

              {/* Pill Button from user reference */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-slate-900 text-slate-900 hover:bg-emerald-700 hover:border-emerald-700 hover:text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
              >
                Book Your Appointment
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-emerald-100 px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="tel:+919363721689"
                  className="flex items-center justify-center gap-2 py-2.5 text-slate-900 font-semibold bg-emerald-50 rounded-lg"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  +91 93637 21689
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-full border border-slate-900 text-slate-900 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 font-medium text-sm transition-colors text-center shadow-sm"
                >
                  Book Your Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
