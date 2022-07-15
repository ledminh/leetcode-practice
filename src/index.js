/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const cache = {};

  const dfs = (amountLeft, numCoins) => {
    if (cache[amountLeft]) {
      return cache[amountLeft];
    }

    if (amountLeft < 0) {
      return Number.POSITIVE_INFINITY;
    }

    if (amountLeft === 0) {
      return numCoins;
    }

    //[1, 2, 5], 11

    let min = Number.POSITIVE_INFINITY;

    for (let i = 0; i < coins.length; i++) {
      const result = dfs(amountLeft - coins[i], numCoins + 1);

      if (result < min) {
        min = result;
      }
    }

    if (cache[amountLeft] > min) cache[amountLeft] = min;

    return min;
  };

  let min = Number.POSITIVE_INFINITY;

  for (let i = 0; i < coins.length; i++) {
    const res = dfs(amount - coins[i], 1);

    if (res < min) {
      min = res;
    }
  }

  return min;
};

console.log("----------------------");
console.log(coinChange([1, 2, 5], 11));
