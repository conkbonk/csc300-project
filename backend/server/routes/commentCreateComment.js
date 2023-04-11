const express = require("express");
const router = express.Router();
const commentModel = require('../models/userModel')


router.post('/add', async (req, res) => {
 
    const { username, stationName, comment } = req.body


     //creates a new comment
    const createComment = new commentModel({
        username: username,
        stationName: stationName,
        comment: comment,
    });


   
    try {
        const saveComment = await createComment.save();
        res.send(saveComment);
    } catch (error) {
        res.status(400).send({ message: "Error trying to create comment" });
    }


})

module.exports = router;
