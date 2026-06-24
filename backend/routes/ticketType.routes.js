import express from "express";
import {
  createTicketType,
  getEventTicketTypes
} from "../controllers/ticketType.controller.js";

const router = express.Router();

router.post("/", createTicketType);

router.get("/:eventId", getEventTicketTypes);

export default router;