import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { EventData } from "../types/event";

interface EventContextType {
  interestedEvents: EventData[];
  addToInterested: (event: EventData) => void;
  removeFromInterested: (id: string) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
  children: ReactNode;
}
export const EventProvider = ({ children }: EventProviderProps) => {
  const [interestedEvents, setInterestedEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("interestedEvents");
    if (saved) {
      setInterestedEvents(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("interestedEvents", JSON.stringify(interestedEvents));
  }, [interestedEvents]);

  const addToInterested = (event: EventData) => {
    const alreadyExist = interestedEvents.find((item) => item.id === event.id);

    if (!alreadyExist) {
      setInterestedEvents((prev) => [...prev, event]);
    }
  };

  const removeFromInterested = (id: string) => {
    setInterestedEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <EventContext.Provider
      value={{ interestedEvents, addToInterested, removeFromInterested }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = (): EventContextType => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be inside EventProvider");
  }
  return context;
};
