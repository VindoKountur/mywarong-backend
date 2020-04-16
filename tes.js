const bcrypt = require('bcrypt');

const plaintext = 'testing@123';

// bcrypt.hash(plaintext, 12, (err, hash) => {
//   console.log(hash);
//   console.log(`Ori : ${plaintext}`);
// });

// function tanggalSekarang() {
//   const today = new Date();
//   const yy = today.getUTCFullYear();
//   const mm = String(today.getUTCMonth() + 1).padStart(2, '0');
//   const dd = String(today.getUTCDate()).padStart(2, '0');

//   const timeId = `${yy}${mm}${dd}`;
//   // return Number(hasil);
//   const [day, time] = today.toISOString().split('T');
//   const [realtime] = time.split('.');
//   const fixUTCTime = `${day} ${realtime}`;

//   return {
//     timeId,
//     fixUTCTime,
//   };
// }

// console.log(tanggalSekarang());

const arr = [2, 4, 5, 6];
let a = 0;

function tes() {
  setTimeout(() => {
    arr.map((val) => {
      a += val;
    });
  }, 2000);
}
tes();
console.log(a);
