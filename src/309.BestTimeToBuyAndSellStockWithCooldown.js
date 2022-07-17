/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let rest = 0,
    sold = Number.NEGATIVE_INFINITY,
    hold = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < prices.length; i++) {
    const newSold = hold + prices[i],
      newRest = Math.max(sold, rest),
      newHold = Math.max(rest - prices[i], hold);

    hold = newHold;
    sold = newSold;
    rest = newRest;
  }

  return Math.max(sold, rest);
};
