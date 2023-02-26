const express = require("express");
const Comment = require("../models/");
// const router = express.Router();
const router = require('express').Router()

router.post('/comment', async(req, res) => {
    try {
        const comment = await Comment.create({
            ...req.body,
            userId: req.session.userId,
        })
        res.status(200).json(comment)
        
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;