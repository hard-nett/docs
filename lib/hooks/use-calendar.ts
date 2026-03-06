'use client';

import { useQuery } from '@tanstack/react-query';
// Phase 2: import { queryCalendar } from '@/lib/queries/fetchers';

// ── Types aligned with cw-calendar contract ──────────────────────

export interface CalendarConfig {
  owner: string;
  description?: string;
}

export type EventStatus = 'upcoming' | 'active' | 'completed' | 'cancelled';

export interface CalendarEvent {
  title: string;
  description: string;
  start_time: string; // Cosmos Timestamp (nanos as string)
  end_time: string;
  location?: string;
  group_ids: string[];
}

export interface EventResponse {
  id: number;
  event: CalendarEvent;
  is_live: boolean;
  is_triggerable_end: boolean;
  is_triggerable_start: boolean;
}

export interface EventListResponse {
  events: EventResponse[];
  total_count?: number;
}

export interface EventFilter {
  by_groups?: { groups: string[] };
  by_time_range?: { start_after?: string; end_before?: string };
  by_status?: { status: EventStatus };
  this_week?: Record<string, never>;
  this_month?: Record<string, never>;
  upcoming?: Record<string, never>;
}

export interface Group {
  id: string;
  name: string;
  color: string;
  dao_addr?: string;
  members?: string[];
}

export interface GroupResponse {
  group: Group;
  event_count: number;
}

export interface GroupListResponse {
  groups: GroupResponse[];
}

export interface GroupsManagingEventResponse {
  group_ids: string[];
  groups: Group[];
}

export interface EventGaugeResponse {
  event_id: number;
  begin_msgs: unknown[];
  end_msgs: unknown[];
  group_gauges: { group_id: string; gauges: unknown[] }[];
}

// ── Demo data ────────────────────────────────────────────────────

function toNanos(date: Date): string {
  return (BigInt(date.getTime()) * 1_000_000n).toString();
}

const DEMO_GROUPS: GroupResponse[] = [
  { group: { id: 'core-dev', name: 'Core Dev', color: '#cfffcf' }, event_count: 2 },
  { group: { id: 'governance', name: 'Governance', color: '#bd93f9' }, event_count: 2 },
  { group: { id: 'community', name: 'Community', color: '#fe7d7d' }, event_count: 2 },
  { group: { id: 'validators', name: 'Validators', color: '#98e8c1' }, event_count: 2 },
];

