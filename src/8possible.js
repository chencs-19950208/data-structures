/**
 * 分割数组为连续子序列
 */

// 有错误
const isPossible = (nums) => {
  let count = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      count.push(nums[i]);

      if (count.length < 3) {
        return false;
      } else {
        // 清空数组
        count.splice(0, count.length);
      };

    } else {
      if (i + 1 === nums.length) {
        count.push(nums[i]);

        if (count.length >= 3) {
          return true;
        } else {
          return false;
        };
      } else {
        count.push(nums[i]);
      };
    }
  };
};

const array = [1, 2, 3, 3, 4, 4, 5, 5];
isPossible(array);

console.log(isPossible(array));

