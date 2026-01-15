import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Kelas from "./pages/Kelas";
import Quiz from "./pages/Quiz";
import AdminLayout from "./layouts/adminLayout";
import ProgressBar from "./components/ProgressBar"; 

// Komponen untuk melindungi halaman agar hanya bisa diakses setelah login
function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("user");
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        {/* Kelas */}
        <Route
          path="/admin/kelas"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Kelas />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        {/* Quiz */}
        <Route
          path="/admin/Quiz"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Quiz />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        {/* ✅ Halaman Progress Bar */}
        <Route
          path="/admin/progress"
          element={
            <PrivateRoute>
              <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
                <h1 className="text-3xl font-bold mb-4 text-indigo-600">Progress Belajar</h1>
                <div className="w-full max-w-md">
                  <ProgressBar progress={70} /> {/* Misalnya progres 70% */}
                </div>
              </div>
            </PrivateRoute>
          }
        />

        {/* Redirect jika path tidak dikenal */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
