

class Solution {

    sort012(arr, n) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }

            }
        }
        return arr
    }
}

const ins = new Solution();
const sort012 = ins.sort012([13, 2, 11], 3);

console.log(sort012)