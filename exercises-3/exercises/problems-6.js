/*
    Write a function which will reverse the vowels in a string.
    Any characters which are not vowels should remain in their original position,
    i.e. only swap pairs of vowels - but they may not be at matching indexes!

    For example:
    "Tomatoes" => "Temotaos"
*/

function reverseVowels(reverseMe) {
    reverseMe = reverseMe.split('')
    let left = 0
    let right = reverseMe.length-1

    const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]

    while (left < right) {
        if (vowels.indexOf(reverseMe[left]) === -1) {
            left ++
            continue
        }

        if (vowels.indexOf(reverseMe[right]) === -1) {
            right --
            continue
        }

        let arr = reverseMe[right]
        reverseMe[right] = reverseMe[left]
        reverseMe[left] = arr

        left ++
        right --
    }

    return reverseMe.join('')
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.reverseVowels = reverseVowels