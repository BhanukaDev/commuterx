import './App.css';

export default function App() {
  const googlemapAPIKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googlemapAPIKey,
  });

  if (!isLoaded) return <div>Loading Boss!</div>;

  return (
    <div className='bg-red-500'>
      <h1>Hi</h1>
    </div>
  );
}
