/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrices = Infinity;
    let maxProfit = 0;
    for(let i = 0;i< prices.length; i++) {

        if(prices[i] < minPrices) {
            minPrices = prices[i]
        }

        else {
            let profit = prices[i] - minPrices;

            if(profit > maxProfit){
                maxProfit = profit
            }
        }
    }
    return maxProfit;
};