/* eslint-disable react/prop-types */
import { GoogleMap, Marker } from "@react-google-maps/api"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { RecenterButton } from "./RecenterButton"
import { getMarkerIcon } from "../Utils/database"
import { RouteBar } from "./RouteBar"

export const Map = () => {
  const mapRef = useRef()

  const mapOption = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      mapId: "c488565ca706849c",
    }),
    []
  )

  const [markerIcon, setMarkerIcon] = useState(null)
  const [centerChange, updateCenter] = useState(false)

  useEffect(() => {
    async function fetchMarkerIcon() {
      const icon = await getMarkerIcon()
      setMarkerIcon(icon)
      //console.log(icon)
    }
    fetchMarkerIcon()
  }, [centerChange])

  // user location ui update

  const [coords, setCoords] = useState({
    lat: 6.895506168321762,
    lng: 79.8557110778035,
  })

  const mapCenter = useMemo(() => coords, [centerChange])

  const updateMapLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          console.error(error)
        }
      )
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateMapLocation()
    }, 1500)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      updateCenter(!centerChange)
    }, 1800)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const onLoad = useCallback((map) => (mapRef.current = map), [])
  return (
    <GoogleMap
      zoom={15}
      center={mapCenter}
      mapContainerClassName="w-screen h-screen"
      options={mapOption}
      onLoad={onLoad}
    >
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
      <Marker position={coords} icon={markerIcon}></Marker>
      <RecenterButton
        centerFunc={() => {
          updateCenter(!centerChange)
        }}
      />
      {/* <Marker position={{ lat: 6.795506168321762, lng: 79.8557110778035 }} /> */}
    </GoogleMap>
  )
}
