import { Button } from "@/components/Button"
import { CalendarIcon } from "@/components/icons/CalendarIcon"
import { GlobeIcon } from "@/components/icons/GlobeIcon"
import { LocateIcon } from "@/components/icons/LocateIcon"
import Banner from "@/components/layout/Banner";
import { PurchaseTickets } from "@/components/PurchaseTickets";
import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
    const supabase = createClient()

    const { data: { user } } = await supabase.auth.getUser()
    let { data: event, error } = await supabase
        .from('events')
        .select('*')
        .eq("id", params.id)

    if (error?.code === "22P02" || event?.length === 0) {
        notFound()
    }

    const [content] = event

    return (
        <>
            <Banner title={content.title} />
            <section className="w-full py-12 md:py-16 lg:py-20 -mt-6">
                <div className="max-w-4xl mx-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="order-2 md:order-1 space-y-6">
                            <div className="flex flex-col gap-2 pb-2">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <CalendarIcon className="h-5 w-5" />
                                    <p>{formatDate(content.start_date)} - {formatDate(content.end_date)}</p>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <LocateIcon className="h-5 w-5" />
                                    <p>{content.location}</p>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <GlobeIcon className="h-5 w-5" />
                                    <p>{content.type}</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <div className="flex items-center gap-2">
                                    <p className="text-2xl font-bold">£{content.price} per ticket</p>
                                </div>
                                <p className="text-muted-foreground">Includes access to all sessions, workshops, and networking events.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold pb-2">Description</h2>
                                <p>
                                    {content.description}
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 pt-8">
                                {user && <PurchaseTickets event={content} />}
                                <Button size="lg" variant="outline" className="w-full md:w-auto" asChild>
                                    <Link href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${content.title}&dates=${content.start_date.replaceAll("-", "")}/${content.end_date.replaceAll("-", "")}&location=${content.location}`} target="_blank">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        Add to Calendar
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src={content.image || "/placeholder.svg"}
                                alt="Event Image"
                                width={800}
                                height={500}
                                className="w-full rounded-lg object-cover"
                                style={{ aspectRatio: "800/500", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



