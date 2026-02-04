import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analysisRoutes from "./routes/analysis.js";
import { initWeaviate } from "./config/weaviate.js";
dotenv.config();

const app = express();

await initWeaviate();

const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());

app.use("/api/ai", analysisRoutes);

app.get("/", (req, res) => {
    res.send("ai-service is running");
});

app.listen(PORT, () => {
    console.log(`ai-service is running on port ${PORT}`);
});