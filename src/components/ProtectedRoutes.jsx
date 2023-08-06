/* eslint-disable react/prop-types */
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { authContext } from "./User"

export const ProtectedRoutes = () => {
  const user = useContext(authContext)

  return user ? <Outlet /> : <Navigate to={"/login"} />
  // return <authContext.Provider>{children}</authContext.Provider>
}
