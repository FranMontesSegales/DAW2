const { Schema, model } = require('mongoose');

const bossesSchema = new Schema({
  name: String,
  description: String,
  localization: String,
  item: String,
});

module.exports = model('boss', bossesSchema);