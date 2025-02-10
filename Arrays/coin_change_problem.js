function coinCount(coins, n, sum) {
  let dp = new Array(sum + 1);
  dp.fill(0);

  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = coins[i]; j <= sum; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[sum];
}

const coins = [1, 2, 3];
const n = coins.length;
const sum = 4;

console.log(coinCount(coins, n, sum));
