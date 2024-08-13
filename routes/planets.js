const express = require('express');
const router = express.Router();
const Planet = require('../models/Planet');

router.get('/', async (req, res) => {
    try {
        const planets = await Planet.find();
        console.log(planets)
        res.json(planets);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/test',async(req,res)=>{ res.json(message:"test")});

router.post('/', async (req, res) => {
    const planet = new Planet({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        mass: req.body.mass,
        diameter: req.body.diameter,
        gravity: req.body.gravity,
        rotation: req.body.rotation,
        traslation: req.body.traslation,
        distance: req.body.distance,
        moons: req.body.moons,
        image: req.body.image
    });

    try {
        const savedPlanet = await planet.save();
        res.json(savedPlanet);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:planetId', async (req, res) => {
    try {
        const planet = await Planet.findById(req.params.planetId);
        res.json(planet);
    } catch (error) {
        res.json({ message: error });
    }
});

router.delete('/:planetId', async (req, res) => {
    try {
        console.log(req.params.planetId)
        const removedPlanet = await Planet.deleteOne({ _id: req.params.planetId });
        res.json(removedPlanet);
    } catch (error) {
        res.json({ message: error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPlanet = await Planet.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body 
            },
            {
                new: true, 
                runValidators: true 
            }
        );
        res.json(updatedPlanet); 
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
