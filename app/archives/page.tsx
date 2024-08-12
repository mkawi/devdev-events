import Banner from "@/components/layout/Banner";
import { EventCard } from "@/components/EventCard";
import EventCardGrid from "@/components/EventCardGrid";
import { createClient } from "@/lib/supabase/server";


export default async function Archives() {
    const supabase = createClient()
    let { data: events, error } = await supabase
        .from('events')
        .select('*')
        .lt('end_date', new Date().toISOString())
        .order('start_date', { ascending: false })

    return (
        <>
            <Banner title="Archived Events" />
            <EventCardGrid>
                {events?.map(card => <EventCard key={card.id} card={card} />)}
            </EventCardGrid>
        </>
    );
}