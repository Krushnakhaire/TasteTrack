import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js"; // <-- corrected
import foodRouter from "./routes/foodRoute.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});