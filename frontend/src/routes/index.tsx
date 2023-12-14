import React, { useEffect, useState } from "react";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

export default function Rotas(): JSX.Element {
  const [signed, setSigned] = useState<boolean>(false);

  useEffect(() => {
    console.log("olá");
    setSigned(Boolean(sessionStorage.getItem("signed")));
  }, []);

  return (
    <React.Fragment>
      {signed ? <PrivateRoutes /> : <PublicRoutes />}
    </React.Fragment>
  );
}
