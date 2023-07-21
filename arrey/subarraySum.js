// Subarray with given s

class Solution {
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s) {
        //your code here
        // Pick a starting point
        for (let i = 0; i < n; i++) {
            let currentSum = arr[i];

            if (currentSum === s) {
                console.log("Sum found at indexes " + i);
                return [i + 1];
            }
            else {
                // Try all subarrays starting with 'i'
                for (let j = i + 1; j < n; j++) {
                    currentSum += arr[j];
                    if (currentSum == s) {
                        console.log("Sum found between indexes "
                            + i + " and " + j);
                        return [i + 1, j + 1];
                    }
                }
            }
        }
        console.log("No subarray found");
        return [-1];
    }
}

const ins = new Solution();
const get = ins.subarraySum([1, 2, 3, 7, 5], 5, 12)

console.log("printting first", get)

