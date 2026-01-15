/* =====================================================
   DASHBOARD ANALITIK PEMBELAJARAN
   ===================================================== */

export const dashboardSummary = {
  totalModules: 12,
  completedModules: 7,
  dailyStudyTime: 75,      // menit hari ini
  weeklyStudyTime: 420,    // menit minggu ini
  achievementPoints: 320,
  studyStreak: 5,          // hari berturut-turut
};

/* =====================================================
   LINE CHART
   Progress belajar per minggu (4 minggu terakhir)
   ===================================================== */
export const weeklyProgress = [
  { week: "Minggu 1", progress: 20 },
  { week: "Minggu 2", progress: 40 },
  { week: "Minggu 3", progress: 60 },
  { week: "Minggu 4", progress: 75 },
];

/* =====================================================
   BAR CHART
   Waktu belajar per kategori materi
   ===================================================== */
export const studyTimeByCategory = [
  { category: "Programming", minutes: 240 },
  { category: "Database", minutes: 120 },
  { category: "Network", minutes: 90 },
  { category: "UI/UX", minutes: 60 },
  { category: "DevOps", minutes: 45 },
];

/* =====================================================
   PIE CHART
   Distribusi status modul
   ===================================================== */
export const moduleStatusDistribution = [
  { name: "Selesai", value: 7 },
  { name: "Sedang Berjalan", value: 3 },
  { name: "Belum Dimulai", value: 2 },
];

/* =====================================================
   AREA CHART
   Akumulasi jam belajar dari waktu ke waktu
   ===================================================== */
export const cumulativeStudyTime = [
  { day: "Sen", hours: 1.5 },
  { day: "Sel", hours: 3.0 },
  { day: "Rab", hours: 4.5 },
  { day: "Kam", hours: 6.0 },
  { day: "Jum", hours: 7.5 },
  { day: "Sab", hours: 9.0 },
  { day: "Min", hours: 10.5 },
];

/* =====================================================
   RADAR CHART
   Penilaian kemampuan per kategori
   ===================================================== */
export const skillRadarData = [
  { skill: "Programming", value: 80 },
  { skill: "Database", value: 65 },
  { skill: "Network", value: 55 },
  { skill: "UI/UX", value: 60 },
  { skill: "DevOps", value: 45 },
];

/* =====================================================
   PANEL AKSI CEPAT
   ===================================================== */
export const quickActions = {
  lastModule: {
    id: 4,
    title: "Event Handling",
    progress: 60,
  },
  recommendedModule: {
    id: 8,
    title: "State Management dengan Context API",
  },
  todayTarget: {
    targetMinutes: 90,
    completedMinutes: 75,
  },
  bookmarks: [
    { id: 2, title: "Dasar JavaScript" },
    { id: 5, title: "Relasi Database SQL" },
    { id: 9, title: "Konsep REST API" },
  ],
};



// =====================
// MODULES (MINIMAL 10)
// =====================
export const modules = [
  {
    id: 1,
    title: "Pengenalan React",
    category: "React",
    description: "Memahami konsep dasar React, komponen, dan struktur project.",
    completed: true,
  },
  {
    id: 2,
    title: "JSX & Rendering",
    category: "React",
    description: "Mempelajari JSX dan bagaimana React melakukan rendering UI.",
    completed: true,
  },
  {
    id: 3,
    title: "State & Props",
    category: "React",
    description: "Mengelola data menggunakan state dan props antar komponen.",
    completed: true,
  },
  {
    id: 4,
    title: "Event Handling",
    category: "React",
    description: "Menangani event seperti klik, submit, dan input pada React.",
    completed: false,
  },
  {
    id: 5,
    title: "Conditional Rendering",
    category: "React",
    description: "Menampilkan komponen berdasarkan kondisi tertentu.",
    completed: false,
  },
  {
    id: 6,
    title: "React Hooks",
    category: "React",
    description: "Menggunakan useState, useEffect, dan hooks bawaan React.",
    completed: false,
  },
  {
    id: 7,
    title: "Custom Hooks",
    category: "React",
    description: "Membuat hooks sendiri untuk reusable logic.",
    completed: false,
  },
  {
    id: 8,
    title: "React Router",
    category: "React",
    description: "Navigasi antar halaman menggunakan React Router DOM.",
    completed: false,
  },
  {
    id: 9,
    title: "API & Fetch Data",
    category: "React",
    description: "Mengambil dan mengelola data dari API menggunakan fetch/axios.",
    completed: false,
  },
  {
    id: 10,
    title: "Final Project",
    category: "Project",
    description: "Membangun aplikasi React lengkap sebagai proyek akhir.",
    completed: false,
  },
];

