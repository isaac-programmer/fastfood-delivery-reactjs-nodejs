import express from "express";
import { UserController } from "../controllers/UserController";
import { LoginController } from "../controllers/LoginController";
import { ProductController } from "../controllers/ProductController";

const router = express.Router();

const userController = new UserController();
const loginController = new LoginController();
const productsController = new ProductController();

// Rotas - User
router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUserById);
router.post("/user", userController.postUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

// Rota - Login
router.post("/login", loginController.login);

// Rota - Product
router.get("/products", productsController.getProducts);

export default router;