const express = require("express");
const chatController = require("../controllers/chat")
const authenticate  = require("../middleware/user")

const route = express.Router();

route.get("/",authenticate,chatController.getChat);
route.post("/",authenticate,chatController.postChat);

module.exports = route;