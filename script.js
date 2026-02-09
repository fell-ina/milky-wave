function kirimWA(nomorTujuan) {
    try {
        // Ambil data dari form
        const nama = document.getElementById('nama').value;
        const tanggal = document.getElementById('tanggal').value;
        const ori = document.getElementById('q_ori').value || 0;
        const stro = document.getElementById('q_stro').value || 0;
        const cok = document.getElementById('q_cok').value || 0;
        const mang = document.getElementById('q_mang').value || 0;
        const bayar = document.getElementById('payMethod').value;
        const ambil = document.getElementById('pickMethod').value;

        // Validasi Nama & Tanggal
        if (nama.trim() === "" || tanggal === "") {
            alert("Nama dan Tanggal pengambilan harus diisi dulu ya le!");
            return;
        }

        // Hitung total
        const totalBotol = parseInt(ori) + parseInt(stro) + parseInt(cok) + parseInt(mang);
        const totalHarga = totalBotol * 5000;

        if (totalBotol <= 0) {
            alert("Pilih minimal 1 botol dulu le!");
            return;
        }

        // Susun pesan
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

        const url = `https://api.whatsapp.com/send?phone=${nomorTujuan}&text=${encodeURIComponent(pesan)}`;
        window.open(url, '_blank');
    } catch (e) {
        console.error("Ada error nih:", e);
        alert("Waduh, ada masalah teknis: " + e.message);
    }
}
