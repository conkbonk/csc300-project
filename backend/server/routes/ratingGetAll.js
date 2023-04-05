const express = require("express");
const router = express.Router();
const ratingModel = require('../models/ratingModel')

router.get('/getAll', async (req, res) => {
    const user = await ratingModel.find();
    return res.json(user)
  })

  module.exports = router;