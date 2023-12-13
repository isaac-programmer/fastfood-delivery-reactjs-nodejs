import { Route, Routes } from "react-router-dom";
import Home from "../pages/Private/Home/HomeView";
import UserUpdate from "../pages/Private/UserUpdate";

export default function PrivateRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-update/:id" element={<UserUpdate />} />
    </Routes>
  );
}