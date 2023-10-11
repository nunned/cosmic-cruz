import "./App.css";
import HomePage from "./pages/homepage";
import BarberService from "./pages/barberservice";
import Apparel from "./pages/apparel";
import TravelGuide from "./pages/travelguide";
import Visuals from "./pages/visuals";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/barberservice" element={<BarberService />} />
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/travelguide" element={<TravelGuide />} />
          <Route path="/visuals" element={<Visuals />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
