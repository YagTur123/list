const express = require('express');
const mongoose = require('mongoose');
const Perfume = require('./models/perfume');

const app = express();

// MongoDB URI
const mongoURI = 'mongodb+srv://yagiz:<db_yagiz123>@cluster0.vrkqh.mongodb.net/?retryWrites=true&w=majority';

// MongoDB'ye bağlan
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlantısı başarılı!'))
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

app.use(express.json());

// Form verilerini kaydetme endpoint'i
app.post('/api/add-perfume', async (req, res) => {
  try {
    const perfume = new Perfume(req.body);
    await perfume.save();
    res.status(200).send({ message: 'Veri başarıyla kaydedildi!' });
  } catch (error) {
    res.status(500).send({ message: 'Veri kaydedilemedi.', error });
  }
});

// Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor.`));
