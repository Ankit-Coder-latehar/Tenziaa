import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, Clock, CheckCircle2, ShieldCheck, ArrowRight, User, Phone, Mail } from 'lucide-react';

const ALL_SERVICES = [
  'Weight Management',
  'Inch Loss',
  'Tenziaa Frost',
];

const TODAY_DATE = new Date().toISOString().split('T')[0];
const DEFAULT_APPOINTMENT_DATE = new Date(Date.now() + 86400000).toISOString().split('T')[0];

export default function ScheduleConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Weight Management',
    location: 'Dharmapuri - Bharathipuram',
    date: DEFAULT_APPOINTMENT_DATE,
    time: '11:00 AM - 12:30 PM',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
            Schedule a Consultation
          </h2>
          <div className="pt-2 flex justify-center">
            <div className="w-16 h-1 bg-emerald-600 rounded-full"></div>
          </div>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Book your 1-on-1 assessment with our certified aesthetic physicians and receive a complimentary 3D Body Composition &amp; Fat Scan.
          </p>
        </div>

        {/* 2-Column Container: Form on Left, Image Slideshow on Right */}
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Left Column: Consultation Form (7 cols on lg) */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-12 flex flex-col justify-between">
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
                      <span className="text-slate-500">Name:</span>
                      <span className="font-bold text-slate-900">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Phone:</span>
                      <span className="font-bold text-slate-900">{formData.phone}</span>
                    </div>
                    {formData.email && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Email:</span>
                        <span className="font-bold text-slate-900">{formData.email}</span>
                      </div>
                    )}
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
                      href={`https://wa.me/919363721689?text=Hi%20Tenziaa%20Clinic,%20I%20am%20${encodeURIComponent(formData.name || 'Client')}%20and%20I%20have%20scheduled%20a%20consultation%20for%20${encodeURIComponent(formData.service)}`}
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      PERSONALISED  &amp; WELLNESS CARE
                    </span>
                    <p className="text-xs text-slate-900">
                      Share your details to connect with our team and explore weight management, inch-loss, and body-contouring treatment options tailored to your needs.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white font-medium text-slate-800 transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white font-medium text-slate-800 transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white font-medium text-slate-800 transition-all shadow-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Choose Your Service */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Please Choose a Service *
                    </label>
                    <div className="relative">
                      <Sparkles className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3.5" />
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white font-medium text-slate-800 transition-all cursor-pointer shadow-xs"
                      >
                        {ALL_SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Clinic Location - Fixed to Dharmapuri - Bharathipuram */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Clinic Location
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        readOnly
                        value="Dharmapuri - Bharathipuram"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-emerald-200 bg-emerald-50/70 text-sm font-semibold text-slate-800 cursor-default select-none shadow-xs"
                      />
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
                          min={TODAY_DATE}
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
                          <span>SCHEDULE YOUR APPOINTMENT</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-slate-500 text-center pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Expert Guidance • Individual Assessment • Personalised Options</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Static Clinic Facility Image (5 cols on lg) */}
            <div className="lg:col-span-5 relative bg-slate-900 min-h-[260px] sm:min-h-[340px] lg:min-h-full flex flex-col justify-end overflow-hidden group select-none">
              {/* Static Building Image */}
              <div className="absolute inset-0">
                <img
                  src="/images/tenziaa-clinic-building.png"
                  alt="Tenziaa Wellness & Aesthetic Clinic Dharmapuri Facility"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-black/35"></div>
              </div>

              {/* Bottom Caption */}
              <div className="relative z-20 p-6 sm:p-8 space-y-3">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white space-y-1.5 shadow-lg">
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    Tenziaa Wellness &amp; Aesthetic Clinic
                  </h4>
                  <p className="text-xs text-emerald-100/90 leading-relaxed font-normal flex items-start gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Indhira Nagar, Salem Main Rd, Dharmapuri</span>
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section >
  );
}
