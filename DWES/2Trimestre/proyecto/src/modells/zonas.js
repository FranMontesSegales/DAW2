const { Schema, model } = require('mongoose');

const zonasSchema = new Schema({
  name: String,
  description: String,
  localization: String,
  item: String,
});

module.exports = model('zona', zonasSchema);