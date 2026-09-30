
var removeDuplicates = function (nums) {
  let i = 0;


  for (let j = 0; j < nums.length; j++) {
    if (i < 2 || nums[i - 2] !== nums[j]) {
      nums[i++] = nums[j]
    }
  }

  return i;

}


let nums = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4];
// [1, 1, 2, 1, 2, 2, 3]
// let nums = [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4];
// let nums = [0, 0, 0, 1, 1, 1, 1, 2, 3, 3];
// let nums = [1, 1, 1, 1];

// removeDuplicates(nums)

console.log(nums, removeDuplicates(nums))

// 找到不同则覆盖，相同就后移
// 一直往后找，同时覆盖前面的元素，直到满足最大两次重复


// 个数超过2个的，间隔为2，否则为1