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

import { quizQuestions } from "../utils/dummyData";

/* ===================== KONSTANTA ===================== */
const QUIZ_DURATION = 300;

/* ===================== MAIN ===================== */
export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState([]);
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);
  const [isRunning, setIsRunning] = useState(true);

  const [historyData, setHistoryData] = useState([]);
  const [accuracyData, setAccuracyData] = useState(
    quizQuestions.map((_, i) => ({
      question: `Soal ${i + 1}`,
      accuracy: 0,
    }))
  );

  const [timePerQuestion] = useState(
    quizQuestions.map((_, i) => ({
      question: `Soal ${i + 1}`,
      time: Math.floor(Math.random() * 20) + 5, // dummy
    }))
  );

  /* ===================== LOAD AUTOSAVE ===================== */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quiz_answers") || "{}");
    setAnswers(saved);
  }, []);

  /* ===================== AUTOSAVE ===================== */
  useEffect(() => {
    localStorage.setItem("quiz_answers", JSON.stringify(answers));
  }, [answers]);

  /* ===================== TIMER ===================== */
  useEffect(() => {
    if (!isRunning) return;
    if (timeLeft <= 0) {
      submitQuiz();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isRunning]);

  /* ===================== LOGIC ===================== */
  const handleAnswer = (value) => {
    setAnswers((prev) => ({ ...prev, [current]: value }));
  };

  const toggleMark = (index) => {
    setMarked((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
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
    setMarked([]);
    setTimeLeft(QUIZ_DURATION);
    setIsRunning(true);
    localStorage.removeItem("quiz_answers");
  };

  const submitQuiz = () => {
    setIsRunning(false);

    Swal.fire({
      title: "Review & Submit Quiz",
      html: `
        <p>Soal dijawab: ${Object.keys(answers).length}</p>
        <p>Ditandai untuk review: ${marked.length}</p>
      `,
      icon: "info",
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
      setTimeout(resetQuiz, 800);
    });
  };

  const q = quizQuestions[current];

  /* ===================== RENDER ===================== */
  return (
    <div className="min-h-screen p-8 bg-gray-100 space-y-10">
      <h1 className="text-3xl font-bold">Quiz Interaktif</h1>

      {/* TIMER */}
      <div className="text-lg font-semibold">
        ⏱ {Math.floor(timeLeft / 60)}:
        {String(timeLeft % 60).padStart(2, "0")}
      </div>

      {/* QUIZ */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
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
              />
              {opt}
            </label>
          ))}
        </div>

        <button
          onClick={() => toggleMark(current)}
          className="mt-3 text-sm text-yellow-600 underline"
        >
          {marked.includes(current)
            ? "Batal tandai"
            : "Tandai untuk review"}
        </button>

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
              onClick={submitQuiz}
              className="px-6 py-2 bg-green-600 text-white rounded font-semibold"
            >
              Review & Submit
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

        {/* NAVIGATION SOAL */}
        <div className="flex flex-wrap gap-2 mt-6">
          {quizQuestions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-9 h-9 rounded-full text-sm font-semibold
                ${
                  current === i
                    ? "bg-blue-600 text-white"
                    : marked.includes(i)
                    ? "bg-yellow-400"
                    : answers[i] !== undefined
                    ? "bg-green-500 text-white"
                    : "bg-gray-300"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </motion.div>

      {/* ANALITIK */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChartCard title="Riwayat Nilai">
          <LineChart data={historyData}>
            <XAxis dataKey="attempt" />
            <YAxis />
            <Tooltip />
            <Line dataKey="score" stroke="#22c55e" strokeWidth={3} />
          </LineChart>
        </ChartCard>

        <ChartCard title="Akurasi per Soal">
          <BarChart data={accuracyData}>
            <XAxis dataKey="question" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="accuracy" fill="#3b82f6" />
          </BarChart>
        </ChartCard>

        <ChartCard title="Waktu per Soal (detik)">
          <BarChart data={timePerQuestion}>
            <XAxis dataKey="question" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="time" fill="#f97316" />
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
