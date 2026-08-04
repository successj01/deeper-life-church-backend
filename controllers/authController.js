import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";


// Register User/Admin
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;


    const existingUser = await User.findOne({
      email,
    });


    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }


    const hashedPassword = await bcrypt.hash(
      password,
      10
    );


    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "member",
    });


    res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};




// Login User/Admin
export const login = async (req, res) => {
  try {

    const {
      email,
      password,
    } = req.body;



    const user = await User.findOne({
      email,
    });



    if (!user) {

      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });

    }



    const isMatch = await bcrypt.compare(
      password,
      user.password
    );



    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });

    }



    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );



    res.status(200).json({

      success: true,

      message: "Login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

    });



  } catch (error) {


    res.status(500).json({

      success: false,

      message: error.message,

    });


  }
};






// Forgot Password
export const forgotPassword = async (
  req,
  res
) => {

  try {

    const {
      email,
    } = req.body;



    const user = await User.findOne({
      email,
    });



    if (!user) {

      return res.status(404).json({

        success: false,

        message: "User not found",

      });

    }



    const resetToken = crypto
      .randomBytes(32)
      .toString("hex");



    user.resetPasswordToken =
      crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");



    user.resetPasswordExpire =
      Date.now() + 15 * 60 * 1000;



    await user.save();




    const resetUrl =
      `http://localhost:3000/reset-password/${resetToken}`;





    await sendEmail({

      email: user.email,

      subject:
        "Deeper Life Church Password Reset",

      message: `
Hello ${user.name},

You requested a password reset.

Click the link below to create a new password:

${resetUrl}

This link expires in 15 minutes.

Deeper Life Church
      `,

    });





    res.status(200).json({

      success: true,

      message:
        "Password reset email sent",

    });




  } catch (error) {


    res.status(500).json({

      success: false,

      message: error.message,

    });


  }

};







// Reset Password
export const resetPassword = async (
  req,
  res
) => {


  try {


    const {
      password,
    } = req.body;




    const hashedToken =
      crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");





    const user =
      await User.findOne({

        resetPasswordToken: hashedToken,

        resetPasswordExpire: {
          $gt: Date.now(),
        },

      });





    if (!user) {


      return res.status(400).json({

        success: false,

        message:
          "Invalid or expired token",

      });


    }





    user.password =
      await bcrypt.hash(
        password,
        10
      );



    user.resetPasswordToken =
      undefined;



    user.resetPasswordExpire =
      undefined;




    await user.save();





    res.status(200).json({

      success: true,

      message:
        "Password updated successfully",

    });




  } catch (error) {


    res.status(500).json({

      success: false,

      message: error.message,

    });


  }


};