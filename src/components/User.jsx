/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
// import { signInWithToken } from "../Utils/auth"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../Utils/auth"
import {
  getDataByCollectionName,
  getUserRole,
  roleReturnsCollectionName,
} from "../Utils/database"

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
  const role = roleReturnsCollectionName(await getUserRole())

  const dataFromCollection = await getDataByCollectionName(role)
  const allUserData = {
    authData: { ...dataFromAuth },
    userData: { ...dataFromCollection },
  }
  setUser(allUserData)
  console.log(allUserData)
}

export const User = ({ children }) => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      setIsLoading(true)
      // const dataFromAuth = {
      //   displayName: currentUser.displayName,
      //   email: currentUser.email,
      //   photoURL: currentUser.photoURL,
      //   phoneNumber: currentUser.phoneNumber,
      // }
      // const role = await getUserRole()
      // const dataFromCollection = await getDataByCollectionName(role)
      // const allUserData = {
      //   authData: { ...dataFromAuth },
      //   userData: { ...dataFromCollection },
      // }
      // setUser(allUserData)
      // console.log(allUserData)

      // if (currentUser) {
      //   setUser({
      //     authData: {
      //       displayName: currentUser?.displayName,
      //       email: currentUser?.email,
      //       photoURL: currentUser?.photoURL,
      //       phoneNumber: currentUser?.phoneNumber,
      //     },
      //     userData: {},
      //   })
      // } else {
      //   setUser({})
      // }
      if (currentUser) {
        await updateCurrentUserState(currentUser, setUser)
        setIsLoading(false)
      } else {
        setUser({})
        setIsLoading(false)
      }
    })
  }, [])

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
