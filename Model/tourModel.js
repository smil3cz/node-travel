const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name!'],
    unique: true,
  }, // SCHEMA TYPE OPTIONS
  rating: { type: Number, default: 4.5 },
  price: { type: Number, required: [true, 'A tour must have a price!'] },
  difficulty: String,
  premium: Boolean,
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
