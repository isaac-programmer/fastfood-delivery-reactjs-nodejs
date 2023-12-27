import "reflect-metadata";
import cors from "cors";
import express from "express";
import router from "./routes/routes";
import { AppDataSource } from "./database/data-source";

const app = express();
const port = 443;

// Configurações do CORS
const corsOptions = {
  origin: "https://ps-2024-estagio-ux.vercel.app/",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);
app.use(express.urlencoded({ extended: true }));

AppDataSource.initialize()
.then(async() => {
  console.log("Database OK");

  app.listen(port, () => {
    console.log(`App escutando na porta ${port}`);
  });
})
.catch((error) => {
  console.error("Erro ao inicializar o banco de dados:", error);
});
