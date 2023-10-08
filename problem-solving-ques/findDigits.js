function findDigits(n) {
    // Write your code here
    function splitNum(num) {
        return String(num).split("").map(Number);
    }

    let num = 0;

    let arr = splitNum(n);

    for (let i = 0; i < arr.length; i++) {
        if (n % arr[i] == 0) {
            num++;
        }
    }


    return num;

}

console.log(findDigits(2342687547865784))