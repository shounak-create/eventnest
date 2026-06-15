import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      default: null
    },

    googleId: {
      type: String,
      default: null
    },

    role: {
      type: String,
      enum: ["attendee", "organizer", "admin"],
      default: "attendee"
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

export default User;