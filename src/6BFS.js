const bfs = (root) => {
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    console.log(node.val);
    node.children.forEach((child) => queue.push(child));
  }
};

const BFS = (root) => {
  if(!root) return [];

  const queue = [root];
  let visited = new Set();
  let result = []

  while(queue.length) {
    let node = queue.shift(); // 从队列中移除

    if(visited.has(node)) continue; // 检查节点是否被访问过

    visited.add(node); // 代表该节点已经访问过
    result.push(node.val);

    queue = queue.concat(node.children || []);
  }

  return result;
}