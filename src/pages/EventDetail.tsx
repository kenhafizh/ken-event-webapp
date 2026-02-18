import { Button, Image } from "@heroui/react";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline, IoShareSocial, IoTicket } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { useParams } from "react-router-dom";
import concerts from "../data/dummyEvents";
import { formatDate } from "../utils/FormatDate";
import { IoMdAdd } from "react-icons/io";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const event = concerts.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-7xl mx-auto p-12">
      <Image
        src={event.image}
        alt={event.eventName}
        width="100%"
        classNames={{
          wrapper: "w-full",
          img: "h-[550px] object-cover ",
        }}
      />
      <div className="mt-6 flex justify-between">
        <h1 className="text-4xl font-bold">{event.eventName}</h1>
        <div className="flex gap-6">
          <FaStar className="text-2xl" />
          <IoShareSocial className="text-2xl" />
        </div>
      </div>

      {/* date & time, buy ticket, ticket information */}
      <div className="flex mt-12 justify-between">
        <div>
          <h1 className="text-lg font-bold">Date and Time</h1>
          <div className="flex gap-4 items-center mt-4">
            <LuCalendarDays />
            <p className="text-sm">{formatDate(event.date)}</p>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <FiClock />
            <p className="text-sm">{event.concertTime}</p>
          </div>
          <p className="text-sm text-indigo-900 mt-3 ml-6 font-medium">
            + Add to Calendar
          </p>
        </div>
        <div>
          <Button
            className="bg-yellow-300 text-black"
            size="lg"
            radius="lg"
            startContent={<IoTicket className="text-xl" />}
          >
            Buy Tickets
          </Button>
          <h1 className="text-xl font-semibold mt-8">Ticket Information</h1>
          <div className="flex gap-2 items-center mt-2">
            <IoTicket className="text-lg" />
            <p className="text-[12px]">
              Standard Ticket: IDR {event.ticketPrice.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-lg font-bold mt-12">Location</h1>
      <div className="flex gap-2 mt-3">
        <IoLocationOutline className="text-black" />
        <p className="text-[12px] text-black max-w-sm">{event.location}</p>
      </div>

      {/* hosted by */}
      <h1 className="text-lg font-bold mt-12">Hosted by</h1>
      <div className="flex mt-2 items-center">
        <Image
          src={event.image}
          width={60}
          height={60}
          alt="Hosted Image"
          radius="full"
        />
        <div className="ml-4">
          <p className="mb-2">City Youth Movement</p>
          <div className="flex gap-2">
            <Button variant="bordered" size="sm">
              Contact
            </Button>
            <Button
              className="bg-slate-800 text-white"
              size="sm"
              startContent={<IoMdAdd className="text-sm text-white" />}
            >
              Follow
            </Button>
          </div>
        </div>
      </div>

      {/* location */}
      <h1 className="text-lg font-bold mt-12">Location</h1>
    </div>
  );
};

export default EventDetail;
