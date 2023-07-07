import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MapPage } from "./pages/MapPage/MapPage";
import { PageNotFound } from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import { BrowserCheck } from "./components/BrowserCheck";
import { NotSupport } from "./pages/NotSupport";
import { Login } from "./pages/Login";
import { ProfilePage } from "./pages/ProfilePage";

export default function App() {
  return (
    <BrowserRouter>
      <BrowserCheck />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showmap" element={<MapPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="*" element={<PageNotFound />} />
        <Route path="/not-supported" element={<NotSupport />} />
      </Routes>
    </BrowserRouter>
  );
}
