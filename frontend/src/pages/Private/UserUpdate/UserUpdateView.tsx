import "./index.scss";
import { State, User } from "../../../types";
import React, { useEffect, useState } from "react";
import { getDataByCep } from "../../../services/CEP";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { getUserById, putUser } from "../../../services/User";
import { useNavigate, useParams } from "react-router-dom";
import { getStatesOrderByName } from "../../../services/ServicoDadosIBGE";
import { formatarCEP, formatarCPF, formatarPhone } from "../../../utils/masks";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<User>(INITIAL_VALUES_FORMDATA);

  useEffect(() => {
    if (formData.cep.length === 9) {
      const cepOnlyNumbers = formData.cep.replace("-", "");
      getDataByCep(cepOnlyNumbers, formData, setFormData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.cep]);

  useEffect(() => {
    if(id) {
      getUserById(atob(id), setFormData);
    }
  }, [id]);

  useEffect(() => {
    getStatesOrderByName(setStates);
  }, []);

  return (
    <React.Fragment>
      <Header />

      <main id="user-update">  
        <form
          onSubmit={(e) => {
            setLoading(true);
            putUser(id ? atob(id) : "0", formData, history, e, setLoading);
          }}
        >
          <h1>Atualização de Usuário</h1>
  
          <section className="form-container">
            <Box className="division">
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
                  setFormData({
                    ...formData,
                    phone: formatarPhone(e.target.value),
                  });
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
            </Box>
  
            <Box className="division">
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
            </Box>
          </section>
  
          <Button
            className="botao"
            type="submit"
            variant="contained"
            disabled={loading}
            style={{ backgroundColor: loading ? "#A603038A" : "#A60303" }}
          >
            {loading ? (
              <div className="container-loader">
                <div className="dot"></div>
              </div>
            ) : (
              <React.Fragment>Atualizar</React.Fragment>
            )}
          </Button>
        </form>
      </main>

      <Footer />
    </React.Fragment>
    );
}
