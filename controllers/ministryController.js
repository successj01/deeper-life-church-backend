import Ministry from "../models/Ministry.js";


// Create Ministry
export const createMinistry = async (req, res) => {
  try {
    const ministry = await Ministry.create(req.body);

    res.status(201).json({
      success: true,
      message: "Ministry created successfully",
      ministry,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Get All Ministries
export const getMinistries = async (req, res) => {
  try {
    const ministries = await Ministry.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: ministries.length,
      ministries,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Get Single Ministry
export const getMinistry = async (req, res) => {
  try {
    const ministry = await Ministry.findById(req.params.id);

    if (!ministry) {
      return res.status(404).json({
        success: false,
        message: "Ministry not found",
      });
    }

    res.status(200).json({
      success: true,
      ministry,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Update Ministry
export const updateMinistry = async (req, res) => {
  try {
    const ministry = await Ministry.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!ministry) {
      return res.status(404).json({
        success: false,
        message: "Ministry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Ministry updated successfully",
      ministry,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Delete Ministry
export const deleteMinistry = async (req, res) => {
  try {
    const ministry = await Ministry.findByIdAndDelete(
      req.params.id
    );

    if (!ministry) {
      return res.status(404).json({
        success: false,
        message: "Ministry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Ministry deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};