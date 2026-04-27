export default function PropertiesPanel({ selected }) {
  return (
    <div className="w-1/2 p-6">
      <h2 className="text-xl mb-4">File Properties</h2>

      {selected ? (
        <div className="space-y-2">
          <div>Name: {selected.name}</div>
          <div>Type: {selected.type}</div>
          <div>Size: {selected.size || "Folder"}</div>
        </div>
      ) : (
        <div className="text-gray-500">Select a file to view details</div>
      )}
    </div>
  );
}
