import { formatDate } from "@/lib/utils"
import Link from "next/link"

export function EventCard({ card }) {
    const startDate = formatDate(card.start_date)
    const endDate = formatDate(card.end_date)

    return (
        <div className="relative group overflow-hidden rounded-lg hover:shadow-lg">
            <Link href={"/events/" + card.id} className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Event</span>
            </Link>
            <div className="relative">
                <img
                    src={card.image || "./placeholder.svg"}
                    width={600}
                    height={400}
                    className="object-cover w-full aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 pt-2 pb-1 rounded-md text-xs font-medium">
                    {card.type}
                </div>
            </div>
            <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <div className="flex justify-between">
                    <p className="text-sm text-muted-foreground">{startDate} - {endDate}</p>
                    <p className="text-sm text-muted-foreground">{card.price !== 0 ? `£${card.price}` : "FREE"}</p>
                </div>
            </div>
        </div>
    )
}
