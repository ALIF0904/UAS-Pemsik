import { StatCard } from "../components/StatCard";

export default function Instruktur() {
  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Instruktur
        </h1>
        <p className="text-gray-500">
          Monitoring performa kelas & manajemen konten pembelajaran
        </p>
      </div>

      {/* ================= ANALITIK KELAS ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Rata-rata Nilai" value="78.5" unit="/100" />
        <StatCard title="Penyelesaian Modul" value="82%" />
        <StatCard title="Rata-rata Waktu Belajar" value="6.4" unit=" jam/minggu" />
        <StatCard title="Mahasiswa Kesulitan" value="5 orang" danger />
      </section>

      {/* ================= MAHASISWA KESULITAN ================= */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Mahasiswa yang Membutuhkan Perhatian
        </h2>

        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Nama</th>
              <th className="text-left p-3">Nilai</th>
              <th className="text-left p-3">Progress</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">Andi Saputra</td>
              <td className="p-3 text-red-600 font-semibold">55</td>
              <td className="p-3">40%</td>
              <td className="p-3">
                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full">
                  Risiko
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ================= UPLOAD MEDIA ================= */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Upload Media Pembelajaran
        </h2>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
          <p className="text-gray-500 mb-4">
            Upload video, PDF, atau gambar
          </p>

          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Pilih File
          </button>

          <p className="text-xs text-gray-400 mt-2">
            * UI saja (belum terhubung backend)
          </p>
        </div>
      </section>

      {/* ================= ANALITIK KONTEN ================= */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Analitik Konten
        </h2>

        <ul className="space-y-3">
          <li className="flex justify-between">
            <span>React Hooks</span>
            <span className="text-green-600 font-semibold">
              🔥 Paling Populer
            </span>
          </li>
          <li className="flex justify-between">
            <span>Routing React</span>
            <span className="text-yellow-600 font-semibold">
              ⚠ Kurang Engaging
            </span>
          </li>
        </ul>
      </section>

      {/* ================= FEEDBACK MAHASISWA ================= */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Feedback Mahasiswa
        </h2>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <p className="text-gray-700">
              “Materi React Hooks sangat membantu dan mudah dipahami.”
            </p>
            <span className="text-sm text-gray-500">
              — Mahasiswa A
            </span>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-gray-700">
              “Contoh routing bisa ditambah agar lebih jelas.”
            </p>
            <span className="text-sm text-gray-500">
              — Mahasiswa B
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
