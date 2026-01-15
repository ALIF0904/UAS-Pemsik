import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  // Ambil data progress dari localStorage dan pantau perubahannya
  useEffect(() => {
    const loadProgress = () => {
      const savedProgress = Number(localStorage.getItem("progress")) || 0;
      setProgress(savedProgress);
    };

    loadProgress();

    // ✅ Update otomatis jika localStorage berubah (misalnya dari menu Kelas)
    const handleStorageChange = (event) => {
      if (event.key === "progress") {
        setProgress(Number(event.newValue) || 0);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // ✅ Backup polling untuk update dari tab yang sama
    const interval = setInterval(loadProgress, 1500);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
        <div
          className="h-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm font-medium text-gray-700 mt-2 text-center">
        {progress}% Selesai
      </p>
    </div>
  );
}
