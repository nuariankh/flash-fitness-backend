const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');

router.get('/', async (req, res) => {
    try {
        const trainers = await Trainer.find();
        res.json(trainers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const trainer = new Trainer({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        bio: req.body.bio,
        image: req.body.image
    });
    try {
        const newTrainer = await trainer.save();
        res.status(201).json(newTrainer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;