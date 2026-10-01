import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    image: '/images/hero-clinic.jpg',
    description: 'Doctor-supervised, personalized clinical weight loss programs combining metabolic calibration and lifestyle guidance for sustainable fat reduction.',
    category: 'Weight Loss',
    highlights: ['Doctor-Supervised Protocol', 'Metabolic Rate Optimization', 'Sustainable Fat Reduction'],
  },
  {
    id: 'ayurvedic-kizhi-therapy',
    title: 'Ayurvedic Kizhi Therapy',
    image: '/images/ayurvedic-kizhi.jpg',
    description: 'Traditional warm herbal bolus (Potli) therapy infused with medicinal oils to alleviate stiffness, flush lymphatic toxins, and tone tissues.',
    category: 'Ayurvedic Wellness',
    highlights: ['Warm Herbal Potli Massage', 'Deep Detox & Fluid Flushing', 'Improves Blood Circulation'],
  },
  {
    id: 'advanced-cryo-treatment',
    title: 'Advanced Cryo Treatment',
    image: '/images/treatment-cryo.jpg',
    description: 'Targeted sub-zero cooling that crystallizes and permanently eliminates stubborn fat cells naturally with zero surgery or downtime.',
    category: 'Cryolipolysis',
    highlights: ['US-FDA Cleared Technology', 'Permanent Fat Cell Apoptosis', 'Non-Invasive & Zero Downtime'],
  },
  {
    id: 'inch-loss',
    title: 'Inch Loss',
    image: '/images/rf-sculpting.jpg',
    description: 'Targeted spot fat reduction protocols designed to trim circumference across waist, belly, thighs, and flanks for visible centimetre loss.',
    category: 'Targeted Slimming',
    highlights: ['Targeted Waist & Thigh Trim', 'Immediate Measurable Loss', 'Improves Skin Tightness'],
  },
  {
    id: 'figure-correction',
    title: 'Figure Correction',
    image: '/images/abdominoplasty.jpg',
    description: 'Comprehensive aesthetic body reshaping that aligns natural proportions, sculpts curves, and restores balanced silhouette contours.',
    category: 'Body Contouring',
    highlights: ['Proportion & Curve Sculpting', 'Custom Aesthetic Mapping', 'Enhanced Body Silhouette'],
  },
  {
    id: 'body-toning',
    title: 'Body Toning',
    image: '/images/wellness-fitness.jpg',
    description: 'High-intensity electromagnetic and acoustic stimulation to firm lax skin, define core muscles, and sculpt smooth contours.',
    category: 'Muscle & Tone',
    highlights: ['Firms Loose & Sagging Skin', 'Builds Lean Muscle Definition', 'Smooths Cellulite Dimples'],
  },
  {
    id: 'fairness-treatment',
    title: 'Fairness Treatment',
    image: '/images/cooltech-model.jpg',
    description: 'Advanced dermatological brightening and pigment-correcting therapies that even skin tone, restore luminous glow, and reverse tanning.',
    category: 'Skin Radiance',
    highlights: ['Melanin Pigment Balancing', 'Luminous Complexion Glow', 'Safe & Dermatologist-Guided'],
  },
  {
    id: 'anti-ageing-treatment',
    title: 'Anti-ageing Treatment',
    image: '/images/testimonials-woman.jpg',
    description: 'Collagen-boosting therapies that lift sagging dermal layers, restore natural elasticity, and revitalize youthful facial vitality.',
    category: 'Age Reversal',
    highlights: ['Deep Collagen Stimulation', 'Firms Sagging Skin Laxity', 'Youthful Natural Radiance'],
  },
  {
    id: 'deep-scar-removal',
    title: 'Deep Scar Removal',
    image: '/images/deep-scar-removal.jpg',
    description: 'Clinical fractional laser and micro-resurfacing treatments that smooth stubborn acne scars, surgical marks, and textural irregularities.',
    category: 'Skin Correction',
    highlights: ['Fractional Laser Resurfacing', 'Minimizes Acne & Tissue Scars', 'Promotes Healthy Skin Renewal'],
  },
  {
    id: 'under-eye-dark-circle',
    title: 'Under Eye Dark Circle',
    image: '/images/under-eye.jpg',
    description: 'Specialized periorbital micro-infusion and lymphatic drainage to alleviate pigmentation, reduce puffiness, and brighten tired eyes.',
    category: 'Eye Contour Care',
    highlights: ['Reduces Pigment & Hollows', 'Diminishes Under-Eye Bags', 'Refreshes Tired Looking Eyes'],
  },
  {
    id: 'wrinkles-treatment',
    title: 'Wrinkles Treatment',
    image: '/images/chin-reduction.jpg',
    description: 'Targeted line-smoothing technologies that soften forehead creases, crow’s feet, and smile lines for naturally supple, rejuvenated skin.',
    category: 'Skin Smoothing',
    highlights: ['Softens Fine Lines & Creases', 'Boosts Elastin Production', 'Smooth & Supple Texture'],
  },
  {
    id: 'hair-transplant',
    title: 'Hair Transplant',
    image: '/images/hair-transplant.jpg',
    description: 'Precision Follicular Unit Extraction (FUE) graft relocation delivering natural hairline reconstruction and permanent hair density.',
    category: 'Hair Restoration',
    highlights: ['Modern FUE Micro-Grafts', 'Permanent Natural Hairline', 'High Density & Fast Healing'],
  },
  {
    id: 'hair-regrowth',
    title: 'Hair Regrowth',
    image: '/images/clinic-suite.jpg',
    description: 'Doctor-administered PRP, growth factor concentrate, and mesotherapy to awaken dormant follicles and arrest active thinning.',
    category: 'Trichology',
    highlights: ['Stimulates Dormant Follicles', 'Arrests Active Hair Fall', 'Thickens Thinning Strands'],
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
            Specialized Slimming, Skin &amp; Hair Treatments
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Doctor-Supervised • US-FDA Cleared Technologies • Scientifically Proven</span>
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
                transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${itemsPerView}))`,
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

          {/* Bottom Dots & Counter Indicator */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-1.5 flex-wrap justify-center max-w-full">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentIndex
                      ? 'w-7 h-2.5 bg-emerald-600'
                      : 'w-2 h-2 bg-slate-300 hover:bg-emerald-300'
                  }`}
                  aria-label={`Go to slide page ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
              Showing {currentIndex + 1}–{Math.min(currentIndex + itemsPerView, SERVICES.length)} of {SERVICES.length} Services
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
