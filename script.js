// Ambil semua elemen dengan class 'blog-title'
const blogTitles = document.querySelectorAll('.blog-title');

// Fungsi untuk menampilkan judul blog secara berturut-turut dengan efek fade-in
function showBlogTitles() {
    let index = 0;
    // Definisikan fungsi rekursif untuk memunculkan setiap judul blog dengan efek fade-in
    function fadeIn() {
        if (index < blogTitles.length) {
            blogTitles[index].style.opacity = '1';
            index++;
            setTimeout(fadeIn, 500); // Efek delay sebelum menampilkan judul blog berikutnya
        }
    }
    fadeIn(); // Panggil fungsi untuk memulai efek fade-in
}

// Panggil fungsi untuk memulai efek fade-in saat halaman dimuat
showBlogTitles();

// Fungsi untuk mengubah warna latar belakang setiap kali judul blog diklik
function changeBackgroundColor() {
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightsalmon']; // Daftar warna yang akan digunakan
    let index = 0;

    // Tambahkan event listener untuk setiap judul blog
    blogTitles.forEach(title => {
        title.addEventListener('click', () => {
            // Ubah warna latar belakang halaman
            document.body.style.backgroundColor = colors[index];
            // Atur index untuk warna selanjutnya
            index = (index + 1) % colors.length;
        });
    });
}

// Panggil fungsi untuk mengaktifkan efek perubahan warna latar belakang saat judul blog diklik
changeBackgroundColor();

// Ambil semua tombol navigasi
const navLinks = document.querySelectorAll('a');

// Fungsi untuk mengubah warna tombol navigasi menjadi kuning saat kursor mengarah ke arahnya
function changeNavColor() {
    // Tambahkan event listener untuk setiap tombol navigasi
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Ubah warna teks menjadi kuning saat kursor masuk
            link.style.color = 'yellow';
        });
        link.addEventListener('mouseleave', () => {
            // Kembalikan warna teks ke warna semula saat kursor keluar
            link.style.color = '';
        });

        // Tambahkan event listener untuk tombol navigasi Blog
        if (link.getAttribute('target') === 'Blog') {
            link.addEventListener('click', () => {
                // Ubah warna judul blog menjadi kuning saat tombol Blog diklik
                blogTitles[0].style.color = 'yellow'; // Mengubah warna judul blog pertama
            });
        }
    });
}

// Panggil fungsi untuk mengaktifkan efek perubahan warna tombol navigasi
changeNavColor();



