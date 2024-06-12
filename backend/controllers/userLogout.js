const userLogoutController = (req, res) => {
  try {
    res.clearCookie("token");
    res.json({
      message: "Logout Successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = userLogoutController;
