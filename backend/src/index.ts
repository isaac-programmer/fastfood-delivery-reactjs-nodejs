import "reflect-metadata";
import cors from "cors";
import express from "express";
import router from "./routes/routes";
import { AppDataSource } from "./database/data-source";

const app = express();
const port = 5000;

// Configurações do CORS
const corsOptions = {
  origin: "*",
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

export default app;