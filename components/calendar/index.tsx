'use client';

import { useState, useMemo } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { CalendarHeader } from './calendar-header';
import { EventPanel } from './event-panel';
import { EventManagement } from './event-management';
import {
  useCalendarEvents,
  nanosToDate,
  type EventFilter,
} from '@/lib/hooks/use-calendar';
import { useWallet } from '@/lib/wallet/use-wallet';

export function ConnectCalendar() {
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [displayedMonth, setDisplayedMonth] = useState(new Date());
  const { address } = useWallet();

  // Fetch events for the displayed month (for calendar dot indicators)
  const monthStart = new Date(
    displayedMonth.getFullYear(),
    displayedMonth.getMonth(),
    1,
  );
  const monthEnd = new Date(
    displayedMonth.getFullYear(),
    displayedMonth.getMonth() + 1,
    0,
    23,
    59,
    59,
  );

  const monthFilter: EventFilter = {
    by_time_range: {
      start_after: (BigInt(monthStart.getTime()) * 1_000_000n).toString(),
      end_before: (BigInt(monthEnd.getTime()) * 1_000_000n).toString(),
    },
    ...(selectedGroup !== 'all' && {
      by_groups: { groups: [selectedGroup] },
    }),
  };

  const { data: monthEvents } = useCalendarEvents(monthFilter);

  // Set of dates that have events — used for calendar dot indicators
  const eventDates = useMemo(() => {
    const dates = new Set<string>();
    monthEvents?.events.forEach((er) => {
      dates.add(nanosToDate(er.event.start_time).toDateString());
    });
    return dates;
  }, [monthEvents]);

  const hasEventsModifier = (date: Date) =>
    eventDates.has(date.toDateString());

  return (
    <div className="not-prose flex flex-col gap-5 rounded-xl border border-fd-border bg-fd-card/60 p-5 backdrop-blur-sm">
      <CalendarHeader
        selectedGroup={selectedGroup}
        onGroupChange={setSelectedGroup}
      />
      <div className="grid gap-5 lg:grid-cols-[auto_1fr]">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(d) => d && setSelectedDate(d)}
          onMonthChange={setDisplayedMonth}
          modifiers={{ hasEvents: hasEventsModifier }}
          modifiersClassNames={{ hasEvents: 'calendar-has-events' }}
          className="calendar-widget rounded-lg border border-fd-border"
        />
        <div className="flex flex-col">
          <EventPanel
            selectedDate={selectedDate}
            selectedGroup={selectedGroup}
          />
          {address && <EventManagement />}
        </div>
      </div>
    </div>
  );
}
