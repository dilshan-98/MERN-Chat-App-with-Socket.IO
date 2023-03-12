import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();

//allow json from FE
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running!");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
});