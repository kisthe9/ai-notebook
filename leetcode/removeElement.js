
var removeElement = function (nums, val) {
  let i = 0; // 写指针：下一个「保留元素」的落位处

  for (let j = 0; j < nums.length; j++) {
    // 读指针遇到非 val 元素就前移覆盖，等价去重范式里 k=0 的窗口
    if (nums[j] !== val) {
      nums[i++] = nums[j];
    }
  }

  return i; // 有效前缀长度
};

removeElement([3, 2, 2, 3], 3);
