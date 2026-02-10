import { Button } from "@heroui/react";
import heroImage from "../assets/header-event-webapp.jpeg";
import { Card, CardBody, Image } from "@heroui/react";
import { MdFavorite } from "react-icons/md";
import concerts from "../data/dummyEvents";

interface EventData {
  date: string;
  event_name: string;
  location: string;
  concert_time: string;
  ticket_price_idr: number;
  image: string;
}

const Home = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();
    const day = date.getDate();
    return { month, day };
  };

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
        {concerts.map((event: EventData, index: number) => {
          const { month, day } = formatDate(event.date);
          return (
            <Card key={index}>
              <div className="relative">
                <Image
                  alt={event.event_name}
                  src={event.image}
                  radius="none"
                  removeWrapper={true}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-2 right-2 z-10 bg-white/70 p-1.5 rounded-full shadow-sm">
                  <MdFavorite className="text-red-500 text-xl" />
                </div>
              </div>

              <CardBody className="flex flex-row">
                <div className="flex flex-col text-center items-center mr-4">
                  <h1 className="text-purple-800 font-semibold text-lg">
                    {month}
                  </h1>
                  <h1 className="text-lg font-semibold">{day}</h1>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium line-clamp-1">
                    {event.event_name}
                  </h1>
                  <p className="text-sm line-clamp-1">{event.location}</p>
                  <p className="text-[12px]">{event.concert_time}</p>
                  <p className="font-medium text-sm">
                    IDR. {event.ticket_price_idr.toLocaleString("id-ID")}
                  </p>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
