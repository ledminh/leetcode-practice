/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let prices = [];

  for (let i = 0; i < n; i++) {
    if (i === src) {
      prices.push(0);
    } else {
      prices.push(Number.POSITIVE_INFINITY);
    }
  }

  for (let stop = 1; stop <= k + 1; stop++) {
    const tempPrices = prices.slice();

    for (let iF = 0; iF < flights.length; iF++) {
      const [s, d, p] = flights[iF];

      if (prices[s] + p < prices[d]) {
        tempPrices[d] = prices[s] + p;
      }
    }

    prices = tempPrices;
  }

  return prices[dst] === Number.POSITIVE_INFINITY ? -1 : prices[dst];
};

console.log("-------------------");

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200]
    ],
    0,
    3,
    1
  )
);
