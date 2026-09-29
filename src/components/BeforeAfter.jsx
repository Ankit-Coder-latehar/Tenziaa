import React, { useState } from 'react';
import { Award, ArrowRight, CheckCircle2, TrendingDown, Star } from 'lucide-react';

const STORIES = [
  {
    name: 'Pooja Sharma',
    age: 34,
    city: 'Mumbai',
    treatment: 'CryoSculpt 360° + UltraContour',
    duration: '6 Weeks',
    loss: '5.2 Inches off Waist',
    weightLoss: '-9.5 kg',
    quote: 'After having my baby, nothing seemed to work on my lower tummy pouch. Within 6 weeks of non-invasive sessions at Tenziaa, my pre-pregnancy jeans fit comfortably again with zero downtime!',
    category: 'Abdomen & Waist',
    metrics: [
      { label: 'Waistline', before: '36.5"', after: '31.3"' },
      { label: 'Body Fat', before: '32.4%', after: '25.1%' },
      { label: 'Sessions', before: '0', after: '4 Sessions' },
    ],
  },
  {
    name: 'Vikram Malhotra',
    age: 42,
    city: 'Delhi NCR',
    treatment: 'EMSculpt Neo + Laser Lipo',
    duration: '4 Weeks',
    loss: '4.8 Inches off Flanks',
    weightLoss: '-7.2 kg',
    quote: 'As a corporate executive, I had zero time for 2-hour gym routines. The 30-min lunch break sessions melted my stubborn love handles and gave visible abdominal core definition.',
    category: 'Love Handles & Core',
    metrics: [
      { label: 'Flank Measure', before: '39.0"', after: '34.2"' },
      { label: 'Visceral Fat', before: 'Level 12', after: 'Level 8' },
      { label: 'Sessions', before: '0', after: '4 Sessions' },
    ],
  },
  {
    name: 'Ananya Deshmukh',
    age: 28,
    city: 'Pune',
    treatment: 'CryoSculpt 360° Thigh & Hip Protocol',
    duration: '8 Weeks',
    loss: '3.6 Inches off Thighs',
    weightLoss: '-6.0 kg',
    quote: 'I was self-conscious about saddlebags and cellulite on my outer thighs. Tenziaa customized a targeted freeze treatment that completely smoothed my silhouette. 100% painless!',
    category: 'Thighs & Hips',
    metrics: [
      { label: 'Thigh Girth', before: '24.8"', after: '21.2"' },
      { label: 'Cellulite Grade', before: 'Grade 3', after: 'Grade 1' },
      { label: 'Sessions', before: '0', after: '3 Sessions' },
    ],
  },
];

export default function BeforeAfter({ onOpenBooking }) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const activeStory = STORIES[activeStoryIndex];

  return (
    <section id="results" className="py-20 bg-emerald-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            Documented Clinical Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Transformations, Zero Surgery
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Over 15,000 clients have redefined their silhouettes with Tenziaa™. Every measurement is scientifically tracked through 3D ultrasound scanning.
          </p>
        </div>

        {/* Story Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {STORIES.map((story, idx) => (
            <button
              key={story.name}
              type="button"
              onClick={() => setActiveStoryIndex(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeStoryIndex === idx
                  ? 'bg-white text-emerald-900 shadow-md ring-2 ring-emerald-600'
                  : 'bg-white/70 text-slate-600 hover:bg-white'
              }`}
            >
              <span>{story.name}</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                {story.loss}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Case Study Card */}
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative bg-slate-900 min-h-[320px] lg:min-h-full flex items-center justify-center p-6 overflow-hidden">
              <img
                src="/images/wellness-fitness.jpg"
                alt="Transformation result"
                className="absolute inset-0 w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/30 to-black/40"></div>

              {/* Floating Stat Overlay */}
              <div className="relative z-10 w-full space-y-3">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-emerald-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Target Achieved</span>
                    <span className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <TrendingDown className="w-3.5 h-3.5 mr-1" />
                      {activeStory.duration}
                    </span>
                  </div>
                  <div className="mt-2 text-2xl font-black text-slate-900">{activeStory.loss}</div>
                  <div className="text-xs font-semibold text-emerald-700 mt-0.5">Overall Weight: {activeStory.weightLoss}</div>
                </div>

                <div className="bg-emerald-900/90 text-white backdrop-blur-md rounded-xl p-3 text-xs flex items-center justify-between">
                  <span>Treatment Protocol:</span>
                  <span className="font-bold text-emerald-200">{activeStory.treatment}</span>
                </div>
              </div>
            </div>

            {/* Narrative & Metrics Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">{activeStory.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Age {activeStory.age} • {activeStory.city} • Focus: {activeStory.category}
                    </p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Patient Quote */}
                <div className="mt-6 bg-emerald-50/60 border-l-4 border-emerald-600 p-4 rounded-r-2xl">
                  <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
                    "{activeStory.quote}"
                  </p>
                </div>

                {/* Verified Before/After Metrics Table */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Verified Ultrasound &amp; Measurement Log
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {activeStory.metrics.map((metric) => (
                      <div key={metric.label} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                        <span className="text-[11px] text-slate-500 block">{metric.label}</span>
                        <div className="mt-1 flex items-center justify-center gap-1.5 text-xs font-medium">
                          <span className="line-through text-slate-400">{metric.before}</span>
                          <span className="text-emerald-700 font-bold">{metric.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Clinical proof certified by Senior Medical Director</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow cursor-pointer"
                >
                  Start Your Transformation
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
