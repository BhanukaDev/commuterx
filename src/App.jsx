import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { MapPage } from "./pages/MapPage/MapPage"
import { PageNotFound } from "./pages/PageNotFound"
import SignUp from "./pages/SignUp"
import { BrowserCheck } from "./components/BrowserCheck"
import { NotSupport } from "./pages/NotSupport"
import { Login } from "./pages/Login"
import { ProtectedRoutes } from "./components/ProtectedRoutes"
import { Home } from "./pages/HomePage/Home"
import { DriverProfilePage } from "./pages/DriverProfilePage"
import { CommuterProfilePage } from "./pages/CommuterProfilePage"
import { Registration } from "./pages/Registration"
import { useContext } from "react"
import { authContext } from "./components/User"

export default function App() {
  const user = useContext(authContext)
  console.log(user?.userData?.role === "commuter")
  return (
    <BrowserRouter>
      <BrowserCheck />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/busmap" element={<MapPage />} />
          <Route path="/trainmap" element={<MapPage />} />
          <Route
            path="/profile"
            exact
            element={
              user?.userData?.role === "commuter" ? (
                <Navigate to={"/profile/commuter"} replace />
              ) : (
                <Navigate to={"/profile/driver"} replace />
              )
            }
          ></Route>
          <Route exact path="/profile/driver" element={<DriverProfilePage />} />
          <Route
            exact
            path="/profile/commuter"
            element={<CommuterProfilePage />}
          />
          <Route path="/registration" element={<Registration />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
        <Route path="/not-supported" element={<NotSupport />} />
      </Routes>
    </BrowserRouter>
  )
}
