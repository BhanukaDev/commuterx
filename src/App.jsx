import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLoadScript } from "@react-google-maps/api";
import { Map } from "./components/Map";
import { Home } from "./pages/Home";
import Iconbar from "./components/Iconbar";

export default function App() {
  const googlemapAPIKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googlemapAPIKey,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading Boss!</div>;
  return (
    <BrowserRouter>
      <Iconbar />
      <Map />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
