import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Home,
  BookOpen,
  LogOut,
  User,
  BarChart2,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem("user");

  const menu = [
    { label: "Dashboard", icon: Home, path: "/admin/dashboard" },
    { label: "Kelas", icon: BookOpen, path: "/admin/kelas" },
    { label: "Progress", icon: BarChart2, path: "/admin/progress" },
    { label: "Quiz", icon: BarChart2, path: "/admin/Quiz" },
  ];

  const handleLogout = () => {
    Swal.fire({
      title: "Yakin ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Logout",
    }).then((res) => {
      if (res.isConfirmed) {
        localStorage.clear();
        navigate("/");
      }
    });
  };

  return (
    <aside className="w-64 min-h-screen bg-gray-800 border-r border-gray-700 p-6 flex flex-col text-gray-200">

      {/* PROFILE */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto bg-gray-700 rounded-full flex items-center justify-center text-gray-300">
          <User size={40} />
        </div>
        <h2 className="mt-4 text-lg font-semibold">
          {username}
        </h2>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-2 flex-1">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 text-gray-300"
                }
              `}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="mt-auto bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition"
      >
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}
