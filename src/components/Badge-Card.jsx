import { rarityColor } from "../utils/rarityColor";

export default function BadgeCard({ badge }) {
  return (
    <div
      className={`rounded-xl border p-4 text-center shadow-sm transition
        hover:scale-105 ${
          badge.owned
            ? "bg-white"
            : "bg-gray-100 opacity-60 grayscale"
        }`}
      style={{ borderColor: rarityColor[badge.rarity] }}
    >
      <div
        className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3"
        style={{ backgroundColor: rarityColor[badge.rarity] }}
      >
        🏅
      </div>

      <h4 className="font-semibold text-gray-700">
        {badge.name}
      </h4>

      <span
        className="text-sm font-medium"
        style={{ color: rarityColor[badge.rarity] }}
      >
        {badge.rarity}
      </span>

      {!badge.owned && (
        <p className="text-xs text-gray-500 mt-1">
          🔒 Belum diraih
        </p>
      )}
    </div>
  );
}
