import User from "../models/User.js";
import Event from "../models/Event.js";

export const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalEvents = await Event.countDocuments();

    const upcomingEvents = await Event.find({
      eventDate: { $gte: new Date() }
    })
      .sort({ eventDate: 1 })
      .limit(5);

    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalEvents,
        upcomingEvents,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};