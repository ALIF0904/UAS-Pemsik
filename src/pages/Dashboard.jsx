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

import {
  dashboardSummary,
  weeklyProgress,
  studyTimeByCategory,
  moduleStatusDistribution,
  cumulativeStudyTime,
  skillRadarData,
  quickActions,
} from "../utils/dummyData";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        📊 Dashboard Analitik Pembelajaran
      </h1>

      {/* ================= RINGKASAN ================= */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Summary
          icon={<BookOpen />}
          title="Modul"
          value={`${dashboardSummary.completedModules}/${dashboardSummary.totalModules}`}
        />
        <Summary
          icon={<Flame />}
          title="Streak"
          value={`${dashboardSummary.studyStreak} hari`}
        />
        <Summary
          icon={<Star />}
          title="Poin"
          value={dashboardSummary.achievementPoints}
        />
        <Summary
          icon={<BarChart2 />}
          title="Progress"
          value={`${Math.round(
            (dashboardSummary.completedModules /
              dashboardSummary.totalModules) *
              100
          )}%`}
        />
      </div>

      {/* ================= AKSI CEPAT ================= */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <ActionCard
          icon={<PlayCircle />}
          label={`Lanjutkan : ${quickActions.lastModule.title}`}
          onClick={() =>
            navigate(`/admin/kelas?materi=${quickActions.lastModule.id}`)
          }
        />

        <ActionCard
          icon={<Target />}
          label={`Target: ${quickActions.todayTarget.completedMinutes}/${quickActions.todayTarget.targetMinutes} mnt`}
        />

        <ActionCard
          icon={<Star />}
          label={`Rekomendasi: ${quickActions.recommendedModule.title}`}
        />

        <ActionCard
          icon={<Bookmark />}
          label={`Bookmark (${quickActions.bookmarks.length})`}
        />
      </div>

      {/* ================= GRAFIK ================= */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* LINE */}
        <ChartCard title="Progress Mingguan">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weeklyProgress}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line dataKey="progress" stroke="#22c55e" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* PIE */}
        <ChartCard title="Status Modul">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={moduleStatusDistribution}
                dataKey="value"
                nameKey="name"
                label
              >
                {moduleStatusDistribution.map((_, i) => (
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

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* BAR */}
        <ChartCard title="Waktu Belajar per Kategori">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={studyTimeByCategory}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="minutes" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* AREA */}
        <ChartCard title="Akumulasi Jam Belajar">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={cumulativeStudyTime}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area
                dataKey="hours"
                stroke="#22c55e"
                fill="#bbf7d0"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* RADAR */}
      <ChartCard title="Penilaian Kemampuan">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={skillRadarData}>
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
