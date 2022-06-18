/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0],
    maxProfit = prices[0] - minPrice;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];

    if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
  }

  return maxProfit;
};
