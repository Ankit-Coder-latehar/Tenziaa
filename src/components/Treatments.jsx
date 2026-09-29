import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, Shield, Zap, Layers, Flame, HeartPulse } from 'lucide-react';

export const TREATMENTS_DATA = [
  {
    id: 'cryosculpt',
    title: 'CryoSculpt 360° Fat Freezing',
    category: 'fat-reduction',
    tag: 'Most Popular',
    description: 'Targeted sub-zero cooling that crystallizes and permanently eliminates stubborn fat cells without affecting surrounding tissue.',
    duration: '45 mins / session',
    downtime: 'Zero downtime',
    painLevel: 'Painless / Mild cooling sensation',
    results: '25% - 30% fat reduction in targeted zone',
    targetAreas: ['Abdomen', 'Love Handles', 'Flanks', 'Inner & Outer Thighs', 'Double Chin'],
    icon: Flame,
    popular: true,
    image: '/images/treatment-cryo.jpg',
    features: [
      'US-FDA Cleared 360° Surround Cooling Technology',
      'Naturally metabolized and eliminated by lymphatic system',
      'Permanent fat cell destruction — they do not return',
      'Noticeable inch loss within 3-4 weeks',
    ],
  },
  {
    id: 'hifu-contour',
    title: 'UltraContour HIFU Skin Tightening',
    category: 'skin-tightening',
    tag: 'Advanced Tightening',
    description: 'High-intensity focused ultrasound penetrates deep SMAS layers to stimulate rapid collagen regeneration and firm sagging skin.',
    duration: '50 mins / session',
    downtime: 'Zero downtime',
    painLevel: 'Warm soothing sensation',
    results: 'Firm, sculpted skin with marked elasticity restoration',
    targetAreas: ['Post-pregnancy Tummy', 'Batwing Arms', 'Crepey Neck', 'Gluteal fold'],
    icon: Layers,
    popular: false,
    image: '/images/wellness-fitness.jpg',
    features: [
      'Non-surgical facelift and body skin contraction',
      'Triggers neo-collagenesis deep within dermis',
      'Smoothes cellulite dimples and loose folds',
      'Results improve continuously over 90 days',
    ],
  },
  {
    id: 'emsculpt-neo',
    title: 'EMSculpt Neo Muscle & Fat Dual-Action',
    category: 'muscle-toning',
    tag: 'Muscle & Tone',
    description: 'Combines synchronized Radiofrequency heating with High-Intensity Electromagnetic (HIFEM) energy to simultaneously burn fat and build lean muscle.',
    duration: '30 mins / session',
    downtime: 'Zero downtime',
    painLevel: 'Feels like an intensive core workout',
    results: '+25% Muscle Mass & -30% Fat Reduction',
    targetAreas: ['Abdominal 6-Pack', 'Buttocks Lift', 'Biceps & Triceps', 'Calves'],
    icon: Zap,
    popular: true,
    image: '/images/hero-clinic.jpg',
    features: [
      'Equivalent to 20,000 sit-ups or squats in 30 minutes',
      'Supramaximal contractions impossible through normal gym workouts',
      'Visible athletic definition and postural alignment',
      'Great for men & women desiring defined tone',
    ],
  },
  {
    id: 'laser-lipo',
    title: 'Laser Lipo-Refinement Protocol',
    category: 'fat-reduction',
    tag: 'Precision Inch Loss',
    description: 'Low-level cold diode lasers perforate adipocyte cell membranes, releasing intracellular triglycerides into lymphatic circulation for quick inch reduction.',
    duration: '40 mins / session',
    downtime: 'Zero downtime',
    painLevel: 'Completely painless & relaxing',
    results: 'Instant 1 to 2.5 inches loss post-session',
    targetAreas: ['Waistline', 'Muffin Top', 'Upper Thighs', 'Back Fat'],
    icon: Sparkles,
    popular: false,
    image: '/images/treatment-cryo.jpg',
    features: [
      'Immediate measurement reduction right after session',
      'Stimulates cellular metabolism and microcirculation',
      'Completely non-invasive with zero bruising',
      'Ideal for quick events and occasion prep',
    ],
  },
  {
    id: 'lymphatic-detox',
    title: 'Medical Lymphatic Drainage & Detox',
    category: 'holistic',
    tag: 'Cellulite & Detox',
    description: 'Sequential gradient compression therapy coupled with botanical transdermal wraps to flush stagnant fluid, toxins, and banish stubborn water retention.',
    duration: '45 mins / session',
    downtime: 'Zero downtime',
    painLevel: 'Relaxing therapeutic massage feel',
    results: 'Total body de-bloating, reduced water weight & light legs',
    targetAreas: ['Full Body', 'Lower Limbs', 'Abdomen', 'Hips'],
    icon: HeartPulse,
    popular: false,
    image: '/images/wellness-fitness.jpg',
    features: [
      'Accelerates waste clearance after fat freeze procedures',
      'Dramatically reduces fluid retention & morning puffiness',
      'Enhances vascular circulation and deep cellular energy',
      'Leaves client feeling revitalized and refreshed',
    ],
  },
  {
    id: 'metabolic-reset',
    title: 'Doctor-Guided Metabolic & Nutrition Reset',
    category: 'holistic',
    tag: 'Long-Term Health',
    description: 'Personalized clinical nutrition and hormonal metabolic balancing supervised by certified doctors to ensure fat loss is permanent and healthy.',
    duration: 'Weekly consultations',
    downtime: 'None',
    painLevel: 'Zero',
    results: 'Sustainable anti-yo-yo weight loss',
    targetAreas: ['Internal Visceral Fat', 'Overall Body Weight', 'Metabolism'],
    icon: Shield,
    popular: false,
    image: '/images/hero-clinic.jpg',
    features: [
      'Detailed blood panel and hormonal metabolic analysis',
      'Customized Indian & Continental sustainable meal plans',
      'No starvation or fad diets — scientifically balanced macros',
      'Weekly progress tracking with Senior Dietitians',
    ],
  },
];

