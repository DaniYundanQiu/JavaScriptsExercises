/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/

function isSortedAndHow(nums) {
    let asc = true;
    let desc = true;

    for(let i=1; i<=nums.length; i++){
        if(nums[i]>nums[i-1]){
            desc = false
        }

        else if (nums[i]<nums[i-1]){
            asc = false
        }
    }

    if (asc) {
        return "yes, ascending"
    }

    else if (desc) {
        return "yes, descending"
    }

    else return "no"

}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow