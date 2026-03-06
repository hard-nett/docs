'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useWorkingGroups } from '@/lib/hooks/use-calendar';

interface CalendarHeaderProps {
  selectedGroup: string;
  onGroupChange: (groupId: string) => void;
}

export function CalendarHeader({
  selectedGroup,
  onGroupChange,
}: CalendarHeaderProps) {
  const { data: groups } = useWorkingGroups();

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          Community Calendar
        </h3>
        <p className="text-sm text-muted-foreground">
          Working group meetings &amp; events
        </p>
      </div>
      <Select value={selectedGroup} onValueChange={onGroupChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Groups" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Groups</SelectItem>
          {groups?.map((group) => (
            <SelectItem key={group.id} value={group.id}>
              <span className="flex items-center gap-2">
                <span
                  className="inline-block size-2 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                {group.name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
