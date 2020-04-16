const db = require('../db');

const tableName = 'transaksi';

function tanggalSekarang() {
  const today = new Date();
  const yy = today.getUTCFullYear();
  const mm = String(today.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(today.getUTCDate()).padStart(2, '0');

  const timeId = Number(`${yy}${mm}${dd}`);
  // return Number(hasil);
  const [day, time] = today.toISOString().split('T');
  const [realtime] = time.split('.');
  const fixUTCTime = `${day} ${realtime}`;

  return {
    timeId,
    fixUTCTime,
  };
}

async function insertTransaksiBarang(insertValue) {
  await db('transaksi_barang').insert(insertValue);
}

const example = [
  { idBarang: 4, jumlah: 4 },
  { idBarang: 2, jumlah: 2 },
  { idBarang: 5, jumlah: 1 },
];

async function getAllTransaksi() {
  try {
    const selectData = [
      'transaksi.id',
      'transaksi.created_at',
      'transaksi.total_price',
      'users.username',
    ];
    const hasil = await db
      .select(selectData)
      .from(tableName)
      .innerJoin('users', 'transaksi.user_id', 'users.id');
    return hasil;
  } catch (err) {
    return err;
  }
}

async function getOneTransaksi(idTransaksi) {
  try {
    const [{ id, created_at, total_price, username }] = await db
      .select(
        'transaksi.id',
        'transaksi.created_at',
        'transaksi.total_price',
        'users.username'
      )
      .from('transaksi')
      .innerJoin('users', 'transaksi.user_id', 'users.id')
      .where('transaksi.id', '=', idTransaksi);

    const dataBarang = await db
      .select('barang.nama', 'barang.harga', 'transaksi_barang.jumlah')
      .from('transaksi_barang')
      .innerJoin('barang', 'transaksi_barang.barang_id', 'barang.id')
      .where('transaksi_barang.transaksi_id', '=', idTransaksi);

    const hasil = {
      id,
      created_at,
      total_price,
      username,
      jumlahBarang: dataBarang.length,
      dataBarang,
    };

    return hasil;
  } catch (err) {
    return err;
  }
}

async function addTransaksi(daftarBarang) {
  try {
    const nowDate = tanggalSekarang().timeId;
    const [{ id }] = await db
      .select('id')
      .from(tableName)
      .orderBy('id', 'desc')
      .limit(1);
    let nextId = Number(String(id).slice(8, 12)) + 1;
    const datebefore = Number(String(id).slice(0, 8));
    if (Number(datebefore) !== Number(nowDate)) {
      nextId = '1000';
    }
    const newId = Number(`${nowDate}${nextId}`);
    // PRICE CHECK
    let totalHarga = 0;
    daftarBarang.map(async (barang, i) => {
      const [{ harga }] = await db
        .select('harga')
        .from('barang')
        .where('id', '=', barang.barang_id);
      totalHarga += harga * barang.jumlah;
      if (i === daftarBarang.length - 1) {
        // Insert to transaksi
        const insertTransaksi = await db(tableName).insert({
          id: newId,
          created_at: tanggalSekarang().fixUTCTime,
          total_price: totalHarga,
          user_id: 1, //CHANGE ME LATER
        });

        // Insert to transaksi_barang
        daftarBarang.map(async (value) => {
          const insertValue = { transaksi_id: newId, ...value };
          await insertTransaksiBarang(insertValue);
        });
        return insertTransaksi;
      }
    });
  } catch (err) {
    return err;
  }
}

module.exports = {
  getAllTransaksi,
  getOneTransaksi,
  addTransaksi,
};
