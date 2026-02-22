import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);

// CORS configuration for both frontend URLs
const corsOptions = {
    origin: [
        "http://localhost:3000",
        process.env.FRONTEND_URL || "https://webrtc-video-platform.vercel.app"
    ],
    credentials: true
};

const io = connectToSocket(server, corsOptions);

app.set("port", (process.env.PORT || 8000))
app.use(cors(corsOptions));
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/videochatplatform"
        const connectionDb = await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 30000
        })

        console.log(`✓ MongoDB Connected: ${connectionDb.connection.host}`)
        server.listen(app.get("port"), () => {
            console.log(`✓ Server listening on PORT ${app.get("port")}`)
        });
    } catch (error) {
        console.error("✗ Failed to start server:", error)
        process.exit(1)
    }
}

start();