export default function Treatments({ onSelectTreatment, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'fat-reduction', label: 'Fat Freezing & Inch Loss' },
    { id: 'skin-tightening', label: 'Skin Tightening' },
    { id: 'muscle-toning', label: 'Muscle Sculpting' },
    { id: 'holistic', label: 'Detox & Metabolism' },
  ];

  const filteredTreatments = activeCategory === 'all'
    ? TREATMENTS_DATA
    : TREATMENTS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="treatments" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Medical Aesthetic Procedures
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Advanced Non-Surgical Slimming Treatments
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Scientifically proven, FDA-cleared technologies delivering surgical-grade fat reduction and contouring without knives, scars, or downtime.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                  : 'bg-emerald-50/70 text-slate-700 hover:bg-emerald-100 hover:text-emerald-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => {
            const Icon = treatment.icon;
            return (
              <div
                key={treatment.id}
                className="bg-white rounded-3xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Image Header with Badge */}
                <div className="relative h-48 overflow-hidden bg-emerald-50">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-emerald-900 font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {treatment.tag}
                  </span>

                  {/* Duration Tag */}
                  <span className="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-1.5 drop-shadow">
                    <Clock className="w-3.5 h-3.5 text-emerald-300" />
                    {treatment.duration}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <strong className="text-slate-900">Result:</strong> {treatment.results}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <strong className="text-slate-900">Target:</strong> {treatment.targetAreas.slice(0, 3).join(', ')}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectTreatment(treatment)}
                      className="flex-1 py-2.5 px-4 rounded-xl border border-emerald-600/30 text-emerald-800 hover:bg-emerald-50 text-xs font-bold transition-colors cursor-pointer text-center"
                    >
                      Details &amp; Science
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenBooking({ treatment: treatment.title })}
                      className="py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
                    >
                      Book Session
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-emerald-800 to-teal-800 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-2xl font-bold">Unsure which treatment suits your body type?</h4>
            <p className="mt-1 text-emerald-100 text-sm">
              Our Senior Aesthetic Physicians provide complimentary 3D Body Composition mapping and personalized guidance.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="shrink-0 px-6 py-3.5 rounded-full bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            Schedule Free Doctor Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
