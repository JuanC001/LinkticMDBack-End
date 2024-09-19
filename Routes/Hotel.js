import { Router } from "express";
import hotelController from "../Controllers/Hotel.controller.js";

const router = Router();

router.get("/", hotelController.getHotels);
router.post("/", hotelController.createHotel);
router.get("/:id", hotelController.getHotel);
router.put("/:id", hotelController.updateHotel);
router.delete("/:id", hotelController.deleteHotel);

export default router;