const express = require('express');
const db = require('./model/db');

const router = require('./router');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/barang', router.barangRouter);
app.use('/api/transaksi', router.transaksiRouter);

// app.get('/', async (req, res) => {
//   try {
//     const hasil = await db.select().from('transaksi');
//     console.log(hasil);
//     res.send(hasil);
//   } catch (err) {
//     res.send(err);
//   }
// });

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`App listening on ${port}`);
});
