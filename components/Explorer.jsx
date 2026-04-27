"use client";

import { useState, useMemo } from "react";
import TreeNode from "./TreeNode";
import PropertiesPanel from "./PropertiesPanel";
import data from "../data/data.json";
import flattenTree from "../lib/flattenTree";
import searchTree from "../lib/searchTree";
import SearchBar from "./SearchBar";
import useKeyboardNavigation from "../hooks/useKeyboardNavigation";

export default function Explorer() {
  const [selected, setSelected] = useState(null);
  const [expandedMap, setExpandedMap] = useState({});
  const [search, setSearch] = useState("");

  const searchResult = useMemo(() => {
    if (!search) return null;
    return searchTree(data, search);
  }, [search]);

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
    <div className="flex flex-col h-screen bg-black text-white">
      <SearchBar value={search} onChange={setSearch} />

      <div className="flex flex-1">
        <div className="w-1/2 p-4 overflow-auto border-r border-gray-700">
          {data.map((node) => (
            <TreeNode
              key={node.id}
              node={node}
              onSelect={setSelected}
              selected={selected}
              expandedMap={expandedMap}
              setExpandedMap={setExpandedMap}
              searchResult={searchResult}
            />
          ))}
        </div>

        <PropertiesPanel selected={selected} />
      </div>
    </div>
  );
}
