export default function Skeleton({ lines = 2 }) {
  return (
    <div className="animate-pulse space-y-3">
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"
        ></div>
      ))}
    </div>
  );
}