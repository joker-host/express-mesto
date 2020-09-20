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
    validate: {
      validator: function(value) {
        return /^(https?:\/\/)?([\da-z..-]+)\.([a-z.]{2,6})([\w .-]*)*\/?[#]?$/.test(value)
      },
      message: props => `${props.value} is not a valid link`
    }
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },

  likes: [{
    type: Array,
    default: []
  }],

  createdAt: {
    type: Date,
    default: Date.now()
  }
},
{versionKey: false});

module.exports = mongoose.model('card', cardSchema);