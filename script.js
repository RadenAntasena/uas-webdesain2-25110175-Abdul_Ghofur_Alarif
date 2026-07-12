// Fungsi validasi input form kontak
function validasiFormPesan(e) {
    const nama = document.getElementById('inputNama').value;
    const pesan = document.getElementById('inputPesan').value;
}

document.addEventListener("DOMContentLoaded", function() {
    // Router SPA bawaan untuk elemen data-page
    document.querySelectorAll('[data-page]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            const namaHalaman = this.getAttribute('data-page');
            pindahHalaman(namaHalaman);
        });
    });

    const formKontak = document.getElementById('form-kontak-ps');
    if (formKontak) {
        formKontak.addEventListener('submit', validasiFormPesan);
    }
});

// Fungsi bawaan router SPA lama tetap dipertahankan di bawahnya...
function pindahHalaman(namaHalaman) {
    document.querySelectorAll('.page-view').forEach(function (el) {
        el.classList.remove('active');
    });

    const target = document.getElementById('page-' + namaHalaman);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-link-page').forEach(function (link) {
        const isActive = link.getAttribute('data-page') === namaHalaman;
        link.classList.toggle('active', isActive);
        link.classList.toggle('text-white', isActive);
        link.classList.toggle('text-white-50', !isActive);
    });

    window.scrollTo({ top: 0, behavior: 'instant' });
    $('#navbarLinks').collapse('hide');
}