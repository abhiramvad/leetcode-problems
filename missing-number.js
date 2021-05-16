// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missingNumber = null
    for (i=0;i<=nums.length;i++){
        if(nums.indexOf(i)==-1){
            missingNumber = i
            break;
        }
    }
    return missingNumber;
};
