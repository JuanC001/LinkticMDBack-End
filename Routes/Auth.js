import { Router } from "express";
import authController from "../Controllers/Auth.controller.js";
import { validateJWT } from "../Middleware/validateJWT.js";
const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/renew", validateJWT, authController.renew);

export default router;