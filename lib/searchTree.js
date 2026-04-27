export default function searchTree(nodes, query) {
  const matches = new Set();
  const expanded = new Set();

  function dfs(node, parents = []) {
    const isMatch = node.name.toLowerCase().includes(query.toLowerCase());

    if (isMatch) {
      matches.add(node.id);
      parents.forEach((p) => expanded.add(p.id));
    }

    if (node.type === "folder" && node.children) {
      node.children.forEach((child) => dfs(child, [...parents, node]));
    }
  }

  nodes.forEach((node) => dfs(node));

  return {
    matches: Array.from(matches),
    expanded: Array.from(expanded),
  };
}
