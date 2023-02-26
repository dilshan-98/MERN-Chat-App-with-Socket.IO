import express from "express";
import dotenv from "dotenv";
import chats from "./data/data.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("API is running!");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const id = req.params.id;
    const chat = chats.find(chat => chat._id === id); //find only one chat instead of filter

    res.send(chat);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
});