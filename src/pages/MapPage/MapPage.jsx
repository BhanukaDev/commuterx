import { useLoadScript } from '@react-google-maps/api';
import { Map } from '../../components/Map';
import { Loading } from '../Loading';
import { NavBar } from '../../components/NavBar';

export const MapPage = () => {
  const googlemapAPIKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;
  //const mapID = import.meta.env.VITE_GOOGLEMAP_ID;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googlemapAPIKey,

    //libraries: ['places'],
  });

  if (!isLoaded) return <Loading />; // keep code above

  return (
    <>
      <NavBar />
      <Map />
    </>
  );
};
