import express from "express";
import { UserController } from "../controllers/UserController";
import { LoginController } from "../controllers/LoginController";

const router = express.Router();
const userController = new UserController();
const loginController = new LoginController();

router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUserById);
router.post("/user", userController.postUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

router.post("/login", loginController.login);

export default router;