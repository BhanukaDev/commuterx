/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
  const auth = 0
  return auth.token ? <Outlet /> : <Navigate to={"/login"} />
  // return <authContext.Provider>{children}</authContext.Provider>
}
