import cors from "cors";
import 'reflect-metadata';
import express from "express";
import { config } from "dotenv";
import router from "./routes/routes";
import { AppDataSource } from "./database/data-source";

config();
 
const app = express();
const port = 5000;

// Configurações do CORS
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);
app.use(express.urlencoded({ extended: true }));

AppDataSource.initialize().then(async() => {
  console.log("Database OK");

  app.listen(port, () => {
    console.log(`App escutando na porta ${port}`);
  });
});
