"use client";

import { useState } from "react";
import TreeNode from "./TreeNode";
import data from "../data/data.json";

export default function Explorer() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex h-screen bg-black text-white">
      <div className="w-1/2 p-4 overflow-auto border-r border-gray-700">
        {data.map((node) => (
          <TreeNode
            key={node.id}
            node={node}
            onSelect={setSelected}
            selected={selected}
          />
        ))}
      </div>

      <div className="w-1/2 p-6">
        <div className="text-xl mb-4">File Properties</div>

        {selected ? (
          <div className="space-y-2">
            <div>
              <span className="text-gray-400">Name:</span> {selected.name}
            </div>
            <div>
              <span className="text-gray-400">Type:</span> {selected.type}
            </div>
            <div>
              <span className="text-gray-400">Size:</span>{" "}
              {selected.size || "Folder"}
            </div>
          </div>
        ) : (
          <div className="text-gray-500">Select a file to view details</div>
        )}
      </div>
    </div>
  );
}
