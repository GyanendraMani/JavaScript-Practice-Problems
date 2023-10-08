function superReducedString(s) {
    // Write your code here
    let arr = s.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            arr.splice(i, 2);
            i = -1;
        }

    }

    return arr.length === 0 ? "Empty String" : arr.join("");

}


console.log(superReducedString("aabccddd"))