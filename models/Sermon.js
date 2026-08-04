import mongoose from "mongoose";

const sermonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    speaker: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    videoUrl: {
      type: String,
      default: "",
    },

    audioUrl: {
      type: String,
      default: "",
    },

    sermonDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);


const Sermon =
  mongoose.models.Sermon ||
  mongoose.model("Sermon", sermonSchema);


export default Sermon;