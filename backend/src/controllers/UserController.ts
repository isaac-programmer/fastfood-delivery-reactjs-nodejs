import { User } from "../entities/User";
import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";

export class UserController {
  // Rota para obter todos os usuários
  async getUsers(req: Request, res: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    res.status(200).json(users);
  }

  // Rota para obter um usuário por ID
  async getUserById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const userRepository = AppDataSource.getRepository(User);

    try {
      const user = await userRepository.findOneByOrFail({ id: id });

      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  }

  // Rota para inserir um usuário
  async postUser(req: Request, res: Response) {
    const userRepository = AppDataSource.getRepository(User);

    // Verificar se o CPF já existe na base de dados
    const existingUser = await userRepository.findOne({ where: { cpf: req.body.cpf } });

    if(existingUser) {
      res.status(409).json({ error: "CPF existente" });
      return;
    }

    // Caso o CPF não exista, criar e salvar o usuário
    const createdUser = userRepository.create(req.body);

    try {
      await userRepository.save(createdUser);
      res.status(201).json(createdUser);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      res.status(500).json({ error: "Erro ao criar o usuário" });
    }
  }

  // Rota para atualizar um usuário
  async updateUser(req: Request, res: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const id = Number(req.params.id);
    const updatedUserData = req.body;

    try {
      const userToUpdate = await userRepository.findOneBy({ id: id });

      if (!userToUpdate) {
        res.status(404).json({ error: "Usuário não encontrado" });
        return;
      }

      const updatedUser = userRepository.merge(userToUpdate, updatedUserData);
      await userRepository.save(updatedUser);

      res.status(200).json(updatedUser);
    } catch (error: unknown) {
      res.status(500).json({ error: "Error ao atualizar o usuário" });
    }
  }

  // Rota para deletar um usuário
  async deleteUser(req: Request, res: Response) {
    const id = Number(req.params.id);
    const userRepository = AppDataSource.getRepository(User);

    try {
      const user = await userRepository.findOneByOrFail({ id: id });

      await userRepository.remove(user);

      res.status(200).json({ message: "Usuário deletado" });
    } catch (error) {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  }
}
