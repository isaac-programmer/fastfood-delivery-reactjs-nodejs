import "./index.scss";
import React, { useState } from "react";
import { Login } from "../../../types";
import { Button, TextField } from "@mui/material";
import { formatarCPF } from "../../../utils/masks";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../../context/Auth/hook";
import { login } from "../../../services/Login";

export default function LoginView(): JSX.Element {
  const history = useNavigate();
  const { setUserSigned, setUserRole } = useAuthContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Login>({ cpf: "" });

  return (
    <main id="login">
      <form
        onSubmit={(e) => {
          setLoading(true);
          login(formData, history, e, setLoading, setUserRole, setUserSigned);
        }}
      >
        <h1>Login</h1>

        <TextField
          required
          type="text"
          label="CPF"
          value={formData.cpf}
          inputProps={{ maxLength: 14, minLength: 14 }}
          onChange={(e) => {
            setFormData({ ...formData, cpf: formatarCPF(e.target.value) });
          }}
        />

        <Button
          type="submit"
          className="botao"
          variant="contained"
          disabled={loading}
          style={{ backgroundColor: loading ? "#A603038A" : "#A60303" }}
        >
          {loading ? (
            <div className="container-loader">
              <div className="dot"></div>
            </div>
          ) : (
            <React.Fragment>Entrar</React.Fragment>
          )}
        </Button>

        <Link to="/user-register" id="link-register">
          Não possui uma conta? Cadastre-se aqui
        </Link>
      </form>

      <section className="side-image">
        <img id="image" src="public/svg/delivery-02.svg" />
      </section>
    </main>
  );
}
