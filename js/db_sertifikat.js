// js/db_sertifikat.js (SMART LOGIC)

const defaultData = [
    {
        "id": "CERT-001",
        "judul": "Workshop Pemanfaatan Koding dan Artificial Intellegence (AI) dalam Pembelajaran Mendalam",
        "deskripsi": "Pelatihan intensif pemanfaatan teknologi Artificial Intelligence untuk menunjang efektivitas guru dalam mengajar di era digital.",
        "narasumber": "James F. Tomasouw, S.Kom., M.Kom.",
        "instansi_nara": "Wakil Ketua SLCC Pengurus Besar PGRI",
        "tgl_mulai": "2026-01-22",
        "tgl_selesai": "2026-01-24",
        "status": "Aktif",
        "base_url_validasi": "https://game.sdn2baderan.my.id/sertifikat/ceksertifikat.html?id=",
        "thumbnail": "thumbnail/Seminar.png",
        "link_download": "unduh.html",
        "template_img": "draf/sertifikat1.pdf",
        "google_sheet_url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTi4-GK61bb1DuA2slzN6Z2fCDmlKtR01NZYSAEwlzrcr5l1So1C3NPIRQUcB1iInU-eWD4u53R9fY9/pub?gid=0&single=true&output=csv",
        "layout": [
            {
                "id": 1,
                "type": "text",
                "text": "<<Nama Peserta>>",
                "x": 300,
                "y": 340,
                "size": 25,
                "font": "Poppins",
                "color": "#1d4ed8",
                "align": "center",
                "bold": true,
                "_hitbox": {
                    "x": 282.16004943847673,
                    "y": 516.0000000000002,
                    "w": 395.6799011230469,
                    "h": 56.00000000000002
                },
                "_resizeBox": {
                    "x": 423.64994049072266,
                    "y": 357.5,
                    "size": 10
                }
            },
            {
                "id": 2,
                "type": "text",
                "text": "<<Instansi>> - <<Kecamatan>>",
                "x": 300,
                "y": 375,
                "size": 14,
                "font": "Poppins",
                "color": "#000000",
                "align": "center",
                "bold": false,
                "_hitbox": {
                    "x": 301.70410156250017,
                    "y": 580.8000000000002,
                    "w": 356.591796875,
                    "h": 38.40000000000001
                }
            },
            {
                "id": 3,
                "type": "qr",
                "x": 34,
                "y": 723,
                "size": 88,
                "_hitbox": {
                    "x": 46.40000000000002,
                    "y": 1148.8000000000004,
                    "w": 156.80000000000004,
                    "h": 156.80000000000004
                },
                "_resizeBox": {
                    "x": 203.20000000000005,
                    "y": 1305.6000000000004,
                    "size": 16.000000000000007
                }
            }
        ]
    },
    {
        "id": "CERT-1769156869783",
        "judul": "Pemenang Lomba Olahraga dalam Rangka HUT Ke-80 PGRI dan Hari Guru Nasiona Tahun 2025",
        "deskripsi": "Kegiatan lomba lomba ini diprakarsai oleh Sekretaris Bidang Pemuda dan Olahraga PGRI Kabupaten Situbondo",
        "narasumber": "Panitia HUT Ke-80 PGRI Kab. Situbondo",
        "instansi_nara": "Bidang Pemuda dan Olahraga",
        "tgl_mulai": "2025-11-05",
        "tgl_selesai": "2025-11-05",
        "thumbnail": "thumbnail/Olahraga.png",
        "link_download": "unduh.html",
        "status": "Nonaktif",
        "base_url_validasi": "https://game.sdn2baderan.my.id/sertifikat/ceksertifikat.html?id=",
        "template_img": "draf/default.pdf",
        "google_sheet_url": "",
        "layout": []
    },
    {
        "id": "CERT-1769157369491",
        "judul": "21 Karya Terbaik Peserta Lomba Multimedia Pembelajaran Interaktif",
        "deskripsi": "Kegiatan Lomba Multimedia Pembelajaran Interaktif ini diselenggarakan dalam rangka memperingati HUT Ke-80 PGRI dan Hari Guru Nasional Tahun 2025",
        "narasumber": "Noval Abdillah, S.Pd., Gr.",
        "instansi_nara": "Sekbid Digitalisasi dan Keanggotaan",
        "tgl_mulai": "2025-12-23",
        "tgl_selesai": "2025-12-23",
        "thumbnail": "thumbnail/Multimedia.png",
        "link_download": "unduh.html",
        "status": "Nonaktif",
        "base_url_validasi": "https://game.sdn2baderan.my.id/sertifikat/ceksertifikat.html?id=",
        "template_img": "draf/default.pdf",
        "google_sheet_url": "",
        "layout": []
    }
];

// --- LOGIKA PEMILIHAN DATA OTOMATIS ---
var dbSertifikat = defaultData; // Default: Pakai data server (Aman & Stabil)

// Pengecualian: Hanya halaman SETTING yang boleh baca LocalStorage (Jembatan Edit)
// Ini mencegah Admin/Index menampilkan data cache yang usang.
if (typeof window !== 'undefined' && window.location.href.indexOf('setting.html') > -1) {
    const local = localStorage.getItem('dbSertifikat');
    if (local) {
        console.log("Mode Setting: Memuat data editan sementara.");
        dbSertifikat = JSON.parse(local);
    }
}

// Fungsi Simpan (Hanya update memori browser untuk 'jembatan' ke setting.html)
function simpanKeStorage() {
    localStorage.setItem('dbSertifikat', JSON.stringify(dbSertifikat));
}