/**
 * @param {number[]} arr1 and arr2
 * @param {number[]} arr2
 * @returns {boolean}
*/

class Solution {

    freequncyCountor(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false
        }
        let frequencyCounter1 = {}
        let frequencyCounter2 = {}
        for (let val of arr1) {
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        }
        for (let val of arr2) {
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
        }
        console.log("printing frequencyCounter1", frequencyCounter1)
        console.log("printing frequencyCounter2", frequencyCounter2)

        for (let key in frequencyCounter1) {
            if (!(key ** 2 in frequencyCounter2)) {
                return false
            }

        }

        return true
    }

}

const ins = new Solution();
// const get = ins.same([1, 2, 3], [1, 4, 9]);
const result = ins.freequncyCountor([1, 2, 3, 2], [1, 4, 9, 4]);

console.log("printing return values", result)

