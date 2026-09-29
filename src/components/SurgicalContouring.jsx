import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Clock, Sparkles, Shield, ArrowRight } from 'lucide-react';

const TREATMENTS = [
  {
    id: 'deoxycholic-acid',
    title: 'Deoxycholic Acid Double Chin Reduction',
    tag: 'FDA-Approved Injectable',
    image: '/images/chin-reduction.jpg',
    description:
      'An FDA-approved injectable treatment that dissolves fat under the chin, giving a slimmer and more defined jawline.',
    fullDescription:
      'Deoxycholic acid is a naturally occurring molecule in the body that aids in the breakdown and absorption of dietary fat. When injected precisely into subcutaneous fat beneath the chin, it physically destroys fat cell membranes. Once destroyed, those cells can no longer store or accumulate fat, leaving you with a permanently contoured, elegant jawline.',
    duration: '20 - 30 mins',
    downtime: 'Mild swelling for 2-3 days',
    discomfort: 'Minimal / Local anesthetic',
    safety: 'US-FDA Cleared',
    targetAreas: ['Submental Fullness', 'Double Chin', 'Jawline Contour', 'Jowls'],
    highlights: [
      'Clinically proven US-FDA cleared injectable for submental fat',
      'Permanently destroys fat cells — eliminated cells do not return',
      'No incisions, no stitches, and no general anesthesia required',
      'Customized micro-grid injection protocol for symmetrical definition',
    ],
  },
  {
    id: 'injection-lipolysis',
    title: 'Injection Lipolysis',
    tag: 'Targeted Fat Dissolving',
    image: '/images/injection-lipolysis.jpg',
    description:
      'A targeted fat reduction procedure where fat-dissolving injections are used to break down stubborn fat pockets.',
    fullDescription:
      'Injection Lipolysis is an advanced, non-surgical body sculpting technique where specialized lipolytic formulations are micro-injected directly into localized deposits of resistant adipose tissue. The active agents disrupt adipocyte cell walls, releasing stored triglycerides that are safely and naturally processed out by the liver and lymphatic system.',
    duration: '30 - 45 mins',
    downtime: 'Zero to minimal downtime',
    discomfort: 'Very mild / topical numbing',
    safety: 'CE Medical & Clinical Standard',
    targetAreas: ['Belly Fat', 'Love Handles', 'Bra Bulge', 'Inner & Outer Thighs', 'Upper Arms'],
    highlights: [
      'Micro-targets persistent fat pockets that resist exercise and dieting',
      'Gradual, natural-looking inch loss over 3 to 6 weeks',
      'Simultaneously triggers mild tissue tightening and skin retraction',
      'Quick outpatient session with immediate return to regular activities',
    ],
  },
  {
    id: 'laser-assisted-liposuction',
    title: 'Laser-Assisted Liposuction',
    tag: 'Minimally Invasive Precision',
    image: '/images/laser-liposuction.jpg',
    description:
      'A minimally invasive technique using laser energy to liquefy fat before removal, ensuring precision and faster recovery.',
    fullDescription:
      'Laser-Assisted Liposuction uses targeted optical laser thermal energy delivered through an ultra-thin cannula. The laser energy liquefies stubborn fat cells before gentle removal, while simultaneously coagulating micro-vessels to minimize bruising and stimulating subdermal collagen production for significant immediate and long-term skin contraction.',
    duration: '60 - 90 mins',
    downtime: '2 - 4 days light recovery',
    discomfort: 'Comfortable / Tumescent local',
    safety: 'US-FDA Cleared Technology',
    targetAreas: ['Abdomen & Flanks', 'Waistline & Back', 'Thighs', 'Male Chest (Gynecomastia)'],
    highlights: [
      'Dual-action: Liquefies stubborn fat while tightening overlying skin',
      'Significantly less bruising, swelling, and trauma than traditional lipo',
      'High-definition body contouring and precise waistline sculpting',
      'Performed comfortably under local tumescent anesthesia with fast recovery',
    ],
  },
];

