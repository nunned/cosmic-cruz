import "./App.css";
import HomePage from "./pages/homepage";
import BarberService from "./pages/barberservice";
import Apparel from "./pages/apparel";
import TravelGuide from "./pages/travelguide";
import Visuals from "./pages/visuals";
import About from "./pages/about";
import { useEffect } from "react";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

function MainApp() {
  const location = useLocation();

  useEffect(() => {
    document.body.setAttribute('data-current-route', location.pathname);
    return () => {
      document.body.removeAttribute('data-current-route');
    };
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/barberservice" element={<BarberService />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/travelguide" element={<TravelGuide />} />
        <Route path="/visuals" element={<Visuals />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
