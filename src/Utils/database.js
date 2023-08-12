import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore"
import app from "../firebase"
import { auth, getUID } from "./auth"

export const db = getFirestore(app)

export const addToUniteDB = async (id, role) => {
  setDoc(doc(db, "Unite", id), {
    role: role,
  })
}
export const addBusToDatabase = async (data) => {
  console.log(data.uid)
  setDoc(doc(db, "Buses", data.uid), { ...data })
  addToUniteDB(data.uid, "bus")
}
export const addTrainToDatabase = async (data) => {
  setDoc(doc(db, "Trains", data.uid), { ...data })
  addToUniteDB(data.uid, "train")
}
export const addCommuterToDatabase = async () => {
  const user = auth.currentUser
  setDoc(doc(db, "Commuters", user.uid), {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
  })
  addToUniteDB(user.uid, "commuter")
}

export const getUserRole = async () => {
  const docRef = doc(db, "Unite", getUID())
  const docSnap = await getDoc(docRef)
  // console.log(docSnap.data())
  if (docSnap.exists()) {
    return docSnap.data().role
  } else {
    return ""
  }
}
export const getDataByCollectionName = async (collectionName) => {
  console.log(collectionName)
  console.log(getUID())
  const docRef = doc(db, collectionName, getUID())
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log("No such document!")
    return {}
  }
}

export const getMarkerIcon = async (role) => {
  //const userRole = await getUserRole()

  switch (role) {
    case "bus":
      return "mapIcons/busprt.png"
    case "train":
      return "mapIcons/train.png"
    default:
      return "mapIcons/manicon.png"
  }
}

export const getSearchRoutes = async (keyword) => {
  // Get a reference to the "Routes" collection
  const routesCollectionRef = collection(db, "Routes")

  const queryCriteria = query(
    routesCollectionRef,
    where("keywords", "array-contains", keyword)
  )

  try {
    const querySnapshot = await getDocs(queryCriteria)
    let results = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      //console.log("Document data:", data)
      results.push(data)
    })

    return results
  } catch (error) {
    return []
    //console.error("Error getting documents:", error)
  }
}
export const roleReturnsCollectionName = (userRole) => {
  switch (userRole) {
    case "bus":
      return "Buses"
    case "train":
      return "Trains"
    case "commuter":
      return "Commuters"
    default:
      return ""
  }
}