export default function SurgicalContouring({ onOpenBooking }) {
  const [selectedModal, setSelectedModal] = useState(null);
  const cardRefs = useRef([]);

  const scrollToCard = (index) => {
    const card = cardRefs.current[index];
    if (card) {
      const yOffset = -100;
      const y = card.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="minimally-invasive" className="py-16 sm:py-24 bg-white relative overflow-visible">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-base sm:text-lg font-serif text-slate-700 tracking-wide block mb-2.5">
            Tenziaa Clinic Salem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Minimally Invasive Fat Reduction Treatments
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5 max-w-xl mx-auto">
            Targeted clinical procedures designed for precise, permanent fat reduction.
          </p>
        </div>

        {/* Quick Treatment Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {TREATMENTS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToCard(idx)}
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-slate-200 bg-slate-50/70 hover:bg-emerald-50 hover:border-[#84cc16] hover:text-emerald-900 text-slate-700 transition-all cursor-pointer whitespace-nowrap shadow-xs active:scale-95"
            >
              <span className="font-bold text-emerald-600 mr-1.5">0{idx + 1}.</span>
              {item.title}
            </button>
          ))}
        </div>

        {/* Overlapping Stacking Cards Container */}
        <div className="relative pb-16 sm:pb-24">
          {TREATMENTS.map((item, index) => {
            const isLast = index === TREATMENTS.length - 1;

            return (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="sticky will-change-transform transition-shadow duration-300"
                style={{
                  top: `calc(88px + ${index * 18}px)`,
                  zIndex: index + 10,
                  marginBottom: isLast ? '0px' : '44px',
                }}
              >
                {/* The Card container matching the reference screenshot exactly with logo color border */}
                <div className="bg-white rounded-3xl sm:rounded-[32px] border-2 border-[#84cc16] shadow-[0_15px_45px_rgba(0,0,0,0.08),0_2px_10px_rgba(132,204,22,0.15)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.14)] p-5 sm:p-7 md:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 transition-all duration-300 relative">
                  
                  {/* Step counter pill on top right */}
                  <div className="absolute top-4 right-5 sm:top-6 sm:right-7 hidden sm:flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Card 0{index + 1} of 0{TREATMENTS.length}
                    </span>
                  </div>

                  {/* Left: Card Image matching the reference screenshot */}
                  <div className="w-full md:w-[360px] lg:w-[390px] h-48 sm:h-56 md:h-[220px] rounded-2xl sm:rounded-[20px] overflow-hidden shrink-0 bg-slate-100 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Right: Card Content matching the reference screenshot */}
                  <div className="flex-1 flex flex-col justify-center items-start text-left space-y-3 sm:space-y-4 w-full pr-0 sm:pr-8">
                    <div className="flex items-center gap-2 sm:hidden">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        0{index + 1} / 0{TREATMENTS.length}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-900 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-xl">
                      {item.description}
                    </p>

                    <div className="pt-1.5">
                      <button
                        type="button"
                        onClick={() => setSelectedModal(item)}
                        className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-slate-900 text-slate-900 text-sm font-medium tracking-normal hover:bg-slate-900 hover:text-white transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                      >
                        Read More
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Read More Modal */}
      {selectedModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden transform transition-all my-8">
            
            {/* Modal Image Header */}
            <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-900">
              <img
                src={selectedModal.image}
                alt={selectedModal.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

              <button
                type="button"
                onClick={() => setSelectedModal(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md">
                  {selectedModal.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 leading-tight">
                  {selectedModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {selectedModal.fullDescription}
              </p>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-100 text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Session Time</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{selectedModal.duration}</span>
                </div>
                <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-100 text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Downtime</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-800">{selectedModal.downtime}</span>
                </div>
                <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-100 text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Discomfort</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{selectedModal.discomfort}</span>
                </div>
                <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-100 text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Safety Standard</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-800">{selectedModal.safety}</span>
                </div>
              </div>

              {/* Clinical Highlights */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Clinical Advantages &amp; Highlights
                </h4>
                <div className="space-y-2.5">
                  {selectedModal.highlights.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Zones */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Targeted Treatment Areas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedModal.targetAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const treatmentName = selectedModal.title;
                    setSelectedModal(null);
                    onOpenBooking({ treatment: treatmentName });
                  }}
                  className="flex-1 py-3.5 px-6 rounded-full bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow text-center cursor-pointer"
                >
                  Book Consultation for {selectedModal.title}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedModal(null)}
                  className="py-3.5 px-6 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
