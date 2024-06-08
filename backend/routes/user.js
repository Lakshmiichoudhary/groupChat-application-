const express = require("express")
const userController = require("../controllers/user")
const authenticate = require("../middleware/user");

const router = express.Router()

router.post("/signup",userController.signupUser)
router.post("/login",userController.loginUser)
router.get("/",authenticate,userController.getUsers)

module.exports = router