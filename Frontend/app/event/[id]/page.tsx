'use client'; // Ensure this is a Client Component

import React from 'react';
import { useParams } from 'next/navigation'; // Use useParams from next/navigation
import EventDetails from '../../../src/components/Events/EventDetails';

const EventPage = () => {
  const params = useParams();
  const { id } = params;

  return <EventDetails id={id} />;
};

export default EventPage;
