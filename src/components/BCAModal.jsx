import React, { useState } from 'react';
import {
  X, User, Phone, Calendar, Clock, MapPin, CheckCircle2,
  ArrowRight, Activity, MessageSquare, ShieldCheck, Sparkles
} from 'lucide-react';

export default function BCAModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Dharmapuri - Bharathipuram',
    dateTime: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-8 animate-in fade-in duration-200">

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl sm:rounded-[36px] max-w-4xl w-full shadow-2xl border-2 border-[#84cc16]/50 overflow-hidden my-auto max-h-[94vh] flex flex-col">

        {/* Close button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 z-30 bg-black/40 hover:bg-black/70 text-white p-2 sm:p-2.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-14 text-center space-y-6 my-auto">
            <div className="w-20 h-20 rounded-full bg-[#ecfccb] text-[#4d7c0f] flex items-center justify-center mx-auto border-2 border-[#84cc16] shadow-md animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#65a30d] px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                Booking Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Your T-oet Consultation is Reserved!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our clinical team from Tenziaa Clinic will contact you at <strong className="text-emerald-900 font-bold">{formData.phone}</strong> with your appointment voucher.
              </p>
            </div>

            {/* Summary card */}
            <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-900">T-oet Consultation</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Special Offer Fee:</span>
                <span className="font-extrabold text-emerald-800">₹350 <span className="text-xs font-normal text-slate-400 line-through">₹500</span> (30% OFF)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Clinic Location:</span>
                <span className="font-bold text-slate-900 truncate max-w-[220px]">{formData.location}</span>
              </div>
              {formData.dateTime && (
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Preferred Slot:</span>
                  <span className="font-bold text-slate-900">{formData.dateTime}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/919363721689?text=Hi%20Tenziaa%20Clinic,%20I%20have%20booked%20my%20T-oet%20Consultation%20for%20${encodeURIComponent(formData.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#84cc16] hover:bg-[#65a30d] text-slate-950 hover:text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all text-center"
              >
                Connect on WhatsApp (+91 93637 21689)
              </a>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-3.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1">

            {/* Left Column: White Booking Form */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-center space-y-6 bg-white">

              {/* Header with Activity / Pulse Icon */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#65a30d] uppercase">
                  <Activity className="w-4 h-4 text-[#84cc16]" />
                  <span>Personalised Assessment</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Book Your T-oet Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Enter your details below to reserve your preferred consultation slot with our clinical experts.
                </p>
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name & Phone in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 pr-10 rounded-xl border border-slate-200 focus:border-[#84cc16] focus:ring-2 focus:ring-[#84cc16]/20 text-sm placeholder-slate-400 transition-all outline-none"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone num"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 pr-10 rounded-xl border border-slate-200 focus:border-[#84cc16] focus:ring-2 focus:ring-[#84cc16]/20 text-sm placeholder-slate-400 transition-all outline-none"
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Fixed Clinic Location & Date/Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Clinic Location
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        readOnly
                        value={formData.location}
                        className="w-full px-4 py-2.5 pr-10 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold select-none cursor-default outline-none shadow-xs"
                      />
                      <MapPin className="w-4 h-4 text-[#65a30d] absolute right-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Select Date &amp; Time
                    </label>
                    <div className="relative">
                      <input
                        type="datetime-local"
                        required
                        min={new Date().toISOString().slice(0, 16)}
                        value={formData.dateTime}
                        onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#84cc16] focus:ring-2 focus:ring-[#84cc16]/20 text-xs sm:text-sm bg-white text-slate-800 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-[#84cc16] hover:text-slate-950 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span>Reserving Slot...</span>
                    ) : (
                      <>
                        <span>Book T-oet Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <span className="text-[11px] text-slate-400 font-medium">
                    🔒 Doctor-Supervised &amp; Confidential
                  </span>
                </div>

              </form>

            </div>

            {/* Right Column: Dark Aesthetic Steps matching screenshot */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative overflow-hidden">

              {/* Subtle green ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#84cc16]/10 blur-3xl pointer-events-none"></div>

              <div className="space-y-6 relative z-10">

                {/* Header */}
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#a3e635] uppercase">
                    <Activity className="w-4 h-4 text-[#84cc16]" />
                    <span>How It Works</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    3 Simple Steps to Understand Your Body
                  </h3>
                </div>

                {/* 3 Steps */}
                <div className="space-y-5 pt-2">

                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#84cc16]/40 flex items-center justify-center shrink-0 text-[#a3e635] shadow-xs">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">1. Book Your T-oet Consultation</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Enter your details and select your preferred date and time to book your T-oet Consultation.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#84cc16]/40 flex items-center justify-center shrink-0 text-[#a3e635] shadow-xs">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">2. Confirm Your Visit</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Our team will get in touch with you to confirm your appointment and explain what to expect during the assessment.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#84cc16]/40 flex items-center justify-center shrink-0 text-[#a3e635] shadow-xs">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">3. Understand Your Body Better</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Visit Tenziaa for your BCA test and get insights into your body fat, muscle mass, metabolic health, and more, followed by personalised guidance based on your goals.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Clinical Trust Badge */}


            </div>

          </div>
        )}

      </div>

    </div>
  );
}
