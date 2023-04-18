const express = require("express");
const router = express.Router();
const commentModel = require('../models/commentModel')

router.post('/add', async (req, res) => {
  const { username, stationName, comment } = req.body;

  // creates a new comment
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
});

module.exports = router;

const userModel = require('../models/UserModel')

router.post('/add', async (req, res) => {
  const { username, email, password, favline } = req.body;
  
  // creates a new user
  const createUser = new userModel({
    username: username,
    email: email,
    password: password,
    favline: favline
  });

  try {
    const saveNewUser = await createUser.save();
    res.send(saveNewUser);
  } catch (error) {
    res.status(400).send({ message: "Error trying to create new user" });
  }
});

module.exports = router;


