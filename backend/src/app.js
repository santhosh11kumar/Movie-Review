import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(express.json({ limit: "24kb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173', // Adjust to your frontend URL
    methods: ['GET', 'POST'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));
import router from "./routes/Comments.routes.js"; // Corrected import statement

app.use("/v2", router); // Use `router` instead of `commentRouter`

export { app };