import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Star, Sparkles, CheckCircle2, ArrowRight, Zap, Award, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const SLIDES = [
  {
    image: '/images/clinic-suite.jpg',
    title: 'State-of-the-Art Aesthetic Suites',
    badge: 'Luxury Medical Spa',
    statTop: { label: 'US-FDA Cleared', value: '360° Fat Freezing' },
    statBottom: { label: 'Zero Downtime', value: 'Walk-in, Walk-out' },
  },
  {
    image: '/images/hero-clinic.jpg',
    title: 'Personalized Doctor Consultations',
    badge: 'Senior Aesthetic Physicians',
    statTop: { label: 'Proven Results', value: '15,000+ Clients' },
    statBottom: { label: 'Satisfaction', value: '99.4% Success' },
  },
  {
    image: '/images/treatment-cryo.jpg',
    title: 'Targeted CryoSculpt & Inch Loss',
    badge: 'Precision Cooling Tech',
    statTop: { label: 'Average Result', value: '-4 to 6 Inches Lost' },
    statBottom: { label: 'Target Zones', value: 'Abdomen & Flanks' },
  },
  {
    image: '/images/wellness-fitness.jpg',
    title: 'Measurable Waist & Body Sculpting',
    badge: 'Sustainable Inch Loss',
    statTop: { label: 'Non-Surgical', value: '100% Painless' },
    statBottom: { label: 'Guaranteed Safe', value: 'Zero Needles' },
  },
];

export default function Hero({ onOpenBooking, onScrollToConsultation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }, 4500);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative light green soft glow circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-200/25 blur-3xl rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-100/40 blur-2xl rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Dharmapuri's 1st Exclusive Weight Loss Clinic</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Slim Down. Shape Up.{' '}
              <span className="block mt-2 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
                Without Surgery or Pain.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Smarter body shaping for real results. Tenziaa combines clinically proven technology with doctor-led plans to help you lose inches, tone up, and feel confident <strong className="text-emerald-900 font-semibold"> without a single day off.</strong>.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Non-Invasive, No Incisions</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Quick 45-Minute Visits</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Expert Medical Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Visible Inch Loss</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Comfortable, Pain-Free Care</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Advanced US-FDA Cleared Devices</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-base shadow-lg shadow-emerald-700/20 hover:shadow-xl hover:shadow-emerald-700/30 transition-all duration-200 group cursor-pointer"
              >
                <span>Book Free 3D Body Scan</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onScrollToConsultation}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full border-2 border-emerald-600/30 text-emerald-800 hover:bg-emerald-50 font-semibold text-base transition-colors cursor-pointer"
              >
                <span>Schedule Consultation</span>
              </button>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full ring-2 ring-white bg-emerald-200 flex items-center justify-center font-bold text-xs text-emerald-900">PS</div>
                  <div className="w-9 h-9 rounded-full ring-2 ring-white bg-teal-200 flex items-center justify-center font-bold text-xs text-teal-900">RK</div>
                  <div className="w-9 h-9 rounded-full ring-2 ring-white bg-emerald-300 flex items-center justify-center font-bold text-xs text-emerald-950">AN</div>
                  <div className="w-9 h-9 rounded-full ring-2 ring-white bg-green-200 flex items-center justify-center font-bold text-xs text-green-900">+15k</div>
                </div>
                <div>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1.5 text-xs font-bold text-slate-800">4.9 / 5.0</span>
                  </div>
                  <p className="text-xs text-slate-500">From 1,400+ Verified Patient Reviews</p>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

              <div className="flex items-center gap-2">
                <Award className="w-8 h-8 text-emerald-600" />
                <div>
                  <div className="text-sm font-bold text-slate-900">15,000+</div>
                  <div className="text-xs text-slate-500">Successful Slimming Transformations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Image Slideshow */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative mx-auto max-w-md lg:max-w-none group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-300 to-teal-200 rounded-3xl blur-xl opacity-40"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">

                {/* Slides Container */}
                <div className="relative h-[360px] sm:h-[440px] md:h-[490px] w-full overflow-hidden">
                  {SLIDES.map((slide, index) => {
                    const isActive = index === currentSlide;
                    return (
                      <div
                        key={slide.image}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                          }`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                        />
                        {/* Gradient overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                      </div>
                    );
                  })}

                  {/* Active Slide Dynamic Badge - Top Left with logo color border */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border-2 border-[#84cc16]/70 flex items-center gap-2.5 sm:gap-3 transition-all duration-300 max-w-[200px] sm:max-w-none">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-600/30" />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                        {SLIDES[currentSlide].statTop.label}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight block">
                        {SLIDES[currentSlide].statTop.value}
                      </span>
                    </div>
                  </div>

                  {/* Active Slide Badge - Bottom Right with logo color border */}
                  <div className="absolute bottom-14 right-4 sm:bottom-16 sm:right-5 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border-2 border-[#84cc16]/70 flex items-center gap-2.5 sm:gap-3 transition-all duration-300 max-w-[200px] sm:max-w-none">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-900 block leading-tight">
                        {SLIDES[currentSlide].statBottom.value}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-slate-500">
                        {SLIDES[currentSlide].statBottom.label}
                      </span>
                    </div>
                  </div>

                  {/* Active Slide Caption - Bottom Left */}
                  <div className="hidden sm:block absolute bottom-16 left-5 z-20 bg-emerald-950/85 backdrop-blur-md text-white rounded-xl px-3.5 py-1.5 text-xs font-medium border border-emerald-800/40">
                    <span>🌿 {SLIDES[currentSlide].title}</span>
                  </div>

                  {/* Navigation Arrows (Visible on hover) */}
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-md flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-md flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Bottom Navigation Dots & Progress Bar */}
                  <div className="absolute bottom-4 inset-x-0 z-20 flex items-center justify-center gap-2">
                    {SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => goToSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide
                          ? 'w-8 bg-emerald-400'
                          : 'w-2 bg-white/60 hover:bg-white'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}

                    {/* Pause/Play indicator */}
                    <button
                      type="button"
                      onClick={() => setIsPaused(!isPaused)}
                      className="ml-2 w-6 h-6 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-[10px] transition-colors cursor-pointer"
                      title={isPaused ? 'Play slideshow' : 'Pause slideshow'}
                    >
                      {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3" />}
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
