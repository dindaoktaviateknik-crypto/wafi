export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

export interface OrganizationItem {
  id: string;
  index: string;
  organization: string;
  role: string;
  focus: 'Kepemimpinan' | 'Keuangan & Administrasi' | 'Pendidikan & Keilmuan';
  highlightStat: string;
  summary: string;
  responsibilities: string[];
  photos: GalleryPhoto[];
}

export interface AchievementItem {
  id: string;
  index: string;
  title: string;
  event: string;
  level: string;
  year: string;
  reward?: string;
  description: string;
  photos: GalleryPhoto[];
}

export interface CertificateItem {
  id: string;
  index: string;
  title: string;
  competency: string;
  issuer: string;
  date: string;
  regNumber: string;
  locationOrNote: string;
  photo: GalleryPhoto;
}

export const PROFILE = {
  name: 'Abdul Wafi, S.Akun.',
  shortName: 'Abdul Wafi',
  degree: 'S.Akun.',
  subtitle: 'Sarjana Akuntansi · Bidang Akuntansi',
  discipline: 'Bidang Akuntansi · Alumni UIN KHAS Jember',
  origin: 'Situbondo, Jawa Timur',
  birthInfo: 'Situbondo, 04 April 2004',
  headline: 'Abdul Wafi, S.Akun.',
  heroLead:
    'Portofolio ini menampilkan pengalaman magang, organisasi, prestasi, serta keterampilan saya dalam bidang akuntansi, administrasi, manajemen, dan keuangan.',
  lead: 'Lulusan Sarjana Akuntansi (S.Akun.) UIN KHAS Jember dengan kompetensi di bidang akuntansi, administrasi perkantoran, dan tata kelola keuangan. Berpengalaman magang sebagai staf administrasi di DPRD Kabupaten Situbondo, memimpin 15 pengurus di SEMA FEBI, mengelola anggaran organisasi, serta tersertifikasi kompetensi nasional IAI, BNSP Kehumasan, dan Islamic Accounting.',
  pdfPath: '/assets/dokumen/portofolio-abdul-wafi.pdf',
  heroPortraitCutout: {
    id: 'hero-sakun-portrait',
    src: '/assets/hero/portrait_wafi.png',
    alt: 'Potret Abdul Wafi, S.Akun. mengenakan jas resmi dan selempang kelulusan',
    caption: 'Abdul Wafi, S.Akun. — Sarjana Akuntansi, FEBI UIN KHAS Jember',
    category: 'Profil Utama · Abdul Wafi, S.Akun.',
  },
  heroCollage: {
    id: 'hero-podium-collage',
    src: '/assets/hero/collage_podium.png',
    alt: 'Kolase dokumentasi Abdul Wafi berpidato di podium dan acara Yudisium XIII',
    caption: 'Dokumentasi pidato resmi Ketua SEMA FEBI & prosesi Yudisium XIII FEBI UIN KHAS Jember',
    category: 'Kepemimpinan & Yudisium',
  },
  heroPortrait: {
    id: 'hero-award',
    src: '/assets/portfolio/img_67.jpg',
    alt: 'Abdul Wafi menerima apresiasi Juara Tingkat Nasional di UIN KHAS Jember',
    caption: 'Apresiasi Juara Tingkat Nasional — Simposium MEBI Summit 2025 Banjarmasin',
    category: 'Profil & Prestasi Nasional',
  },
  podiumPhoto: {
    id: 'hero-podium',
    src: '/assets/portfolio/img_59.jpg',
    alt: 'Abdul Wafi menyampaikan sambutan sebagai Ketua Umum SEMA FEBI UIN KHAS Jember',
    caption: 'Sambutan resmi sebagai Ketua Umum Senat Mahasiswa FEBI UIN KHAS Jember',
    category: 'Kepemimpinan SEMA FEBI',
  },
  contacts: {
    whatsappDisplay: '08976865097',
    whatsappUrl: 'https://wa.me/628976865097',
    instagramDisplay: '@wafi._____',
    instagramUrl: 'https://instagram.com/wafi._____',
    emailDisplay: 'wafia405@gmail.com',
    emailUrl: 'mailto:wafia405@gmail.com',
  },
};

