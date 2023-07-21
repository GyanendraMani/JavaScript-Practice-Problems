class Solution {
    rotate(arr, n) {
        //code here
        let lst_el = arr[n - 1], i;

        for (i = n - 1; i > 0; i--) {
            console.log(arr[i])
            arr[i] = arr[i - 1]
        }
        arr[0] = lst_el
        return arr;
    }
}

const ins = new Solution();
const get = ins.rotate([1, 2, 3, 4, 5], 5);

console.log("printing find", get);
