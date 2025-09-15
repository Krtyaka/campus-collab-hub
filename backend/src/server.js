import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDb } from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.get("/api/health", (req, res) => {
  console.log("Get request successful!");
  res.status(201).json({ message: "Get request running successfully!" });
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
