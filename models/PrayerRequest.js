import mongoose from "mongoose";

const prayerRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
    },

    prayerRequest: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "prayed", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);


const PrayerRequest =
  mongoose.models.PrayerRequest ||
  mongoose.model("PrayerRequest", prayerRequestSchema);


export default PrayerRequest;