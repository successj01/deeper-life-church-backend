import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import ministryRoutes from "./routes/ministryRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";
import prayerRoutes from "./routes/prayerRoutes.js";
import sermonRoutes from "./routes/sermonRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import eventsRoutes from "./routes/eventsRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(
  cors({origin: ["https://deeper-life-church-teal.vercel.app", "http://localhost:3000"],
  credentials: true,

})
)

app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/ministries", ministryRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/prayers", prayerRoutes);
app.use("/api/sermons", sermonRoutes);
app.use("/api/users", userRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/donation", donationRoutes);
app.use("/api/announcements", announcementRoutes);


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Deeper Life Church API",
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});