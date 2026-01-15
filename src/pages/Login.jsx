import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) navigate("/admin/dashboard");
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Konfirmasi sebelum login
    const confirm = await Swal.fire({
      title: "Konfirmasi Login",
      text: "Apakah Anda yakin ingin masuk?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, masuk",
      cancelButtonText: "Batal",
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: "#d33",
    });

    if (!confirm.isConfirmed) return;

    // Proses login
    if (form.username === "mahasiswa" && form.password === "12345") {
      localStorage.setItem("user", form.username);

      await Swal.fire({
        title: "Berhasil!",
        text: "Selamat datang di Belajar Pintar 🎓",
        icon: "success",
        confirmButtonColor: "#4f46e5",
      });

      navigate("/admin/dashboard");
    } else {
      Swal.fire({
        title: "Login Gagal",
        text: "Username atau password salah.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm border border-gray-100">
        {/* Judul */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Belajar Pintar</h1>
          <p className="text-sm text-gray-500 mt-1">Masuk ke akun Anda</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Username</label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Masukkan username"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Masukkan password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
          >
            Masuk
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          © 2025 Belajar Pintar
        </p>
      </div>
    </div>
  );
}
