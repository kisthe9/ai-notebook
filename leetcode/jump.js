var jump = function (nums) {
  let n = nums.length;
  let maxReach = 0;
  let steps = 0;
  let currentEnd = 0;
  for (let i = 0; i < n; i++) {
    if (i > maxReach) return -1;
    if (i > currentEnd) {
      steps++;
      currentEnd = maxReach;
    }
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return steps;
};


let nums = [2, 3, 1, 1, 4];

jump(nums);

// 示例 1:

// 输入: nums = [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。