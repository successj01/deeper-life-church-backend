import mongoose from "mongoose";

const ministrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    leader: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    meetingDay: {
      type: String,
      default: "",
    },

    meetingTime: {
      type: String,
      default: "",
    },

  },
  {
    timestamps: true,
  }
);


const Ministry =
  mongoose.models.Ministry ||
  mongoose.model("Ministry", ministrySchema);


export default Ministry;