export const forumCategories = [
  { id: 1, name: "Pemrograman Web" },
  { id: 2, name: "Basis Data" },
  { id: 3, name: "Jaringan Komputer" },
];

export const forumThreads = [
  {
    id: 1,
    title: "Apa perbedaan useState dan useReducer?",
    content: "Saya masih bingung kapan harus menggunakan useReducer.",
    categoryId: 1,
    tags: ["react", "hooks"],
    author: "Andi",
    createdAt: "2025-01-10",
    votes: 12,
    solved: true,
    pinned: true,
  },
  {
    id: 2,
    title: "Cara optimasi query SQL JOIN?",
    content: "Query saya lambat saat JOIN banyak tabel.",
    categoryId: 2,
    tags: ["sql", "database"],
    author: "Budi",
    createdAt: "2025-01-12",
    votes: 7,
    solved: false,
    pinned: false,
  },
];

export const forumReplies = [
  {
    id: 1,
    threadId: 1,
    author: "Siti",
    content: "Gunakan useReducer jika state kompleks.",
    mentions: ["@Andi"],
    votes: 5,
  },
];

export const userReputation = {
  Andi: { points: 120, badge: "Contributor" },
  Budi: { points: 80, badge: "Beginner" },
  Siti: { points: 200, badge: "Expert" },
};


