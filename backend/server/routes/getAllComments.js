const express = require("express");
const router = express.Router();
const model = require('../models/commentModel')

router.get('/getAll', async (req, res) => {
    const user = await model.find();
    return res.json(user)
  })

  module.exports = router;