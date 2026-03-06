'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAvailableSlots } from '@/lib/hooks/use-calendar';
import { cn } from '@/lib/utils';

export function CalendarAppointmentBooking() {
  const [date, setDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const { data: slots, isLoading } = useAvailableSlots(date);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Book a Call</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d ?? undefined);
              setSelectedSlot(null);
            }}
            disabled={{ before: new Date() }}
            className="rounded-md border"
          />
          <div className="flex flex-1 flex-col gap-3">
            {!date ? (
              <p className="text-sm text-muted-foreground">
                Select a date to see available times.
              </p>
            ) : isLoading ? (
              <p className="text-sm text-muted-foreground">Loading slots...</p>
            ) : (
              <>
                <p className="text-sm font-medium text-muted-foreground">
                  Available times
                </p>
                <ScrollArea className="h-[240px]">
                  <div className="flex flex-col gap-1.5 pr-3">
                    {slots?.map((slot) => (
                      <Button
                        key={slot.id}
                        variant={selectedSlot === slot.id ? 'default' : 'outline'}
                        size="sm"
                        disabled={!slot.available}
                        className={cn(
                          'justify-start',
                          !slot.available && 'line-through opacity-40',
                        )}
                        onClick={() => setSelectedSlot(slot.id)}
                      >
                        {slot.time}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
                <Button disabled={!selectedSlot} className="mt-auto">
                  Book Appointment
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
