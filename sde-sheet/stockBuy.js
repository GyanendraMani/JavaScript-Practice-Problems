function maxProfit(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        let diff = prices[j] - prices[i];
        maxProfit = maxProfit < diff ? diff : maxProfit;
      }
    }
  }
  return maxProfit;
};


function maxProfit2(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    
    let profit = prices[i] - minPrice;
    
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}


maxProfit([7, 1, 5, 3, 6, 4]);
console.log(maxProfit2([7, 1, 5, 3, 6, 4]))