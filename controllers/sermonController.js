import Sermon from "../models/Sermon.js";


// Create Sermon
export const createSermon = async (req, res) => {
  try {

    const sermon = await Sermon.create(req.body);

    res.status(201).json({
      success: true,
      message: "Sermon created successfully",
      sermon,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Get All Sermons
export const getSermons = async (req, res) => {
  try {

    const sermons = await Sermon.find()
      .sort({ sermonDate: -1 });


    res.status(200).json({
      success: true,
      count: sermons.length,
      sermons,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Get Single Sermon
export const getSermon = async (req, res) => {
  try {

    const sermon = await Sermon.findById(req.params.id);


    if (!sermon) {
      return res.status(404).json({
        success: false,
        message: "Sermon not found",
      });
    }


    res.status(200).json({
      success: true,
      sermon,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Update Sermon
export const updateSermon = async (req, res) => {
  try {

    const sermon = await Sermon.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );


    if (!sermon) {
      return res.status(404).json({
        success: false,
        message: "Sermon not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Sermon updated successfully",
      sermon,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Delete Sermon
export const deleteSermon = async (req, res) => {
  try {

    const sermon = await Sermon.findByIdAndDelete(
      req.params.id
    );


    if (!sermon) {
      return res.status(404).json({
        success: false,
        message: "Sermon not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Sermon deleted successfully",
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};