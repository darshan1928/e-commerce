const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req?.cookies?.token;
    if (!token) {
      return res.json({
        message: "token is not valid",
        error: true,
        success: false,
      });
    }
   
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log("err_auth==", err.message);
      }
      req.user = req.user || {};
      req.userId = decoded?._id;
      next();
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
      data: [],
    });
  }
}

module.exports = authToken;
