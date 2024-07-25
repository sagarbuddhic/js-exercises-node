// best time to buy stocks
// leetcode121

var maxProfit = function (prices) {
  let lowestSellPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    lowestSellPrice = Math.min(lowestSellPrice, prices[i]);
    profit = Math.max(profit, prices[i] - lowestSellPrice);
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
