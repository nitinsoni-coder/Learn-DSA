function maximumProfit(prices) {
  let res = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) res += prices[i] - prices[i - 1];
  }

  return res;
}

const prices = [100, 180, 260, 310, 40, 535, 695];
console.log(maximumProfit(prices));
