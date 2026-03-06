'use client';

import { useQuery } from '@tanstack/react-query';
// Phase 2: import { queryREST } from './fetchers';

export interface WorkingGroup {
  id: string;
  name: string;
  color: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  groupId: string;
  location?: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

// ── Demo data ────────────────────────────────────────────────────

const WORKING_GROUPS: WorkingGroup[] = [
  { id: 'core-dev', name: 'Core Dev', color: '#cfffcf' },
  { id: 'governance', name: 'Governance', color: '#bd93f9' },
  { id: 'community', name: 'Community', color: '#fe7d7d' },
  { id: 'validators', name: 'Validators', color: '#98e8c1' },
];

function demoEvents(): CalendarEvent[] {
  const today = new Date();
  const d = (offset: number) => {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    return date;
  };

  return [
    {
      id: '1',
      title: 'Core Dev Standup',
      description: 'Weekly sync on CosmWasm module progress',
      date: d(0),
      time: '10:00 AM',
      groupId: 'core-dev',
      location: 'Discord #dev-call',
    },
    {
      id: '2',
      title: 'Governance Forum',
      description: 'Discussion on upcoming proposals and voting strategies',
      date: d(0),
      time: '2:00 PM',
      groupId: 'governance',
      location: 'Discord #governance',
    },
    {
      id: '3',
      title: 'Community Call',
      description: 'Open community discussion and Q&A',
      date: d(1),
      time: '11:00 AM',
      groupId: 'community',
      location: 'Discord #community-call',
    },
    {
      id: '4',
      title: 'Validator Ops Review',
      description: 'Infrastructure health and upgrade planning',
      date: d(2),
      time: '9:00 AM',
      groupId: 'validators',
      location: 'Discord #validators',
    },
    {
      id: '5',
      title: 'Smart Contract Workshop',
      description: 'Hands-on CW721 and minting walkthrough',
      date: d(3),
      time: '3:00 PM',
      groupId: 'core-dev',
      location: 'Discord #dev-workshop',
    },
    {
      id: '6',
      title: 'Proposal Review Session',
      description: 'Review and discuss active governance proposals',
      date: d(4),
      time: '1:00 PM',
      groupId: 'governance',
      location: 'Discord #governance',
    },
    {
      id: '7',
      title: 'Community AMA',
      description: 'Ask-me-anything with core contributors',
      date: d(5),
      time: '4:00 PM',
      groupId: 'community',
      location: 'Discord #ama',
    },
    {
      id: '8',
      title: 'Validator Onboarding',
      description: 'New validator setup and configuration guide',
      date: d(6),
      time: '10:00 AM',
      groupId: 'validators',
      location: 'Discord #validators',
    },
  ];
}

function demoSlots(): TimeSlot[] {
  const times = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM',
  ];
  return times.map((time, i) => ({
    id: `slot-${i}`,
    time,
    available: i % 3 !== 0, // every 3rd slot unavailable
  }));
}

// ── Hooks ────────────────────────────────────────────────────────

export function useWorkingGroups() {
  return useQuery({
    queryKey: ['working-groups'],
    queryFn: async () => WORKING_GROUPS,
    // Phase 2: queryFn: () => queryREST('/calendar/groups'),
  });
}

export function useCalendarEvents(date?: Date, groupId?: string) {
  return useQuery({
    queryKey: ['calendar-events', date?.toDateString(), groupId],
    queryFn: async () => {
      const events = demoEvents();
      return events.filter((e) => {
        const matchDate = !date || e.date.toDateString() === date.toDateString();
        const matchGroup = !groupId || groupId === 'all' || e.groupId === groupId;
        return matchDate && matchGroup;
      });
    },
    // Phase 2: queryFn: () => queryREST(`/calendar/events?date=${date}&group=${groupId}`),
  });
}

export function useAvailableSlots(date?: Date) {
  return useQuery({
    queryKey: ['available-slots', date?.toDateString()],
    queryFn: async () => demoSlots(),
    enabled: !!date,
    // Phase 2: queryFn: () => queryREST(`/calendar/slots?date=${date}`),
  });
}
