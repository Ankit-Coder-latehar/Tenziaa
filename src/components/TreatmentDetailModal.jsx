import React from 'react';
import { X, Check, Clock, Shield, Flame, Zap, Layers, Sparkles, HeartPulse } from 'lucide-react';

export default function TreatmentDetailModal({ treatment, onClose, onBookTreatment }) {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-emerald-100 overflow-hidden transform transition-all my-auto max-h-[92vh] flex flex-col">
        
        {/* Header Image & Close Button */}
        <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-900 shrink-0">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md">
              {treatment.tag}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mt-1.5 leading-tight">
              {treatment.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 space-y-5 overflow-y-auto flex-1">
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {treatment.description}
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-center">
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Session Time</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">{treatment.duration}</span>
            </div>
            <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-center">
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Downtime</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-800">{treatment.downtime}</span>
            </div>
            <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-center">
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Discomfort</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">Zero / Painless</span>
            </div>
            <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-center">
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Safety</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-800">US-FDA Cleared</span>
            </div>
          </div>

          {/* Clinical Features List */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Clinical Mechanism &amp; Highlights
            </h4>
            <div className="space-y-2.5">
              {treatment.features.map((feat, idx) => (
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
              Effective On:
            </h4>
            <div className="flex flex-wrap gap-2">
              {treatment.targetAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookTreatment(treatment.title);
              }}
              className="flex-1 py-3.5 px-6 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow text-center cursor-pointer"
            >
              Book {treatment.title}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3.5 px-6 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
