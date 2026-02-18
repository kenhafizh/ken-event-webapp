import { Button, Input } from "@heroui/react";
import heroImage from "../assets/header-event-webapp.jpeg";
import concerts from "../data/dummyEvents";
import createEventImage from "../assets/create-event-banner.png";
import { LuCalendarPlus2 } from "react-icons/lu";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import type { EventData } from "../types/event";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-100 w-full">
        <img
          src={heroImage}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Filter Dark Penutup Gambar */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Teks Hero */}
        <div className="relative z-10 flex flex-col  h-full items-center justify-center text-white font-semibold text-2xl md:text-5xl text-center">
          <h1>Don't miss out!</h1>
          <h1 className="mt-2">
            Explore the <span className="text-yellow-300">music concerts</span>{" "}
            happening in Indonesia.
          </h1>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-8  max-w-7xl mx-auto">
        <h1 className="text-black text-2xl font-semibold">
          Popular Music Events in Indonesia
        </h1>
        <div className="flex gap-4 mt-4">
          <Button variant="bordered" radius="full">
            All
          </Button>
          <Button variant="bordered" radius="full">
            Available
          </Button>
          <Button variant="bordered" radius="full">
            Coming Soon
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10 px-4 xl:px-0">
        {concerts.map((event: EventData) => (
          <Link to={`/event/${event.id}`}>
            <EventCard key={event.id} event={event} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-12 mb-24">
        <Button variant="bordered" className="w-80">
          See More
        </Button>
      </div>

      <div className="relative w-full mt-20">
        <div className="absolute inset-0">
          <img
            src={createEventImage}
            alt="Create Event Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-yellow-300 font-bold text-2xl md:text-3xl mb-2">
              Create an event with Eventify
            </h1>
            <p className="text-white text-sm md:text-base max-w-2xl">
              Got a show, event, activity or a great experience? Partner with us
              & get listed on Eventify
            </p>
          </div>
          <div>
            <Button
              className="bg-yellow-300 text-black font-semibold"
              size="lg"
              radius="full"
              startContent={<LuCalendarPlus2 className="text-xl" />}
            >
              Create Event
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full bg-yellow-300 mt-8">
        <div className="max-w-7xl mx-auto py-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">
              Subscribe to our Newsletter
            </h1>
            <p className="max-w-md">
              Receive our weekly newsletter & updates with new events from your
              favourite organizers & venues.
            </p>
          </div>
          <div className="flex">
            <Input
              placeholder="Enter your email address.."
              type="email"
              size="md"
              radius="none"
              classNames={{
                inputWrapper: "rounded-l-xl bg-white",
              }}
              className="w-80"
            />
            <Button
              radius="none"
              className="bg-slate-800 text-yellow-300 font-bold rounded-r-xl"
            >
              Subscribe
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default Home;
