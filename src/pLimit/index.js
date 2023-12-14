/**
 * 并发控制，p-limit
 * 
 * import pLimit from 'p-limit';
 * const limit = pLimit(2);
 * 
 * const input = [
 *  limit(() => fetchSomthing('foo')),
 *  limit(() => fetchSomthing('bar')),
 *  limit(() => doSomthing(''))
 * ];
 * 
 * const result = await Promise.all(input);
 * console.log(result);
 * 
 * @params 控制的并发数量 concurrency
 * @returns 返回一个函数，可以用于添加任务函数 Function
 */

const queue = []; // 任务排队队列
let activeCount = 0; // 当前执行到任务位置，用于记录

const serviceLimit = (concurrency) => {
  const generator = (fn, ...args) => {
    return new Promise((resolve) => {
      // 添加异步任务入队列
      enqueue(fn, resolve, ...args);
    })
  };

  // 把异步任务添加到queue 中，并且没有达到上限，就继续执行下一个任务
  const enqueue = (fn, resolve, ...args) => {
    // 塞到队列中，funcRun，运行该方法
    queue.push(funcRun.bind(null, fn, resolve, ...args));

    if(activeCount < concurrency && queue.length > 0) {
      queue.shift()();
    }
  };

  // 方法执行
  const funcRun = async (fn, resolve, ...args) => {
    activeCount ++;
    const result = (async () => fn(...args))();

    resolve(result);

    try {
      await result
    } catch {};

    next();
  };

  const next = () => {
    activeCount --;

    if(queue.length > 0) {
      queue.shift()();
    }
  }

  return generator;
}

