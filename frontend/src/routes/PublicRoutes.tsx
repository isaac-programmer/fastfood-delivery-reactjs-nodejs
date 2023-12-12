import { Route, Routes } from "react-router-dom";
import Home from "../pages/Private/Home/HomeView";

export default function PublicRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
