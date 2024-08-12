import { Avatar, AvatarImage, AvatarFallback } from "@/components/Avatar"
import { createClient } from "@/lib/supabase/server"
import { SubscribedEvent } from "./SubscribedEvent"

export async function Profile() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let { data: subscribed_events, error } = await supabase
    .from('subscribed_events')
    .select('*, events(*)')
    .eq('user_id', user.id)

  if (subscribed_events.length === 0) {
    subscribed_events = null
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 -mt-6">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-8">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-lg font-medium">{user?.email}</div>
            <div className="text-muted-foreground">{user?.user_metadata.role}</div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Subscribed Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subscribed_events ? subscribed_events.map(event => <SubscribedEvent key={event.events.id} event={event.events} created_at={event.created_at} />) :
              <h3>You have no subscribed events.</h3>}
          </div>
        </div>
      </div>
    </section>
  )
}