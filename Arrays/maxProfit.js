//high profit from selling one stock.  only once

const maxProfit = prices => {
    let minPrice = prices[0];
    let max = 0;

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        max = Math.max(max, prices[i] - minPrice);
    }


    return max;
}

const prices = [7, 1, 5, 3, 6, 4]
console.log('maxProfit', maxProfit(prices))