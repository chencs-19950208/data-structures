// 栈：后进先出
// push 进栈
// pop 出栈
// 模拟进栈出栈
const stack = [];

stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
stack.push('5');

//出栈过程，栈不为空，才继续执行
while(stack.length) {
  const top = stack[stack.length - 1];

  console.log('现在取得是：', top);

  stack.pop();
}

console.log(stack);