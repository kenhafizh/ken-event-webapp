import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Interest from "./pages/Interest";
import NavBar from "./components/Navbar";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
    </>
  );
}

export default App;
