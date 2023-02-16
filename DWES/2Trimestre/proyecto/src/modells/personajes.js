const { Schema, model } = require('mongoose');

const personajesSchema = new Schema({
  name: String,
  description: String,
  localization: String,
  item: String,
});

module.exports = model('personaje', personajesSchema);