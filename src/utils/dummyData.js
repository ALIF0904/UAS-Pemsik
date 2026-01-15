export const dummyDashboardData = {
  kelas: "TI",

  // =====================
  // Ringkasan Materi
  // =====================
  totalMateri: 4,
  completedMateri: 2,          // misal: sudah selesai 2 materi
  progress: 50,                // 2 dari 4 = 50%
  points: 120,
  streak: 3,

  // =====================
  // Waktu Belajar
  // =====================
  waktuBelajar: {
    hariIni: 60,
    mingguan: 240,
  },

  // =====================
  // Progress per Minggu
  // =====================
  progressMingguan: [
    { minggu: "Minggu 1", progress: 25 },
    { minggu: "Minggu 2", progress: 50 },
  ],

  // =====================
  // Waktu per Kategori (sesuai materi React)
  // =====================
  waktuPerKategori: [
    { name: "React Dasar", value: 90 },
    { name: "State & Props", value: 60 },
    { name: "Hooks", value: 70 },
    { name: "Routing", value: 20 },
  ],

  // =====================
  // Status Modul
  // =====================
  statusModul: [
    { name: "Selesai", value: 2 },
    { name: "Sedang Berjalan", value: 1 },
    { name: "Belum Dimulai", value: 1 },
  ],

  // =====================
  // Akumulasi Jam Belajar
  // =====================
  akumulasiJamBelajar: [
    { date: "Sen", jam: 1.0 },
    { date: "Sel", jam: 1.5 },
    { date: "Rab", jam: 2.0 },
    { date: "Kam", jam: 2.5 },
    { date: "Jum", jam: 3.0 },
  ],

  // =====================
  // Skill Radar (berdasarkan materi)
  // =====================
  skillRadar: [
    { skill: "React Dasar", value: 70 },
    { skill: "State & Props", value: 65 },
    { skill: "Hooks", value: 50 },
    { skill: "Routing", value: 40 },
  ],

  // =====================
  // Informasi Modul
  // =====================
  lastModule: "State & Props",
  recommendedModule: "React Hooks",
  targetToday: { target: 90, done: 60 },
  bookmarkCount: 2,
};



export const dummyMateri = [
  {
    id: 1,
    judul: "Pengenalan React",
    deskripsi: "Mengenal dasar-dasar React dan konsep komponen.",
  },
  {
    id: 2,
    judul: "State & Props",
    deskripsi: "Belajar mengelola state dan mengirim data antar komponen.",
  },
  {
    id: 3,
    judul: "React Hooks",
    deskripsi: "Menggunakan useState, useEffect, dan custom hooks.",
  },
  {
    id: 4,
    judul: "Routing di React",
    deskripsi: "Navigasi halaman dengan React Router DOM.",
  },
];
