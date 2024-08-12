import EventCardGrid from "./EventCardGrid"
import { EventCard } from "./EventCard"
import { createClient } from "@/lib/supabase/server";

export async function FeaturedEvents() {
  const supabase = createClient()
  let { data: events, error } = await supabase
    .from('events')
    .select('*')
    .gte('start_date', new Date().toISOString())
    .order('start_date', { ascending: true })
    .limit(6)

  return (
    <EventCardGrid>
      {events?.map(card => <EventCard key={card.id} card={card} />)}
    </EventCardGrid>
  )
}
