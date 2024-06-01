const express = require('express');
const router = express.Router();
const GymClass = require('../models/GymClass');

router.get('/', async (req, res) => {
    try {
        const classes = await GymClass.find();
        res.json(classes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const gymClass = new GymClass({
        name: req.body.name,
        instructor: req.body.instructor,
        duration: req.body.duration,
        location: req.body.location,
        offeredOn: req.body.offeredOn
    });
    try {
        const newGymClass = await gymClass.save();
        res.status(201).json(newGymClass);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;