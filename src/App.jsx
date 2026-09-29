import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import BCAModal from './components/BCAModal';
import TreatmentDetailModal from './components/TreatmentDetailModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bcaModalOpen, setBcaModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleOpenBooking = (initialData = null) => {
    setBookingInitialData(initialData);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 flex flex-col overflow-x-hidden w-full">
      {/* Header with route navigation & BCA popup opener */}
      <Header 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenBCA={() => setBcaModalOpen(true)}
      />

      {/* Main Content: Routes for Separate Pages */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                onSelectTreatment={setSelectedTreatment}
                onOpenBCA={() => setBcaModalOpen(true)}
              />
            }
          />
          <Route
            path="/blog"
            element={
              <BlogPage
                onOpenBooking={() => handleOpenBooking()}
              />
            }
          />
          <Route
            path="*"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                onSelectTreatment={setSelectedTreatment}
                onOpenBCA={() => setBcaModalOpen(true)}
              />
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating WhatsApp and Quick Call */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
      />

      {/* Special Offer Body Composition Analysis (BCA) Modal matching reference */}
      <BCAModal
        isOpen={bcaModalOpen}
        onClose={() => setBcaModalOpen(false)}
      />

      {/* Treatment Technical Details Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookTreatment={(treatmentName) => {
          setSelectedTreatment(null);
          handleOpenBooking({ treatment: treatmentName });
        }}
      />
    </div>
  );
}
