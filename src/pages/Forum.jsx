import { useState } from "react";
import {
  forumCategories,
  forumThreads,
  userReputation,
} from "../utils/dummyData";
import { Search, Pin, CheckCircle, Flag } from "lucide-react";

export default function Forum() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("popular");

  const filteredThreads = forumThreads
    .filter((t) =>
      t.title.toLowerCase().includes(keyword.toLowerCase())
    )
    .filter((t) =>
      selectedCategory ? t.categoryId === Number(selectedCategory) : true
    )
    .sort((a, b) =>
      sort === "popular"
        ? b.votes - a.votes
        : new Date(b.createdAt) - new Date(a.createdAt)
    );

  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-6">
      <h1 className="text-3xl font-bold">💬 Forum Diskusi</h1>

      {/* ================= SEARCH & FILTER ================= */}
      <div className="flex gap-4 flex-wrap">
        {/* SEARCH */}
        <div className="flex items-center bg-white px-4 py-2 rounded shadow flex-1">
          <Search size={18} className="text-gray-400" />
          <input
            className="ml-2 w-full outline-none"
            placeholder="Cari diskusi..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {/* FILTER KATEGORI */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded shadow bg-white"
        >
          <option value="">Semua Kategori</option>
          {forumCategories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* SORT */}
        <select
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 rounded shadow bg-white"
        >
          <option value="popular">Terpopuler</option>
          <option value="latest">Terbaru</option>
        </select>
      </div>

      {/* ================= THREAD LIST ================= */}
      <div className="space-y-4">
        {filteredThreads.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} />
        ))}
      </div>
    </div>
  );
}

/* ================= THREAD CARD ================= */

const ThreadCard = ({ thread }) => {
  const user = userReputation[thread.author] || {
    points: 0,
    badge: "User",
  };

  const category = forumCategories.find(
    (c) => c.id === thread.categoryId
  );

  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg flex items-center gap-2">
            {thread.pinned && (
              <Pin size={16} className="text-yellow-500" />
            )}
            {thread.title}
          </h3>

          {/* ✅ KATEGORI DITAMPILKAN */}
          <p className="text-xs text-gray-500 mt-1">
            Kategori :{" "}
            <span className="font-medium">
              {category?.name || "Umum"}
            </span>
          </p>
        </div>

        {thread.solved && (
          <CheckCircle size={18} className="text-green-600" />
        )}
      </div>

      <p className="text-sm text-gray-600">{thread.content}</p>

      {/* TAG */}
      <div className="flex flex-wrap gap-2">
        {thread.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* FOOTER */}
      <div className="flex justify-between text-sm text-gray-500">
        <span>
          {thread.author} • {user.badge} ({user.points} pts)
        </span>

        <div className="flex gap-4 items-center">
          <span>👍 {thread.votes}</span>
          <Flag className="cursor-pointer hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};
