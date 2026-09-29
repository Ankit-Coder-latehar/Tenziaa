import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Sparkles } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Priya Venkatesh',
    role: 'Verified Client',
    location: 'Salem',
    rating: 5,
    treatment: 'V-Fit Contour & RF',
    result: '-4.5 Inches Lost',
    date: 'Verified 2 weeks ago',
    review: 'I was struggling with post-pregnancy tummy fat for over 3 years. The V-Fit Contour and RF treatments at Tenziaa Clinic Salem reshaped my waistline completely. I lost 4.5 inches in 6 weeks with zero downtime and absolutely no pain!',
  },
  {
    id: 2,
    name: 'Karthik Ramanathan',
    role: 'Software Architect',
    location: 'Salem',
    rating: 5,
    treatment: 'AI Robotic Sonic Slim',
    result: '-8.2 kg Weight Loss',
    date: 'Verified 3 weeks ago',
    review: 'Being a busy professional, I didn’t have hours for daily gym workouts. Tenziaa Clinic’s AI Robotic Sonic Slim and CryoSculpt melted my stubborn love handles. The team and doctors here are exceptionally warm and scientific.',
  },
  {
    id: 3,
    name: 'Deepa Sundaram',
    role: 'Educator',
    location: 'Salem',
    rating: 5,
    treatment: 'Skin Fusion RF Sculpting',
    result: 'Firm & Sculpted Skin',
    date: 'Verified 1 month ago',
    review: 'The clinic ambiance is so serene with its soothing green and white theme. I felt thoroughly pampered during my skin tightening sessions. My loose abdominal skin is noticeably firmer and my confidence is fully restored!',
  },
  {
    id: 4,
    name: 'Rajeshwari Murugan',
    role: 'Entrepreneur',
    location: 'Salem',
    rating: 5,
    treatment: 'Personalised Slimming Plan',
    result: '-5.0 Inches Waistline',
    date: 'Verified 1 month ago',
    review: 'Zero side effects, just as promised! The personalized diet guidance and non-surgical contouring helped me reduce 5 inches from my hips and abdomen. The staff is polite and very attentive to every question.',
  },
  {
    id: 5,
    name: 'Dr. Anitha Subramaniam',
    role: 'Medical Practitioner',
    location: 'Salem',
    rating: 5,
    treatment: 'CryoSculpt 360°',
    result: '-3.8 Inches Off Flanks',
    date: 'Verified 2 months ago',
    review: 'As a medical doctor, safety and clinical evidence come first for me. Tenziaa uses genuine US-FDA cleared technologies. The centimeter-by-centimeter reduction is tracked with medical precision. Outstanding experience!',
  },
  {
    id: 6,
    name: 'Vignesh Kumar',
    role: 'Business Owner',
    location: 'Salem',
    rating: 5,
    treatment: 'Metabolic Detox Protocol',
    result: '-11.0 kg Overall Loss',
    date: 'Verified 2 months ago',
    review: 'I lost 11 kg in 2 months with their combination plan. No crash diets, no harsh pills, just pure science-backed treatments and deeply caring doctors. Tenziaa Clinic has changed my lifestyle for the better.',
  },
];

export default function TestimonialsSlideshow() {
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

  const maxIndex = Math.max(0, REVIEWS.length - itemsPerView);

  // Auto-play timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4200);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="customer-testimonials" className="py-20 bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden border-b border-emerald-100/70">
      {/* Decorative soft emerald background glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-100/35 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-50/60 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row matching user's reference image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-16">
          
          {/* Left: Smiling Woman in Namaste pose with mandala */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-emerald-50 flex items-center justify-center">
              <img
                src="/images/testimonials-woman.jpg"
                alt="Happy Tenziaa Clinic client in namaste pose"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent"></div>
            </div>
          </div>

          {/* Middle: Title & Signature Underline */}
          <div className="md:col-span-6 space-y-2 text-center md:text-left">
            <span className="text-base sm:text-lg font-serif text-slate-700 tracking-wide block">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What They’re Saying
            </h2>
            <div className="pt-2 flex justify-center md:justify-start">
              <div className="w-16 h-1 bg-[#E11D48] rounded-full"></div>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 pt-1">
              Real stories from our valued clients at Tenziaa Clinic Salem
            </p>
          </div>

          {/* Right: Big Aesthetic Quote Mark from reference */}
          <div className="md:col-span-2 hidden md:flex justify-end items-start text-slate-900">
            <Quote className="w-16 h-16 text-slate-900 fill-slate-900" />
          </div>

        </div>

        {/* Carousel Container */}
        <div
          className="relative px-2 sm:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Arrow Left */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-800 hover:text-emerald-700 hover:bg-emerald-50 border border-emerald-200/80 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer -ml-2 sm:-ml-4"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Arrow Right */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-800 hover:text-emerald-700 hover:bg-emerald-50 border border-emerald-200/80 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer -mr-2 sm:-mr-4"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Sliding Track */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-600 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView + (6 * (itemsPerView - 1)) / (itemsPerView * 10))}%)`,
              }}
            >
              {REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  style={{ flex: `0 0 calc(${100 / itemsPerView}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)` }}
                  className="group bg-white rounded-3xl p-7 border border-emerald-100/90 shadow-sm hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden"
                >
                  {/* Subtle Top Green Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="space-y-4">
                    {/* Stars & Tag */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        {rev.result}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-700 text-sm leading-relaxed italic font-normal">
                      "{rev.review}"
                    </p>
                  </div>

                  {/* Customer Information Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center justify-center border border-emerald-200">
                        {rev.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                          {rev.name}
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                        </h4>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {rev.role} • {rev.location}
                        </p>
                        <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">
                          {rev.treatment}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400">{rev.date}</span>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Bottom Dots Indicator */}
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
                aria-label={`Go to review page ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