// =====================
// QUIZZES (MINIMAL 30)
// =====================
export const quizQuestions = [
  {
    id: 1,
    question: "Apa kepanjangan dari HTML?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "Hyper Tool Markup Language",
    ],
    correct: 0,
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "CSS digunakan untuk?",
    options: [
      "Membuat database",
      "Mengatur tampilan website",
      "Menjalankan server",
      "Mengelola API",
    ],
    correct: 1,
    correctAnswer: "Mengatur tampilan website",
  },
  {
    id: 3,
    question: "Bahasa pemrograman untuk web interaktif adalah?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correct: 2,
    correctAnswer: "JavaScript",
  },
  {
    id: 4,
    question: "Framework JavaScript adalah?",
    options: ["Laravel", "Django", "React", "Bootstrap"],
    correct: 2,
    correctAnswer: "React",
  },
  {
    id: 5,
    question: "Tag HTML untuk membuat link adalah?",
    options: ["<div>", "<a>", "<p>", "<link>"],
    correct: 1,
    correctAnswer: "<a>",
  },
  {
    id: 6,
    question: "Properti CSS untuk mengubah warna teks adalah?",
    options: ["background-color", "font-style", "color", "text-align"],
    correct: 2,
    correctAnswer: "color",
  },
  {
    id: 7,
    question: "Fungsi JavaScript untuk menampilkan pesan adalah?",
    options: ["alert()", "print()", "log()", "message()"],
    correct: 0,
    correctAnswer: "alert()",
  },
  {
    id: 8,
    question: "Tag HTML untuk membuat list tidak berurutan adalah?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 1,
    correctAnswer: "<ul>",
  },
  {
    id: 9,
    question: "Hook React untuk state adalah?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    correct: 2,
    correctAnswer: "useState",
  },
  {
    id: 10,
    question: "JSX adalah?",
    options: [
      "Bahasa pemrograman baru",
      "Template HTML",
      "Sintaks JavaScript untuk React",
      "Library CSS",
    ],
    correct: 2,
    correctAnswer: "Sintaks JavaScript untuk React",
  },
  {
    id: 11,
    question: "Props di React digunakan untuk?",
    options: [
      "Menyimpan state",
      "Mengirim data antar komponen",
      "Mengatur routing",
      "Mengelola database",
    ],
    correct: 1,
    correctAnswer: "Mengirim data antar komponen",
  },
  {
    id: 12,
    question: "State di React bersifat?",
    options: ["Static", "Tidak bisa diubah", "Dinamis", "Global"],
    correct: 2,
    correctAnswer: "Dinamis",
  },
  {
    id: 13,
    question: "Event handler di React ditulis menggunakan?",
    options: ["string", "function", "number", "boolean"],
    correct: 1,
    correctAnswer: "function",
  },
  {
    id: 14,
    question: "Virtual DOM digunakan untuk?",
    options: ["Menyimpan data", "Optimasi rendering", "Routing", "Styling"],
    correct: 1,
    correctAnswer: "Optimasi rendering",
  },
  {
    id: 15,
    question: "Hook useEffect digunakan untuk?",
    options: ["State management", "Side effects", "Routing", "Styling"],
    correct: 1,
    correctAnswer: "Side effects",
  },
  {
    id: 16,
    question: "React Router digunakan untuk?",
    options: ["API request", "Routing halaman", "Styling", "State management"],
    correct: 1,
    correctAnswer: "Routing halaman",
  },
  {
    id: 17,
    question: "Komponen React harus diawali dengan huruf?",
    options: ["Kecil", "Angka", "Besar", "Simbol"],
    correct: 2,
    correctAnswer: "Besar",
  },
  {
    id: 18,
    question: "Tailwind CSS termasuk?",
    options: [
      "Framework JavaScript",
      "Library UI",
      "Utility-first CSS framework",
      "Database",
    ],
    correct: 2,
    correctAnswer: "Utility-first CSS framework",
  },
  {
    id: 19,
    question: "LocalStorage digunakan untuk?",
    options: [
      "Menyimpan data sementara",
      "Menyimpan data di server",
      "Menyimpan data di browser",
      "Mengelola API",
    ],
    correct: 2,
    correctAnswer: "Menyimpan data di browser",
  },
  {
    id: 20,
    question: "Format data yang umum digunakan pada API adalah?",
    options: ["XML", "CSV", "JSON", "TXT"],
    correct: 2,
    correctAnswer: "JSON",
  },
  {
    id: 21,
    question: "HTTP method untuk mengambil data adalah?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correct: 2,
    correctAnswer: "GET",
  },
  {
    id: 22,
    question: "Fungsi map() pada JavaScript digunakan untuk?",
    options: [
      "Menghapus data",
      "Mengubah array",
      "Menyalin array",
      "Mengurutkan array",
    ],
    correct: 1,
    correctAnswer: "Mengubah array",
  },
  {
    id: 23,
    question: "Key pada list React digunakan untuk?",
    options: ["Styling", "Identifikasi elemen", "Routing", "State"],
    correct: 1,
    correctAnswer: "Identifikasi elemen",
  },
  {
    id: 24,
    question: "Conditional rendering digunakan untuk?",
    options: [
      "Menampilkan UI berdasarkan kondisi",
      "Mengelola database",
      "Routing",
      "Styling",
    ],
    correct: 0,
    correctAnswer: "Menampilkan UI berdasarkan kondisi",
  },
  {
    id: 25,
    question: "useContext digunakan untuk?",
    options: ["Routing", "State global", "Styling", "API request"],
    correct: 1,
    correctAnswer: "State global",
  },
  {
    id: 26,
    question: "Reducer pattern digunakan untuk?",
    options: ["State kompleks", "Styling", "Routing", "Database"],
    correct: 0,
    correctAnswer: "State kompleks",
  },
  {
    id: 27,
    question: "SPA adalah singkatan dari?",
    options: [
      "Single Page Application",
      "Simple Page App",
      "Server Page App",
      "Static Page Application",
    ],
    correct: 0,
    correctAnswer: "Single Page Application",
  },
  {
    id: 28,
    question: "npm digunakan untuk?",
    options: [
      "Menjalankan browser",
      "Mengelola package",
      "Membuat database",
      "Mengedit kode",
    ],
    correct: 1,
    correctAnswer: "Mengelola package",
  },
  {
    id: 29,
    question: "Vite digunakan sebagai?",
    options: ["Framework backend", "Build tool", "Database", "Browser"],
    correct: 1,
    correctAnswer: "Build tool",
  },
  {
    id: 30,
    question: "Komponen React sebaiknya bersifat?",
    options: ["Monolitik", "Reusable", "Statik", "Global"],
    correct: 1,
    correctAnswer: "Reusable",
  },
];



