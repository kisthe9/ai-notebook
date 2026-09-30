var majorityElement = function (nums) {
  let candidate = 0;
  let count = 0;
  

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    count += (nums[i] === candidate) ? 1 : -1;
  }

  return candidate;
}

let nums = [2, 2, 1, 1, 1, 2, 2];

majorityElement(nums);

// 摩尔投票法，每个数组位置代表一个选民，数组元素代表候选者，相同的元素代表选民支持，然后进行投票，最终票数最多的候选者即为胜出者
