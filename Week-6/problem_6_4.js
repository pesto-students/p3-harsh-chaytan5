// best time to buy and sell stock

function maxProfit(price) {
    
    let minPrice = price[0];
    let profit = 0;
    let max_profit = 0;
    
    for (let sell = 1; sell < price.length; sell++){
        let sellPrice = price[sell];
        profit =  sellPrice - minPrice;

        max_profit = Math.max(max_profit, profit);

        if (sellPrice < minPrice) minPrice = sellPrice; 
    }

    return max_profit;
}

prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
