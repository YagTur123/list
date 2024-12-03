const express = require('express');
const mongoose = require('mongoose');
const Perfume = require('./perfume');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = 'mongodb+srv://yagiz:<db_yagiz123>@cluster0.vrkqh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlantısı başarılı!'))
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

app.get('/api/perfumes', async (req, res) => {
  try {
    const perfumes = await Perfume.find();
    res.json(perfumes);
  } catch (err) {
    res.status(500).send('Veriler alınırken hata oluştu.');
  }
});

app.post('/api/add-perfume', async (req, res) => {
  try {
    const { perfumeName, essencePercent, ethanolPercent, waterPercent, lockCode } = req.body;

    const newPerfume = new Perfume({ perfumeName, essencePercent, ethanolPercent, waterPercent, lockCode });
    await newPerfume.save();

    res.status(200).send('Parfüm verisi başarıyla eklendi!');
  } catch (err) {
    res.status(500).send('Veri eklenirken hata oluştu.');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor.`));
