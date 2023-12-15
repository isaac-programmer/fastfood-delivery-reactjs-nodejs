import "./index.scss";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { State, User } from "../../../types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, MenuItem, TextField } from "@mui/material";
import { formatarCEP, formatarCPF, formatarPhone } from "../../../utils/masks";

const INITIAL_VALUES_FORMDATA: User = {
  id: 0,
  role: "client",
  cpf: "",
  name: "",
  email: "",
  phone: "",
  cep: "",
  state: "",
  city: "",
  bairro: "",
  address: "",
  number: "",
  complement: "",
};

export default function UserUpdateView(): JSX.Element {
  const { id } = useParams();
  const history = useNavigate();
  const [states, setStates] = useState<State[]>([]);
  const [formData, setFormData] = useState<User>(INITIAL_VALUES_FORMDATA);

  const putUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/user/${id}`, formData);
      alert("Usuário atualizado com sucesso!");

      // Redireciona para a tela home
      history("/");
    } catch(error: unknown) {
      if(error instanceof AxiosError) {
        console.log(error);

        if(error.response?.data.error === "CPF existente"){
          alert("O CPF informado já está cadastrado");
        }
      }
    }
  };

  useEffect(() => {
    if(formData.cep.length === 9) {
      const getDataByCep = async (cep: string) => {
        try {
          const { data } = await axios.get(
            `https://viacep.com.br/ws/${cep}/json/`
          );

          // Caso o CEP não exista, a API retorna 200 porém com um objeto contendo
          // um atributo 'erro' com valor 'true'.
          if(!data.erro && data.erro !== true) {
            setFormData({
              ...formData,
              city: data.localidade,
              state: data.uf,
              address: data.logradouro,
              bairro: data.bairro
            });
          } else {
            alert("CEP inválido");
          }
        } catch (error) {
          console.log(error);
        }
      };

      const cepOnlyNumbers = formData.cep.replace("-", "");
      getDataByCep(cepOnlyNumbers);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.cep]);

  useEffect(() => {
    if(id && id != "") {
      const getUserById = async () => {
        try {
          const { data } = await axios.get(`http://localhost:5000/user/${id}`);
          setFormData(data);
        } catch(error) {
          console.log(error);
          alert("Usuário não encontrado");
        }
      }
  
      getUserById();
    }
  }, [id]);

  useEffect(() => {
    const getStatesOrderByName = async () => {
      try {
        const result = await axios.get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
        );

        setStates(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getStatesOrderByName();
  }, []);

  return (
    <main>
      <Link to="/">Voltar</Link>
      
      <form
        onSubmit={(e) => {
          putUser(e);
        }}
      >
        <h1>Atualização de Usuário</h1>

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

        <TextField
          required
          type="text"
          label="Nome Completo"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />

        <TextField
          required
          type="email"
          label="E-mail"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />

        <TextField
          required
          type="text"
          label="Telefone"
          value={formData.phone}
          inputProps={{ minLength: 15, maxLength: 15 }}
          onChange={(e) => {
            setFormData({ ...formData, phone: formatarPhone(e.target.value) });
          }}
        />

        <TextField
          required
          type="text"
          label="CEP"
          value={formData.cep}
          inputProps={{ minLength: 9, maxLength: 9 }}
          onChange={(e) => {
            setFormData({ ...formData, cep: formatarCEP(e.target.value) });
          }}
        />

        <TextField
          select
          required
          type="text"
          label="Estado"
          value={formData.state}
          onChange={(e) => {
            setFormData({ ...formData, state: e.target.value });
          }}
        >
          {states.map((state: State, index: number) => (
            <MenuItem key={index} value={state.sigla}>
              {state.nome}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          required
          type="text"
          label="Cidade"
          value={formData.city}
          onChange={(e) => {
            setFormData({ ...formData, city: e.target.value });
          }}
        />

        <TextField
          required
          type="text"
          label="Bairro"
          value={formData.bairro}
          onChange={(e) => {
            setFormData({ ...formData, bairro: e.target.value });
          }}
        />

        <TextField
          required
          type="text"
          label="Endereço"
          value={formData.address}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
          }}
        />

        <TextField
          required
          label="Nº"
          type="number"
          value={formData.number}
          onChange={(e) => {
            setFormData({ ...formData, number: e.target.value });
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          required
          type="text"
          label="Complemento"
          value={formData.complement}
          onChange={(e) => {
            setFormData({ ...formData, complement: e.target.value });
          }}
        />

        <Button className="botao" type="submit" variant="contained">
          Atualizar
        </Button>
      </form>
    </main>
  );
}