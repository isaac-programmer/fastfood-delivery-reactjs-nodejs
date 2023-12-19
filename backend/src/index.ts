import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { MySQLGetUsersRepository } from "./repositories/get-users/mysql-get-users";
import { GetUsersController } from "./controllers/get-users/get-users";

config();

const app = express();
const port = process.env.PORT || 5000;

// let qtdInsertedUsers = 1;

// Habilitando o CORS
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// Middleware para parsear JSON do corpo da requisição
app.use(express.json());

// Rota para obter todos os usuários
app.get("/users", async (req, res) => {
  const mysqlGetUsersRepository = new MySQLGetUsersRepository();

  const getUsersController = new GetUsersController(mysqlGetUsersRepository);

  const { statusCode, body } = await getUsersController.handle();

  res.send(body).status(statusCode);
});

app.listen(port, () => {
  console.log(`App escutando na porta ${port}`);
});
