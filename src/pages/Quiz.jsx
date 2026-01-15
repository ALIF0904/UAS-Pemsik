import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ===================== KONSTANTA ===================== */
const QUIZ_DURATION = 300;

/* ===================== SOAL ===================== */
const quizQuestions = [
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
  },
  {
    id: 3,
    question: "Bahasa pemrograman untuk web interaktif adalah?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correct: 2,
  },
  {
    id: 4,
    question: "Framework JavaScript adalah?",
    options: ["Laravel", "Django", "React", "Bootstrap"],
    correct: 2,
  },
  {
    id: 5,
    question: "Tag HTML untuk membuat link adalah?",
    options: ["<div>", "<a>", "<p>", "<link>"],
    correct: 1,
  },
];

/* ===================== MAIN ===================== */
export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);
  const [isRunning, setIsRunning] = useState(true);

  const [historyData, setHistoryData] = useState([]);
  const [accuracyData, setAccuracyData] = useState(
    quizQuestions.map((_, i) => ({
      question: `Soal ${i + 1}`,
      accuracy: 0,
    }))
  );

  /* ===================== TIMER ===================== */
  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isRunning]);

  /* ===================== HANDLER ===================== */
  const handleAnswer = (value) => {
    setAnswers((prev) => ({ ...prev, [current]: value }));
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });
    return Math.round((correct / quizQuestions.length) * 100);
  };

  const resetQuiz = () => {
    setCurrent(0);
    setAnswers({});
    setTimeLeft(QUIZ_DURATION);
    setIsRunning(true);
  };

  const handleSubmit = () => {
    setIsRunning(false);

    Swal.fire({
      title: "Submit Quiz?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Submit",
    }).then((res) => {
      if (!res.isConfirmed) {
        setIsRunning(true);
        return;
      }

      const score = calculateScore();

      setHistoryData((prev) => [
        ...prev,
        { attempt: `Quiz ${prev.length + 1}`, score },
      ]);

      setAccuracyData(
        quizQuestions.map((q, i) => ({
          question: `Soal ${i + 1}`,
          accuracy: answers[i] === q.correct ? 100 : 0,
        }))
      );

      Swal.fire("Selesai!", `Nilai Anda: ${score}`, "success");

      setTimeout(resetQuiz, 500);
    });
  };

  const q = quizQuestions[current];

  /* ===================== RENDER ===================== */
  return (
    <div className="min-h-screen p-8 bg-gray-100 text-gray-900 space-y-10">
      <h1 className="text-3xl font-bold">Quiz Interaktif</h1>

      {/* TIMER */}
      <div className="text-lg font-semibold">
        ⏱ {Math.floor(timeLeft / 60)}:
        {String(timeLeft % 60).padStart(2, "0")}
      </div>

      {/* QUIZ */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-xl font-semibold mb-4">
          {current + 1}. {q.question}
        </h2>

        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <label key={i} className="flex gap-2 items-center">
              <input
                type="radio"
                checked={answers[current] === i}
                onChange={() => handleAnswer(i)}
                className="accent-blue-600"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>

        {/* NAV */}
        <div className="flex justify-between mt-6">
          <button
            disabled={current === 0}
            onClick={() => setCurrent((c) => c - 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-40"
          >
            ◀ Sebelumnya
          </button>

          {current === quizQuestions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-green-600 text-white rounded font-semibold"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Berikutnya ▶
            </button>
          )}
        </div>
      </motion.div>

      {/* CHART */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="Riwayat Nilai">
          <LineChart data={historyData}>
            <XAxis dataKey="attempt" />
            <YAxis />
            <Tooltip />
            <Line dataKey="score" stroke="#22c55e" strokeWidth={3} />
          </LineChart>
        </ChartCard>

        <ChartCard title="Akurasi Jawaban">
          <BarChart data={accuracyData}>
            <XAxis dataKey="question" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="accuracy" fill="#3b82f6" />
          </BarChart>
        </ChartCard>
      </div>
    </div>
  );
}

/* ===================== CARD ===================== */
const ChartCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="mb-4 font-semibold">{title}</h3>
    <ResponsiveContainer width="100%" height={220}>
      {children}
    </ResponsiveContainer>
  </div>
);
