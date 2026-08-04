import Newsletter from "../models/Newsletter.js";


// Subscribe Newsletter
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;


    const existingSubscriber = await Newsletter.findOne({
      email,
    });


    if (existingSubscriber) {
      return res.status(400).json({
        success: false,
        message: "Email already subscribed",
      });
    }


    const subscriber = await Newsletter.create({
      email,
    });


    res.status(201).json({
      success: true,
      message: "Subscribed successfully",
      subscriber,
    });


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Get Subscribers (Admin)
export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({
      createdAt: -1,
    });


    res.status(200).json({
      success: true,
      count: subscribers.length,
      subscribers,
    });


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Delete Subscriber
export const deleteSubscriber = async (req, res) => {
  try {
    await Newsletter.findByIdAndDelete(
      req.params.id
    );


    res.status(200).json({
      success: true,
      message: "Subscriber deleted successfully",
    });


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};