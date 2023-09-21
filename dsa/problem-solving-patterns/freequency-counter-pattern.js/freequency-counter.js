/**
 * @param {number[]} arr1 and arr2
 * @param {number[]} arr2
 * @returns {boolean}
*/

class Solution {
    freequncyCountor(arr1, arr2) {

        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            const index = arr2.indexOf(arr1[i] ** 2)
            console.log("printin index", index);
            if (index === -1) {
                return false;
            }
            arr2.splice(index, 1)
            console.log("printin arrr2", arr2);
        }
        return true;
    }


}

const ins = new Solution();
const result = ins.freequncyCountor([1, 2, 3, 2], [1, 4, 9, 4]);

console.log("printing return values", result)

