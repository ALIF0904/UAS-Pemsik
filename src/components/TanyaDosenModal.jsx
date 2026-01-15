import toast from "react-hot-toast";

export default function TanyaDosenModal({ isOpen, onClose, materi }) {
  if (!isOpen) return null;

  const handleSend = () => {
    toast.success("Pertanyaan berhasil dikirim!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Tanya Dosen : 
        </h2>
        <textarea
          placeholder="Tulis pertanyaan kamu di sini..."
          className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows="4"
        ></textarea>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-1 px-4 rounded-lg hover:bg-gray-400"
          >
            Batal
          </button>
          <button
            onClick={handleSend}
            className="bg-indigo-600 text-white py-1 px-4 rounded-lg hover:bg-indigo-700"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
