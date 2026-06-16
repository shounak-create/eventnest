import express from "express";
import passport from "../config/passport.js";
import {
  register,
  login
} from "../controllers/auth.controller.js";
import generateToken from "../utils/generateToken.js";
// import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

//google verification
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false
  }),
  (req, res) => {
    const token = generateToken(
      req.user._id,
      req.user.role
    );

    res.status(200).json({
      user: req.user,
      token
    });
  }
);

export default router;