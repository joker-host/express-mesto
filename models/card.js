const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 30,
  },

  link: {
    type: String,
    require: true,
    match: '^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$'
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },

  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    default: []
  }],

  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('card', cardSchema);