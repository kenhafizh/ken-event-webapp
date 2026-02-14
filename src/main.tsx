import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HeroUIProvider } from "@heroui/react";
import { EventProvider } from "./context/EventContext.tsx";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <EventProvider>
        <HeroUIProvider>
          <NavBar />
          <App />
        </HeroUIProvider>
      </EventProvider>
    </BrowserRouter>
  </StrictMode>,
);
