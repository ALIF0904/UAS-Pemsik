export default function AchievementProgress({ data }) {
  const percent = Math.min((data.current / data.target) * 100, 100);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <div>
          <h4 className="font-semibold text-gray-700">
            {data.title}
          </h4>
          <p className="text-sm text-gray-500">
            {data.description}
          </p>
        </div>
        <span className="text-sm font-medium text-gray-600">
          {data.current}/{data.target}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 rounded-full transition-all duration-500
                     bg-gradient-to-r from-indigo-500 to-blue-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
