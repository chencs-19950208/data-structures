/**
 * 快排
*/

const arr = [2, 5, 1, 4, 7, 3, 8, 6, 9, 0];
let times = 0;

const quickSort = (data) => {
  if (data.length <= 1) {
    return data;
  };

  const maxArrIdx = Math.floor(data.length / 2); // 基准点，是是原数组得下标
  console.log(maxArrIdx);

  const maxArr = data.splice(maxArrIdx, 1); // 该基准点作为下边得，数据中得数据（是数组）
  console.log(maxArr);

  let left = [];
  let right = [];

  for (let i = 0; i < data.length; i++) {
    console.log(data[1], maxArr, '11111');
    console.log(typeof maxArrIdx);
    if (data[i] < maxArr[0]) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    };

    console.log("第"+(++times)+'次循环'+data);
  };

  // return [...quickSort(left), ...maxArr, ...quickSort(right)]
  return quickSort(left).concat(maxArr, quickSort(right));
};

const result = quickSort(arr);
console.log(result);
