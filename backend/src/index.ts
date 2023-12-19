import express from "express";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 5000;

let qtdInsertedUsers = 1;

// Habilitando o CORS
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// Middleware para parsear JSON do corpo da requisição
app.use(express.json());

app.listen(port, () => {
  console.log(`App escutando na porta ${port}`);
});
