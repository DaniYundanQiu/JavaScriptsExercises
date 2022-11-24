/*
    You will be given a sequence of letters.
    When an uppercase and lowercase of the same letter touch, they destroy each other.
    After they have been removed, the process continues until there are no more letters reacting

    For example:
    "xYyZZX" => "xZZX"
    "aBbA" => ""
*/

function react(sequence) {
    // sequence = sequence.toLowerCase()
    let done = false;
    let _sequence = sequence.split('')
    while (!done) {
        for (let i=0; i<_sequence.length-1; i++) {
            if (_sequence[i].toLowerCase() === _sequence[i+1].toLowerCase() && _sequence[i] != _sequence[i+1]) {
                _sequence.splice(i,2)
                done = false
                break
            }

            else done = true
        }

        if (_sequence.length === 0) {
            done = true;
        }
    }

    return _sequence.join("")

}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.react = react