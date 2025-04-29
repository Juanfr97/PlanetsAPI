const express = require('express');
const router = express.Router();
const Universe = require('../models/Universe');

router.get('/', async (req, res) => {
    try {
        const universes = await Universe.find();
        res.json(universes[0]);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/', async (req, res) => {
    const universe = new Universe({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        age: req.body.age,
        size: req.body.size,
        stars: req.body.stars,
        matter: req.body.matter,
        facts: req.body.facts,
        images: req.body.images
    });

    try {
        const savedUniverse = await universe.save();
        res.json(savedUniverse);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:universeId', async (req, res) => {
    try {
        const universe = await Universe.findById(req.params.universeId);
        res.json(universe);
    } catch (error) {
        res.json({ message: error });
    }
});

router.delete('/:universeId', async (req, res) => {
    try {
        const removedUniverse = await Universe.remove({ _id: req.params.universeId });
        res.json(removedUniverse);
    } catch (error) {
        res.json({ message: error });
    }
});

router.patch('/:universeId', async (req, res) => {
    try {
        const updatedUniverse = await Universe.updateOne(
            { _id: req.params.universeId },
            { $set: { name: req.body.name } }
        );
        res.json(updatedUniverse);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;