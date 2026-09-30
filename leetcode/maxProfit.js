var maxProfit = function (prices) {
  let minPrice = Infinity; // 历史最低价（天然只含当前元素之前，保证 i < j）
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // 先算：今天卖，相对历史最低能赚多少
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    // 再更新：今天及以前出现的最低价
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
};

// let prices = [7, 1, 5, 3, 6, 4];

// let prices = [1, 4, 2]

let prices = [3, 2, 6, 5, 0, 3];

// 示例 1：

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。


maxProfit(prices);
