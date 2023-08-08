import { useState, useMemo, useEffect } from "react"
import { GoogleMap, Marker } from "@react-google-maps/api"
import "../pages/MapPage/test.css"

export const Map = () => {
  const mapCenter = useMemo(
    () => ({ lat: 6.895506168321762, lng: 79.8557110778035 }),
    []
  )

  const mapOption = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      mapId: "c488565ca706849c",
    }),
    []
  )

  const [userCoords, setUserCoords] = useState({ lat: null, lng: null })

  useEffect(() => {
    getLoc()
      .then((coords) => {
        setUserCoords({ lat: coords.latitude, lng: coords.longitude })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  function getLoc() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  return (
    <GoogleMap
      zoom={15}
      center={mapCenter}
      mapContainerClassName="w-screen h-screen"
      options={mapOption}
    >
      {userCoords.lat !== null && userCoords.lng !== null && (
        <Marker position={{ lat: userCoords.lat, lng: userCoords.lng }} />
      )}
    </GoogleMap>
  )
}
