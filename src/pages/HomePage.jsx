import React from 'react';
import Hero from '../components/Hero';
import WhoAreWe from '../components/WhoAreWe';
import ServicesCarousel from '../components/ServicesCarousel';
import ScheduleConsultation from '../components/ScheduleConsultation';
import MeetOurTeam from '../components/MeetOurTeam';
import FAQ from '../components/FAQ';
import ComplimentaryScanCTA from '../components/ComplimentaryScanCTA';

export default function HomePage({ onOpenBooking, onSelectTreatment }) {
  const handleScrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        onOpenBooking={() => onOpenBooking()}
        onScrollToConsultation={handleScrollToConsultation}
      />

      {/* Who Are We Section */}
      <WhoAreWe />

      {/* Animated Non-Invasive Services Carousel */}
      <ServicesCarousel
        onSelectService={(service) => {
          if (onSelectTreatment) {
            onSelectTreatment({
              title: service.title,
              tag: service.category,
              description: service.description,
              image: service.image,
              duration: '45 mins / session',
              downtime: 'Zero downtime',
              features: service.highlights,
              targetAreas: ['Abdomen', 'Waist', 'Flanks', 'Full Body'],
            });
          }
        }}
        onOpenBooking={onOpenBooking}
      />

      {/* Schedule a Consultation Form & Image Slideshow */}
      <ScheduleConsultation />

      {/* Meet Our Team Section */}
      <MeetOurTeam />

      {/* Complimentary 3D Ultrasound Body Fat Scan Call-to-Action */}
      <ComplimentaryScanCTA onOpenBooking={onOpenBooking} />

      {/* Still Have Medical Questions Support Card */}
      <FAQ onOpenBooking={() => onOpenBooking()} />
    </>
  );
}
