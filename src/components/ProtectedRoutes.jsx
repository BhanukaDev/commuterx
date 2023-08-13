/* eslint-disable react/prop-types */
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { authContext, loadingContext } from "./User"
import { Loading } from "../pages/Loading"

export const ProtectedRoutes = () => {
  const user = useContext(authContext)
  const isLoading = useContext(loadingContext)
  if (isLoading) return <Loading />
  console.log(isLoading)
  return user.authData ? <Outlet /> : <Navigate to={"/login"} />
  // return <authContext.Provider>{children}</authContext.Provider>
}
