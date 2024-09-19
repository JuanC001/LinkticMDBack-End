import { Router } from "express";
import authController from "../Controllers/Auth.controller.js";

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/renew", authController.renew);