import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ onOpenBooking }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      
      {/* Quick Phone Call Pill */}
      <a
        href="tel:+919363721689"
        className="hidden sm:flex items-center gap-2 bg-white text-slate-900 px-4 py-2.5 rounded-full shadow-lg border border-emerald-200 hover:border-emerald-500 hover:text-emerald-700 transition-all duration-200 text-xs font-bold group"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Call: +91 93637 21689</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919363721689?text=Hi%20Tenziaa,%20I%20would%20like%20to%20know%20more%20about%20slimming%20and%20body%20contouring%20treatments."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 font-bold text-sm hover:scale-105 active:scale-95 group cursor-pointer"
        title="Chat with Clinic Coordinator"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
}
