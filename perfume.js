const mongoose = require('mongoose');

const perfumeSchema = new mongoose.Schema({
  perfumeName: String,
  essencePercent: Number,
  ethanolPercent: Number,
  waterPercent: Number,
  lockCode: String
});

const Perfume = mongoose.model('Perfume', perfumeSchema, 'esanslar'); // 'esanslar' koleksiyonunu belirtir

module.exports = Perfume;
