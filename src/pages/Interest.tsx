import { useEvent } from "../context/EventContext";

const Interest = () => {
  const { interestedEvents, removeFromInterested } = useEvent();

  return (
    <div>
      <h2>My Interested Events</h2>

      {interestedEvents.length === 0 && <p>No interested events yet.</p>}

      {interestedEvents.map((event) => (
        <div key={event.id}>
          <h3>{event.event_name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Interest;
