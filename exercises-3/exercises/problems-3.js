/*
    The goal of this exercise is to convert a string to a new string where each character in the new string is "("
    if that character appears only once in the original string, or ")" if that character appears more than once in
    the original string. Ignore capitalization when determining if a character is a duplicate.

    For example:
    "recede"   =>  "()()()"
*/

function duplicateEncode(word) {
    word = word.toLowerCase()
    const output = []
    for (let i=0; i<word.length; i++) {
        if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
            output.push("(")
        }

        else output.push(")")
    }

    return output.join("")
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.duplicateEncode = duplicateEncode