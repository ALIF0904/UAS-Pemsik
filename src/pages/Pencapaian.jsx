import { achievements, badges, dummyMateri } from "../utils/dummyData";
import AchievementProgress from "../components/AchievementProgress";
import BadgeCard from "../components/Badge-Card";
import LearningPath from "../components/LearningPath";

export default function Pencapaian() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Sistem Pencapaian & Gamifikasi
        </h1>
        <p className="text-gray-500 mt-1">
          Pantau progres, badge, dan journey pembelajaran
        </p>
      </div>

      {/* ================= PROGRESS PENCAPAIAN ================= */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Progress Pencapaian
        </h2>

        <div className="space-y-5">
          {achievements.map((achievement) => (
            <AchievementProgress
              key={achievement.id}
              data={{
                title: achievement.title,
                description: achievement.description,
                current: achievement.current,
                target: achievement.target,
              }}
            />
          ))}
        </div>
      </section>

      {/* ================= KOLEKSI BADGE ================= */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Koleksi Badge
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </section>

      {/* ================= LEARNING PATH ================= */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-6">
          Learning Path
        </h2>

        <LearningPath
          path={dummyMateri.map((materi, index) => ({
            id: materi.id,
            title: materi.judul,
            status:
              index <= 1
                ? "done"
                : index === 2
                ? "in_progress"
                : "locked",
          }))}
        />
      </section>
    </div>
  );
}
