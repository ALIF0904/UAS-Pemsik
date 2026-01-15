export function StatCard({ title, value, unit = "", danger }) {
  return (
    <div
      className={`rounded-xl p-6 shadow bg-white
        ${danger ? "border-l-4 border-red-500" : ""}`}
    >
      <h4 className="text-gray-500 text-sm">{title}</h4>
      <p className="text-3xl font-bold text-gray-800 mt-2">
        {value}
        <span className="text-base font-medium">{unit}</span>
      </p>
    </div>
  );
}
