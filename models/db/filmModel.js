const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    title: String,
    year: String,
    duration: String,
});

module.exports = mongoose.model('Pelicula', filmSchema);
