import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Dr. Radhika Iyer',
    designation: 'Dermatologist & Client',
    city: 'Mumbai (Bandra West)',
    review: 'As a medical professional, I was naturally skeptical of non-invasive fat loss claims. But after experiencing the CryoSculpt 360° protocol myself at Tenziaa, I was genuinely impressed. I lost 4 inches from my abdomen in just 5 weeks with zero discomfort.',
    rating: 5,
    treatment: 'CryoSculpt 360° Abdomen',
    inches: '-4.2 Inches',
    date: 'Verified 2 weeks ago',
  },
  {
    name: 'Sameer Singhania',
    designation: 'Entrepreneur',
    city: 'Delhi (GK 2)',
    review: 'Between back-to-back board meetings and frequent travel, maintaining my fitness seemed impossible. The EMSculpt Neo sessions at Tenziaa reshaped my core and eliminated my stubborn side flanks without a single day away from work.',
    rating: 5,
    treatment: 'EMSculpt Neo & Laser Lipo',
    inches: '-5.0 Inches',
    date: 'Verified 1 month ago',
  },
  {
    name: 'Meera Chawla',
    designation: 'Fashion Stylist',
    city: 'Bangalore (Indiranagar)',
    review: 'The clinic ambiance is pure serenity — soft light green, sparkling clean, and the doctors are so respectful and scientific. They never pushed unrealistic promises, and delivered exact measurable inch loss.',
    rating: 5,
    treatment: 'UltraContour HIFU & Thigh Sculpt',
    inches: '-3.8 Inches',
    date: 'Verified 3 weeks ago',
  },
  {
    name: 'Kavita Sundaram',
    designation: 'Architect',
    city: 'Pune (Koregaon Park)',
    review: 'I tried crash keto and intense workouts for 2 years without getting rid of my lower abdominal fat pocket. Two CryoSculpt sessions at Tenziaa completely flattened the area. The results are permanent and amazing!',
    rating: 5,
    treatment: 'CryoSculpt 360° Lower Abdomen',
    inches: '-4.6 Inches',
    date: 'Verified 2 months ago',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
            Verified Client Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by 15,000+ Men &amp; Women
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Read authentic experiences from professionals, mothers, and executives who sculpted their bodies at Tenziaa™.
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 bg-white py-2.5 px-6 rounded-full border border-emerald-100 shadow-sm">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-lg">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <span className="text-slate-300">|</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Based on 1,400+ Verified Google &amp; Practo Ratings
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.name}
              className="bg-white rounded-3xl p-8 border border-emerald-100/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-100 group-hover:text-emerald-200 transition-colors pointer-events-none" />

              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    {rev.inches}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed relative z-10 italic">
                  "{rev.review}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 inline" title="Verified Client" />
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {rev.designation} • {rev.city}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                    Treatment: {rev.treatment}
                  </p>
                </div>
                <span className="text-[11px] text-slate-400 self-end">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
