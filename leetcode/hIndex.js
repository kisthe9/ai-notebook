

var hIndex = function (citations) {
  const n = citations.length;
  // 升序排列后，citations[i] 右侧（含自身）共 n - i 篇论文
  citations.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    // 第一篇「被引次数 >= 其右侧篇数」时，n - i 即为满足条件的最大 h
    if (citations[i] >= n - i) {
      return n - i;
    }
  }

  return 0;
};



let citations = [3, 0, 6, 1, 5];

hIndex(citations);

// 示例 1：

// 输入：citations = [3,0,6,1,5]
// 输出：3 
// 解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
//      由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
