/**
 * 冒泡排序
 * 循环了45次
 */
const arr = [2, 5, 1, 4, 7, 3, 8, 6, 9, 0];
let times = 0;

const bubbleSort = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      };

      console.log("第" + (++times) + "次排序后：" + data);
    };
  };

  return data;
};

bubbleSort(arr);