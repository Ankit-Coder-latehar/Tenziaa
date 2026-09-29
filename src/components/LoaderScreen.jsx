import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, HeartPulse, Award } from 'lucide-react';

const STATUS_MESSAGES = [
  'Initializing Clinical Precision...',
  'Calibrating FDA-Cleared Contouring Tech...',
  'Preparing Your Transformation Experience...',
  'Welcome to Tenziaa Clinic',
];

export default function LoaderScreen({ minDuration = 1800, onFinish }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Lock body scroll while loader is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Smoothly increment progress
  useEffect(() => {
    const startTime = performance.now();
    let animationFrameId;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      // Ease out progress calculation
      const rawProgress = Math.min(100, Math.floor((elapsed / minDuration) * 100));

      setProgress(rawProgress);

      if (rawProgress < 30) {
        setStatusIndex(0);
      } else if (rawProgress < 65) {
        setStatusIndex(1);
      } else if (rawProgress < 95) {
        setStatusIndex(2);
      } else {
        setStatusIndex(3);
      }

      if (elapsed < minDuration) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setStatusIndex(3);
        // Small pause at 100% before triggering cinematic exit
        setTimeout(() => {
          setIsExiting(true);
          // Wait for fade transition duration (700ms) before completely unmounting
          setTimeout(() => {
            setIsComplete(true);
            if (onFinish) onFinish();
          }, 700);
        }, 350);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, [minDuration, onFinish]);

  const handleSkip = () => {
    setProgress(100);
    setIsExiting(true);
    setTimeout(() => {
      setIsComplete(true);
      if (onFinish) onFinish();
    }, 400);
  };

  if (isComplete) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-[#080d05] text-white select-none transition-all duration-700 ease-in-out ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Loading Tenziaa Clinic Website"
    >
      {/* Ambient Radial Glowing Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-center Lime Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-[#84cc16]/20 via-[#4d7c0f]/10 to-transparent rounded-full blur-[120px] animate-pulse pointer-events-none" />
        {/* Bottom subtle Emerald Glow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-[#84cc16]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, #bef264 1px, transparent 0)`,
            backgroundSize: '36px 36px' 
          }} 
        />
      </div>

      {/* Top Header info with Skip button */}
      <div className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-slate-400">
          <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-ping" />
          <span className="text-[#a3e635]">Tenziaa Aesthetic Clinic</span>
        </div>

        <button
          type="button"
          onClick={handleSkip}
          className="text-xs uppercase tracking-wider text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 transition-all cursor-pointer backdrop-blur-sm"
        >
          Skip
        </button>
      </div>

      {/* Main Center Section: Logo, Pulsing Halo, Counter, Status */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 -mt-6">
        
        {/* Glowing Logo Container */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Subtle Outer Halo Ring */}
          <div className="absolute inset-0 -m-6 rounded-full border border-[#84cc16]/20 animate-spin" style={{ animationDuration: '18s' }} />
          <div className="absolute inset-0 -m-3 rounded-full border border-dashed border-[#bef264]/30 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
          
          {/* Ambient center spotlight behind logo */}
          <div className="absolute w-36 h-36 bg-[#84cc16]/25 rounded-full blur-2xl" />

          {/* Logo Card */}
          <div className="relative z-10 p-5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <img
              src="/images/tenziaa-logo-dark.png"
              alt="Tenziaa Logo"
              className="h-12 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-8">
          <h2 className="text-sm sm:text-base font-medium tracking-[0.25em] text-slate-200 uppercase font-sans">
            Slimming &amp; Aesthetic Excellence
          </h2>
          <p className="text-xs text-slate-400 tracking-wider mt-1.5 font-light">
            Salem &bull; Dharmapuri &bull; Tamil Nadu
          </p>
        </div>

        {/* Dynamic Progress Bar & Percentage */}
        <div className="w-72 sm:w-96 flex flex-col items-center">
          
          {/* Percentage Counter and Status Row */}
          <div className="w-full flex items-baseline justify-between mb-2.5 px-0.5">
            <span className="text-xs sm:text-sm font-medium text-slate-300 transition-opacity duration-300">
              {STATUS_MESSAGES[statusIndex]}
            </span>
            <span className="font-mono text-base sm:text-lg font-bold text-[#a3e635] tracking-tight">
              {progress}%
            </span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden p-[1px] backdrop-blur-sm border border-white/5 relative">
            <div
              className="h-full bg-gradient-to-r from-emerald-600 via-[#84cc16] to-[#a3e635] rounded-full transition-all duration-150 ease-out shadow-[0_0_16px_rgba(132,204,22,0.8)] relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer sweep effect */}
              <div 
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Features / Clinical Trust Badges */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-white/10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#84cc16] shrink-0" />
            <span className="font-light">US-FDA Cleared Tech</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-400">
            <Award className="w-4 h-4 text-[#84cc16] shrink-0" />
            <span className="font-light">Certified Clinicians</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-400">
            <Sparkles className="w-4 h-4 text-[#84cc16] shrink-0" />
            <span className="font-light">10k+ Patient Smiles</span>
          </div>
        </div>
      </div>

    </div>
  );
}
