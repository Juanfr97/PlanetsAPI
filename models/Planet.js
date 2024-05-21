const mongoose = require('mongoose');

const PlanetSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    mass: {
        type: String,
        require: true
    }, 
    diameter: {
        type: String,
        require: true
    }, 
    gravity: {
        type: String,
        require: true
    }, 
    rotation: {
        type: String,
        require: true
    }, 
    traslation: {
        type: String,
        require: true
    }, 
    distance: {
        type: String,
        require: true
    
    }, 
    moons: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    } 
  });

module.exports = mongoose.model('Planet', PlanetSchema);