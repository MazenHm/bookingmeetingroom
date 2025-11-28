// server.js
require("dotenv").config();  // MUST be the very first line
console.log("DEBUG MONGO_URI:", process.env.MONGO_URI);

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const roomRoutes = require("./routes/roomRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// CORS FIX (must come BEFORE routes and BEFORE auth)
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

// Allow preflight OPTIONS requests
app.options("*", cors());

// Parse JSON body
app.use(express.json());

// Connect to MongoDB
connectDB();

// AUTH ROUTES
app.use("/api/auth", authRoutes);

// ROOM ROUTES
app.use("/api", roomRoutes);

// Simple health check
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
