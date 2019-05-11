/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

==========================================
Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
==========================================


*/

function twoSum(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            let idx2 = nums.indexOf(target - nums[i], i);
            if (idx2 !== -1) {
                result.push(i, idx2);
            }
        }
    }
    return console.log(result);
}

twoSum([22, 17, 33, 56], 50);
