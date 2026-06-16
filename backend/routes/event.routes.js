import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent
} from "../controllers/event.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";


const router = express.Router();
//authMiddleware,roleMiddleware("organizer", "admin"),
//authMiddleware,roleMiddleware("organizer", "admin"),
router.post("/",createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.delete("/",deleteEvent);

export default router;