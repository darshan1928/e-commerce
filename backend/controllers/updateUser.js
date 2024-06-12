const userModel = require("../models/userModel");

const updateUser = async (req, res) => {
  try {
    const { userId, email, name, role } = req.body;
    const sessionUser = req.userId;

    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    };
    const user = await userModel.findById(sessionUser);
    const updateUser = await userModel.findByIdAndUpdate(userId, payload);

    res.json({
      message: "User updated",
      error: false,
      success: true,
      data: updateUser,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
module.exports = updateUser;
