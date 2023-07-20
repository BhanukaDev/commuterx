import { useLoadScript } from "@react-google-maps/api"
import { Map } from "../../components/Map"
import { Loading } from "../Loading"
import { NavBar } from "../../components/NavBar"
import { Button } from "../../components/Button"
import { Bus } from "../../Data/Bus"
// import { SearchBar } from "../../components/SearchBar";

export const MapPage = () => {
  const googlemapAPIKey = import.meta.env.VITE_GOOGLEMAP_API_KEY

  const testBus = new Bus(100, 100, 1)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googlemapAPIKey,

    //libraries: ['places'],
  })

  if (!isLoaded) return <Loading /> // keep code above

  return (
    <>
      {/* <SearchBar type={"bus"} /> */}
      <NavBar />
      <Button onClick={() => console.log(testBus.getLoc())}>Test</Button>
      <Map />
    </>
  )
}
