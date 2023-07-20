class Solution {
    kthSmallest(arr, l, r, k) {
        //code here
        const sortNum = (a, b) => {
            return a - b;
        }
        const sortArrey = arr.sort(sortNum)
        return sortArrey[k]
    }
}

const ins = new Solution();
const k = 1;
const kthNum = ins.kthSmallest([1, 345, 234, 21, 56789, 66789], 0, 4, k);
console.log("printing ", k + 1, "th num", kthNum);