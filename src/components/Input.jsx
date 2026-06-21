export default function Input({ search, setSearch }) {
  return (
    <input
      className="w-lg border-2 p-4 border-amber-600 h-12 rounded-md bg-white text-black"
      type="text"
      placeholder="Search platforms..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
