import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function AppointmentModal({ isOpen, onClose, initialData = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Free 3D Body Scan & Doctor Consultation',
    clinicLocation: 'Mumbai - Bandra West Clinic',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '11:00 AM - 12:00 PM',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      if (initialData.treatment) {
        setFormData((prev) => ({ ...prev, treatment: initialData.treatment }));
      }
      if (initialData.recommended) {
        setFormData((prev) => ({
          ...prev,
          treatment: initialData.recommended,
          notes: `Calculated BMI: ${initialData.bmi || 'N/A'}, Target Area: ${initialData.targetArea || 'General'}`,
        }));
      }
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-emerald-100 overflow-hidden transform transition-all">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 p-6 text-white relative">
          <button
            type="button"
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold tracking-wider uppercase text-emerald-200">
              Zero Obligation
            </span>
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight">
            Book Your Tenziaa™ Appointment
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">
            Includes complimentary 3D Ultrasound Body Fat Scan &amp; Consultation
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">
                Appointment Requested!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you <strong className="text-slate-900">{formData.name}</strong>. Our senior clinic coordinator from Tenziaa will call you shortly at <strong className="text-emerald-800">{formData.phone}</strong> to confirm your slot.
              </p>

              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 text-left text-xs space-y-1.5 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-slate-900">{formData.treatment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Clinic Center:</span>
                  <span className="font-bold text-slate-900">{formData.clinicLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date &amp; Time:</span>
                  <span className="font-bold text-slate-900">{formData.date} ({formData.timeSlot})</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/917030034567?text=Hi%20Tenziaa,%20I%20just%20booked%20an%20appointment%20for%20${encodeURIComponent(formData.treatment)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors text-center"
                >
                  Send WhatsApp Confirmation
                </a>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    placeholder="priya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Interested Treatment / Consultation
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                >
                  <option value="Free 3D Body Scan & Doctor Consultation">Free 3D Body Scan &amp; Doctor Consultation</option>
                  <option value="CryoSculpt 360° Fat Freezing">CryoSculpt 360° Fat Freezing (Permanent Apoptosis)</option>
                  <option value="UltraContour HIFU Skin Tightening">UltraContour HIFU Skin Tightening</option>
                  <option value="EMSculpt Neo Muscle & Fat Dual-Action">EMSculpt Neo Muscle &amp; Fat Dual-Action</option>
                  <option value="Laser Lipo-Refinement Protocol">Laser Lipo-Refinement Protocol</option>
                  <option value="Medical Lymphatic Drainage & Detox">Medical Lymphatic Drainage &amp; Detox</option>
                  <option value="Doctor-Guided Metabolic & Nutrition Reset">Doctor-Guided Metabolic &amp; Nutrition Reset</option>
                </select>
              </div>

              {/* Clinic Location */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Preferred Clinic Branch
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    value={formData.clinicLocation}
                    onChange={(e) => setFormData({ ...formData, clinicLocation: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                  >
                    <option value="Mumbai - Bandra West Clinic">Mumbai — Bandra West (Waterfield Rd)</option>
                    <option value="Mumbai - South Mumbai (Nariman Point)">Mumbai — South Mumbai (Nariman Point)</option>
                    <option value="Delhi NCR - Greater Kailash 2">Delhi NCR — Greater Kailash 2</option>
                    <option value="Bangalore - Indiranagar">Bangalore — Indiranagar (100 Ft Rd)</option>
                    <option value="Pune - Koregaon Park">Pune — Koregaon Park</option>
                    <option value="Virtual Video Consultation (Doctor Online)">Virtual Video Consultation (Doctor Online)</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                  >
                    <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM (Morning)</option>
                    <option value="11:30 AM - 01:00 PM">11:30 AM - 01:00 PM (Mid-day)</option>
                    <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM (Afternoon)</option>
                    <option value="04:30 PM - 06:30 PM">04:30 PM - 06:30 PM (Evening)</option>
                    <option value="07:00 PM - 08:30 PM">07:00 PM - 08:30 PM (Late Slot)</option>
                  </select>
                </div>
              </div>

              {/* Direct helpline reminder */}
              <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 flex items-center justify-between text-xs text-emerald-900">
                <span>Direct Helpline: <strong className="text-emerald-950 font-bold">+91 7030034567</strong></span>
                <span className="text-[11px] text-emerald-700">Immediate Phone Assistance</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span>Reserving Slot...</span>
                ) : (
                  <>
                    <span>Confirm &amp; Reserve Free Appointment</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero cancellation fees. Your details are safe with us.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
