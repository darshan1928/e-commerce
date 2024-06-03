const router = require("express").Router()
const signUpController=require("../controllers/userSignUp")


router.post("/signup",signUpController)
module.exports = router