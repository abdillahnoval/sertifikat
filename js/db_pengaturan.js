// Database Pengaturan Layout Sertifikat
// Key utamanya adalah 'id_ref' yang harus cocok dengan 'id' di db_daftarsertifikat.js

const defaultPengaturan = [
    {
        // KONEKSI KE CERT-001
        id_ref: "CERT-001", 
        
        // Path file PDF di server
        template_img: "draf/draf_sertifikat1.pdf", 
        
        // Link Spreadsheet (Ganti dengan link CSV punya Anda)
        google_sheet_url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTi4-GK61bb1DuA2slzN6Z2fCDmlKtR01NZYSAEwlzrcr5l1So1C3NPIRQUcB1iInU-eWD4u53R9fY9/pub?gid=0&single=true&output=csv",
        
        // Susunan Layout Default
        layout: [
            {
                id: 1,
                type: "text",
                text: "<< Nama Peserta >>", // Akan diganti otomatis sesuai CSV
                x: 400, // Koordinat X (Base Scale 2.0)
                y: 280, // Koordinat Y
                size: 40,
                font: "Poppins",
                color: "#1d4ed8",
                align: "center",
                bold: true
            },
            {
                id: 2,
                type: "text",
                text: "<< Instansi >>",
                x: 400,
                y: 330,
                size: 20,
                font: "Poppins",
                color: "#333333",
                align: "center",
                bold: false
            },
            {
                id: 3,
                type: "qr", // QR Code Validation
                x: 50,
                y: 480,
                size: 90
            }
        ]
    }
];

// Cek apakah ada data tersimpan di LocalStorage (Browser Admin)
// Jika tidak ada, gunakan defaultPengaturan di atas (Data Server)
// Variabel 'dbPengaturan' ini yang akan dibaca oleh halaman Unduh & Setting
var dbPengaturan = JSON.parse(localStorage.getItem('dbPengaturan')) || defaultPengaturan;

// Variabel khusus untuk menampung hasil Export dari Admin Panel
// Jika admin melakukan export code, variabel ini yang akan dipakai.
if (typeof newSetting !== 'undefined') {
    // Cari index yang sama, lalu update
    const idx = dbPengaturan.findIndex(s => s.id_ref === newSetting.id_ref);
    if(idx !== -1) dbPengaturan[idx] = newSetting;
    else dbPengaturan.push(newSetting);
}