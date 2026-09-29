import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    id: 'v-fit-contour',
    title: 'V-Fit Contour',
    image: '/images/vfit-contour.jpg',
    description: 'Designed for full-body contouring, this treatment tightens skin while reducing fat, giving a toned and sculpted appearance.',
    category: 'Full Body Contouring',
    highlights: ['Deep Dermal Contouring', 'Targeted Waistline Sculpt', 'Zero Downtime'],
  },
  {
    id: 'skin-fusion-rf',
    title: 'Skin Fusion RF Sculpting',
    image: '/images/rf-sculpting.jpg',
    description: 'Uses radiofrequency (RF) technology to tighten loose skin, reduce fat, and enhance collagen production for firmer, youthful-looking skin.',
    category: 'Skin Tightening & Collagen',
    highlights: ['Multi-Polar RF Energy', 'Collagen Remodeling', 'Smoothes Cellulite'],
  },
  {
    id: 'ai-robotic-sonic',
    title: 'AI Robotic Sonic Slim',
    image: '/images/clinic-suite.jpg',
    description: 'A cutting-edge solution that uses AI-powered sonic waves to break down fat cells and enhance body contouring with precision.',
    category: 'AI-Powered Ultrasonic',
    highlights: ['Automated Precision Targeting', 'Acoustic Cavitation', 'Immediate Centimeter Loss'],
  },
  {
    id: 'cryosculpt-360',
    title: 'CryoSculpt 360° Fat Freezing',
    image: '/images/treatment-cryo.jpg',
    description: 'Targeted sub-zero cooling that crystallizes and permanently eliminates stubborn fat cells without affecting surrounding tissue.',
    category: 'Cryolipolysis',
    highlights: ['Permanent Cell Apoptosis', '25-30% Fat Reduction', 'US-FDA Cleared'],
  },
  {
    id: 'emsculpt-neo',
    title: 'EMSculpt Neo Core & Tone',
    image: '/images/wellness-fitness.jpg',
    description: 'Combines synchronized RF heating with HIFEM energy to simultaneously burn fat and build lean muscle tone in 30-minute sessions.',
    category: 'Muscle Definition',
    highlights: ['20,000 Contractions in 30m', '+25% Lean Muscle', '-30% Subcutaneous Fat'],
  },
  {
    id: 'metabolic-drainage',
    title: 'Metabolic Detox & Inch Loss',
    image: '/images/hero-clinic.jpg',
    description: 'Pneumatic lymphatic drainage coupled with doctor-guided metabolic nutrition to eliminate retained fluid and accelerate fat flushing.',
    category: 'Detox & Metabolism',
    highlights: ['De-Bloats & Flushes Toxins', 'Enhances Microcirculation', 'Sustainable Results'],
  },
];

export default function ServicesCarousel({ onSelectService, onOpenBooking }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const timerRef = useRef(null);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, SERVICES.length - itemsPerView);

  // Auto-play timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  return (
    <section id="services-carousel" className="py-16 sm:py-20 bg-gradient-to-b from-white via-emerald-50/25 to-white relative overflow-hidden">
      {/* Decorative light green background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching user image */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-base sm:text-lg font-serif text-slate-700 tracking-wide block mb-2">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Non-Invasive Weight Loss Treatments
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>US-FDA Cleared Technologies • Scientifically Backed Protocols</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative px-0 sm:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrow Left */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 text-slate-800 hover:text-emerald-700 hover:bg-emerald-50 border border-emerald-200/80 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 text-slate-800 hover:text-emerald-700 hover:bg-emerald-50 border border-emerald-200/80 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Sliding Cards Track */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-600 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView + (6 * (itemsPerView - 1)) / (itemsPerView * 10))}%)`,
              }}
            >
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  style={{ flex: `0 0 calc(${100 / itemsPerView}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)` }}
                  className="group bg-white rounded-2xl border border-emerald-100/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
                >
                  {/* Card Image */}
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-900 font-bold text-[11px] shadow-sm uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-center space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-slate-600 text-sm leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="pt-2 border-t border-emerald-50 space-y-1.5 text-xs text-slate-600 text-left">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* READ MORE Button matching user reference */}
                    <div className="pt-4 flex justify-center">
                      <button
                        type="button"
                        onClick={() => {
                          if (onSelectService) {
                            onSelectService(service);
                          } else if (onOpenBooking) {
                            onOpenBooking({ treatment: service.title });
                          }
                        }}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-slate-950 text-white hover:bg-emerald-700 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg group-hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>READ MORE</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Bottom Dots Indicator matching user image */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? 'w-7 h-2.5 bg-emerald-600'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-emerald-300'
                }`}
                aria-label={`Go to slide page ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
