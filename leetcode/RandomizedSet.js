/**
 * 380. O(1) 时间插入、删除和获取随机元素
 * 本质：数组 + 哈希表互为索引
 *  - nums: 下标 -> 值，随机取下标即可 O(1)
 *  - map : 值 -> 下标，定位元素 O(1)
 * 删除用 swap-remove：末尾元素搬进被删位置再 pop，O(1) 且不留空洞
 */
var RandomizedSet = function () {
  this.nums = [];
  this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.map.set(val, this.nums.length); // push 返回的是新长度，真正的下标是 length
  this.nums.push(val);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  const idx = this.map.get(val);
  const last = this.nums[this.nums.length - 1];
  // 末尾元素搬到 idx，同步维护末尾元素的新下标
  this.nums[idx] = last;
  this.map.set(last, idx);
  // 弹出末尾，再删除 val 的索引
  this.nums.pop();
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


// 示例：

// 输入
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// 输出
// [null, true, false, true, 2, true, false, 2]

// 解释
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
// randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
// randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
// randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
// randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
// randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
// randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。


