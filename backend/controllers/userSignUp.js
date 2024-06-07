const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const userSignUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await userModel.findOne({ email });

    if (userExist) {
      throw new Error("Already User Exist");
    }
    if (!name) {
      throw new Error("Please provide Name");
    }
    if (!email) {
      throw new Error("Please provide Email");
    }

    if (!password) {
      throw new Error("Please provide Password");
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Password Hashed Wrongly");
    }
    const payload = { ...req.body, role: "GENERAL", password: hashPassword };

    const userData = new userModel(payload);

    const saveUSer = await userData.save();

    res.json({
      message: "user created successfully",
      success: true,
      error: false,
      data: saveUSer,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = userSignUpController;
