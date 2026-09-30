var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;    // nums1 有效元素末位
  let p2 = n - 1;    // nums2 末位
  let p = m + n - 1; // 合并后总数组的写入位（从后往前填）

  // 从后往前取较大值落位：写入位置恒在读取位置右侧，绝不覆盖未处理元素
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p--] = nums1[p1--];
    } else {
      nums1[p--] = nums2[p2--];
    }
  }

  // nums1 剩余元素本就在原位；仅需把 nums2 残留搬完
  while (p2 >= 0) {
    nums1[p--] = nums2[p2--];
  }
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;

// let nums1 = [4, 5, 6, 0, 0, 0], m = 3, nums2 = [1, 2, 3], n = 3;

// let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0], m = 6, nums2 = [1, 2, 3], n = 3;

merge(nums1, m, nums2, n);
