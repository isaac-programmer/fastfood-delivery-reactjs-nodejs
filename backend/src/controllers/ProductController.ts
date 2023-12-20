import { Request, Response } from "express";
import { Product } from "../entities/Product";
import { AppDataSource } from "../database/data-source";

export class ProductController {
  // Rota para obter todos os produtos
  async getProducts(req: Request, res: Response) {
    const productRepository = AppDataSource.getRepository(Product);
    const products = await productRepository.find();

    res.status(200).json(products);
  }
}