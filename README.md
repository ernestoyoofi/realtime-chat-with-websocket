# Realtime Chat With WebSocket

> Baca untuk detail saja

## Apa itu websocket ?

WebSocket adalah sebuah protokol komunikasi dua arah (full-duplex) yang diimplementasikan di atas protokol HTTP/HTTPS. Dengan WebSocket, klien (biasanya browser) dapat melakukan koneksi ke server dan memungkinkan pertukaran data secara real-time tanpa harus melakukan permintaan kembali (request-response) secara terus-menerus seperti pada protokol HTTP tradisional.

WebSocket sering digunakan dalam aplikasi web real-time seperti aplikasi perpesanan instan (chat), sistem notifikasi, streaming data, papan pemantauan, dan permainan daring (online games). Selain itu, WebSocket juga sering diintegrasikan dalam aplikasi berbasis Internet of Things (IoT) dan aplikasi yang memerlukan update data secara cepat dan tepat waktu.

Dalam kasus ini, WebSocket layaknya seperti manusia berinteriaksi kepada lawan bicara.

## Sample project

Sedikit penjelasan, kamu akan melihat beberapa isi file dan folder, disini sebenarnya kamu bisa jalankan server saja untuk menjadi data realtime dan koneksikan ke aplikasi seperti contoh [studi kasus punyanya @ernestoyoofi](https://github.com/ernestoyoofi/test-expo-with-websocket)

## Mencoba untuk menjalakan server

Kamu punya dua pilihan yaitu development / production

| Type | Command |
|------|---------|
| Production | ```npm run start``` |
| Development | ```npm run dev``` |

Namun, kamu lebih baik install / unduh dependencies terlebih dahulu

> Gunakan command dibawah untuk installing

```bash
npm install
```

Setelah install semua dependencies, kamu bisa jalankan dengan 2 metode.

Jika dalam pengembangan kamu bisa gunakan

```bash
npm run dev
```
Jika dalam produksi atau bisa lihat secara langsung gunakan

```bash
npm run start
```

Setelah kamu menggunakan 2 metode tersebut, pada konsol anda akan muncul pesan seperti dibawah ini

```logs
Server Running... http://localhost:3456
```

Kamu bisa buka halaman tersebut di browser kamu, tapi ingat, ini masih pada local / lokal, kamu tidak dapat memberikan halaman ke publik, jika ingin mempublikasi hosting lokal gunakan [ngrok](https://ngrok.com/), [localtunnel](https://github.com/localtunnel/server), atau bisa via port forwarding di router anda

Selamat mempelajari dan menikmati projek ini !
