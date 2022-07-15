/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const result = Array(amount + 1).fill(amount + 1);

  result[0] = 0;

  for (let curAmount = 0; curAmount < amount + 1; curAmount++) {
    for (let iC = 0; iC < coins.length; iC++) {
      const curCoin = coins[iC];

      if (curAmount - curCoin >= 0) {
        result[curAmount] = Math.min(
          result[curAmount - curCoin] + 1,
          result[curAmount]
        );
      }
    }
  }

  return result[amount] === amount + 1 ? -1 : result[amount];
};
