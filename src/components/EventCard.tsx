import { Button, Card, CardBody, Image } from "@heroui/react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import type { EventData } from "../types/event";
import { useEvent } from "../context/EventContext";

// Props interface untuk EventCard
interface EventCardProps {
  event: EventData;
}

const EventCard = ({ event }: EventCardProps) => {
  const { addToInterested, removeFromInterested, interestedEvents } =
    useEvent();

  // Helper function untuk cek apakah event sudah di-like berdasarkan ID
  const isEventInterested = (eventId: string) => {
    return interestedEvents.some((event) => event.id === eventId);
  };

  // Toggle function untuk add/remove event dari interested list
  const toggleInterested = (event: EventData) => {
    if (isEventInterested(event.id)) {
      removeFromInterested(event.id);
    } else {
      addToInterested(event);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();
    const day = date.getDate();
    return { month, day };
  };
  const { month, day } = formatDate(event.date);
  return (
    <Card>
      <div className="relative">
        <Image
          alt={event.eventName}
          src={event.image}
          radius="none"
          removeWrapper={true}
          className="w-full h-75 object-cover"
        />
        <div className="absolute top-2 right-2 z-10">
          <Button
            isIconOnly
            aria-label="Like"
            radius="full"
            onPress={() => toggleInterested(event)}
          >
            {isEventInterested(event.id) ? (
              <MdFavorite className="text-red-500 text-xl" />
            ) : (
              <MdFavoriteBorder className="text-red-500 text-xl" />
            )}
          </Button>
        </div>
      </div>

      <CardBody className="flex flex-row">
        <div className="flex flex-col text-center items-center mr-4">
          <h1 className="text-purple-800 font-semibold text-lg">{month}</h1>
          <h1 className="text-lg font-semibold">{day}</h1>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-medium line-clamp-1">{event.eventName}</h1>
          <p className="text-sm line-clamp-1">{event.location}</p>
          <p className="text-[12px]">{event.concertTime}</p>
          <p className="font-medium text-sm">
            IDR. {event.ticketPrice.toLocaleString("id-ID")}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default EventCard;
