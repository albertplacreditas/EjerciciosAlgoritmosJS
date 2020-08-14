function howManyGames(initialPrice, discount, minimunPrice, balance) {
    // Return the number of games you can buy
     var gameCounter = 0;
    var price = initialPrice
    while(balance >= price){
        price = initialPrice - (discount*gameCounter)
        if(price<minimunPrice){ price = minimunPrice}
        balance = balance-price;
        gameCounter++
    }
    return gameCounter;
}

console.log(howManyGames(100,1, 1, 99))