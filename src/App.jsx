import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { PageNotFound } from "./pages/PageNotFound"
import { BrowserCheck } from "./components/BrowserCheck"
import { ProtectedRoutes } from "./components/ProtectedRoutes"
import { Suspense, lazy, useContext } from "react"
const Home = lazy(() => import("./pages/HomePage/Home"))
const SignUp = lazy(() => import("./pages/SignUp"))
const Login = lazy(() => import("./pages/Login"))
const MapPage = lazy(() => import("./pages/MapPage/MapPage"))
//import { MapPage } from "./pages/MapPage/MapPage"
const DriverProfilePage = lazy(() => import("./pages/DriverProfilePage"))
const CommuterProfilePage = lazy(() => import("./pages/CommuterProfilePage"))
const Registration = lazy(() => import("./pages/Registration"))
const NotSupport = lazy(() => import("./pages/NotSupport"))
import { authContext } from "./components/User"
import { Loading } from "./pages/Loading"

export default function App() {
  const user = useContext(authContext)
  console.log(user?.userData?.role === "commuter")
  return (
    <BrowserRouter>
      <BrowserCheck />
      <Suspense fallback={<Loading />}>
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
            <Route
              exact
              path="/profile/driver"
              element={<DriverProfilePage />}
            />
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
      </Suspense>
    </BrowserRouter>
  )
}
