import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Flame,
  Star,
  BarChart2,
  PlayCircle,
  Bookmark,
  Target,
} from "lucide-react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import { mapDashboardData } from "../utils/dashboardMapper";

export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
      return;
    }

    const kelas = localStorage.getItem("kelas") || "TI";
    setData(mapDashboardData(kelas));
  }, [navigate]);

  if (!data) return null;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        📊 Dashboard Analitik Pembelajaran
      </h1>

      {/* ================= RINGKASAN ================= */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Summary icon={<BookOpen />} title="Modul" value={`${data.completedMateri}/${data.totalMateri}`} />
        <Summary icon={<Flame />} title="Streak" value={`${data.streak} hari`} />
        <Summary icon={<Star />} title="Poin" value={data.points} />
        <Summary icon={<BarChart2 />} title="Progress" value={`${data.progress}%`} />
      </div>

      {/* ================= AKSI CEPAT ================= */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <ActionCard
          icon={<PlayCircle />}
          label={`Lanjutkan: ${data.nextMateriTitle}`}
          onClick={() =>
            navigate(
              data.nextMateriId
                ? `/kelas?materi=${data.nextMateriId}`
                : "/kelas"
            )
          }
        />

        <ActionCard
          icon={<Target />}
          label={`Target: ${data.targetToday.done}/${data.targetToday.target} mnt`}
        />

        <ActionCard
          icon={<Star />}
          label={`Rekomendasi: ${data.recommendedModule}`}
        />

        <ActionCard
          icon={<Bookmark />}
          label={`Bookmark (${data.bookmarkCount})`}
        />
      </div>

      {/* ================= GRAFIK ================= */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <ChartCard title="Progress Mingguan">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data.progressMingguan}>
              <XAxis dataKey="minggu" />
              <YAxis />
              <Tooltip />
              <Line dataKey="progress" stroke="#22c55e" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Status Modul">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={data.statusModul} dataKey="value" nameKey="name" label>
                {data.statusModul.map((_, i) => (
                  <Cell
                    key={i}
                    fill={["#22c55e", "#facc15", "#ef4444"][i]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Penilaian Kemampuan">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data.skillRadar}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis />
            <Radar
              dataKey="value"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

/* ================= KOMPONEN ================= */

const Summary = ({ icon, title, value }) => (
  <div className="bg-white p-4 rounded-xl shadow">
    <div className="flex items-center gap-2 text-sm text-gray-500">
      {icon} {title}
    </div>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="mb-4 font-semibold">{title}</h3>
    {children}
  </div>
);

const ActionCard = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white p-4 rounded-xl shadow hover:bg-gray-50 transition flex items-center gap-3"
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);
