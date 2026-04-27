export default function SearchBar({ value, onChange }) {
  return (
    <div className="p-2 border-b border-gray-700">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search files..."
        className="w-full p-2 bg-gray-900 text-white outline-none"
      />
    </div>
  );
}
