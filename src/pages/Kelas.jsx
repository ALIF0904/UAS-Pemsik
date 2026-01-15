import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, ArrowLeftCircle } from "lucide-react";

import Accordion from "../components/Accordion";
import TanyaDosenModal from "../components/TanyaDosenModal";
import { modules } from "../utils/dummyData";

export default function Kelas() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const kelas = localStorage.getItem("kelas") || "TI";
  const storageKey = `kelas_${kelas}`;
  const materiParam = searchParams.get("materi");
  const materiId = materiParam ? Number(materiParam) : null;

  const [openId, setOpenId] = useState(null);
  const [completed, setCompleted] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMateri, setSelectedMateri] = useState(null);

  const initialized = useRef(false);

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");

    setCompleted(Array.isArray(saved.completed) ? saved.completed : []);

    if (materiId && modules.some((m) => m.id === materiId)) {
      setOpenId(materiId);
    } else {
      setOpenId(saved.openId ?? null);
    }

    initialized.current = true;
  }, [storageKey, materiId]);

  /* ================= SAVE PROGRESS ================= */
  useEffect(() => {
    if (!initialized.current) return;

    const totalModules = modules.length;
    const doneModules = completed.length;
    const progress = Math.round((doneModules / totalModules) * 100);

    const prev = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const today = new Date().toISOString().slice(0, 10);

    const history = (prev.history || []).filter(
      (h) => h.date !== today
    );

    localStorage.setItem(
      storageKey,
      JSON.stringify({
        ...prev,
        completed,
        openId,
        progress,
        history: [...history, { date: today, progress }],
      })
    );
  }, [completed, openId, storageKey]);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (!openId) return;
    setTimeout(() => {
      document
        .getElementById(`materi-${openId}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }, [openId]);

  /* ================= HANDLERS ================= */
  const handleToggle = (id) => {
    setOpenId((prev) => {
      const next = prev === id ? null : id;
      const saved = JSON.parse(localStorage.getItem(storageKey) || {});
      localStorage.setItem(
        storageKey,
        JSON.stringify({ ...saved, openId: next })
      );
      return next;
    });
  };

  const handleComplete = (id) => {
    if (completed.includes(id)) return;
    setCompleted((prev) => [...prev, id]);
    toast.success("Modul ditandai selesai");
  };

  const handleAsk = (materi) => {
    setSelectedMateri(materi);
    setModalOpen(true);
  };

  /* ================= RENDER ================= */
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <Toaster position="top-right" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full bg-white rounded-2xl shadow p-8"
      >
        <h1 className="text-3xl font-bold text-center mb-8">
          📘 Modul Pembelajaran React
        </h1>

        <div className="space-y-5">
          {modules.map((item, index) => {
            const isDone = completed.includes(item.id) || item.completed;

            return (
              <motion.div
                key={item.id}
                id={`materi-${item.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-5 rounded-xl border ${
                  isDone
                    ? "bg-green-50 border-green-300"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* ===== HEADER MODUL ===== */}
                <div className="flex justify-between gap-4 mb-3">
                  <div className="flex gap-3">
                    <BookOpen className="mt-1 text-indigo-600" />

                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Kategori :{" "}
                        <span className="font-medium text-gray-600">
                          {item.category}
                        </span>
                      </p>

                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {isDone && (
                    <CheckCircle2 className="text-green-600" />
                  )}
                </div>

                {/* ===== ACCORDION ===== */}
                <Accordion
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                  onComplete={handleComplete}
                  onAsk={handleAsk}
                  isCompleted={isDone}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ===== BACK BUTTON ===== */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="bg-gray-900 text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-800 transition"
          >
            <ArrowLeftCircle size={20} />
            Dashboard
          </button>
        </div>
      </motion.div>

      {/* ===== MODAL ===== */}
      <TanyaDosenModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        materi={selectedMateri}
      />
    </div>
  );
}
