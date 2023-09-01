/* eslint-disable react/prop-types */
import { GoogleMap, Marker } from "@react-google-maps/api"
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { RecenterButton } from "./RecenterButton"
import { getMarkerIcon } from "../Utils/database"
import { authContext } from "./User"
import {
  readBusPositionsFromRDB,
  writeBusPositionToRDB,
} from "../Utils/realtimeDB"
import { getUID } from "../Utils/auth"

export default function Map() {
  const mapRef = useRef()
  const user = useContext(authContext)
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
      const icon = await getMarkerIcon(user?.authData.role)
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
    }, 8500)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      updateCenter(!centerChange)
      updateCenter(!centerChange)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const onLoad = useCallback((map) => (mapRef.current = map), [])

  ////////// Update RDB If User is a bus //////////
  function DriverPositionUpdate() {
    writeBusPositionToRDB(
      getUID(),
      coords,
      user.userData.routeID,
      user.userData.organisationName
    )
    console.log("Position Update")
  }

  function ShowBusesPositions() {
    readBusPositionsFromRDB()
      .then((snapshot) => {
        console.log(snapshot.val().A656NHqTAeSIaratlcbAoTD0m6k1)
        const snapshotValue = snapshot.val()
        for (const busId in snapshotValue) {
          const bus = snapshotValue[busId]
          console.log(`Bus ID: ${busId}`)
          console.log(`position: ${bus.position}`)
          console.log(`routeID: ${bus.routeID}`)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (user.userData.role == "bus") {
        //DriverPositionUpdate()
        //console.log(readBusPositionsFromRDB())
        //ShowBusesPositions()
      }
    }, 7000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  ////////// Bus Updating Finished //////////

  ////////// Update Commuter's Map with Buses //////////

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
      <Marker position={{ lat: 6.795506168321762, lng: 79.8557110778035 }} />
    </GoogleMap>
  )
}
