import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Interest from "./pages/Interest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interest" element={<Interest />} />
      </Routes>
    </>
  );
}

export default App;
