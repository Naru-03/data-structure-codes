const nums = [2, 7, 11, 15]
const target = 9;

function twoSum(nums, target) {

    let obj = {};

    for (let i = 0; i < nums.length; i++) {

        let complement = target - nums[i];
        if (complement in obj && obj[complement] !== i) {
            return [obj[complement], i]
        }
        obj[nums[i]] = i; // add the current number and its index to the object for future reference if the complement is found later in the array.
    }

    return []

}

twoSum(nums, target) // expected output: [0, 1]

console.log(twoSum(nums, target)) // expected output:   