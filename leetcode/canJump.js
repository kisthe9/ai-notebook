var canJump = function (nums) {
  let n = nums.length;
  let maxReach = 0; // 从起点出发能踏足的最远下标

  for (let i = 0; i < n; i++) {
    // i 超出可达范围，说明被 0 卡住断层，永远到不了终点
    if (i > maxReach) return false;

    // 贪心：尝试用当前位置扩张可达边界
    maxReach = Math.max(maxReach, i + nums[i]);

    // 已覆盖最后一个下标，提前收敛
    if (maxReach >= n - 1) return true;
  }

  return true;
};




// let nums = [2, 3, 1, 1, 4];

let nums = [2, 5, 0, 0];

canJump(nums);

// 示例 1：

// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。