// =====================
// ACHIEVEMENTS (MINIMAL 10)
// =====================
export const achievements = [
  { id: 1, title: "Langkah Pertama", description: "Menyelesaikan 1 modul", current: 1, target: 1 },
  { id: 2, title: "Pemula Konsisten", description: "Menyelesaikan 5 modul", current: 3, target: 5 },
  { id: 3, title: "React Explorer", description: "Menyelesaikan 3 materi React", current: 3, target: 3 },
  { id: 4, title: "Quiz Master", description: "Lulus 10 quiz", current: 7, target: 10 },
  { id: 5, title: "Quiz Expert", description: "Lulus 20 quiz", current: 15, target: 20 },
  { id: 6, title: "Learner Aktif", description: "Belajar 7 hari berturut-turut", current: 7, target: 7 },
  { id: 7, title: "Fast Learner", description: "Selesaikan 3 modul dalam 1 hari", current: 2, target: 3 },
  { id: 8, title: "Hard Worker", description: "Total belajar 10 jam", current: 6, target: 10 },
  { id: 9, title: "Frontend Path", description: "Selesaikan learning path frontend", current: 3, target: 4 },
  { id: 10, title: "Ultimate Learner", description: "Selesaikan semua modul", current: 6, target: 10 },
];


// =====================
// BADGES
// =====================
export const badges = [
  { id: 1, name: "First Step", rarity: "Common", owned: true },
  { id: 2, name: "Fast Learner", rarity: "Rare", owned: true },
  { id: 3, name: "Ultimate Learner", rarity: "Legendary", owned: false },
];


// =====================
// DUMMY MATERI 
// =====================
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


// =====================
// LEARNING PATH
// =====================
export const learningPath = [
  { id: 1, title: "HTML & CSS", status: "done" },
  { id: 2, title: "JavaScript", status: "done" },
  { id: 3, title: "React", status: "in_progress" },
  { id: 4, title: "Final Project", status: "locked" },
];


// =====================
// DASHBOARD DATA
// =====================
export const dummyDashboardData = {
  kelas: "TI",
  totalMateri: 4,
  completedMateri: 2,
  progress: 50,
  points: 120,
  streak: 3,

  waktuBelajar: {
    hariIni: 60,
    mingguan: 240,
  },

  progressMingguan: [
    { minggu: "Minggu 1", progress: 25 },
    { minggu: "Minggu 2", progress: 50 },
  ],

  waktuPerKategori: [
    { name: "React Dasar", value: 90 },
    { name: "State & Props", value: 60 },
    { name: "Hooks", value: 70 },
    { name: "Routing", value: 20 },
  ],

  statusModul: [
    { name: "Selesai", value: 2 },
    { name: "Sedang Berjalan", value: 1 },
    { name: "Belum Dimulai", value: 1 },
  ],

  akumulasiJamBelajar: [
    { date: "Sen", jam: 1.0 },
    { date: "Sel", jam: 1.5 },
    { date: "Rab", jam: 2.0 },
    { date: "Kam", jam: 2.5 },
    { date: "Jum", jam: 3.0 },
  ],

  skillRadar: [
    { skill: "React Dasar", value: 70 },
    { skill: "State & Props", value: 65 },
    { skill: "Hooks", value: 50 },
    { skill: "Routing", value: 40 },
  ],

  lastModule: "State & Props",
  recommendedModule: "React Hooks",
  targetToday: { target: 90, done: 60 },
  bookmarkCount: 2,
};
