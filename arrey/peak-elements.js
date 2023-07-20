class Solution {

    peakElement(arr, n) {
        // code here

        if (n === 1) return 0;
        if (arr[0] >= arr[1]) return 0;
        if (arr[n - 1] >= arr[n - 2]) return n - 1;

        for (let i = 1; i < n - 1; i++) {
            if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i
        }

        console.log("printing data of arrey", arr)
    }
}

const ins = new Solution();
const peakElement = ins.peakElement([10, 20, 15, 2, 23, 90, 67], 6);

console.log("printing peakElement", peakElement);