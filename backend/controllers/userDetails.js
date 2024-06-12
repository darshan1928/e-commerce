const userModel = require("../models/userModel")
const userDetailscontroller = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
   
    res.json({
      message: "User Details",
      error: false,
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
      data: [],
    });
  }
};

module.exports = userDetailscontroller;
