const router = require("express").Router();
const signUpController = require("../controllers/userSignUp");
const signInController = require("../controllers/userSignIn");
const userDetailscontroller = require("../controllers/userDetails");
const authToken = require("../middleware/authToken");   

router.post("/signup", signUpController);
router.post("/signin", signInController);
router.get("/user-details", authToken, userDetailscontroller);
module.exports = router;
