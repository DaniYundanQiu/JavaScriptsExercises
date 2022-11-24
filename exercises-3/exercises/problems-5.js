/*
    return the only unique number from an array.
    All numbers in the input array are present twice, except for one.

    Example:
    In the array [ 1, 8, 4, 4, 6, 1, 8 ], all numbers are present twice except 6
    You should return 6
*/

function findUnique(input) {
    for (i=0; i<input.length; i++) {
        if (input.indexOf(input[i]) === input.lastIndexOf(input[i])) {
            return input[i]
        }
    }
    
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.findUnique = findUnique