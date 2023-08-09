/* eslint-disable react/prop-types */
import { GoogleMap, Marker } from "@react-google-maps/api"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { RecenterButton } from "./RecenterButton"
import { getMarkerIcon } from "../Utils/database"

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

  useEffect(() => {
    async function fetchMarkerIcon() {
      const icon = await getMarkerIcon()
      setMarkerIcon(icon)
    }
    fetchMarkerIcon()
  }, [])

  // user location ui update

  const [centerChange, updateCenter] = useState(false)

  const [coords, setCoords] = useState({
    lat: 6.895506168321762,
    lng: 79.8557110778035,
  })

  const mapCenter = useMemo(
    () => coords, // default coordinates, port city
    [centerChange] // right now there is no dependencies to change its center, we can implement it
  )

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

  const onLoad = useCallback((map) => (mapRef.current = map), [])
  return (
    <GoogleMap
      zoom={15}
      center={mapCenter}
      mapContainerClassName="w-screen h-screen"
      options={mapOption}
      onLoad={onLoad}
    >
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
