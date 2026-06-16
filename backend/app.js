import express from 'express';
import cors from 'cors';
import passport from "./config/passport.js";
import authRoutes from "./routes/auth.routes.js";



const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);


app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "API is working"
    });
});
export default app;