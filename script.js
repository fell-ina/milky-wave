function kirimWA() {
  const nama = document.getElementById("nama").value;
  const tgl = document.getElementById("tanggal").value;
  const bayar = document.getElementById("payMethod").value;
  const ambil = document.getElementById("pickMethod").value;

  const ori = document.getElementById("q_ori").value;
  const stro = document.getElementById("q_stro").value;
  const cok = document.getElementById("q_cok").value;
  const mang = document.getElementById("q_mang").value;

  const totalOrder =
    parseInt(ori) + parseInt(stro) + parseInt(cok) + parseInt(mang);
  const totalHarga = totalOrder * 5000;

  if (!nama || !tgl || totalOrder === 0) {
    alert("Harap isi nama, tanggal, dan pilih rasa!");
    return;
  }

  let teks = `*PESANAN SUJEL NYESS*\n`;
  teks += `Nama: ${nama}\n`;
  teks += `Tgl Ambil: ${tgl}\n\n`;
  teks += `*Rincian:* \n`;
  if (ori > 0) teks += `- Original: ${ori}\n`;
  if (stro > 0) teks += `- Stroberi: ${stro}\n`;
  if (cok > 0) teks += `- Coklat: ${cok}\n`;
  if (mang > 0) teks += `- Mangga: ${mang}\n`;
  teks += `\n*Total Harga:* Rp ${totalHarga.toLocaleString()}\n`;
  teks += `*Bayar:* ${bayar}\n`;
  teks += `*Ambil:* ${ambil}`;

  const noWA = "6283156602993";
  window.open(
    `https://wa.me/${noWA}?text=${encodeURIComponent(teks)}`,
    "_blank",
  );
}
// Fungsi untuk memutar suara
function playSound() {
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0; // Mengulang suara dari awal jika diklik cepat
  sound.play();
}

// Fungsi kirim WA yang sudah diupdate
function kirimWA() {
  playSound(); // Panggil suara saat tombol ditekan

  // Tunggu sebentar agar suara terdengar sebelum pindah ke WA
  setTimeout(() => {
    const nama = document.getElementById("nama").value;
    const tgl = document.getElementById("tanggal").value;
    const bayar = document.getElementById("payMethod").value;
    const ambil = document.getElementById("pickMethod").value;

    const ori = document.getElementById("q_ori").value;
    const stro = document.getElementById("q_stro").value;
    const cok = document.getElementById("q_cok").value;
    const mang = document.getElementById("q_mang").value;

    const totalOrder =
      parseInt(ori) + parseInt(stro) + parseInt(cok) + parseInt(mang);
    const totalHarga = totalOrder * 5000;

    if (!nama || !tgl || totalOrder === 0) {
      alert("Harap isi nama, tanggal, dan pilih rasa!");
      return;
    }

    let teks = `*PESANAN MILKYWAVE*\n`;
    teks += `Nama: ${nama}\n`;
    teks += `Tgl Ambil: ${tgl}\n\n`;
    teks += `*Rincian:* \n`;
    if (ori > 0) teks += `- Original: ${ori}\n`;
    if (stro > 0) teks += `- Stroberi: ${stro}\n`;
    if (cok > 0) teks += `- Coklat: ${cok}\n`;
    if (mang > 0) teks += `- Mangga: ${mang}\n`;
    teks += `\n*Total Harga:* Rp ${totalHarga.toLocaleString()}\n`;
    teks += `*Bayar:* ${bayar}\n`;
    teks += `*Ambil:* ${ambil}`;

    const noWA = "6283156602993";
    window.open(
      `https://wa.me/${noWA}?text=${encodeURIComponent(teks)}`,
      "_blank",
    );
  }, 200);
}
