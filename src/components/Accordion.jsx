import { ChevronDown } from "lucide-react";

export default function Accordion({
  item,
  isOpen,
  onToggle,
  onComplete,
  onAsk,
  isCompleted,
}) {
  return (
    <div className="border border-gray-200 rounded-xl bg-white/70 shadow-sm overflow-hidden">
      <button
        type="button"
        className="w-full flex justify-between items-center p-4 text-left"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-800">
          {item.judul}
        </span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-gray-600 mb-4">{item.deskripsi}</p>

          <div className="flex gap-3">
            <button
              disabled={isCompleted}
              onClick={() => onComplete(item.id)}
              className={`text-white py-1 px-3 rounded-lg text-sm ${
                isCompleted
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-indigo-500 hover:bg-indigo-600"
              }`}
            >
              {isCompleted ? "Selesai ✅" : "Tandai Selesai"}
            </button>

            <button
              onClick={() => onAsk(item)}
              className="bg-pink-500 text-white py-1 px-3 rounded-lg text-sm hover:bg-pink-600"
            >
              Tanya Dosen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
