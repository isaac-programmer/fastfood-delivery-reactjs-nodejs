import "./index.scss";
import axios from "axios";
import { User } from "../../../types";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import React, { useEffect, useState } from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#59320F",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function HomeAdminView(): JSX.Element {
  const history = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/users");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (idUser: number) => {
    try {
      await axios.delete(`http://localhost:5000/user/${idUser}`);
      alert("Usuário deletado com sucesso!");
      setReload(!reload);
    } catch (error) {
      console.log(error);
      alert("Erro ao deletar usuário!");
    }
  };

  useEffect(() => {
    getUsers();
  }, [reload]);

  return (
    <React.Fragment>
      <Header />

      <main id="home-admin">
        <section id="users">
          <h1>Lista de Usuários</h1>

          <TableContainer component={Paper} id="users-table">
            <Table aria-label="customized table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align="center">Usuário</StyledTableCell>
                  <StyledTableCell align="center">Nome</StyledTableCell>
                  <StyledTableCell align="center">Telefone</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">
                    Cidade/Estado
                  </StyledTableCell>
                  <StyledTableCell align="center">Endereço</StyledTableCell>
                  <StyledTableCell align="center">Ações</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {users.map((user: User, index: number) =>
                  // Será exibido apenas os usuários clientes
                  user.role != "admin" ? (
                    <StyledTableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {user.id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user.phone}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user.email}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user.city + "/" + user.state}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user.address}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Tooltip
                          title="Alterar Usuário"
                          onClick={() => {
                            history(`/user-update/${user.id}`);
                          }}
                        >
                          <IconButton>
                            <Edit />
                          </IconButton>
                        </Tooltip>

                        <Tooltip
                          title="Deletar Usuário"
                          onClick={() => {
                            deleteUser(user.id);
                          }}
                        >
                          <IconButton>
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </StyledTableCell>
                    </StyledTableRow>
                  ) : (
                    <></>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
}
