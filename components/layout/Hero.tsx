import { Button } from "@/components/Button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Discover Tech Meetups & Hackathons
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl py-2">
              Stay up-to-date and upskill with the latest tech events, conferences, and hackathons happening around the globe.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/events">
                Explore Events
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
