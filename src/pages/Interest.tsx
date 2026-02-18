import { useEvent } from "../context/EventContext";
import EventCard from "../components/EventCard";

const Interest = () => {
  const { interestedEvents, removeFromInterested } = useEvent();

  return (
    <div className="px-8 py-12">
      <h2 className="text-2xl font-bold">Interested Events</h2>

      {interestedEvents.length === 0 && (
        <p className="flex justify-center mt-8">No interested events yet.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-8 px-4 xl:px-0">
        {interestedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Interest;
