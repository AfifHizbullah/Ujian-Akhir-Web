const dataProduk = [
    { kode: '001', nama: 'A', harga: 10000 },
    { kode: '002', nama: 'B', harga: 20000 },
    { kode: '003', nama: 'C', harga: 30000 }
];


function menapilkanData() {
    const tabelData = document.querySelector('table');

    dataProduk.forEach(item => {
        const row = tabelData.insertRow();
        row.insertCell(0).textContent = item.kode;
        row.insertCell(1).textContent = item.nama;
        row.insertCell(2).textContent = item.harga;
    });
}

function prosesTransaksi() {
    const kodeInput = document.getElementById('kodeInput');
    const jumlahInput = document.getElementById('jumlahInput');

    const itemTerpilih = dataProduk.find(item => item.kode === kodeInput.value);

    if (!itemTerpilih) {
        alert('Kode item tidak valid');
        return;
    }

    const jumlah = parseInt(jumlahInput.value);
    const totalHarga = itemTerpilih.harga * jumlah;

    const bayar = window.prompt(
        'Total yang harus dibayar: ' + totalHarga + '\n\n' +
        'Masukkan jumlah uang yang akan dibayarkan:'
    );

    if (bayar === null || bayar === '') {
        alert('Pembayaran dibatalkan');
        return;
    }

    const jumlahBayar = parseFloat(bayar);

    if (isNaN(jumlahBayar) || jumlahBayar < totalHarga) {
        alert('Jumlah pembayaran tidak valid atau kurang dari total yang harus dibayar');
        return;
    }

    const kembalian = jumlahBayar - totalHarga;

    alert(
        'Pembayaran berhasil!\n\n' +
        'Total yang harus dibayar: ' + totalHarga + '\n' +
        'Jumlah yang dibayarkan: ' + jumlahBayar + '\n' +
        'Kembalian: ' + kembalian
    );
}

document.addEventListener('DOMContentLoaded', () => {
    menapilkanData();
});
