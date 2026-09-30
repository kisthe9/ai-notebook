var rotate = function (nums, k) {
  let n = nums.length
  k = k % n;


  nums.reverse();
  for (let i = 0; i < k / 2; i++) {
    let temp = nums[i]
    nums[i] = nums[k - i - 1];
    nums[k - i - 1] = temp;
  }

  for (let i = 0; i < (n - k) / 2; i++) {
    let temp = nums[i + k];
    nums[i + k] = nums[n - i - 1];
    nums[n - i - 1] = temp;
  }
};


let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
rotate(nums, k);
// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
