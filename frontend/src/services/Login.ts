import axios from "axios";
import { Login } from "../types";
import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

// Efetua o login do usuário no sistema
export const login = async (
  formData: Login,
  history: NavigateFunction,
  e: React.FormEvent<HTMLFormElement>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setUserRole: Dispatch<SetStateAction<string>>,
  setUserSigned: Dispatch<SetStateAction<boolean>>
) => {
  e.preventDefault();

  try {
    const { data } = await axios.post(`http://localhost:5000/login`, formData);

    sessionStorage.setItem("userSigned", "true");
    sessionStorage.setItem("userRole", `${data.role}`);

    setUserSigned(true);
    setUserRole(data.role);

    history("/");
  } catch (error: unknown) {
    console.log(error);
    alert("Erro ao efetuar o login! Verifique o CPF informado");
  } finally {
    setLoading(false);
  }
};
