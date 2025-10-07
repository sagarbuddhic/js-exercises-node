// best time stock
//  You may complete as many transactions as you like (i.e. buy one day and sell another, multiple times), with the constraints

var maxProfit = function (prices) {
  let totalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }
  return totalProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
