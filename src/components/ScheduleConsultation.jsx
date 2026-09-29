import React, { useState, useEffect, useRef } from 'react';
import { User, Phone, Mail, Sparkles, MapPin, Calendar, Clock, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';

const CONSULTATION_SLIDES = [
  {
    image: '/images/hero-clinic.jpg',
    title: 'Expert Doctor Consultation',
    subtitle: '1-on-1 personalized body composition assessment',
    tag: 'Senior Aesthetic Physician',
  },
  {
    image: '/images/clinic-suite.jpg',
    title: 'World-Class Contouring Suite',
    subtitle: 'Relaxing luxury ambiance with zero pain or downtime',
    tag: 'US-FDA Cleared Tech',
  },
  {
    image: '/images/rf-sculpting.jpg',
    title: 'Advanced Skin Fusion RF',
    subtitle: 'Skin tightening and deep collagen remodeling',
    tag: 'Non-Surgical Precision',
  },
  {
    image: '/images/vfit-contour.jpg',
    title: 'V-Fit Body Transformation',
    subtitle: 'Targeted centimeter inch loss across problem zones',
    tag: 'Guaranteed Results',
  },
  {
    image: '/images/treatment-cryo.jpg',
    title: 'CryoSculpt 360° Fat Freezing',
    subtitle: 'Permanent fat cell crystallization and elimination',
    tag: 'Apoptosis Technology',
  },
];

const ALL_SERVICES = [
  'V-Fit Contour',
  'Skin Fusion RF Sculpting',
  'AI Robotic Sonic Slim',
  'CryoSculpt 360° Fat Freezing',
  'EMSculpt Neo Core & Tone',
  'Calf Muscle Reduction',
  'Bariatric Surgery & Consultation',
  'Abdominoplasty (Tummy Tuck)',
  'Body Lift Surgery',
  'Liposuction Contouring',
  'Metabolic Detox & Inch Loss',
  'Complimentary 3D Body Fat Scan',
];

const CLINIC_LOCATIONS = [
  'Salem — Main Clinic (Near New Bus Stand)',
  'Chennai — Alwarpet Clinic',
  'Coimbatore — Race Course Rd',
  'Bangalore — Indiranagar',
  'Mumbai — Bandra West',
  'Pune — Koregaon Park',
  'Virtual Video Consultation (Online Doctor)',
];

export default function ScheduleConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'V-Fit Contour',
    location: 'Salem — Main Clinic (Near New Bus Stand)',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '11:00 AM - 12:30 PM',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Slideshow State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      slideTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % CONSULTATION_SLIDES.length);
      }, 4000);
    }
    return () => clearInterval(slideTimerRef.current);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CONSULTATION_SLIDES.length) % CONSULTATION_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CONSULTATION_SLIDES.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="consultation" className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden border-b border-emerald-100/80">
      {/* Decorative Light Green Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-base sm:text-lg font-serif text-slate-700 tracking-wide block mb-2">
            Take The First Step
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Schedule a Free Consultation
          </h2>
          <div className="pt-2 flex justify-center">
            <div className="w-16 h-1 bg-[#E11D48] rounded-full"></div>
          </div>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Book your 1-on-1 assessment with our certified aesthetic physicians and receive a complimentary 3D Body Composition &amp; Fat Scan.
          </p>
        </div>

        {/* 2-Column Container: Form on Left, Image Slideshow on Right */}
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Consultation Form (7 cols on lg) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-5">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Consultation Scheduled!
                  </h3>
                  
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you <strong className="text-slate-900">{formData.name}</strong>. Our senior clinical coordinator from Tenziaa Clinic will contact you shortly at <strong className="text-emerald-800">{formData.phone}</strong> to confirm your appointment.
                  </p>

                  <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-100 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-bold text-slate-900">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Center:</span>
                      <span className="font-bold text-slate-900">{formData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Date &amp; Time:</span>
                      <span className="font-bold text-slate-900">{formData.date} ({formData.time})</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/917030034567?text=Hi%20Tenziaa%20Clinic,%20I%20have%20scheduled%20a%20consultation%20for%20${encodeURIComponent(formData.service)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all text-center"
                    >
                      Connect on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      Quick &amp; Confidential
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Reserve Your Assessment
                    </h3>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Radhika Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="radhika@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Please Choose an Option of All Services */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Please Choose a Service *
                    </label>
                    <div className="relative">
                      <Sparkles className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white font-medium text-slate-800 transition-all"
                      >
                        {ALL_SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location Selector */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Select Clinic Location *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white font-medium text-slate-800 transition-all"
                      >
                        {CLINIC_LOCATIONS.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Preferred Time Slot
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-800"
                        >
                          <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM (Morning)</option>
                          <option value="11:30 AM - 01:00 PM">11:30 AM - 01:00 PM (Mid-day)</option>
                          <option value="02:00 PM - 03:30 PM">02:00 PM - 03:30 PM (Afternoon)</option>
                          <option value="04:00 PM - 05:30 PM">04:00 PM - 05:30 PM (Evening)</option>
                          <option value="06:00 PM - 07:30 PM">06:00 PM - 07:30 PM (Late Slot)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Schedule Free Consultation Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Free 3D Scan Included • 100% Confidential • Zero Commitment</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Image Slideshow (5 cols on lg) */}
            <div
              className="lg:col-span-5 relative bg-slate-900 min-h-[380px] lg:min-h-full flex flex-col justify-between overflow-hidden group select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides */}
              {CONSULTATION_SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <div
                    key={slide.image}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20"></div>
                  </div>
                );
              })}

              {/* Top Tag Badge */}
              <div className="relative z-20 p-6 flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white font-bold text-[11px] uppercase tracking-wider shadow">
                  {CONSULTATION_SLIDES[currentSlide].tag}
                </span>
                <span className="text-[11px] text-white/80 font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                  {currentSlide + 1} / {CONSULTATION_SLIDES.length}
                </span>
              </div>

              {/* Bottom Caption & Controls */}
              <div className="relative z-20 p-6 sm:p-8 space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white space-y-1">
                  <h4 className="text-xl font-extrabold text-white">
                    {CONSULTATION_SLIDES[currentSlide].title}
                  </h4>
                  <p className="text-xs text-emerald-100/90 leading-relaxed font-normal">
                    {CONSULTATION_SLIDES[currentSlide].subtitle}
                  </p>
                </div>

                {/* Arrow navigation & dots */}
                <div className="flex items-center justify-between pt-1">
                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {CONSULTATION_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === currentSlide
                            ? 'w-7 bg-emerald-400'
                            : 'w-2 bg-white/50 hover:bg-white'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Left & Right Arrow Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5" />
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
