const router = require("express").Router();
const signUpController = require("../controllers/userSignUp");
const signInController = require("../controllers/userSignIn");
const userDetailscontroller = require("../controllers/userDetails");
const userLogoutController = require("../controllers/userLogout");
const authToken = require("../middleware/authToken");
const allUserController = require("../controllers/allUsers");
const allProductController = require("../controllers/allProducts");
const updateUsercontroller = require("../controllers/updateUser");

router.post("/signup", signUpController);
router.post("/signin", signInController);
router.get("/user-logout", userLogoutController);
router.get("/user-details", authToken, userDetailscontroller);

//admin-panel

router.get("/all-users", authToken, allUserController);
router.get("/all-products", authToken, allProductController);
router.post("/update-user", authToken, updateUsercontroller);

module.exports = router;
