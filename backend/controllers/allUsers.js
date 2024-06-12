const userModel = require("../models/userModel");

const allUsers = async (req, res) => {
  try {
    const userId = req.userId;
    const allUsers = await userModel.find();
    res.json({
      message: "all users",
      success: true,
      error: false,
      data: allUsers,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
module.exports = allUsers;
