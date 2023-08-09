import { doc, getFirestore, setDoc } from "firebase/firestore"
import app from "../firebase"
import { auth } from "./auth"

export const db = getFirestore(app)

export const addBusToDatabase = (data) => {
  console.log(data.uid)
  setDoc(doc(db, "Buses", data.uid), { ...data })
}
export const addTrainToDatabase = (data) => {
  setDoc(doc(db, "Trains", data.uid), { ...data })
}
export const addCommuterToDatabase = () => {
  const user = auth.currentUser
  setDoc(doc(db, "Commuters", user.uid), {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
  })
}
