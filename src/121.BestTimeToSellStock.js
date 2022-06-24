// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   let minPrice = prices[0],
//     maxProfit = prices[0] - minPrice;

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < minPrice) minPrice = prices[i];

//     if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
//   }

//   return maxProfit;
// };

/************************
 * SECOND TRY
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }

  let buyI = 0,
    sellI = 0,
    maxProfit = 0;

  while (sellI < prices.length) {
    const profit = prices[sellI] - prices[buyI];

    if (profit < 0) {
      buyI = sellI;
    } else if (profit > maxProfit) {
      maxProfit = profit;
    }

    sellI++;
  }

  return maxProfit;
};
