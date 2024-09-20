import { Router } from "express";
import userController from "../Controllers/User.controller.js";
import { validateJWT } from "../Middleware/validateJWT.js";
const router = Router();

router.post("/reservation", validateJWT, userController.createReservation);
router.put("/reservation/:id", validateJWT, userController.updateReservation);
router.delete("/reservation/:id", validateJWT, userController.deleteReservation);
router.get("/reservations/:id", validateJWT, userController.getReservations);

export default router;