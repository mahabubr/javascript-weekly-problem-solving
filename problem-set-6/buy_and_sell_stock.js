function buyAndSellStocks(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  let price = arr[0];
  let profit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < price) {
      price = arr[i];
    } else {
      let getProfit = arr[i] - price;
      if (getProfit > profit) {
        profit = getProfit;
      }
    }
  }

  return profit;
}

const arr = [7, 1, 5, 3, 6, 4];

const result = buyAndSellStocks(arr);
console.log(result);
