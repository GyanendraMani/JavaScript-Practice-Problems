
function birthdayCakeCandles(candles) {
    // Write your code here
    let count = 0;
    candles.sort((a, b) => a - b);

    for (let i = 0; i < candles.length; i++) {
       
        if (candles[i] === candles.slice(-1)[0]) {
            count += 1;
        }
    }
    return count;

}

console.log(birthdayCakeCandles([3, 2, 1, 3]))


