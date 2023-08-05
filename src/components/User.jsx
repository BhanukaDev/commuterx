/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const authContext = createContext({})
export const setAuthContext = createContext(null)

export const User = ({ children }) => {
  const [user, setUser] = useState({})

  return (
    <authContext.Provider value={user}>
      <setAuthContext.Provider value={setUser}>
        {children}
      </setAuthContext.Provider>
    </authContext.Provider>
  )
}
