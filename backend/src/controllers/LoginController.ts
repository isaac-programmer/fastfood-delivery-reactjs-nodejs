import { User } from "../entities/User";
import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";

export class LoginController {
  // Rota para efetuar o login
  async login(req: Request, res: Response) {
    const cpf = req.body.cpf;
    const userRepository = AppDataSource.getRepository(User);

    console.log(cpf);

    try {
      const user = await userRepository.findOneByOrFail({ cpf: cpf });
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  }
}