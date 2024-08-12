import { formatDate } from "@/lib/utils";
import { CalendarDaysIcon } from "./icons/CalendarDaysIcon";
import Link from "next/link";

export function SubscribedEvent({ event, created_at }) {
    return (
        <Link href={`/events/${event.id}`} asChild>
            <div className="bg-muted rounded-lg p-4 hover:shadow-md">
                <h3 className="text-lg font-medium mb-2">{event.title}</h3>
                <div className="text-sm text-muted-foreground">Start - End Date</div>
                <div className="mb-2">{formatDate(event.start_date)} - {formatDate(event.end_date)}</div>
                <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span className="text-sm">Subscribed on {formatDate(created_at)}</span>
                </div>
            </div>
        </Link>
    )
}
