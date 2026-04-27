"use client";

import { useState, useMemo } from "react";
import TreeNode from "./TreeNode";
import data from "../data/data.json";
import PropertiesPanel from "./PropertiesPanel";
import flattenTree from "../lib/flattenTree";
import useKeyboardNavigation from "../hooks/useKeyboardNavigation";

export default function Explorer() {
  const [selected, setSelected] = useState(null);
  const [expandedMap, setExpandedMap] = useState({});

  const flatList = useMemo(() => {
    return flattenTree(data, expandedMap);
  }, [expandedMap]);

  useKeyboardNavigation({
    flatList,
    setSelected,
    setExpandedMap,
    expandedMap,
  });

  return (
    <div className="flex h-screen bg-black text-white">
      <div className="w-1/2 p-4 overflow-auto border-r border-gray-700">
        {data.map((node) => (
          <TreeNode
            key={node.id}
            node={node}
            onSelect={setSelected}
            selected={selected}
            expandedMap={expandedMap}
            setExpandedMap={setExpandedMap}
          />
        ))}
      </div>

      <PropertiesPanel selected={selected} />
    </div>
  );
}
