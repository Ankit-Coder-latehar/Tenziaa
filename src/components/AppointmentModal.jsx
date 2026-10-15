import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MapPin } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, initialData = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Dharmapuri - Bharathipuram',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialData?.location) {
      setFormData((prev) => ({ ...prev, location: initialData.location }));
    } else {
      setFormData((prev) => ({ ...prev, location: 'Dharmapuri - Bharathipuram' }));
    }
  }, [initialData]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleResetAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-100 overflow-hidden transform transition-all flex flex-col md:flex-row my-auto max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Column: Visual Banner */}
        <div className="w-full md:w-[46%] bg-[#16432e] text-white relative flex flex-col justify-between overflow-hidden shrink-0 min-h-[300px] md:min-h-[510px]">
          {/* Top T&C label */}
          <span className="absolute top-2.5 right-3 text-[10px] text-white/70 tracking-tight z-10 select-none">
            *T&amp;C Apply
          </span>

          {/* Top Headline & Discount Badge */}
          <div className="pt-6 px-6 sm:px-8 pb-2 z-10">
            {/* Script Cursive Header */}
            <div 
              style={{ fontFamily: "'Great Vibes', cursive" }} 
              className="text-white text-3xl sm:text-4xl font-normal leading-tight tracking-wide drop-shadow-sm"
            >
              Science that
            </div>

            {/* Sans Uppercase Heading */}
            <div className="text-white font-extrabold text-lg sm:text-xl tracking-wider uppercase mt-0.5">
              COOLS FAT AWAY
            </div>

            {/* Offer Metallic Pill */}
            <div className="mt-3.5 inline-flex items-center justify-between w-full max-w-[230px] px-3.5 py-1.5 rounded bg-gradient-to-r from-slate-100 via-white to-slate-200 shadow-md border border-white/50 text-slate-900">
              <div className="flex flex-col text-left leading-none">
                <span className="text-[10px] sm:text-[11px] font-black tracking-tight text-slate-800 uppercase">
                  COOLTECH
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">
                  UPTO
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-none ml-2">
                50% OFF
              </div>
            </div>
          </div>

          {/* Bottom Model Image */}
          <div className="relative w-full flex-1 flex items-end justify-center mt-2 overflow-hidden">
            <img
              src="/images/appointment-model.png"
              alt="Science that Cools Fat Away - Tenziaa Cooltech"
              className="w-full h-[240px] sm:h-[280px] md:h-full object-cover object-top"
              loading="eager"
            />
            {/* Gradient shadow overlay to seamlessly blend top background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#16432e] via-transparent to-transparent h-16 pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Get in Touch Form */}
        <div className="w-full md:w-[54%] bg-white p-6 sm:p-8 md:p-9 flex flex-col justify-center relative overflow-y-auto">
          {/* Close 'X' Button */}
          <button
            type="button"
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-400 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0d2a4a]">
                Thank You!
              </h3>
              <p className="text-slate-600 text-sm max-w-xs mx-auto leading-relaxed">
                Thank you <strong className="text-slate-900">{formData.name}</strong>. We have received your consultation request. Our clinic specialist will contact you shortly at <strong className="text-emerald-700">{formData.phone}</strong>.
              </p>
              {formData.location && (
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-600 max-w-xs mx-auto">
                  <span className="text-slate-400 block mb-0.5">Selected Clinic:</span>
                  <span className="font-semibold text-slate-800">{formData.location}</span>
                </div>
              )}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-8 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-sm cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Form Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0d2a4a] tracking-tight mb-5 sm:mb-6">
                Get in Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="touch-name" className="block text-slate-600 font-medium text-xs sm:text-sm mb-1.5">
                    Name
                  </label>
                  <input
                    id="touch-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 text-slate-800 text-sm sm:text-base focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all bg-white"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="touch-phone" className="block text-slate-600 font-medium text-xs sm:text-sm mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="touch-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 text-slate-800 text-sm sm:text-base focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all bg-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="touch-email" className="block text-slate-600 font-medium text-xs sm:text-sm mb-1.5">
                    Email
                  </label>
                  <input
                    id="touch-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 text-slate-800 text-sm sm:text-base focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all bg-white"
                  />
                </div>

                {/* Location Fixed to Dharmapuri */}
                <div>
                  <label htmlFor="touch-location" className="block text-slate-600 font-medium text-xs sm:text-sm mb-1.5">
                    Location
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="touch-location"
                      type="text"
                      readOnly
                      value={formData.location || 'Dharmapuri - Bharathipuram'}
                      className="w-full px-4 py-2.5 sm:py-3 pr-10 rounded-lg border border-slate-200 text-slate-800 text-sm sm:text-base font-semibold bg-slate-50 select-none cursor-default outline-none shadow-xs"
                    />
                    <MapPin className="w-4 h-4 text-emerald-600 absolute right-3.5" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 sm:py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-base sm:text-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer disabled:opacity-60"
                  >
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
