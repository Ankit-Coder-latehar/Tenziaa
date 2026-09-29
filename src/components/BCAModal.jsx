import React, { useState } from 'react';
import { 
  X, User, Phone, Calendar, Clock, MapPin, CheckCircle2, 
  ArrowRight, Activity, MessageSquare, ShieldCheck, Sparkles 
} from 'lucide-react';

const BRANCHES_BY_STATE = {
  'Tamil Nadu': [
    'Dharmapuri Main Branch (Near Bus Stand)',
    'Salem Main Clinic (Near New Bus Stand)',
    'Chennai — Alwarpet Clinic',
    'Coimbatore — Race Course Rd',
  ],
  'Karnataka': [
    'Bangalore — Indiranagar 100ft Rd',
    'Bangalore — Koramangala',
  ],
  'Maharashtra': [
    'Mumbai — Bandra West (Waterfield Rd)',
    'Pune — Koregaon Park',
  ],
  'Online / Virtual': [
    'Virtual Video BCA Doctor Consultation',
  ]
};

export default function BCAModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: 'Tamil Nadu',
    branch: 'Dharmapuri Main Branch (Near Bus Stand)',
    dateTime: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    const branches = BRANCHES_BY_STATE[selectedState] || [];
    setFormData({
      ...formData,
      state: selectedState,
      branch: branches[0] || '',
    });
  };

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

  const branches = BRANCHES_BY_STATE[formData.state] || [];

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
                Your BCA Consultation is Reserved!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our clinical team from Tenziaa Clinic will contact you at <strong className="text-emerald-900 font-bold">{formData.phone}</strong> with your appointment voucher.
              </p>
            </div>

            {/* Summary card */}
            <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-900">Body Composition Analysis (BCA)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Special Offer Fee:</span>
                <span className="font-extrabold text-emerald-800">₹210 <span className="text-xs font-normal text-slate-400 line-through">₹300</span> (30% OFF)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Center Branch:</span>
                <span className="font-bold text-slate-900 truncate max-w-[220px]">{formData.branch}</span>
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
                href={`https://wa.me/919363721689?text=Hi%20Tenziaa%20Clinic,%20I%20have%20booked%20my%20BCA%20Consultation%20for%20${encodeURIComponent(formData.branch)}`}
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
            
            {/* Left Column: White Booking Form matching image */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-between space-y-5 bg-white">
              
              {/* Header with Activity / Pulse Icon */}
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#65a30d] uppercase">
                  <Activity className="w-4 h-4 text-[#84cc16]" />
                  <span>Book Your Body Composition Analysis</span>
                </div>
              </div>

              {/* Limited Time Offer Price Box matching screenshot */}
              <div className="relative rounded-2xl border-2 border-[#84cc16] bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/40 p-4 sm:p-5 shadow-xs">
                {/* Limited Time Offer Badge */}
                <div className="absolute top-2.5 right-2.5">
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-extrabold text-[10px] tracking-wide uppercase shadow-sm">
                    Limited Time Offer
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">
                    Body Composition Analysis Fee
                  </span>

                  <div className="flex items-center gap-2.5">
                    <span className="text-slate-400 text-base line-through font-semibold">
                      ₹300
                    </span>
                    <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      ₹210
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#84cc16] text-slate-950 font-extrabold text-xs shadow-xs">
                      30% OFF
                    </span>
                  </div>

                  <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1 pt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span>
                    Only few slots left today
                  </p>
                </div>
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Phone in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 pr-10 rounded-xl border border-slate-200 focus:border-[#84cc16] focus:ring-2 focus:ring-[#84cc16]/20 text-sm placeholder-slate-400 transition-all outline-none"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="Enter Your Phone Num"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 pr-10 rounded-xl border border-slate-200 focus:border-[#84cc16] focus:ring-2 focus:ring-[#84cc16]/20 text-sm placeholder-slate-400 transition-all outline-none"
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* State & Branch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Select State
                    </label>
                    <select
                      value={formData.state}
                      onChange={handleStateChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#84cc16] focus:ring-2 focus:ring-[#84cc16]/20 text-xs sm:text-sm bg-white text-slate-800 outline-none cursor-pointer"
                    >
                      {Object.keys(BRANCHES_BY_STATE).map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Select Branch
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#84cc16] focus:ring-2 focus:ring-[#84cc16]/20 text-xs sm:text-sm bg-white text-slate-800 outline-none cursor-pointer"
                    >
                      {branches.map((br) => (
                        <option key={br} value={br}>{br}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
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

                {/* Action button matching screenshot */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-[#84cc16] hover:text-slate-950 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span>Reserving Slot...</span>
                    ) : (
                      <>
                        <span>Book Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
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
                    <span>Booking Process</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    Simple Steps To Know Your Body
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
                      <h4 className="text-sm font-bold text-white">Book Your BCA Test</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Fill in your details, choose your preferred branch and time slot to schedule your Body Composition Analysis consultation.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#84cc16]/40 flex items-center justify-center shrink-0 text-[#a3e635] shadow-xs">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Confirm Your Appointment</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Our team will contact you to confirm your booking and guide you through the BCA testing procedure.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#84cc16]/40 flex items-center justify-center shrink-0 text-[#a3e635] shadow-xs">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Get Your Personalized Health Insights</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Visit the clinic for your Body Composition Analysis, understand your fat, muscle, and metabolic score, and receive expert guidance tailored to your goals.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Clinical Trust Badge */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-2.5 text-[11px] text-slate-300">
                <Sparkles className="w-4 h-4 text-[#84cc16]" />
                <span>US-FDA Cleared 3D Ultrasound Technology • 15,000+ Analyzed</span>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}
