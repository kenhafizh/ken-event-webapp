import konser1 from "../assets/konser-1.png";
import konser2 from "../assets/konser-2.png";
import konser3 from "../assets/konser-3.png";
import konser4 from "../assets/konser-4.png";
import konser5 from "../assets/konser-5.png";
import konser6 from "../assets/konser-6.png";
import konser7 from "../assets/konser-7.png";
import konser8 from "../assets/konser-8.png";
import type { EventData } from "../types/event";

const concerts: EventData[] = [
  {
    id: "1",
    date: "2026-03-15",
    eventName: "Kolaborasi Timur All Stars",
    location: "Makassar Convention Center, Makassar",
    concertTime: "19:30",
    ticketPrice: 350000,
    image: konser1,
  },
  {
    id: "2",
    date: "2026-02-20",
    eventName: "IIMS 2026",
    location: "JIExpo Kemayoran, Jakarta",
    concertTime: "20:00",
    ticketPrice: 500000,
    image: konser2,
  },
  {
    id: "3",
    date: "2026-03-28",
    eventName: "KapanLagi Buka Bareng",
    location: "Istora Senayan, Jakarta",
    concertTime: "18:30",
    ticketPrice: 275000,
    image: konser3,
  },
  {
    id: "4",
    date: "2026-04-12",
    eventName: "Bigu Festival",
    location: "GWK Cultural Park, Bali",
    concertTime: "17:00",
    ticketPrice: 450000,
    image: konser4,
  },
  {
    id: "5",
    date: "2026-05-02",
    eventName: "Menyala Tour",
    location: "Eldorado Dome, Bandung",
    concertTime: "19:00",
    ticketPrice: 300000,
    image: konser5,
  },
  {
    id: "6",
    date: "2026-06-10",
    eventName: "AESPA Tour",
    location: "Indonesia Arena, Jakarta",
    concertTime: "20:00",
    ticketPrice: 1200000,
    image: konser6,
  },
  {
    id: "7",
    date: "2026-07-25",
    eventName: "Hammersonic",
    location: "Ancol Carnaval Beach, Jakarta",
    concertTime: "15:00",
    ticketPrice: 850000,
    image: konser7,
  },
  {
    id: "8",
    date: "2026-08-14",
    eventName: "Westlife Gala Dinner",
    location: "The Ritz-Carlton Ballroom, Jakarta",
    concertTime: "19:30",
    ticketPrice: 2500000,
    image: konser8,
  },
];

export default concerts;
