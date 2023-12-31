import { useLoadScript } from "@react-google-maps/api"

import { Loading } from "../Loading"
import { NavBar } from "../../components/NavBar"
import { SearchBar } from "../../components/SearchBar"
import Map from "../../components/Map"

export default function MapPage() {
  const googlemapAPIKey = import.meta.env.VITE_GOOGLEMAP_API_KEY

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googlemapAPIKey,

    //libraries: ['places'],
  })

  if (!isLoaded) return <Loading /> // keep code above

  return (
    <>
      <SearchBar type={"bus"} />
      {/* component that renders the routebar below search, pass in an array of route objects */}
      <NavBar />
      <Map />
    </>
  )
}
