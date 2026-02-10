import konser1 from "../assets/konser-1.png";
import konser2 from "../assets/konser-2.png";
import konser3 from "../assets/konser-3.png";
import konser4 from "../assets/konser-4.png";
import konser5 from "../assets/konser-5.png";
import konser6 from "../assets/konser-6.png";
import konser7 from "../assets/konser-7.png";
import konser8 from "../assets/konser-8.png";

export interface EventData {
  date: string;
  event_name: string;
  location: string;
  concert_time: string;
  ticket_price_idr: number;
  image: string;
}

const concerts: EventData[] = [
  {
    date: "2026-03-15",
    event_name: "Kolaborasi Timur All Stars",
    location: "Makassar Convention Center, Makassar",
    concert_time: "19:30",
    ticket_price_idr: 350000,
    image: konser1,
  },
  {
    date: "2026-02-20",
    event_name: "IIMS 2026",
    location: "JIExpo Kemayoran, Jakarta",
    concert_time: "20:00",
    ticket_price_idr: 500000,
    image: konser2,
  },
  {
    date: "2026-03-28",
    event_name: "KapanLagi Buka Bareng",
    location: "Istora Senayan, Jakarta",
    concert_time: "18:30",
    ticket_price_idr: 275000,
    image: konser3,
  },
  {
    date: "2026-04-12",
    event_name: "Bigu Festival",
    location: "GWK Cultural Park, Bali",
    concert_time: "17:00",
    ticket_price_idr: 450000,
    image: konser4,
  },
  {
    date: "2026-05-02",
    event_name: "Menyala Tour",
    location: "Eldorado Dome, Bandung",
    concert_time: "19:00",
    ticket_price_idr: 300000,
    image: konser5,
  },
  {
    date: "2026-06-10",
    event_name: "AESPA Tour",
    location: "Indonesia Arena, Jakarta",
    concert_time: "20:00",
    ticket_price_idr: 1200000,
    image: konser6,
  },
  {
    date: "2026-07-25",
    event_name: "Hammersonic",
    location: "Ancol Carnaval Beach, Jakarta",
    concert_time: "15:00",
    ticket_price_idr: 850000,
    image: konser7,
  },
  {
    date: "2026-08-14",
    event_name: "Westlife Gala Dinner",
    location: "The Ritz-Carlton Ballroom, Jakarta",
    concert_time: "19:30",
    ticket_price_idr: 2500000,
    image: konser8,
  },
];

export default concerts;
