// index.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoute.js";
import cors from "cors";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("App is running");
});
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
