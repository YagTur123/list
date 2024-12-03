const express = require('express');
const mongoose = require('mongoose');
const Perfume = require('./models/perfume'); // Modeli içe aktar

const app = express();

// MongoDB URI
const uri = "mongodb+srv://yagiz:<db_yagiz123>@cluster0.vrkqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Veritabanına bağlan
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB bağlantısı başarılı!'))
.catch(err => console.error('MongoDB bağlantı hatası:', err));

// JSON verileri parse etme
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

// Public klasörünü sunucuya bağla
app.use(express.static('public'));

// Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor.`));
