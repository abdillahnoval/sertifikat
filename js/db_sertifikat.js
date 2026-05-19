// js/db_sertifikat.js (SMART LOGIC)

const defaultData = [
    {
        "id": "CERT-001",
        "judul": "Workshop Pemanfaatan Koding dan Artificial Intelligence (AI) dalam Pembelajaran Mendalam",
        "deskripsi": "Pelatihan intensif pemanfaatan teknologi Artificial Intelligence untuk menunjang efektivitas guru dalam mengajar di era digital.",
        "narasumber": "James F. Tomasouw, S.Kom., M.Kom.",
        "instansi_nara": "Wakil Ketua SLCC Pengurus Besar PGRI",
        "tgl_mulai": "2026-01-22",
        "tgl_selesai": "2026-01-24",
        "status": "Aktif",
        "base_url_validasi": "https://sertifikatpgrisitubondo.netlify.app/ceksertifikat.html?id=",
        "thumbnail": "thumbnail/Seminar.png",
        "link_download": "unduh.html",
        "template_img": "draf/sertifikat1.pdf",
        "google_sheet_url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vSUVFsnZVJjINRGrMQz_ebopi5z-VBzE1D_yILKy14pWaObVclk39tb_kQlg4CEq1Jtmq1MW07HEQOu/pub?gid=0&single=true&output=csv",
        "layout": [
            {
                "id": 1,
                "type": "text",
                "text": "<<Nama Peserta>>",
                "x": 297.75,
                "y": 340,
                "size": 25,
                "font": "Poppins",
                "color": "#1d4ed8",
                "align": "center",
                "bold": true,
                "_hitbox": {
                    "x": 174.10005950927734,
                    "y": 322.5,
                    "w": 247.2998809814453,
                    "h": 35
                },
                "_resizeBox": {
                    "x": 421.39994049072266,
                    "y": 357.5,
                    "size": 10
                }
            },
            {
                "id": 2,
                "type": "text",
                "text": "<<Instansi>> - <<Kecamatan>>",
                "x": 297.75,
                "y": 375,
                "size": 14,
                "font": "Poppins",
                "color": "#000000",
                "align": "center",
                "bold": false,
                "_hitbox": {
                    "x": 186.31513214111328,
                    "y": 363,
                    "w": 222.86973571777344,
                    "h": 24
                },
                "_resizeBox": {
                    "x": 409.1848678588867,
                    "y": 387,
                    "size": 10
                }
            },
            {
                "id": 3,
                "type": "qr",
                "x": 34,
                "y": 723,
                "size": 88,
                "_hitbox": {
                    "x": 29,
                    "y": 718,
                    "w": 98,
                    "h": 98
                },
                "_resizeBox": {
                    "x": 127,
                    "y": 816,
                    "size": 10
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
        "tgl_mulai": "2025-11-06",
        "tgl_selesai": "2025-11-06",
        "thumbnail": "thumbnail/Olahraga.png",
        "link_download": "unduh.html",
        "status": "Aktif",
        "base_url_validasi": "https://sertifikatpgrisitubondo.netlify.app/ceksertifikat.html?id=",
        "template_img": "draf/sertifikat3.pdf",
        "google_sheet_url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJsgr4CGiXY6joK_m3yZ6Y1zM7UELKNOIABO2Pi1U2wzeCHiFq42SBL2OLDrWNGv96jNCXP_DY6Oaz/pub?gid=0&single=true&output=csv",
        "layout": [
            {
                "id": 1769271115971,
                "type": "text",
                "x": 421.125,
                "y": 239,
                "size": 24,
                "color": "#a00505",
                "text": "<<Nama Pemenang>>",
                "font": "Poppins",
                "align": "center",
                "bold": true,
                "_hitbox": {
                    "x": 281.8930358886719,
                    "y": 222,
                    "w": 278.46392822265625,
                    "h": 34
                },
                "_resizeBox": {
                    "x": 560.3569641113281,
                    "y": 256,
                    "size": 10
                }
            },
            {
                "id": 1769271289247,
                "type": "text",
                "x": 421.125,
                "y": 273,
                "size": 12,
                "color": "#000000",
                "text": "Delegasi <<Instansi>>",
                "font": "Poppins",
                "align": "center",
                "bold": false,
                "_hitbox": {
                    "x": 352.3810729980469,
                    "y": 262,
                    "w": 137.48785400390625,
                    "h": 22
                },
                "_resizeBox": {
                    "x": 489.8689270019531,
                    "y": 284,
                    "size": 10
                }
            },
            {
                "id": 1769271556424,
                "type": "text",
                "x": 421.125,
                "y": 295,
                "size": 15,
                "color": "#000000",
                "text": "<<Juara>> Lomba <<Cabang Olahraga>>",
                "font": "Poppins",
                "align": "center",
                "bold": true,
                "_hitbox": {
                    "x": 261.4450988769531,
                    "y": 282.5,
                    "w": 319.35980224609375,
                    "h": 25
                },
                "_resizeBox": {
                    "x": 580.8049011230469,
                    "y": 307.5,
                    "size": 10
                }
            },
            {
                "id": 1769272025481,
                "type": "qr",
                "x": 704,
                "y": 57,
                "size": 80,
                "color": "#000000",
                "_hitbox": {
                    "x": 699,
                    "y": 52,
                    "w": 90,
                    "h": 90
                },
                "_resizeBox": {
                    "x": 1420.2000000000005,
                    "y": 255.60000000000008,
                    "size": 18.000000000000007
                }
            }
        ]
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
        "status": "Aktif",
        "base_url_validasi": "https://sertifikatpgrisitubondo.netlify.app/ceksertifikat.html?id=",
        "template_img": "draf/sertifikat2.pdf",
        "google_sheet_url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTTQM2IZoVg2xvjdHbefT_FzFtVKfoHgNI_oDYw-_zLTmBPSbGZxpkPVn3YPhQB_U_R6MxFVzkpYB2/pub?gid=0&single=true&output=csv",
        "layout": [
            {
                "id": 1769177614900,
                "type": "text",
                "x": 421.125,
                "y": 231,
                "size": 24,
                "color": "#815a20",
                "text": "<<Nama Peserta>>",
                "font": "Poppins",
                "align": "center",
                "bold": true,
                "_hitbox": {
                    "x": 302.2210464477539,
                    "y": 214,
                    "w": 237.8079071044922,
                    "h": 34
                },
                "_resizeBox": {
                    "x": 540.0289535522461,
                    "y": 248,
                    "size": 10
                }
            },
            {
                "id": 1769177675107,
                "type": "text",
                "x": 421.125,
                "y": 270,
                "size": 16,
                "color": "#000000",
                "text": "<<Instansi>>",
                "font": "Poppins",
                "align": "center",
                "bold": false,
                "_hitbox": {
                    "x": 367.77305603027344,
                    "y": 257,
                    "w": 106.70388793945312,
                    "h": 26
                },
                "_resizeBox": {
                    "x": 474.47694396972656,
                    "y": 283,
                    "size": 10
                }
            },
            {
                "id": 1769177728870,
                "type": "text",
                "x": 421.125,
                "y": 293,
                "size": 16,
                "color": "#a27430",
                "text": "Terbaik <<Ranking>> Guru Jenjang <<Jenjang>>",
                "font": "Poppins",
                "align": "center",
                "bold": true,
                "_hitbox": {
                    "x": 221.57315063476562,
                    "y": 280,
                    "w": 399.10369873046875,
                    "h": 26
                },
                "_resizeBox": {
                    "x": 620.6768493652344,
                    "y": 306,
                    "size": 10
                }
            },
            {
                "id": 1769177891267,
                "type": "qr",
                "x": 713,
                "y": 42,
                "size": 89,
                "color": "#000000",
                "_hitbox": {
                    "x": 708,
                    "y": 37,
                    "w": 99,
                    "h": 99
                },
                "_resizeBox": {
                    "x": 807,
                    "y": 136,
                    "size": 10
                }
            }
        ]
    },
    {
        "id": "CERT-1769179774017",
        "judul": "Peningkatan Kompetensi Guru Melalui Kegiatan Lomba Multimedia Pembelajaran Interaktif",
        "deskripsi": "Dengan kegiatan ini diharapkan dapat meningkatkan pengetahuan dan keterampilan guru dalam merancang dan membuat MPI yang menyenangkan",
        "narasumber": "Tim SLCC PGRI Kab. Situbondo",
        "instansi_nara": "Sekbid Digitalisasi dan Keanggotaan",
        "tgl_mulai": "2025-12-09",
        "tgl_selesai": "2025-12-23",
        "thumbnail": "thumbnail/Multimedia.png",
        "link_download": "unduh.html",
        "status": "Nonaktif",
        "base_url_validasi": "https://sertifikatpgrisitubondo.netlify.app/ceksertifikat.html?id=",
        "template_img": "draf/default.pdf",
        "google_sheet_url": "",
        "layout": []
    },
    {
        "id": "CERT-1779217518799",
        "judul": "Workshop Pengembangan Pembelajaran Mendalam Melalui Engineering Design Process dan STEM",
        "deskripsi": "Workshop ini bertujuan untuk meningkatkan kompetensi pendidik dalam merancang pembelajaran mendalam (deep learning) melalui penerapan pendekatan Engineering Design Process (EDP) dan STEM (Science, Technology, Engineering, and Mathematics). Kegiatan ini memberikan pengalaman praktis kepada peserta dalam menyusun pembelajaran yang berpusat pada pemecahan masalah, kreativitas, kolaborasi, serta penguatan keterampilan abad 21 agar proses belajar menjadi lebih bermakna, inovatif, dan kontekstual bagi peserta didik.",
        "narasumber": "Prof. Drs. H. Dafik, M.Sc., Ph.D.",
        "instansi_nara": "Guru Besar Universitas Jember",
        "tgl_mulai": "2026-05-12",
        "tgl_selesai": "2026-05-20",
        "status": "Nonaktif",
        "base_url_validasi": "https://sertifikatpgrisitubondo.netlify.app/ceksertifikat.html?id=",
        "thumbnail": "thumbnail/EDPSTEM.png",
        "link_download": "unduh.html",
        "template_img": "draf/sertifikat4.pdf",
        "google_sheet_url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9gDUJjIA71Gu0jEc5F8k4ApzTO5UKp-Cm_MTMMvxrCXpJUO2ONFlnkpxYPQMrfOSoatkx5CvR50eC/pub?gid=0&single=true&output=csv",
        "layout": []
    }
];

// --- LOGIKA PEMILIHAN DATA OTOMATIS ---
var dbSertifikat = defaultData; 

if (typeof window !== 'undefined' && window.location.href.indexOf('setting.html') > -1) {
    const local = localStorage.getItem('dbSertifikat_draft');
    if (local) dbSertifikat = JSON.parse(local);
}

function simpanKeStorage() {
    localStorage.setItem('dbSertifikat_draft', JSON.stringify(dbSertifikat));
}
