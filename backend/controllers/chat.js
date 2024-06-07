const Chat = require("../models/chat");
const User = require("../models/user");

exports.postChat = async (req,res) => {
    try{
        const { message } = req.body;
        const chatMessage = await Chat.create({message});
        res.status(201).json(chatMessage)
    }catch(error){
        res.status(500).json({error : error.message})
    } 
}

exports.getChat = async (req,res) => {
    try{
        const chat = await Chat.findAll();
        res.status(201).json(chat)
    }catch(error){
        res.status(500).json({ error: error.message });
    }

}