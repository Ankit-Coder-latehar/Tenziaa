import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Sparkles } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Monoj Kumar',
    role: 'Verified Client',
    location: 'Salem',
    rating: 5,
    treatment: 'V-Fit Contour & RF',
    result: '-4.5 Inches Lost',
    date: 'Verified 2 weeks ago',
    review: 'The biggest challenge we faced was that our happiest customers were often the quietest. Tenzia has given them a voice. It’s a seamless, non-intrusive way to prompt our clients for their honest feedback, and the response rate has been incredible. Seeing the steady flow of genuine stories from our clients has not only boosted our online ranking but also boosted our teams morale. It’s an elegant solution that focuses on what matters most—the actual experience of the customer. If you want to build a brand based on real trust, Tenzia is the tool to use',
  },
  {
    id: 2,
    name: 'Narasimman N',
    role: 'Client',
    location: 'Chennai',
    rating: 5,
    treatment: 'AI Robotic Sonic Slim',
    result: '-8.2 kg Weight Loss',
    date: 'Verified 3 weeks ago',
    review: 'I’m extremely satisfied with the results from Tenziaa Wellness.',
  },
  {
    id: 3,
    name: 'Arun Kumar',
    role: 'Client',
    location: 'Salem',
    rating: 5,
    treatment: 'Skin Fusion RF Sculpting',
    result: 'Firm & Sculpted Skin',
    date: 'Verified 1 month ago',
    review: 'My experience with Tenziaa Wellness has been excellent. From the first consultation, I felt comfortable and confident in their approach. The treatments, diet guidance, and regular follow-ups helped me achieve visible fat loss and better energy levels.',
  },
  {
    id: 4,
    name: 'Anthony',
    role: 'Client',
    location: 'Salem',
    rating: 5,
    treatment: 'Personalised Slimming Plan',
    result: '-5.0 Inches Waistline',
    date: 'Verified 1 month ago',
    review: 'I recently completed six sessions of EM Sculpt at Tenziaa Wellness and Aesthetic Clinic over a three-month period, and I am very pleased with the outcome. From the first few sessions, I could feel my muscles working deeply, and gradually I noticed better toning and improved strength in my body.',
  },
  {
    id: 5,
    name: 'Sakthi Vel',
    role: 'Client',
    location: 'Salem',
    rating: 5,
    treatment: 'CryoSculpt 360°',
    result: '-3.8 Inches Off Flanks',
    date: 'Verified 2 months ago',
    review: 'I had a very good experience at Tenziaa Wellness. The team is friendly, supportive, and professional throughout the weight loss journey. The personalized diet guidance and wellness sessions helped me achieve noticeable fat loss and improved my overall confidence.',
  },
  {
    id: 6,
    name: 'Mathi',
    role: 'Client',
    location: 'Salem',
    rating: 5,
    treatment: 'Metabolic Detox Protocol',
    result: '-11.0 kg Overall Loss',
    date: 'Verified 2 months ago',
    review: 'I had a very positive experience with Tenziaa Wellness and Aesthetic Clinic for my weight loss and fat loss journey. The team was supportive, professional, and guided me with the right treatments and lifestyle advice throughout the process.'
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
    <section id="customer-testimonials" className="py-16 sm:py-20 bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden border-b border-emerald-100/70">
      {/* Decorative soft emerald background glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-100/35 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-50/60 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header Row matching user's reference image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-12 sm:mb-16">

          {/* Left: Smiling Woman in Namaste pose with mandala */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-emerald-50 flex items-center justify-center">
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
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
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
          className="relative px-0 sm:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Arrow Left */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-800 hover:text-emerald-700 hover:bg-emerald-50 border border-emerald-200/80 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Arrow Right */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-800 hover:text-emerald-700 hover:bg-emerald-50 border border-emerald-200/80 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
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
                className={`transition-all duration-300 rounded-full cursor-pointer ${idx === currentIndex
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
