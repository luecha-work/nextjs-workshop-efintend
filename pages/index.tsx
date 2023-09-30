import { getFeaturedEvents } from "@/dummy-data";
import { Inter } from "next/font/google";
import EventList from "@/components/events/event-list";

const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  );
};
export default Home;