function demoEvents(): EventResponse[] {
  const today = new Date();
  const d = (offset: number, hour: number, min = 0) => {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    date.setHours(hour, min, 0, 0);
    return date;
  };

  return [
    {
      id: 1,
      event: {
        title: 'Core Dev Standup',
        description: 'Weekly sync on CosmWasm module progress',
        start_time: toNanos(d(0, 10)),
        end_time: toNanos(d(0, 11)),
        location: 'Discord #dev-call',
        group_ids: ['core-dev'],
      },
      is_live: false,
      is_triggerable_end: false,
      is_triggerable_start: false,
    },
    {
      id: 2,
      event: {
        title: 'Governance Forum',
        description: 'Discussion on upcoming proposals and voting strategies',
        start_time: toNanos(d(0, 14)),
        end_time: toNanos(d(0, 15)),
        location: 'Discord #governance',
        group_ids: ['governance'],
      },
      is_live: false,
      is_triggerable_end: false,
      is_triggerable_start: false,
    },
    {
      id: 3,
      event: {
        title: 'Community Call',
        description: 'Open community discussion and Q&A',
        start_time: toNanos(d(1, 11)),
        end_time: toNanos(d(1, 12)),
        location: 'Discord #community-call',
        group_ids: ['community'],
      },
      is_live: false,
      is_triggerable_end: false,
      is_triggerable_start: false,
    },
    {
      id: 4,
      event: {
        title: 'Validator Ops Review',
        description: 'Infrastructure health and upgrade planning',
        start_time: toNanos(d(2, 9)),
        end_time: toNanos(d(2, 10)),
        location: 'Discord #validators',
        group_ids: ['validators'],
      },
      is_live: false,
      is_triggerable_end: false,
      is_triggerable_start: false,
    },
    {
      id: 5,
      event: {
        title: 'Smart Contract Workshop',
        description: 'Hands-on CW721 and minting walkthrough',
        start_time: toNanos(d(3, 15)),
        end_time: toNanos(d(3, 17)),
        location: 'Discord #dev-workshop',
        group_ids: ['core-dev'],
      },
      is_live: false,
      is_triggerable_end: false,
      is_triggerable_start: false,
    },
    {
      id: 6,
      event: {
        title: 'Proposal Review Session',
        description: 'Review and discuss active governance proposals',
        start_time: toNanos(d(4, 13)),
        end_time: toNanos(d(4, 14)),
        location: 'Discord #governance',
        group_ids: ['governance'],
      },
      is_live: false,
      is_triggerable_end: false,
      is_triggerable_start: false,
    },
    {
      id: 7,
      event: {
        title: 'Community AMA',
        description: 'Ask-me-anything with core contributors',
        start_time: toNanos(d(5, 16)),
        end_time: toNanos(d(5, 17)),
        location: 'Discord #ama',
        group_ids: ['community'],
      },
      is_live: false,
      is_triggerable_end: false,
      is_triggerable_start: false,
    },
    {
      id: 8,
      event: {
        title: 'Validator Onboarding',
        description: 'New validator setup and configuration guide',
        start_time: toNanos(d(6, 10)),
        end_time: toNanos(d(6, 12)),
        location: 'Discord #validators',
        group_ids: ['validators'],
      },
      is_live: false,
      is_triggerable_end: false,
      is_triggerable_start: false,
    },
  ];
}

// ── Helpers ──────────────────────────────────────────────────────

/** Convert Cosmos nanos timestamp to JS Date. */
export function nanosToDate(nanos: string): Date {
  return new Date(Number(BigInt(nanos) / 1_000_000n));
}

