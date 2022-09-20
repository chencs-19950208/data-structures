// 队列：先进先出
// push ， shift (数组头部删除)

// 模拟队列进队，出队
const queue = [];

queue.push('1');
console.log('进队：', '1');

queue.push('2');
console.log('进队：', '2');

queue.push('3');
console.log('进队: ', '3');

// 队列为空，就不执行
while(queue.length) {
  // 单纯访问下队头元素（不出队）
  const top = queue[0];
  console.log(top, '出队');

  queue.shift();
};

console.log(queue);
