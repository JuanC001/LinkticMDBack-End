import { Router } from "express";
import userController from "../Controllers/User.controller.js";

const router = Router();

router.post("/reservation", userController.createReservation);
router.put("/reservation/:id", userController.updateReservation);
router.delete("/reservation/:id", userController.deleteReservation);
router.get("/reservations", userController.getReservations);

export default router;