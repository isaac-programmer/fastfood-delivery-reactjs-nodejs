import "./index.scss";
import { Login } from "../../../types";
import axios from "axios";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { formatarCPF } from "../../../utils/masks";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../../context/Auth/hook";

export default function LoginView(): JSX.Element {
  const history = useNavigate();
  const { setSigned } = useAuthContext();
  const [formData, setFormData] = useState<Login>({ cpf: "" });

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:5000/login`, formData);

      sessionStorage.setItem("signed", "true");
      setSigned(true);
      history("/");
    } catch(error: unknown) {
      console.log(error);
      alert("Erro ao efetuar o login! Verifique o CPF informado");
    }
  };

  return (
    <main id="login">
      <form
        onSubmit={(e) => { login(e) }}
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

        <Button className="botao" type="submit" variant="contained">
          Entrar
        </Button>

        <Link to="/user-register" id="link-register">
          Não possui uma conta? Cadastre-se aqui
        </Link>
      </form>
    </main>
  );
}
