import { useLoadScript } from "@react-google-maps/api"
import { Map } from "../../components/Map"
import { Loading } from "../Loading"
import { NavBar } from "../../components/NavBar"
import { SearchBar } from "../../components/SearchBar"
import { RouteBar } from "../../components/RouteBar"

export const MapPage = () => {
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
      <RouteBar
        routeList={[
          { routeNumber: "101" },
          { routeNumber: "100" },
          { routeNumber: "154" },
          { routeNumber: "400" },
          { routeNumber: "393" },
          { routeNumber: "02" },
          { routeNumber: "401" },
          { routeNumber: "32" },
          { routeNumber: "183" },
          { routeNumber: "192" },
        ]}
      />
      <NavBar />

      <Map />
    </>
  )
}
