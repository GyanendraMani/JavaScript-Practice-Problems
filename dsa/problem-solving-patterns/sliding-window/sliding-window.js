class Solution {
    findMaxSubarraySum(arr, num) {

        if (num > arr.length) {
            return null;
        }
        let max = -Infinity;

        for (let i = 0; i < arr.length - num + 1; i++) {
            let temp = 0;
            for (let j = 0; j < num; j++) {
                temp += arr[i+j];
            }
            console.log("printing max and temp", temp)
            if(temp> max){
                console.log("printing max and temp", max, temp)
                max =temp;
                
            }
        }
        return max

    }
}

const ins = new Solution();
const findF = ins.findMaxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

console.log("printing find", findF);