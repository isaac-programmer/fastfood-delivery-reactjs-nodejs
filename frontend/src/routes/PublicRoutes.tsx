import { Route, Routes } from "react-router-dom";
import UserRegister from "../pages/Public/UserRegister";

export default function PublicRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<UserRegister />} />
    </Routes>
  );
}
