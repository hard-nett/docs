'use client';

import { useState } from 'react';
import { CalendarHeader } from './calendar-header';
import { CalendarEventList } from './calendar-event-list';
import { CalendarAppointmentBooking } from './calendar-appointment-booking';

export function ConnectCalendar() {
  const [selectedGroup, setSelectedGroup] = useState('all');

  return (
    <div className="not-prose flex flex-col gap-6">
      <CalendarHeader
        selectedGroup={selectedGroup}
        onGroupChange={setSelectedGroup}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <CalendarEventList selectedGroup={selectedGroup} />
        <CalendarAppointmentBooking />
      </div>
    </div>
  );
}
