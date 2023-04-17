const express = require("express");
const router = express.Router();
const commentModel = require('../models/commentModel')

router.post('/post', async (req, res) => {

    const { username, stationName, comment } = req.body

    const postComment = new commentModel({
        username: username,
        stationName: stationName,
        comment: comment
    });

   
    try {
        const sendComment = await postComment.save();
        res.send(sendComment);;
    } catch (error) {
        res.status(400).send({ message: "Error trying to send message" });
    }

})

module.exports = router;


