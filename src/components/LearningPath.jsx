export default function LearningPath({ path }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {path.map((step, index) => (
        <div key={step.id} className="flex items-center gap-6">
          <div
            className={`px-6 py-3 rounded-full text-white font-medium
              ${
                step.status === "done"
                  ? "bg-green-500"
                  : step.status === "in_progress"
                  ? "bg-blue-500 animate-pulse"
                  : "bg-gray-400"
              }`}
          >
            {step.title}
          </div>

          {index !== path.length - 1 && (
            <div className="hidden md:block w-10 h-1 bg-gray-300 rounded" />
          )}
        </div>
      ))}
    </div>
  );
}
