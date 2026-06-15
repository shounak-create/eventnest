import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "API is working"
    });
});
export default app;