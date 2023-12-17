import axios from "axios";
import { User } from "../types";
import { Dispatch, SetStateAction } from "react";

// Obtém as informações de endereço do usuário com base no CEP, utilizando a API do ViaCEP 
export const getDataByCep = async (
  cep: string,
  formData: User,
  setFormData: Dispatch<SetStateAction<User>>
) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    // Caso o CEP não exista, a API retorna 200 porém com um objeto contendo
    // um atributo 'erro' com valor 'true'.
    if (!data.erro && data.erro !== true) {
      setFormData({
        ...formData,
        city: data.localidade,
        state: data.uf,
        address: data.logradouro,
        bairro: data.bairro,
      });
    } else {
      alert("CEP inválido");
    }
  } catch (error) {
    console.log(error);
  }
};
