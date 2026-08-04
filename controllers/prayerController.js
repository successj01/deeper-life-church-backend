import PrayerRequest from "../models/PrayerRequest.js";


// Submit Prayer Request
export const createPrayerRequest = async (req, res) => {
  try {
    const prayer = await PrayerRequest.create(req.body);

    res.status(201).json({
      success: true,
      message: "Prayer request submitted successfully",
      prayer,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Get All Prayer Requests (Admin)
export const getPrayerRequests = async (req, res) => {
  try {
    const prayers = await PrayerRequest.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: prayers.length,
      prayers,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Get Single Prayer Request
export const getPrayerRequest = async (req, res) => {
  try {
    const prayer = await PrayerRequest.findById(
      req.params.id
    );

    if (!prayer) {
      return res.status(404).json({
        success: false,
        message: "Prayer request not found",
      });
    }

    res.status(200).json({
      success: true,
      prayer,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Update Prayer Status
export const updatePrayerStatus = async (req, res) => {
  try {
    const prayer = await PrayerRequest.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );


    if (!prayer) {
      return res.status(404).json({
        success: false,
        message: "Prayer request not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Prayer status updated",
      prayer,
    });


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Delete Prayer Request
export const deletePrayerRequest = async (req, res) => {
  try {
    const prayer = await PrayerRequest.findByIdAndDelete(
      req.params.id
    );


    if (!prayer) {
      return res.status(404).json({
        success: false,
        message: "Prayer request not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Prayer request deleted successfully",
    });


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};