/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
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

export const updateCurrentUserState = async (currentUser, setUser) => {
  const dataFromAuth = {
    displayName: currentUser.displayName,
    email: currentUser.email,
    photoURL: currentUser.photoURL,
    phoneNumber: currentUser.phoneNumber,
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

  onAuthStateChanged(auth, async (currentUser) => {
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
    updateCurrentUserState(currentUser, setUser)
  })

  return (
    <authContext.Provider value={user}>
      <setAuthContext.Provider value={setUser}>
        {children}
      </setAuthContext.Provider>
    </authContext.Provider>
  )
}
