const express = require("express");
const router = express.Router();
const commentModel = require('../models/CommentModel')

router.post('/add', async (req, res) => {
    

    const { username, email, password, favline } = req.body

    
  
   
    //creates a new user
    const createComment = new commentModel({
        username: username,
        email: email,
        stationName: stationName,
        comment: comment
    });

   
    try {
        const saveNewUser = await createUser.save();
        res.send(saveNewUser);
    } catch (error) {
        res.status(400).send({ message: "Error trying to create new user" });
    }

})

module.exports = router;