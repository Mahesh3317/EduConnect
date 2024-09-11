'use client';

import 'react-calendar/dist/Calendar.css';
import Navbar from "../Homepage/Navbar";
import { useEffect, useState } from "react";
import './Calendar.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Footer from "../Homepage/Footer";

export default function EventByCalendar(){

    const [eventsData, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/events');
            if (!response.ok) {
              throw new Error('Error fetching events');
            }
            const data = await response.json();
            // sortedEvent(data);
          
            setEvents(data);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchEvents();

      }, []);

      const event = eventsData.map(e=>({
        title: e.title,
        start: e.startDate,
        end: e.endDate
      }));
      console.log(event);

      function renderEventContent(eventInfo) {
        return (
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        )
      }

    return(
      <div>
        <Navbar/>
      <h1>Event Calendar</h1>
  
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={event}
        eventContent={renderEventContent}
      />
     <Footer/>
    </div>
    )
}