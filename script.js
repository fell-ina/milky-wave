function kirimWA(nomorTujuan) {
    // 1. Ambil data dari form
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const ori = document.getElementById('q_ori').value;
    const stro = document.getElementById('q_stro').value;
    const cok = document.getElementById('q_cok').value;
    const mang = document.getElementById('q_mang').value;
    const bayar = document.getElementById('payMethod').value;
    const ambil = document.getElementById('pickMethod').value;

    // 2. Validasi: Jangan sampai Nama/Tanggal kosong
    if (nama.trim() === "" || tanggal === "") {
        alert("Nama dan Tanggal pengambilan harus diisi dulu ya le!");
        return;
    }

    // 3. Hitung total botol dan harga
    const totalBotol = parseInt(ori) + parseInt(stro) + parseInt(cok) + parseInt(mang);
    const totalHarga = totalBotol * 5000;

    // 4. Validasi: Harus pesan minimal 1
    if (totalBotol <= 0) {
        alert("Pilih minimal 1 botol dulu le!");
        return;
    }

    // 5. Susun format pesan WhatsApp biar rapi
    let pesan = `*PESANAN MILKY WAVE*\n`;
    pesan += `--------------------------\n`;
    pesan += `*Nama:* ${nama}\n`;
    pesan += `*Tanggal:* ${tanggal}\n\n`;
    pesan += `*Detail Pesanan:*\n`;
    if (ori > 0) pesan += `- Original: ${ori}\n`;
    if (stro > 0) pesan += `- Stroberi: ${stro}\n`;
    if (cok > 0) pesan += `- Coklat: ${cok}\n`;
    if (mang > 0) pesan += `- Mangga: ${mang}\n`;
    pesan += `\n*Total:* ${totalBotol} Botol\n`;
    pesan += `*Total Bayar:* Rp ${totalHarga.toLocaleString('id-ID')}\n`;
    pesan += `--------------------------\n`;
    pesan += `*Bayar via:* ${bayar}\n`;
    pesan += `*Metode:* ${ambil}\n`;

    // 6. Buka link WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${nomorTujuan}&text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}
