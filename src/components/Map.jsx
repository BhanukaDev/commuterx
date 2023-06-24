import { GoogleMap, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

export const Map = () => {
  const mapCenter = useMemo(
    () => ({ lat: 6.937929989306971, lng: 79.83734955347708 }),
    [] // right now there is no dependencies to change its center, we can implement it later
  );
  return (
    <GoogleMap
      zoom={15}
      center={mapCenter}
      mapContainerClassName='w-screen h-screen'
    >
      <Marker position={mapCenter} />
    </GoogleMap>
  );
};
