const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    difficulty: {
        type: String,
        required: true
    },
}, {timestamps: true});

const Trip = new mongoose.model('Trip', tripSchema);
module.exports = Trip;