export const HERO_METRICS = [
  {
    value: '15 Pengurus · 10 Proker',
    label: 'Ketua Umum SEMA FEBI',
    context: 'Kepemimpinan 2 tahun masa bakti',
  },
  {
    value: 'Best Presentation',
    label: 'MEBI Summit 2025',
    context: 'Tingkat Nasional · Apresiasi Rp1.250.000',
  },
  {
    value: '4 Sertifikasi Resmi',
    label: 'IAI · BNSP · SKKNI',
    context: 'Akuntansi Dasar II, Syariah & Public Speaking',
  },
  {
    value: '5 Organisasi & 1 Magang',
    label: 'DPRD Situbondo & Kampus',
    context: 'Administrasi, kesekretariatan & bendahara',
  },
];

export const INTERNSHIP = {
  institution: 'DPRD Kabupaten Situbondo',
  role: 'Staf Administrasi',
  period: 'Pengalaman Magang Pemerintahan',
  summary:
    'Terlibat langsung dalam mendukung kelancaran operasional perkantoran legislatif daerah melalui pengelolaan persuratan resmi, penataan arsip sistematis, pengolahan data, dan koordinasi lintas pegawai.',
  duties: [
    'Mengelola dan membantu pelaksanaan kegiatan administrasi perkantoran, termasuk surat-menyurat, pengarsipan dokumen, penginputan data, serta penyusunan laporan untuk mendukung kelancaran operasional kantor.',
    'Berperan aktif dalam pengelolaan dokumen administrasi, pencatatan surat masuk dan surat keluar, serta memastikan kelengkapan dan ketertiban berkas sesuai prosedur yang berlaku.',
    'Melakukan koordinasi dengan staf dan pegawai dalam pelaksanaan kegiatan administrasi, sehingga mendukung efektivitas komunikasi, kerja sama tim, dan kelancaran pelayanan perkantoran.',
    'Membantu proses penyusunan laporan kegiatan, pengolahan data, serta penataan dokumen dan arsip secara tertib, sistematis, dan terorganisir untuk meningkatkan efisiensi pekerjaan administrasi.',
  ],
  photos: [
    {
      id: 'dprd-1',
      src: '/assets/portfolio/img_30.jpg',
      alt: 'Tim mahasiswa magang di depan Gedung DPRD Kabupaten Situbondo',
      caption: 'Dokumentasi bersama tim mahasiswa magang di pintu utama DPRD Kabupaten Situbondo.',
      category: 'Pengalaman Magang · DPRD Situbondo',
    },
    {
      id: 'dprd-2',
      src: '/assets/portfolio/img_31.jpg',
      alt: 'Abdul Wafi mengolah data administrasi dan berkas kantor di DPRD Situbondo',
      caption: 'Pelaksanaan penginputan data, penyusunan laporan, dan pemeriksaan berkas administrasi.',
      category: 'Pengalaman Magang · DPRD Situbondo',
    },
    {
      id: 'dprd-3',
      src: '/assets/portfolio/img_32.jpg',
      alt: 'Aktivitas pengarsipan dan pengelolaan dokumen digital di meja kerja DPRD Situbondo',
      caption: 'Pengolahan dokumen perkantoran dan penataan arsip digital secara terstruktur.',
      category: 'Pengalaman Magang · DPRD Situbondo',
    },
  ] as GalleryPhoto[],
};

