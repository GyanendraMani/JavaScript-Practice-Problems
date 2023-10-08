function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let aCount = 0;
    let oCount = 0;

    for (let ap = 0; ap < apples.length; ap++) {
        let temp = a + apples[ap];
        if (temp >= s && temp <= t) {
            aCount += 1;

        }
    }

    for (let o = 0; o < oranges.length; o++) {
        let temp = a + oranges[o];
        if (temp >= s && temp <= t) {
            oCount += 1;

        }
    }

    console.log("printing aCount", aCount, oCount);

    return 0;

}



let appleCount = 0;
let orangeCount = 0;
for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
        appleCount++;
    }
}
for (let j = 0; j < oranges.length; j++) {
    if (b + oranges[j] <= t && b + oranges[j] >= s) {
        orangeCount++;
    }
}
console.log(appleCount);
console.log(orangeCount);


console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));