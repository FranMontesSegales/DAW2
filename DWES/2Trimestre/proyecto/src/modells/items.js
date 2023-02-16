const { Schema, model } = require('mongoose');

const itemsSchema = new Schema({
  name: String,
  description: String,
  localization: String,
  item: String,
});

module.exports = model('item', itemsSchema);