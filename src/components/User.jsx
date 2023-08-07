/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
// import { signInWithToken } from "../Utils/auth"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../Utils/auth"

export const authContext = createContext({})
export const setAuthContext = createContext(null)

export const User = ({ children }) => {
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    console.log(currentUser)
  })
  // console.log(user)
  // useEffect(() => {
  //   // let jwtToken = localStorage.getItem("JWTTOKEN")
  //   // if (jwtToken) signInWithToken(jwtToken)
  //   // console.log(jwtToken)
  // }, [])
  return (
    <authContext.Provider value={user}>
      <setAuthContext.Provider value={setUser}>
        {children}
      </setAuthContext.Provider>
    </authContext.Provider>
  )
}