export const ORGANIZATIONS: OrganizationItem[] = [
  {
    id: 'sema-febi',
    index: '01',
    organization: 'Senat Mahasiswa Fakultas Ekonomi dan Bisnis Islam (SEMA FEBI)',
    role: 'Ketua Umum',
    focus: 'Kepemimpinan',
    highlightStat: '15 Pengurus · 10 Proker · 2 Tahun',
    summary:
      'Memimpin jajaran eksekutif legislatif mahasiswa tingkat fakultas selama dua tahun dengan tata kelola administrasi, anggaran, dan kemitraan pimpinan fakultas.',
    responsibilities: [
      'Memimpin dan mengoordinasikan 15 pengurus aktif selama 2 tahun, serta berhasil merealisasikan 10 program kerja organisasi melalui perencanaan, pembagian tugas, dan evaluasi kinerja secara terstruktur.',
      'Mengawasi pengelolaan administrasi organisasi, meliputi surat-menyurat, pengarsipan dokumen, penyusunan proposal, serta laporan pertanggungjawaban kegiatan.',
      'Mengoordinasikan perencanaan anggaran dan pengawasan penggunaan dana dalam pelaksanaan 10 program kerja guna mendukung pengelolaan keuangan yang transparan dan akuntabel.',
      'Memimpin rapat koordinasi, pengambilan keputusan, serta evaluasi kinerja 15 pengurus untuk memastikan seluruh program kerja terlaksana sesuai target organisasi.',
      'Membangun komunikasi dan kerja sama dengan pimpinan fakultas serta organisasi kemahasiswaan dalam mendukung kelancaran kegiatan dan pengembangan organisasi.',
    ],
    photos: [
      {
        id: 'sema-1',
        src: '/assets/portfolio/img_59.jpg',
        alt: 'Abdul Wafi berpidato di podium sebagai Ketua SEMA FEBI',
        caption: 'Penyampaian sambutan Ketua Umum SEMA FEBI UIN KHAS Jember dalam forum resmi fakultas.',
        category: 'SEMA FEBI · Ketua Umum',
      },
      {
        id: 'sema-2',
        src: '/assets/portfolio/img_58.jpg',
        alt: 'Publikasi resmi SEMA FEBI UM-PTKIN 2025 menampilkan Abdul Wafi',
        caption: 'Publikasi penyambutan Mahasiswa Baru FEBI jalur UM-PTKIN 2025 oleh Ketua SEMA FEBI.',
        category: 'SEMA FEBI · Ketua Umum',
      },
      {
        id: 'sema-3',
        src: '/assets/portfolio/img_60.jpg',
        alt: 'Foto bersama jajaran pengurus SEMA FEBI UIN KHAS Jember',
        caption: 'Koordinasi dan dokumentasi bersama jajaran pengurus aktif SEMA FEBI.',
        category: 'SEMA FEBI · Ketua Umum',
      },
      {
        id: 'sema-4',
        src: '/assets/portfolio/img_61.jpg',
        alt: 'Evaluasi dan kebersamaan tim pengurus SEMA FEBI',
        caption: 'Kegiatan evaluasi internal dan penguatan solidaritas tim pengurus.',
        category: 'SEMA FEBI · Ketua Umum',
      },
    ],
  },
  {
    id: 'pmii-febi',
    index: '02',
    organization: 'Pergerakan Mahasiswa Islam Indonesia (PMII) Rayon FEBI',
    role: 'Bendahara Umum',
    focus: 'Keuangan & Administrasi',
    highlightStat: 'Pengelolaan RAB · Akuntabilitas Dana',
    summary:
      'Penanggung jawab penuh atas tata kelola keuangan rayon, penyusunan Rencana Anggaran Biaya (RAB), pencatatan kas, hingga laporan pertanggungjawaban transparan.',
    responsibilities: [
      'Bertanggung jawab dalam mengelola administrasi keuangan organisasi, meliputi pencatatan pemasukan dan pengeluaran, pengarsipan bukti transaksi, serta penyusunan laporan keuangan secara sistematis dan transparan.',
      'Mengelola anggaran kegiatan organisasi melalui perencanaan, pengalokasian, dan pengawasan penggunaan dana untuk mendukung kelancaran pelaksanaan program kerja.',
      'Melakukan rekapitulasi transaksi keuangan dan menyusun laporan pertanggungjawaban sebagai bentuk transparansi serta akuntabilitas pengelolaan dana organisasi.',
      'Berkoordinasi dengan pengurus dan penanggung jawab kegiatan dalam penyusunan Rencana Anggaran Biaya (RAB), pengendalian pengeluaran, serta evaluasi penggunaan anggaran.',
    ],
    photos: [
      {
        id: 'pmii-1',
        src: '/assets/portfolio/img_54.jpg',
        alt: 'Kegiatan RTAR KE-X 2025/2026 PMII Rayon FEBI',
        caption: 'Rapat Tahunan Anggota Rayon (RTAR) KE-X periode 2025/2026 PMII Rayon FEBI.',
        category: 'PMII Rayon FEBI · Bendahara Umum',
      },
      {
        id: 'pmii-2',
        src: '/assets/portfolio/img_53.jpg',
        alt: 'Poster MAPABA XI PMII Rayon FEBI menampilkan Sahabat Wafi',
        caption: 'Keterlibatan aktif dalam Masa Penerimaan Anggota Baru (MAPABA XI) Rayon FEBI.',
        category: 'PMII Rayon FEBI · Bendahara Umum',
      },
      {
        id: 'pmii-3',
        src: '/assets/portfolio/img_52.jpg',
        alt: 'Pengurus PMII Rayon FEBI',
        caption: 'Kebersamaan jajaran pengurus PMII Rayon Fakultas Ekonomi dan Bisnis Islam.',
        category: 'PMII Rayon FEBI · Bendahara Umum',
      },
      {
        id: 'pmii-4',
        src: '/assets/portfolio/img_55.jpg',
        alt: 'Dokumentasi kaderisasi anggota PMII Rayon FEBI',
        caption: 'Dokumentasi bersama kader dan anggota baru Rayon FEBI.',
        category: 'PMII Rayon FEBI · Bendahara Umum',
      },
    ],
  },
  {
    id: 'hmps-aks',
    index: '03',
    organization: 'Himpunan Mahasiswa Program Studi Akuntansi Syariah',
    role: 'Sekretaris Umum',
    focus: 'Keuangan & Administrasi',
    highlightStat: 'Kesekretariatan · LPJ & Anggaran',
    summary:
      'Mengendalikan roda kesekretariatan himpunan program studi, arsip persuratan, koordinasi program kerja, serta mendukung pencatatan transaksi keuangan kegiatan.',
    responsibilities: [
      'Mengelola dan mengoordinasikan kegiatan organisasi, termasuk administrasi, surat-menyurat, pengarsipan dokumen, serta penyusunan laporan kegiatan untuk mendukung kelancaran program kerja.',
      'Berperan aktif dalam perencanaan, pelaksanaan, dan evaluasi program kerja organisasi, serta memastikan setiap kegiatan berjalan sesuai jadwal dan tujuan yang telah ditetapkan.',
      'Melakukan koordinasi dengan pengurus, anggota, dan pihak terkait dalam pelaksanaan kegiatan, sehingga meningkatkan efektivitas komunikasi, kerja sama tim, dan pengelolaan administrasi organisasi.',
      'Mendukung pengelolaan anggaran kegiatan, pencatatan transaksi keuangan, serta penyusunan laporan pertanggungjawaban secara tertib, transparan, dan sistematis.',
    ],
    photos: [
      {
        id: 'hmps-1',
        src: '/assets/portfolio/img_38.jpg',
        alt: 'Kegiatan Sharia 2024 HMPS Akuntansi Syariah',
        caption: 'Pelaksanaan agenda Sharia 2024 bersama pengurus dan mahasiswa Akuntansi Syariah.',
        category: 'HMPS Akuntansi Syariah · Sekretaris Umum',
      },
      {
        id: 'hmps-2',
        src: '/assets/portfolio/img_39.jpg',
        alt: 'Sidang dan rapat kerja HMPS Akuntansi Syariah',
        caption: 'Koordinasi program kerja dan rapat organisasi di lingkungan FEBI.',
        category: 'HMPS Akuntansi Syariah · Sekretaris Umum',
      },
      {
        id: 'hmps-3',
        src: '/assets/portfolio/img_37.jpg',
        alt: 'Panggung acara Sharia Accounting Festival',
        caption: 'Malam puncak kegiatan kemahasiswaan Program Studi Akuntansi Syariah.',
        category: 'HMPS Akuntansi Syariah · Sekretaris Umum',
      },
      {
        id: 'hmps-4',
        src: '/assets/portfolio/img_36.jpg',
        alt: 'Kegiatan lapangan malam hari HMPS Akuntansi Syariah',
        caption: 'Pembinaan dan konsolidasi anggota himpunan program studi.',
        category: 'HMPS Akuntansi Syariah · Sekretaris Umum',
      },
    ],
  },
  {
    id: 'ikmas',
    index: '04',
    organization: 'Ikatan Mahasiswa Situbondo (IKMAS)',
    role: 'Ketua Bidang Keilmuan',
    focus: 'Kepemimpinan',
    highlightStat: '5 Anggota Aktif · 3 Program Kerja',
    summary:
      'Memimpin divisi keilmuan organisasi daerah Situbondo dengan merealisasikan tiga program kerja intelektual, kajian literatur, dan tata kelola proposal hingga LPJ.',
    responsibilities: [
      'Memimpin dan mengoordinasikan 5 anggota aktif dalam Bidang Keilmuan untuk merencanakan, menyusun, dan melaksanakan program kerja organisasi.',
      'Berhasil merealisasikan 3 program kerja bidang keilmuan melalui koordinasi tim, pembagian tugas, serta pengelolaan kegiatan secara terstruktur.',
      'Mengelola administrasi kegiatan, mulai dari penyusunan proposal, pendataan peserta, pengarsipan dokumen, hingga penyusunan laporan pertanggungjawaban.',
      'Melakukan evaluasi dan koordinasi bersama anggota untuk memastikan seluruh program kerja terlaksana sesuai dengan tujuan organisasi.',
    ],
    photos: [
      {
        id: 'ikmas-1',
        src: '/assets/portfolio/img_42.jpg',
        alt: 'Pengurus dan anggota Ikatan Mahasiswa Situbondo (IKMAS)',
        caption: 'Kegiatan kebersamaan dan konsolidasi keluarga besar Ikatan Mahasiswa Situbondo.',
        category: 'IKMAS · Ketua Bidang Keilmuan',
      },
      {
        id: 'ikmas-2',
        src: '/assets/portfolio/img_44.jpg',
        alt: 'Pelantikan pengurus IKMAS',
        caption: 'Momentum pelantikan dan pengukuhan kepengurusan IKMAS.',
        category: 'IKMAS · Ketua Bidang Keilmuan',
      },
      {
        id: 'ikmas-3',
        src: '/assets/portfolio/img_43.jpg',
        alt: 'Aksi sosial dan distribusi bantuan IKMAS',
        caption: 'Pelaksanaan program kerja sosial dan pengabdian masyarakat oleh pengurus IKMAS.',
        category: 'IKMAS · Ketua Bidang Keilmuan',
      },
      {
        id: 'ikmas-4',
        src: '/assets/portfolio/img_45.jpg',
        alt: 'Resume Kajian Uyunul Masail Lin Nisa bidang keilmuan IKMAS',
        caption: 'Publikasi resume kajian keilmuan kitab Uyunul Masa’il Lin Nisa’.',
        category: 'IKMAS · Ketua Bidang Keilmuan',
      },
    ],
  },
  {
    id: 'genbi-jember',
    index: '05',
    organization: 'GenBI Jember (Generasi Baru Indonesia – Bank Indonesia)',
    role: 'Anggota Proker GenBI Mengajar & GenBI Goes To Campus',
    focus: 'Pendidikan & Keilmuan',
    highlightStat: '2 Program Pendidikan · Bank Indonesia',
    summary:
      'Berkontribusi aktif dalam program pemberdayaan pendidikan dan peningkatan wawasan mahasiswa serta pelajar di bawah naungan komunitas penerima beasiswa Bank Indonesia.',
    responsibilities: [
      'Berperan aktif dalam pelaksanaan 2 program kerja, yaitu GenBI Mengajar dan GenBI Goes to Campus, yang berfokus pada pengembangan pendidikan, peningkatan wawasan, dan pemberdayaan mahasiswa.',
      'Berpartisipasi dalam kegiatan GenBI Mengajar untuk mendukung proses pembelajaran, berbagi pengetahuan, serta meningkatkan motivasi belajar peserta.',
      'Berkontribusi dalam pelaksanaan GenBI Goes to Campus melalui koordinasi kegiatan, persiapan acara, dan penyampaian informasi kepada peserta.',
      'Mendukung kelancaran program kerja melalui kerja sama tim, koordinasi antaranggota, serta pelaksanaan tugas sesuai tanggung jawab yang diberikan.',
    ],
    photos: [
      {
        id: 'genbi-1',
        src: '/assets/portfolio/img_48.jpg',
        alt: 'Dokumentasi GenBI Jember Insightfull Journey 29-30 November & 1 Desember 2024',
        caption: 'GenBI Jember Insightfull Journey — "Exploring Knowledge Strengthening Bonds" (29 Nov – 1 Des 2024).',
        category: 'GenBI Jember · Bank Indonesia',
      },
      {
        id: 'genbi-2',
        src: '/assets/portfolio/img_49.jpg',
        alt: 'Dokumentasi GenBI Mengajar 08 Desember 2024 bertema MIMPI',
        caption: 'GenBI Mengajar 08 Desember 2024 — "Dream big, explore careers: Inspiring Journeys to Success".',
        category: 'GenBI Jember · Bank Indonesia',
      },
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'mebi-summit-2025',
    index: '01',
    title: 'Best Presentation — Simposium MEBI Summit 2025',
    event: 'Forum Nasional Mahasiswa Ekonomi dan Bisnis Islam (FORNASMEBI)',
    level: 'Tingkat Nasional · Banjarmasin',
    year: '27 Oktober 2025',
    reward: 'Apresiasi Juara Nasional Rp1.250.000',
    description:
      'Dinobatkan sebagai Best Presentation pada ajang Simposium MEBI Summit 2025 di Banjarmasin serta menerima penghargaan apresiasi juara tingkat nasional dari UIN KHAS Jember senilai Rp1.250.000.',
    photos: [
      {
        id: 'ach-mebi-cert',
        src: '/assets/portfolio/img_65.jpg',
        alt: 'Sertifikat Best Presentation Simposium MEBI Summit 2025 Banjarmasin atas nama Abdul Wafi',
        caption: 'Sertifikat resmi Best Presentation FORNASMEBI — Banjarmasin, 27 Oktober 2025.',
        category: 'Prestasi Nasional · MEBI Summit 2025',
      },
      {
        id: 'ach-mebi-panel',
        src: '/assets/portfolio/img_66.jpg',
        alt: 'Abdul Wafi mempresentasikan gagasan pada forum diskusi Simposium MEBI Summit 2025',
        caption: 'Sesi pemaparan dan diskusi panel antar-delegasi mahasiswa ekonomi Islam nasional.',
        category: 'Prestasi Nasional · MEBI Summit 2025',
      },
      {
        id: 'ach-mebi-award',
        src: '/assets/portfolio/img_67.jpg',
        alt: 'Abdul Wafi memegang papan apresiasi juara tingkat nasional Rp1.250.000',
        caption: 'Penyerahan Apresiasi Juara Tingkat Nasional senilai Rp1.250.000 di UIN KHAS Jember.',
        category: 'Prestasi Nasional · MEBI Summit 2025',
      },
    ],
  },
  {
    id: 'ukor-short-video',
    index: '02',
    title: 'Juara 1 Lomba Short Video UKOR',
    event: 'Unit Kegiatan Olahraga (UKOR) UIN KHAS Jember',
    level: 'Tingkat Universitas · Jember',
    year: 'Masa Perkuliahan',
    description:
      'Meraih peringkat pertama kompetisi produksi video pendek (Short Video) yang diselenggarakan oleh UKOR UIN KHAS Jember melalui penyampaian narasi visual yang kreatif dan komunikatif.',
    photos: [
      {
        id: 'ach-ukor-1',
        src: '/assets/portfolio/img_64.jpg',
        alt: 'Poster pengumuman Juara 1 Short Video UKOR UIN KHAS Jember karya Abdul Wafi',
        caption: 'Pengumuman resmi Juara 1 Short Video UKOR UIN KHAS Jember — Karya Abdul Wafi (Asal Situbondo).',
        category: 'Prestasi Kampus · UKOR UIN KHAS Jember',
      },
    ],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-iai',
    index: '01',
    title: 'Uji Standar Keahlian Akuntansi — Tingkat Dasar II',
    competency: 'Standar Keahlian Akuntansi',
    issuer: 'Ikatan Akuntan Indonesia (IAI) Wilayah Jawa Timur',
    date: 'Ujian: 04 Nov 2025 · Terbit: 25 Feb 2026',
    regNumber: 'NO.276 281102025 · Ujian 109',
    locationOrNote: 'Fakultas Ekonomi Universitas Jember',
    photo: {
      id: 'cert-img-iai',
      src: '/assets/portfolio/img_73.jpg',
      alt: 'Sertifikat Uji Standar Keahlian Akuntansi Tingkat Dasar II IAI Wilayah Jawa Timur milik Abdul Wafi',
      caption: 'Sertifikat IAI Wilayah Jawa Timur — Uji Standar Keahlian Akuntansi Tingkat Dasar II (No. 276 281102025).',
      category: 'Sertifikasi Profesi · Ikatan Akuntan Indonesia',
    },
  },
  {
    id: 'cert-sia',
    index: '02',
    title: 'Sertifikat Kompetensi — Islamic Accounting',
    competency: 'Akuntansi Syariah (Standar SKKNI)',
    issuer: 'Smart Indonesia Academy (LPK/LKP PT Akademi Smart Indonesia)',
    date: '9 September 2025',
    regNumber: 'C.SIA.014.044.IX.2025',
    locationOrNote: 'Bimbingan Teknis & Penilaian Kompetensi SKKNI',
    photo: {
      id: 'cert-img-sia',
      src: '/assets/portfolio/img_70.jpg',
      alt: 'Sertifikat Kompetensi Islamic Accounting Akuntansi Syariah Smart Indonesia Academy milik Abdul Wafi',
      caption: 'Sertifikat Kompetensi Islamic Accounting (Akuntansi Syariah) — No. C.SIA.014.044.IX.2025.',
      category: 'Sertifikasi Kompetensi · Akuntansi Syariah',
    },
  },
  {
    id: 'cert-bnsp',
    index: '03',
    title: 'Sertifikat Kompetensi BNSP — Kehumasan',
    competency: 'Skema Klaster Public Speaking',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) · LSP Publik Relation Nusantara',
    date: '19 Desember 2024 (Berlaku 3 Tahun)',
    regNumber: '70203.2432.12.0004748.2024',
    locationOrNote: 'Reg. KHS.1878.02400.2024 · Surabaya',
    photo: {
      id: 'cert-img-bnsp',
      src: '/assets/portfolio/img_71.jpg',
      alt: 'Sertifikat Kompetensi BNSP Bidang Kehumasan Skema Klaster Public Speaking milik Abdul Wafi',
      caption: 'Sertifikat Kompetensi BNSP Bidang Kehumasan / Public Speaking — No. 70203.2432.12.0004748.2024.',
      category: 'Sertifikasi Nasional · BNSP',
    },
  },
  {
    id: 'cert-creative-accounting',
    index: '04',
    title: 'Pelatihan Creative Accounting (4 SKP)',
    competency: 'Praktik Akuntansi & Keuangan',
    issuer: 'Ruang Seminar (Pemateri: Satyo Wicaksono S.E., CA., CPA., CMA)',
    date: '13 November 2022',
    regNumber: '173/1290/Accounting/RS-11/2022',
    locationOrNote: 'Webinar Nasional · Durasi 200 Menit (4 SKP)',
    photo: {
      id: 'cert-img-ca',
      src: '/assets/portfolio/img_72.jpg',
      alt: 'Sertifikat Webinar Nasional Pelatihan Creative Accounting Ruang Seminar milik Abdul Wafi',
      caption: 'Sertifikat Webinar Nasional Pelatihan Creative Accounting (4 SKP) — No. 173/1290/Accounting/RS-11/2022.',
      category: 'Pelatihan Akuntansi · Ruang Seminar',
    },
  },
];
