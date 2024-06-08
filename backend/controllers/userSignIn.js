const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const userSignInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Please provide Email");
    }

    if (!password) {
      throw new Error("Please provide Password");
    }

    const userExist = await userModel.findOne({ email });
    if (!userExist) {
      throw new Error("Please Enter a Valid Credential");
    }
    const comparePassword = await bcrypt.compare(password, userExist.password);

    if (!comparePassword) {
      throw new Error("Please Enter a Valid Credential");
    } else {
      let tokenData = {
        _id: userExist.id,
        email: userExist.email,
      };
      const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 8,
      });

      const tokenOption = {
        httpOnly: true,
        secure: true,
      };
      res.cookie("token", token,tokenOption).json({
        message: "Login Successfully",
        error: false,
        success: true,
        data: token,
      });
    }
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = userSignInController;
