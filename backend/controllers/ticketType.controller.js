import TicketType from "../models/TicketType.js";
import Event from "../models/Event.js";

// onlu for organizer
export const createTicketType = async (req, res) => {
  try {
    const {
      eventId,
      name,
      price,
      quantity,
      description
    } = req.body;

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        message: "Event not found"
      });
    }

    const ticketType = await TicketType.create({
      event: eventId,
      name,
      price,
      quantity,
      description
    });

    res.status(201).json({
      success: true,
      ticketType
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getEventTicketTypes = async (req, res) => {
  try {
    const ticketTypes = await TicketType.find({
      event: req.params.eventId
    });

    res.status(200).json({
      success: true,
      ticketTypes
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};