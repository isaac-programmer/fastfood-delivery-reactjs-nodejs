import React from "react";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import useAuthContext from "../context/Auth/hook";

export default function Rotas(): JSX.Element {
  const { signed } = useAuthContext();

  return (
    <React.Fragment>
      {signed ? <PrivateRoutes /> : <PublicRoutes />}
    </React.Fragment>
  );
}
