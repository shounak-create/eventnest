import mongoose from "mongoose";

const ticketTypeSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true
    },

    name: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    quantity: {
      type: Number,
      required: true
    },

    sold: {
      type: Number,
      default: 0
    },

    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const TicketType = mongoose.model(
  "TicketType",
  ticketTypeSchema
);

export default TicketType;