const express = require("express");
const chatController = require("../controllers/chat")

const route = express.Router();

route.get("/",chatController.getChat);
route.post("/",chatController.postChat);

module.exports = route;