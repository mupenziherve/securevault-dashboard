import { useEffect } from "react";

export default function useKeyboardNavigation({
  flatList,
  setSelected,
  expandedMap,
  setExpandedMap,
}) {
  useEffect(() => {
    let index = 0;

    function handleKeyDown(e) {
      const current = flatList[index];

      if (!current) return;

      if (e.key === "ArrowDown") {
        index = Math.min(index + 1, flatList.length - 1);
      }

      if (e.key === "ArrowUp") {
        index = Math.max(index - 1, 0);
      }

      if (e.key === "Enter") {
        setSelected(current.node);
      }

      if (e.key === "ArrowRight") {
        if (current.node.type === "folder") {
          setExpandedMap((prev) => ({
            ...prev,
            [current.node.id]: true,
          }));
        }
      }

      if (e.key === "ArrowLeft") {
        if (current.node.type === "folder") {
          setExpandedMap((prev) => ({
            ...prev,
            [current.node.id]: false,
          }));
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [flatList, setSelected, setExpandedMap]);
}
