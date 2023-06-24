import { useLoadScript } from '@react-google-maps/api';
import { Map } from '../../components/Map';

export const MapPage = () => {
  const googlemapAPIKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googlemapAPIKey,
    //libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading Boss!</div>; // keep code above

  return (
    <>
      <Map />
    </>
  );
};
