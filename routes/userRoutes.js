import { Router } from "express";
import UserController from "../controller/UserController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const router = Router();

router.get("/getUser/:id", UserController.getUser);
router.post("/getUsers", authMiddleware, UserController.getUsers);

export default router;
