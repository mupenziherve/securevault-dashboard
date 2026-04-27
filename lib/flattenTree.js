export default function flattenTree(nodes, expandedMap = {}, level = 0) {
  let result = [];

  for (const node of nodes) {
    result.push({
      node,
      level,
    });

    if (
      node.type === "folder" &&
      expandedMap[node.id] &&
      node.children
    ) {
      result = result.concat(
        flattenTree(node.children, expandedMap, level + 1)
      );
    }
  }

  return result;
}