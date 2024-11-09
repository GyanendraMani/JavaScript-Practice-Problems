var nextPermutation = function (nums) {
    let largestInx = 0;
    let secLargInx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[largestInx] < nums[i]) {
            console.log("pringin data of if", nums[largestInx] , nums[i])
            secLargInx = largestInx;
            largestInx = i;
        }
    }

    if (largestInx == 0) {
        let temp = nums[0];
        nums[0] = nums[largestInx]
        nums[largestInx] = temp;
    } else {
        let temp = nums[nums.length - 1];
        nums[nums.length - 1] = nums[secLargInx]
        nums[secLargInx] = temp;
    }
return nums;
};

console.log(nextPermutation([1, 2, 3]))
// [1,3,2]
