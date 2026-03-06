'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useCalendarEvents, useWorkingGroups } from '@/lib/hooks/use-calendar';
import { formatDateRange } from 'little-date';

interface CalendarEventListProps {
  selectedGroup: string;
}

export function CalendarEventList({ selectedGroup }: CalendarEventListProps) {
  const [date, setDate] = useState<Date>(new Date());
  const { data: events, isLoading } = useCalendarEvents(date, selectedGroup);
  const { data: groups } = useWorkingGroups();

  const groupMap = new Map(groups?.map((g) => [g.id, g]) ?? []);

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Calendar
        mode="single"
        selected={date}
        onSelect={(d) => d && setDate(d)}
        className="rounded-md border"
      />
      <div className="flex flex-1 flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">
          {formatDateRange(date, date)}
        </p>
        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading events...</p>
        ) : events && events.length > 0 ? (
          events.map((event) => {
            const group = groupMap.get(event.groupId);
            return (
              <Card key={event.id} className="py-3">
                <CardHeader className="px-4 py-0">
                  <div className="flex items-center gap-2">
                    {group && (
                      <span
                        className="inline-block size-2 rounded-full"
                        style={{ backgroundColor: group.color }}
                      />
                    )}
                    <CardTitle className="text-sm">{event.title}</CardTitle>
                  </div>
                  <CardDescription className="text-xs">
                    {event.time}
                    {event.location && ` · ${event.location}`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 pt-1 pb-0">
                  <p className="text-xs text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <p className="text-sm text-muted-foreground">
            No events scheduled for this date.
          </p>
        )}
      </div>
    </div>
  );
}
