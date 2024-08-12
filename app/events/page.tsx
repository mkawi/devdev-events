import Banner from "@/components/layout/Banner";
import { EventCard } from "@/components/EventCard";
import EventCardGrid from "@/components/EventCardGrid";
import { createClient } from "@/lib/supabase/server";

const supabase = createClient()
let { data: events, error } = await supabase
    .from('events')
    .select('*')
    .gte('end_date', new Date().toISOString())
    .order('start_date', { ascending: true })

export default function Events() {
    return (
        <>
            <Banner title="Latest Events" />
            <EventCardGrid>
                {events?.map(card => <EventCard key={card.id} card={card} />)}
            </EventCardGrid>
        </>
    )
}