"use client";

import { useState } from "react";

export default function TreeNode({ node, onSelect, selected, searchResult }) {
  const [open, setOpen] = useState(false);
  const isFolder = node.type === "folder";

  const isMatch = searchResult?.matches?.includes(node.id);

  const isExpandedBySearch = searchResult?.expanded?.includes(node.id);

  const shouldHighlight = searchResult && isMatch;

  return (
    <div className="ml-4 text-white">
      <div
        className={`cursor-pointer p-1 flex items-center gap-2 rounded ${
          selected?.id === node.id ? "bg-blue-600" : ""
        } ${shouldHighlight ? "bg-sky-900" : ""}`}
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
        (open || isExpandedBySearch) &&
        node.children?.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            onSelect={onSelect}
            selected={selected}
            searchResult={searchResult}
          />
        ))}
    </div>
  );
}
