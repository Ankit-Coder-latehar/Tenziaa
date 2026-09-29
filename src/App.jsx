import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoAreWe from './components/WhoAreWe';
import ServicesCarousel from './components/ServicesCarousel';
import SurgicalContouring from './components/SurgicalContouring';
import TestimonialsSlideshow from './components/TestimonialsSlideshow';
import ScheduleConsultation from './components/ScheduleConsultation';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import TreatmentDetailModal from './components/TreatmentDetailModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleOpenBooking = (initialData = null) => {
    setBookingInitialData(initialData);
    setBookingModalOpen(true);
  };

  const handleScrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      {/* Header matching user's image exactly */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToConsultation={handleScrollToConsultation}
        />

        {/* Who Are We Section */}
        <WhoAreWe />

        {/* Animated Non-Invasive Services Carousel matching user reference */}
        <ServicesCarousel
          onSelectService={(service) => {
            setSelectedTreatment({
              title: service.title,
              tag: service.category,
              description: service.description,
              image: service.image,
              duration: '45 mins / session',
              downtime: 'Zero downtime',
              features: service.highlights,
              targetAreas: ['Abdomen', 'Waist', 'Flanks', 'Full Body'],
            });
          }}
          onOpenBooking={handleOpenBooking}
        />

        {/* Surgical Weight Loss & Body Contouring Section matching user reference */}
        <SurgicalContouring onOpenBooking={handleOpenBooking} />

        {/* Customer Testimonials Slideshow matching user reference */}
        <TestimonialsSlideshow />

        {/* Schedule a Consultation Form & Image Slideshow */}
        <ScheduleConsultation />

        {/* Why Choose Tenziaa & 4-Step Patient Journey */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* FAQ Accordion */}
        <FAQ onOpenBooking={() => handleOpenBooking()} />
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
