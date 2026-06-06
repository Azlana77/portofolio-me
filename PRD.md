# PRD - Website Portofolio Azis Maulana

## 1. Ringkasan Produk

Website portofolio ini dibuat sebagai media personal branding Azis Maulana, mahasiswa Teknik Informatika yang memiliki minat pada IoT, elektronika, database, dan pengembangan sistem sederhana. Website ini menampilkan profil, pengalaman, pendidikan, keterampilan, proyek, sertifikasi, dan kontak dalam bentuk landing page sederhana.

## 2. Tujuan

* Menampilkan profil profesional secara ringkas dan rapi.
* Mendukung kebutuhan melamar magang di bidang IoT, embedded system, database, atau pengembangan sistem.
* Menyediakan akses cepat ke CV, GitHub, email, WhatsApp, video demo proyek, dan artikel publikasi.
* Menampilkan proyek dengan jujur sesuai kontribusi sebenarnya.

## 3. Target Pengguna

* HRD atau recruiter magang.
* Dosen atau pembimbing akademik.
* Rekan kolaborasi proyek.
* Pihak yang ingin melihat portofolio teknis Azis Maulana.

## 4. Scope Fitur

### Fitur Utama

* Hero section dengan foto profil, nama, headline, dan tombol aksi.
* About section.
* Skills section berdasarkan kategori.
* Projects section.
* Experience section.
* Education section.
* Certifications section.
* Contact section.
* Footer.

### Fitur Link

* Download CV.
* Hubungi via email.
* Hubungi via WhatsApp.
* Link GitHub.
* Link video demo irigasi IoT.
* Link artikel SENATIB lampu hias batik.

## 5. Batasan

* Tidak menggunakan backend.
* Tidak menggunakan database.
* Tidak menggunakan login.
* Tidak menggunakan admin panel.
* Tidak menggunakan Supabase.
* Tidak menampilkan LinkedIn, Instagram, Figma, atau demo website karena belum tersedia.

## 6. Konten Proyek

### Sistem Irigasi Otomatis Berbasis IoT

Ditampilkan sebagai proyek IoT dengan tombol video demo Google Drive. Karena tidak tersedia gambar, gunakan placeholder visual yang rapi.

### Sistem Kendali Lampu Hias Batik

Ditampilkan sebagai proyek unggulan karena memiliki artikel publikasi SENATIB. Sertakan badge "Published Article" dan tombol menuju artikel.

### Sistem Informasi Perpustakaan SIMPUS

Ditampilkan sebagai proyek database dan analisis sistem. Jangan tulis sebagai website yang dibuat oleh Azis. Fokus pada kontribusi perancangan ERD, identifikasi entitas, atribut, dan relasi.

### Web Reservasi Hotel Twin Star

Ditampilkan sebagai proyek web development. Screenshot panjang harus ditampilkan dalam container rapi dengan object-position top.

## 7. Kebutuhan Desain

* Tampilan sederhana, bersih, dan profesional.
* Warna utama navy/dark blue.
* Warna aksen cyan atau emerald.
* Responsif untuk desktop, tablet, dan mobile.
* Menggunakan card layout.
* Navigasi sederhana.
* Typography mudah dibaca.
* Hover effect ringan.

## 8. Tech Stack

* React
* Vite
* Tailwind CSS v4
* lucide-react
* Vercel untuk deployment

## 9. Struktur File

* src/App.jsx
* src/main.jsx
* src/index.css
* public/CV-Azis-Maulana.pdf
* public/azis-profile.jpg
* public/lampu-batik.jpg
* public/hotel-twin-star.jpg
* public/erd-simpus.png
* README.md
* TASKLIST.md
* PRD.md

## 10. Acceptance Criteria

* Website berhasil dijalankan dengan npm run dev.
* Website berhasil di-build dengan npm run build.
* Semua section tampil responsif.
* Tombol Download CV berfungsi.
* Tombol Email, WhatsApp, GitHub, Video Demo, dan Artikel berfungsi.
* Proyek SIMPUS ditulis secara jujur sebagai perancangan ERD, bukan pembuatan website.
* Tidak ada link kosong untuk LinkedIn, Instagram, Figma, atau demo website.
* Tampilan tetap rapi walaupun beberapa proyek tidak memiliki gambar.
