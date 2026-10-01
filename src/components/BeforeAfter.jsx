import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const TRANSFORMATIONS = [
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    subtitle: '12-week weight management program',
    beforeImage: '/images/transform-weight-before.jpg',
    afterImage: '/images/transform-weight-after.jpg',
  },
  {
    id: 'skin-care',
    title: 'Skin Care',
    subtitle: '8-week skin rejuvenation treatment',
    beforeImage: '/images/transform-skin-before.jpg',
    afterImage: '/images/transform-skin-after.jpg',
  },
  {
    id: 'hair-care',
    title: 'Hair Care',
    subtitle: '4-month hair restoration program',
    beforeImage: '/images/transform-hair-before.jpg',
    afterImage: '/images/transform-hair-after.jpg',
  },
];

export default function BeforeAfter({ onOpenBooking }) {
  return (
    <section id="transformations" className="py-16 sm:py-20 bg-[#fbfdfb] relative border-b border-emerald-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching user reference */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-2 text-[#0f392b]">
            {/* Custom down arrow with bar icon matching screenshot */}
            <svg
              className="w-6 h-6 text-[#15803d]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16" />
              <path d="M12 4v13" />
              <path d="m18 11-6 6-6-6" />
            </svg>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0f392b] tracking-tight">
              Real Transformations
            </h2>
          </div>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            See the amazing results our clients have achieved with our wellness programs. These before and after images showcase the effectiveness of our treatments.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRANSFORMATIONS.map((item) => (
            <div
              key={item.id}
              className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 flex flex-col group"
            >
              {/* Dark Top Header Bar */}
              <div className="p-5 sm:p-6 bg-[#1e293b] text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 font-normal">
                  {item.subtitle}
                </p>
              </div>

              {/* Side-by-side Before and After Images */}
              <div className="grid grid-cols-2 gap-0 relative bg-slate-900/10">
                {/* Before Image */}
                <div className="relative h-72 sm:h-80 md:h-[340px] overflow-hidden border-r border-slate-700/40">
                  <img
                    src={item.beforeImage}
                    alt={`${item.title} Before Treatment`}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#15803d] text-white text-xs font-bold shadow-md">
                      <ArrowDown className="w-3.5 h-3.5 stroke-[2.8]" />
                      <span>Before</span>
                    </span>
                  </div>
                </div>

                {/* After Image */}
                <div className="relative h-72 sm:h-80 md:h-[340px] overflow-hidden">
                  <img
                    src={item.afterImage}
                    alt={`${item.title} After Treatment`}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#15803d] text-white text-xs font-bold shadow-md">
                      <ArrowUp className="w-3.5 h-3.5 stroke-[2.8]" />
                      <span>After</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
