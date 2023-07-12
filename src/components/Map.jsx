import { GoogleMap, Marker } from '@react-google-maps/api';
import { useCallback, useMemo, useRef } from 'react';

export const Map = () => {
  const mapRef = useRef();
  const mapCenter = useMemo(
    () => ({ lat: 6.895506168321762, lng: 79.8557110778035 }), // default coordinates, port city
    [] // right now there is no dependencies to change its center, we can implement it
  );

  const mapOption = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      mapId: 'c488565ca706849c',
    }),
    []
  );

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
    <GoogleMap
      zoom={15}
      center={mapCenter}
      mapContainerClassName='w-screen h-screen'
      options={mapOption}
      onLoad={onLoad}
    >
      <Marker position={mapCenter} />
    </GoogleMap>
  );
};
