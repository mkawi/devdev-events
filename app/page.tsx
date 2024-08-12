import { Hero } from "@/components/layout/Hero";
import { FeaturedEvents } from "@/components/FeaturedEvents";

export default function Home() {
  return (
    <>
      <Hero />
      <h2 className="text-2xl font-semibold pt-10 md:pt-14 lg:pt-16 text-center -mb-8">Featured Events</h2>
      <FeaturedEvents />
    </>
  );
}
