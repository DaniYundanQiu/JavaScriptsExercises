/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/

function encrypt(text, n) {
    // let leftText
    // let rightText
    text = text.split('')

    for (counter=1; counter<=n; counter++) {
        let leftText = []
        let rightText = []
        for (let i=1; i<text.length; i+=2) {
            leftText.push(text[i])
        }
        for (let j=0; j<text.length; j+=2) {
            rightText.push(text[j])
        }

        text = leftText.concat(rightText)
    }
    return text.join('')
}

/*
    Now write a function to decrypt the encrypted strings

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "bbbbaaaa", 1 => "abababab"
    "bbaabbaa", 2 => "abababab"
*/

function decrypt(cipherText, n) {

    // cipherText = cipherText.split('')
    
    for (counter=1; counter<=n; counter++) {
        cipherText = cipherText.split('')

        let leftPart = cipherText.slice(0, cipherText.length/2)
        let rightPart = cipherText.slice(cipherText.length/2, cipherText.length)

        for (let i=0; i<cipherText.length; i+=2) {
            leftPart.splice(i,0,rightPart[0])
            rightPart.shift()
        }
        cipherText = leftPart.join('')
    }
    return cipherText
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.encrypt = encrypt
window.solutions.decrypt = decrypt