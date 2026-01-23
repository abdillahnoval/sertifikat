// Database Daftar Sertifikat (Updated Structure)
const defaultData = [
    {
        id: "CERT-001",
        judul: "Workshop Pemanfaatan Koding dan Artificial Intellegence (AI) dalam Pembelajaran Mendalam",
        deskripsi: "Workshop Pemanfaatan Koding dan Artificial Intellegence (AI) dalam Pembelajaran Mendalam yang diselenggarakan oleh PGRI Kabupaten Situbondo",
        narasumber: "Prof. Noval Abdillah, S.Pd., M.Pd.",
        instansi_nara: "Guru Besar Universitas Jember",
        tgl_mulai: "2025-11-21",
        tgl_selesai: "2025-11-25",
        status: "Aktif",
        thumbnail: "thumbnail/flyer_seminar1.png",
        link_download: "workshop/1/index.html"
    },
    {
        id: "CERT-002",
        judul: "Workshop Digitalisasi Pembelajaran dalam Menjawab Tantangan Abad 21 bagi Guru dan Kepala Sekolah",
        deskripsi: "Pelatihan intensif bagi tenaga pendidik dalam menghadapi era digital.",
        narasumber: "Prof. Noval Abdillah, S.Pd., M.Pd.",
        instansi_nara: "Universitas Negeri Malang",
        tgl_mulai: "2025-12-01",
        tgl_selesai: "2025-12-02",
        status: "Aktif",
        thumbnail: "thumbnail/flyer_2.png",
        link_download: "workshop/2/index.html"
    },
    {
        id: "CERT-003",
        judul: "Bimtek Penguatan Kemampuan Literasi dan Numerasi Peserta Didik dalam Pembelajaran Mendalam",
        deskripsi: "Bimbingan teknis strategi peningkatan literasi siswa.",
        narasumber: "Prof. Ricardus Eko Indrajit, S.Pd., M.Pd.",
        instansi_nara: "Pakar Teknologi Pendidikan",
        tgl_mulai: "2026-01-10",
        tgl_selesai: "2026-01-11",
        status: "Aktif",
        thumbnail: "thumbnail/flyer_3.png",
        link_download: "workshop/3/index.html"
    }
];

let dbDaftarSertifikat = JSON.parse(localStorage.getItem('dbDaftarSertifikat')) || defaultData;

function simpanKeStorage() {
    localStorage.setItem('dbDaftarSertifikat', JSON.stringify(dbDaftarSertifikat));
}