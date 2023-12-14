import { Route, Routes } from "react-router-dom";
import useAuthContext from "../context/Auth/hook";
import Home from "../pages/Private/Home/HomeView";
import HomeAdmin from "../pages/Private/HomeAdmin";
import UserUpdate from "../pages/Private/UserUpdate";

export default function PrivateRoutes(): JSX.Element {
  const { userRole } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={userRole === "admin" ? <HomeAdmin /> : <Home />} />
      <Route path="/user-update/:id" element={<UserUpdate />} />
    </Routes>
  );
}