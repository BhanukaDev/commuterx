import { useLoadScript } from "@react-google-maps/api";
import { Map } from "./components/Map";

export default function App() {
  const googlemapAPIKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googlemapAPIKey,
  });

  if (!isLoaded) return <div>Loading Boss!</div>;

  return <Map />;
}
