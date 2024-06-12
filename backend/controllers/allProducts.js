const allProducts = async(req, res) => {
  try {
  } catch (error) {
    res.json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

module.exports = allProducts
