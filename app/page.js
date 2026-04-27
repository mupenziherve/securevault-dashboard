import data from "../data/data.json";

export default function Home() {
  return (
    <div className="text-white bg-black min-h-screen p-6">
      <h1 className="text-xl mb-4">SecureVault Data Test</h1>

      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
