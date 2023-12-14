import { Route, Routes } from "react-router-dom";
import UserRegister from "../pages/Public/UserRegister";
import Login from "../pages/Public/Login";

export default function PublicRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user-register" element={<UserRegister />} />
    </Routes>
  );
}
