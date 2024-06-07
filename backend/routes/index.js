const router = require("express").Router()
const signUpController=require("../controllers/userSignUp")
const signInController=require("../controllers/userSignIn")


router.post("/signup",signUpController)
router.post("/signin",signInController)
module.exports = router