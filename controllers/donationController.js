import Donation from "../models/Donation.js";


// Create Donation
export const createDonation = async (req, res) => {
  try {

    const donation = await Donation.create(req.body);

    res.status(201).json({
      success: true,
      message: "Donation created successfully",
      donation,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Get Donation History
export const getDonations = async (req, res) => {
  try {

    const donations = await Donation.find()
      .sort({ createdAt: -1 });


    res.status(200).json({
      success: true,
      count: donations.length,
      donations,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Get Single Donation
export const getDonation = async (req, res) => {
  try {

    const donation = await Donation.findById(req.params.id);


    if (!donation) {
      return res.status(404).json({
        success: false,
        message: "Donation not found",
      });
    }


    res.status(200).json({
      success: true,
      donation,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Update Donation Status
export const updateDonation = async (req, res) => {
  try {

    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );


    if (!donation) {
      return res.status(404).json({
        success: false,
        message: "Donation not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Donation updated successfully",
      donation,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Delete Donation
export const deleteDonation = async (req, res) => {
  try {

    const donation = await Donation.findByIdAndDelete(
      req.params.id
    );


    if (!donation) {
      return res.status(404).json({
        success: false,
        message: "Donation not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Donation deleted successfully",
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};