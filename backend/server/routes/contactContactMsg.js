const express = require("express");
const router = express.Router();
const contactModel = require('../models/contactModel')

router.post('/add', async (req, res) => {

    const { name, email, stationName, message } = req.body

    const sendMessage = new contactModel({
        name: name,
        email: email,
        stationName: stationName,
        message: message
    });

   
    try {
        const sendContact = await sendMessage.save();
        res.send(sendContact);
    } catch (error) {
        res.status(400).send({ message: "Error trying to send message" });
    }

})

module.exports = router;