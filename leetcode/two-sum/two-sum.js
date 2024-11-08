// Problem Link: https://leetcode.com/problems/two-sum/?envType=study-plan-v2&envId=top-interview-150

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // If no solution is found, return an empty array;
}
const result = twoSum([2, 4, 3, 15], 25);
console.log(result);
