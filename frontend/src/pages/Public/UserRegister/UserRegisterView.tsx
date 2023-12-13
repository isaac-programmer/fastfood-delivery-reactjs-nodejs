import { Button, MenuItem, TextField } from "@mui/material";
import "./index.scss";
import { useState } from "react";
import { User } from "../../../types";

export default function UserRegisterView(): JSX.Element {
  const [formData, setFormData] = useState<User>({} as User);

  return (
    <main>
      <form>
        <h1>Cadastro de Usuário</h1>

        <TextField
          required
          type="text"
          label="CPF"
          value={formData.cpf}
          onChange={(e) => {
            setFormData({ ...formData, cpf: e.target.value });
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
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />

        <TextField
          required
          type="text"
          label="CEP"
          value={formData.cep}
          onChange={(e) => {
            setFormData({ ...formData, cep: e.target.value });
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
          <MenuItem value="CE">Ceará</MenuItem>
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
            setFormData({ ...formData, number: Number(e.target.value) });
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
          Cadastrar
        </Button>
      </form>
    </main>
  );
}
