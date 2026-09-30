

var _removeDuplicates = function (nums, k = 1) {
  let i = 0;


  for (let j = 0; j < nums.length; j++) {
    if (i < k || nums[i - k] !== nums[j]) {
      nums[i++] = nums[j]
    }
  }

  return i;

}

var removeDuplicates = function (nums) {
  return _removeDuplicates(nums)
}

// let nums = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4];

let nums = [1, 1, 1, 1];

removeDuplicates(nums)
