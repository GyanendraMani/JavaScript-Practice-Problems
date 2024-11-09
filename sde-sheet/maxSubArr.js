var maxSubArray = function (nums) {
  let maxSum = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum > maxSum) {
        maxSum = sum
      }
    }
  }
  return maxSum;
};
//Kadane's Algorithm

var maxSubArray1 = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

console.log(maxSubArray1([1, -2, 3, 4, -1, 2, 1, -5, 4])); // Output: 7 (Subarray [3, 4, -1, 2, 1])
console.log(maxSubArray1([-1, -2, -3, -4])); // Output: -1 (Subarray [-1])
console.log(maxSubArray1([5, 4, -1, 7, 8])); // Output: 23 (Subarray [5, 4, -1, 7, 8])
