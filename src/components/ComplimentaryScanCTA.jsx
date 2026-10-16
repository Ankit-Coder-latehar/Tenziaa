import React from 'react';

export default function ComplimentaryScanCTA({ onOpenBooking, onExploreTreatments }) {
  const handleExplore = () => {
    if (onExploreTreatments) {
      onExploreTreatments();
    } else {
      const el = document.getElementById('services-carousel');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-white rounded-3xl border-2 border-[#84cc16] p-8 sm:p-12 shadow-lg">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
            Ready to Begin Your Slimming Journey?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Schedule Your Complimentary 3D Ultrasound Body Fat Scan
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            Meet with our aesthetic physicians in Salem and discover the custom non-invasive treatment protocol engineered for your body goals.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => (onOpenBooking ? onOpenBooking({ treatment: '3D Ultrasound Body Fat Scan' }) : null)}
              className="px-8 py-4 rounded-full bg-[#84cc16] hover:bg-[#a3e635] text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-105 cursor-pointer"
            >
              Book Free 3D Body Scan
            </button>
            <button
              type="button"
              onClick={handleExplore}
              className="px-6 py-4 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Explore All Treatments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
