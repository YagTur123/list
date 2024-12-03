const { Schema, model } = require('mongoose');

const perfumeSchema = new Schema({
  perfumeName: String,
  essenceMl: Number,
  essencePercent: Number,
  ethanolMl: Number,
  ethanolPercent: Number,
  waterMl: Number,
  waterPercent: Number,
  bottleMl: Number,
  comments: String,
  nickname: String,
  lockCode: String,
});

module.exports = model('Perfume', perfumeSchema);
