// 11ms 65.55mb
// export function maxProfit(prices: number[]): number {
//   let profit = 0;
//   let min = Number.MAX_VALUE;
//   prices.forEach((p) => {
//     min = Math.min(p, min);
//     profit = Math.max(profit, p - min);
//   });
//   return profit;
// }

// 2ms 65.30mb
export function maxProfit(prices: number[]): number {
  let profit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = min < prices[i] ? min : prices[i];
    profit = prices[i] - min > profit ? prices[i] - min : profit;
  }
  return profit;
}
