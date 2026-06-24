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
router.post("/",authMiddleware,roleMiddleware("organizer", "admin"),createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEventById);
// router.delete("/:id",deleteEvent);
router.delete("/:id",authMiddleware,roleMiddleware("organizer", "admin"),deleteEvent);

export default router;