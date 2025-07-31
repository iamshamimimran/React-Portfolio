const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const cron = require("node-cron");
const axios = require("axios");

// Route imports
const requestRoutes = require("./routes/RequestRoutes");
const otpRoutes = require("./routes/OtpRoutes");
const adminRoutes = require("./routes/adminRoutes");
const State = require("./models/State");
const BASE_URL =
  process.env.BASE_URL || "https://portfolio-backend-njcj.onrender.com";
dotenv.config();
connectDB();

const app = express();

// CORS setup
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://shamimimran.vercel.app",
    "https://portfolio-backend-njcj.onrender.com",
    "https://shamimimran.vercel.app/",
    "https://xeotecenergy.com/",
  ],
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use("/api/requests", requestRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/admin", adminRoutes);

// Keep-alive endpoint
app.get("/keep-alive", (req, res) => {
  console.log("Keep-alive ping received");
  res.status(200).send("Server is awake");
});

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// // Schedule keep-alive pings every 14 minutes (Render sleeps after 15 mins)
// cron.schedule("*/14 * * * *", async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/keep-alive`);
//     console.log("Keep-alive ping successful:", response.data);
//   } catch (error) {
//     console.error("Keep-alive ping failed:", error.message);
//     if (error.code === "ECONNREFUSED") {
//       console.log("Server may be down - check Render dashboard");
//     }
//   }
// });

// Route to get all states
app.get("/states", async (req, res) => {
  try {
    const states = await State.find({}, { code: 1, name: 1, _id: 0 });
    res.json(states);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch states" });
  }
});

// Route to get districts by state code
app.get("/districts/:stateCode", async (req, res) => {
  const code = req.params.stateCode.toUpperCase();

  try {
    const state = await State.findOne({ code });

    if (!state) {
      return res.status(404).json({ error: "State not found" });
    }

    res.json({
      state: state.name,
      districts: state.districts,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch districts" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
