/*
Example 1: 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums [1] == 9, we return [0, 1].

Example 2: Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

/*
THOUGHT PROCESS
receive an intdended outcome of an array of two indicies that would make a sum of the target
return [x, y]
 loop through each number and test by adding to the other numbers in the array
start with [0] and add to each, if that doesn't work, start with [1]*/

// 23-24 added at end to run function
var numberArray = [2,7,11,15];
var target = 9;

function twoSum(nums, target){
    var resultArray = [];
    for (i=0;i<nums.length;i++) {
        for(j=i+1;j<nums.length;j++) {
            if (nums [i] + nums [j] === target && i!==j) {
                resultArray[0] = i;
                resultArray[1] j;
            }
        }
    }
    return resultArray;
}
console.log(twoSum(numberArray, target));