/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../Utils/auth"
import {
  getDataByCollectionName,
  getUserRole,
  roleReturnsCollectionName,
} from "../Utils/database"
import { Loading } from "../pages/Loading"

export const authContext = createContext({})
export const setAuthContext = createContext(null)
export const loadingContext = createContext(false)

export const updateCurrentUserState = async (currentUser, setUser) => {
  const dataFromAuth = {
    uid: currentUser?.uid,
    displayName: currentUser?.displayName,
    email: currentUser?.email,
    photoURL: currentUser?.photoURL,
    phoneNumber: currentUser?.phoneNumber,
  }
  const role = await getUserRole()
  const collectionName = roleReturnsCollectionName(role)

  const dataFromCollection = await getDataByCollectionName(collectionName)
  const allUserData = {
    authData: { ...dataFromAuth, role: role },
    userData: { ...dataFromCollection },
  }
  setUser(allUserData)
  console.log(allUserData)
}

export const User = ({ children }) => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  console.log(auth?.currentUser)

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      setIsLoading(true)

      if (currentUser) {
        await updateCurrentUserState(currentUser, setUser)
        setIsLoading(false)
      } else {
        setUser({})
        setIsLoading(false)
      }
    })
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <authContext.Provider value={user}>
      <loadingContext.Provider value={isLoading}>
        <setAuthContext.Provider value={setUser}>
          {children}
        </setAuthContext.Provider>
      </loadingContext.Provider>
    </authContext.Provider>
  )
}

// here is the shape of the user state object
// it may seem like their some duplication of data nut this is there to minimise reads and writes to the database
// example, photourl of the gmail account may be need and it should be permanant, but the profile pic of the account can change

// {
//  authData is data that must not be changed, it is data taken from the auth.currentUser object and also has the role (role is present in both authData and userData)
//  authData:{
//    displayName,
//    email,
//    phoneNumber,
//    photoURL,
//    role,
//    uid,
//  },
//  userData contains the data stored in the respective database
//  such as bus data in bus database
//  userData:{
//    ...userData,
//  }
// }
