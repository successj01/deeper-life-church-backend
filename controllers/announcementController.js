import Announcement from "../models/Announcement.js";


// Create Announcement
export const createAnnouncement = async (req, res) => {
  try {

    const announcement = await Announcement.create(req.body);

    res.status(201).json({
      success: true,
      message: "Announcement created successfully",
      announcement,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Get All Announcements
export const getAnnouncements = async (req, res) => {
  try {

    const announcements = await Announcement.find()
      .sort({ createdAt: -1 });


    res.status(200).json({
      success: true,
      count: announcements.length,
      announcements,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Get Single Announcement
export const getAnnouncement = async (req, res) => {
  try {

    const announcement = await Announcement.findById(
      req.params.id
    );


    if (!announcement) {
      return res.status(404).json({
        success: false,
        message: "Announcement not found",
      });
    }


    res.status(200).json({
      success: true,
      announcement,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Update Announcement
export const updateAnnouncement = async (req, res) => {
  try {

    const announcement = await Announcement.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );


    if (!announcement) {
      return res.status(404).json({
        success: false,
        message: "Announcement not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Announcement updated successfully",
      announcement,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Delete Announcement
export const deleteAnnouncement = async (req, res) => {
  try {

    const announcement = await Announcement.findByIdAndDelete(
      req.params.id
    );


    if (!announcement) {
      return res.status(404).json({
        success: false,
        message: "Announcement not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Announcement deleted successfully",
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};