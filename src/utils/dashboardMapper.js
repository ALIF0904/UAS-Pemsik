import { dummyMateri } from "./dummyData";

export function mapDashboardData(kelas = "TI") {
  const storageKey = `kelas_${kelas}`;
  const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");

  const completed = Array.isArray(saved.completed) ? saved.completed : [];
  const totalMateri = dummyMateri.length;
  const completedMateri = completed.length;

  const progress =
    totalMateri > 0
      ? Math.round((completedMateri / totalMateri) * 100)
      : 0;

  // ===== last & next materi =====
  const lastCompletedId = completed.at(-1);
  const lastMateri = dummyMateri.find((m) => m.id === lastCompletedId);

  const nextMateri = dummyMateri.find(
    (m) => !completed.includes(m.id)
  );

  return {
    kelas,

    totalMateri,
    completedMateri,
    progress,

    points: completedMateri * 50,
    streak: completedMateri,

    progressMingguan:
      saved.history?.map((h, i) => ({
        minggu: `Minggu ${i + 1}`,
        progress: h.progress,
      })) || [],

    statusModul: [
      { name: "Selesai", value: completedMateri },
      { name: "Belum Selesai", value: totalMateri - completedMateri },
    ],

    waktuPerKategori: [
      { name: "React Dasar", value: 60 },
      { name: "State & Props", value: 45 },
      { name: "Hooks", value: 30 },
      { name: "Routing", value: 15 },
    ],

    akumulasiJamBelajar: [
      { date: "Sen", jam: 1 },
      { date: "Sel", jam: 2 },
      { date: "Rab", jam: 3 },
      { date: "Kam", jam: 4 },
      { date: "Jum", jam: 5 },
    ],

    skillRadar: [
      { skill: "React Dasar", value: progress },
      { skill: "State & Props", value: Math.max(progress - 10, 0) },
      { skill: "Hooks", value: Math.max(progress - 20, 0) },
      { skill: "Routing", value: Math.max(progress - 30, 0) },
    ],

    lastModule: lastMateri?.judul || "-",

    recommendedModule:
      nextMateri?.judul || "Semua materi selesai",

    // 🔥 pintasan progres
    nextMateriId: nextMateri?.id || null,
    nextMateriTitle: nextMateri?.judul || "Selesai",

    targetToday: {
      target: 90,
      done: completedMateri * 30,
    },

    bookmarkCount: saved.bookmarkCount || 0,
  };
}
