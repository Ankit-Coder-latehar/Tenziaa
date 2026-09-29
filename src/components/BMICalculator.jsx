import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, Activity, Target, Check } from 'lucide-react';

export default function BMICalculator({ onOpenBooking }) {
  const [gender, setGender] = useState('female');
  const [height, setHeight] = useState(165); // cm
  const [weight, setWeight] = useState(74); // kg
  const [targetArea, setTargetArea] = useState('Belly & Love Handles');

  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  // Determine category & recommendations
  const getBmiDetails = () => {
    const val = parseFloat(bmi);
    if (val < 18.5) {
      return {
        category: 'Underweight',
        color: 'text-amber-600 bg-amber-50 border-amber-200',
        advice: 'Focus on healthy nutritional density and muscle sculpting rather than fat loss.',
        recommended: 'Metabolic & Muscle Sculpting',
        inchPotential: '1 - 2 inches contouring',
      };
    } else if (val < 25) {
      return {
        category: 'Healthy Weight (Ideal for Spot Sculpting)',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        advice: 'You have a healthy BMI! Perfect candidate for precision fat freezing on stubborn areas that diet cannot burn.',
        recommended: 'CryoSculpt 360° & EMSculpt Neo',
        inchPotential: '2 - 4 inches targeted loss',
      };
    } else if (val < 30) {
      return {
        category: 'Overweight (Optimal for CryoSculpt)',
        color: 'text-emerald-800 bg-emerald-100 border-emerald-300',
        advice: 'Excellent candidate for our dual action: non-invasive fat cell destruction + metabolic acceleration.',
        recommended: 'CryoSculpt 360° + UltraContour HIFU',
        inchPotential: '3 - 6 inches overall reduction',
      };
    } else {
      return {
        category: 'Elevated Body Mass (Full Protocol)',
        color: 'text-emerald-900 bg-emerald-100 border-emerald-400',
        advice: 'Our complete doctor-guided metabolic reset combined with lymphatic drainage and cryolipolysis offers transformative results.',
        recommended: 'Tenziaa 360° Complete Transformation Plan',
        inchPotential: '5 - 9 inches systemic inch loss',
      };
    }
  };

  const details = getBmiDetails();

  const targetAreas = [
    'Belly & Love Handles',
    'Thighs & Saddlebags',
    'Upper Arms & Bra Fat',
    'Double Chin & Neck',
    'Full Body Slimming',
  ];

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-white via-emerald-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Assessment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Body Mass &amp; Expected Inch Loss
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            See your body composition analysis in 10 seconds and discover the exact non-surgical protocol best suited for your body.
          </p>
        </div>

        {/* Calculator Interactive Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Input Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-7 border-b lg:border-b-0 lg:border-r border-slate-100">
              
              {/* Gender Selection */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                  1. Select Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      gender === 'female'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/20'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>👩 Female</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      gender === 'male'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/20'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>👨 Male</span>
                  </button>
                </div>
              </div>

              {/* Height Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    2. Height
                  </label>
                  <span className="text-base font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100">
                    {height} cm <span className="text-xs text-slate-500 font-normal">({(height / 30.48).toFixed(1)} ft)</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="130"
                  max="215"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>130 cm</span>
                  <span>170 cm</span>
                  <span>215 cm</span>
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    3. Current Weight
                  </label>
                  <span className="text-base font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100">
                    {weight} kg <span className="text-xs text-slate-500 font-normal">({(weight * 2.20462).toFixed(1)} lbs)</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>40 kg</span>
                  <span>80 kg</span>
                  <span>150 kg</span>
                </div>
              </div>

              {/* Target Area */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                  4. Primary Area of Concern
                </label>
                <div className="flex flex-wrap gap-2">
                  {targetAreas.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setTargetArea(area)}
                      className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-medium border transition-all cursor-pointer ${
                        targetArea === area
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm'
                          : 'border-slate-200 text-slate-700 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Output & Recommendations Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/40 p-6 sm:p-10 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Your Body Score</span>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="text-5xl font-extrabold text-slate-900">{bmi}</span>
                    <span className="text-sm font-semibold text-slate-500">BMI (kg/m²)</span>
                  </div>
                  <div className={`mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${details.color}`}>
                    <Activity className="w-3.5 h-3.5" />
                    <span>{details.category}</span>
                  </div>
                </div>

                <div className="bg-white p-4.5 rounded-2xl border border-emerald-100 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    <Target className="w-4 h-4 text-emerald-600" />
                    <span>Projected Result for {targetArea}</span>
                  </div>
                  <p className="text-xl font-extrabold text-slate-900">
                    {details.inchPotential}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {details.advice}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Recommended Tenziaa™ Protocol:
                  </span>
                  <div className="p-3.5 bg-emerald-100/60 rounded-xl border border-emerald-200 text-sm font-semibold text-emerald-950 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{details.recommended}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onOpenBooking({ bmi, targetArea, recommended: details.recommended })}
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Claim Free Custom Plan &amp; Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  🔒 100% confidential. No spam guarantee.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
