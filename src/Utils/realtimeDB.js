import app from "../firebase"
import { child, get, getDatabase, ref, set } from "firebase/database"

const db = getDatabase(app)

export function writeToRDB(userID, uName, mmessage) {
  set(ref(db, "testM/" + userID), {
    userName: uName,
    message: mmessage,
  })
}

export function writeBusPositionToRDB(userID, position, routeID, org) {
  set(ref(db, "LiveBuses/" + userID), {
    userID: userID,
    position: position,
    routeID: routeID,
    org: org,
  })
}

// export const readBusPositionsFromRDB = () => {
//   const dbRef = ref(db)
//   get(child(dbRef, "LiveBuses"))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val())
//       } else {
//         console.log("No data available")
//       }
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }

export const readBusPositionsFromRDB = () => {
  const dbRef = ref(db)

  return get(child(dbRef, "LiveBuses"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot // Resolve the promise with the snapshot
      } else {
        throw new Error("No data available") // Reject the promise with an error
      }
    })
    .catch((error) => {
      throw error // Reject the promise with the error
    })
}
