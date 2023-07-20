// Getting Minimjum nad maximum values form the arrey

class Solution {
    getMinMax(arr, n) {
        let minValue = Math.min(...arr);
        let maxValue = Math.max(...arr);
        return [minValue, maxValue];

    }
    getMinMax2(arr, n) {
        //code here
        const assendingSort = (a, b) => {
            return a - b
        }
        const sortedArr = arr.sort(assendingSort)
        const min = sortedArr[0]
        const max = sortedArr.slice(-1)[0]

        return [min, max]
    }
}

const ins = new Solution();
const minAmax = ins.getMinMax([1, 345, 234, 21, 56789, 66789], 6)
const nAx = ins.getMinMax2([1, 345, 234, 21, 56789, 66789], 6)
console.log(minAmax)
