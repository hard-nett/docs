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
import { CalendarWidgetSkeleton } from './calendar-skeleton';

export function ConnectCalendar() {
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [displayedMonth, setDisplayedMonth] = useState(new Date());
  const { address } = useWallet();

  // Memoize month bounds to prevent filter object recreation on every render.
  // Without memo, every re-render creates a new filter object reference,
  // causing React Query to see a changed query key and re-fetch.
  const monthBounds = useMemo(() => {
    const start = new Date(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth(),
      1,
    );
    const end = new Date(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth() + 1,
      0,
      23,
      59,
      59,
    );
    return { start, end };
  }, [displayedMonth.getFullYear(), displayedMonth.getMonth()]);

  // Memoize the filter so it only changes when month bounds or group change
  const monthFilter: EventFilter | undefined = useMemo(() => {
    const filter: EventFilter = {
      by_time_range: {
        start_after: (BigInt(monthBounds.start.getTime()) * 1_000_000n).toString(),
        end_before: (BigInt(monthBounds.end.getTime()) * 1_000_000n).toString(),
      },
    };
    if (selectedGroup !== 'all') {
      filter.by_groups = { groups: [selectedGroup] };
    }
    return filter;
  }, [monthBounds, selectedGroup]);

  const { data: monthEvents, isLoading } = useCalendarEvents(
    monthFilter,
    undefined,
    50, // Explicit limit — max 50 events per month view
  );

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
      {isLoading ? (
        <CalendarWidgetSkeleton />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}