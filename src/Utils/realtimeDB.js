import app from "../firebase"
import { getDatabase, ref, set } from "firebase/database"

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

export function readBusPositionsFromRDB() {
  // const
}
