'use client';  // Mark this component as a client component

import { useSearchParams } from 'next/navigation';
import EventRegistrationForm from '../../src/components/Events/EventRegistrationForm';

const EventRegistrationPage = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('eventId'); // Extract eventId from URL search params

  if (!eventId) {
    return <p>Loading...</p>; // Add a loading state
  }

  return (
    <div>
      <h1>Register for Event: {eventId}</h1>
      <EventRegistrationForm eventId={eventId} />
    </div>
  );
};

export default EventRegistrationPage;
