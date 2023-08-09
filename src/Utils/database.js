import { doc, getFirestore, setDoc } from "firebase/firestore"
import app from "../firebase"

export const db = getFirestore(app)

export const addBusToDatabase = (data) => {
  console.log(data.uid)
  setDoc(doc(db, "Buses", data.uid), { ...data })
}
export const addTrainToDatabase = (data) => {
  setDoc(doc(db, "Trains", data.uid), { ...data })
}
