import "./index.scss";
import { User } from "../../../types";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import React, { useEffect, useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import Progress from "../../../components/Progress";
import NoContent from "../../../components/NoContent";
import TableContainer from "@mui/material/TableContainer";
import { deleteUser, getUsers } from "../../../services/User";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getUsers(setUsers, setLoading);
  }, [reload]);

  return (
    <React.Fragment>
      <Header />

      <main id="home-admin">
        <section id="users">
          <h1>Lista de Usuários</h1>

          {loading ? (
            <Progress />
          ) : users.length > 0 ? (
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
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
                              deleteUser(user.id, reload, setReload);
                            }}
                          >
                            <IconButton>
                              <Delete />
                            </IconButton>
                          </Tooltip>
                        </StyledTableCell>
                      </StyledTableRow>
                    ) : (
                      <React.Fragment key={index}></React.Fragment>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <NoContent />
          )}
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
}