/** Format a nanos timestamp as "10:00 AM" style. */
export function nanosToTimeString(nanos: string): string {
  return nanosToDate(nanos).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

// ── Hooks (match cw-calendar QueryMsg 1:1) ───────────────────────

export function useCalendarConfig() {
  return useQuery({
    queryKey: ['calendar-config'],
    queryFn: async (): Promise<CalendarConfig> => {
      // Phase 2: return queryCalendar({ config: {} });
      return { owner: 'terp1...', description: 'Terp Network Community Calendar' };
    },
  });
}

export function useCalendarGroups() {
  return useQuery({
    queryKey: ['calendar-groups'],
    queryFn: async (): Promise<GroupListResponse> => {
      // Phase 2: return queryCalendar({ list_groups: {} });
      return { groups: DEMO_GROUPS };
    },
  });
}

export function useGroup(groupId?: string) {
  return useQuery({
    queryKey: ['calendar-group', groupId],
    queryFn: async (): Promise<GroupResponse> => {
      // Phase 2: return queryCalendar({ group: { group_id: groupId } });
      const found = DEMO_GROUPS.find((g) => g.group.id === groupId);
      if (!found) throw new Error(`Group not found: ${groupId}`);
      return found;
    },
    enabled: !!groupId,
  });
}

export function useCalendarEvents(
  filter?: EventFilter,
  startAfter?: number,
  limit?: number,
) {
  return useQuery({
    queryKey: ['calendar-events', filter, startAfter, limit],
    queryFn: async (): Promise<EventListResponse> => {
      // Phase 2: return queryCalendar({ list_events: { filter, start_after: startAfter, limit } });
      let events = demoEvents();

      if (filter?.by_groups) {
        const groupIds = filter.by_groups.groups;
        events = events.filter((e) =>
          e.event.group_ids.some((gid) => groupIds.includes(gid)),
        );
      }

      if (filter?.by_time_range) {
        const { start_after, end_before } = filter.by_time_range;
        events = events.filter((e) => {
          if (start_after && BigInt(e.event.start_time) < BigInt(start_after)) return false;
          if (end_before && BigInt(e.event.start_time) > BigInt(end_before)) return false;
          return true;
        });
      }

      if (filter?.by_status) {
        events = events.filter((e) => {
          if (filter.by_status!.status === 'upcoming') return !e.is_live;
          if (filter.by_status!.status === 'active') return e.is_live;
          return true;
        });
      }

      if (startAfter !== undefined) {
        events = events.filter((e) => e.id > startAfter);
      }
      if (limit !== undefined) {
        events = events.slice(0, limit);
      }

      return { events, total_count: events.length };
    },
  });
}

export function useReverseEvents(
  filter?: EventFilter,
  startBefore?: number,
  limit?: number,
) {
  return useQuery({
    queryKey: ['calendar-events-reverse', filter, startBefore, limit],
    queryFn: async (): Promise<EventListResponse> => {
      // Phase 2: return queryCalendar({ reverse_events: { filter, start_before: startBefore, limit } });
      let events = demoEvents().reverse();
      if (startBefore !== undefined) {
        events = events.filter((e) => e.id < startBefore);
      }
      if (limit !== undefined) {
        events = events.slice(0, limit);
      }
      return { events, total_count: events.length };
    },
  });
}

export function useUpcomingEvents(limit?: number) {
  return useQuery({
    queryKey: ['calendar-upcoming', limit],
    queryFn: async (): Promise<EventListResponse> => {
      // Phase 2: return queryCalendar({ upcoming_events: { limit } });
      const now = BigInt(Date.now()) * 1_000_000n;
      const weekFromNow = now + 7n * 24n * 60n * 60n * 1_000_000_000n;
      let events = demoEvents().filter((e) => {
        const t = BigInt(e.event.start_time);
        return t >= now && t <= weekFromNow;
      });
      if (limit) events = events.slice(0, limit);
      return { events, total_count: events.length };
    },
  });
}

export function useActiveEvents() {
  return useQuery({
    queryKey: ['calendar-active'],
    queryFn: async (): Promise<EventListResponse> => {
      // Phase 2: return queryCalendar({ active_events: {} });
      const events = demoEvents().filter((e) => e.is_live);
      return { events, total_count: events.length };
    },
  });
}

export function useEvent(eventId?: number) {
  return useQuery({
    queryKey: ['calendar-event', eventId],
    queryFn: async (): Promise<EventResponse> => {
      // Phase 2: return queryCalendar({ event: { event_id: eventId } });
      const found = demoEvents().find((e) => e.id === eventId);
      if (!found) throw new Error(`Event not found: ${eventId}`);
      return found;
    },
    enabled: eventId !== undefined,
  });
}

export function useGroupsManagingEvent(eventId?: number) {
  return useQuery({
    queryKey: ['calendar-groups-managing', eventId],
    queryFn: async (): Promise<GroupsManagingEventResponse> => {
      // Phase 2: return queryCalendar({ groups_managing_event: { event_id: eventId } });
      const event = demoEvents().find((e) => e.id === eventId);
      if (!event) return { group_ids: [], groups: [] };
      const groups = DEMO_GROUPS
        .filter((g) => event.event.group_ids.includes(g.group.id))
        .map((g) => g.group);
      return { group_ids: event.event.group_ids, groups };
    },
    enabled: eventId !== undefined,
  });
}

export function useEventCount() {
  return useQuery({
    queryKey: ['calendar-event-count'],
    queryFn: async (): Promise<number> => {
      // Phase 2: return queryCalendar({ event_count: {} });
      return demoEvents().length;
    },
  });
}
