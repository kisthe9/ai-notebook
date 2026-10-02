var productExceptSelf = function (nums) {
  let n = nums.length;

  let result = new Array(n).fill(1);

  let leftProduct = 1;

  let rightProduct = 1;

  // 复用内存或修改输入数组 nums 来存储中间结果，从而减少额外空间的使用
  




  for (let i = 0; i < n; i++) {

    result[i] *= leftProduct;

    leftProduct *= nums[i];
  }


  for (let i = n - 1; i >= 0; i--) {

    result[i] *= rightProduct;

    rightProduct *= nums[i];
  }

  return result;
}


let nums = [1, 2, 3, 4];


// [1,2,3,4]
// [1,2,3,4]
// [1,2,6,4]

productExceptSelf(nums);

// 示例 1:

// 输入: nums = [1,2,3,4]
// 输出: [24,12,8,6]
// 示例 2:

// 输入: nums = [-1,1,0,-3,3]
// 输出: [0,0,9,0,0]
