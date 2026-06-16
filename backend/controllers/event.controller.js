import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      city,
      venue,
      date,
      banner
    } = req.body;

    const event = await Event.create({
      title,
      description,
      category,
      city,
      venue,
      date,
      banner,
      organizer: req.user._id
    });

    res.status(201).json({
      success: true,
      event
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .populate("organizer", "name email")
      .sort({ date: 1 });

    res.status(200).json({
      success: true,
      events
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate("organizer", "name email");

    if (!event) {
      return res.status(404).json({
        message: "Event not found"
      });
    }

    res.status(200).json({
      success: true,
      event
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found"
      });
    }

    await event.deleteOne();

    res.status(200).json({
      success: true,
      message: "Event deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};