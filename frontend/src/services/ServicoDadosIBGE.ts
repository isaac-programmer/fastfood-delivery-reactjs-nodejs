import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { State } from "../types";

// Obtém as informações dos estados, ordenados por nome, utilizando a API do IBGE 
export const getStatesOrderByName = async (
  setStates: Dispatch<SetStateAction<State[]>>
) => {
  try {
    const result = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");

    setStates(result.data);
  } catch (error) {
    console.log(error);
  }
};
