"use client";

import { useState } from "react";

export default function TreeNode({ node, onSelect, selected }) {
  const [open, setOpen] = useState(false);
  const isFolder = node.type === "folder";

  return (
    <div className="ml-4 text-white">
      <div
        className={`cursor-pointer p-1 flex items-center gap-2 rounded ${
          selected?.id === node.id ? "bg-blue-600" : ""
        }`}
        onClick={() => {
          if (isFolder) {
            setOpen(!open);
          } else {
            onSelect(node);
          }
        }}
      >
        <span>{isFolder ? (open ? "folder-open" : "folder") : "file"}</span>
        <span>{node.name}</span>
      </div>

      {isFolder &&
        open &&
        node.children?.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            onSelect={onSelect}
            selected={selected}
          />
        ))}
    </div>
  );
}
