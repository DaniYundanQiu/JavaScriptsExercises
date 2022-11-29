// Make your changes to store and update game state in this file
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

let count  = 0
let nought = "nought"
let cross = "cross"
let noughtsTurn = true
let goOn = true
let counter = 0
// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    if (board[row][column] === null && goOn === true) {
        if(noughtsTurn) {
            board[row][column] = nought
            counter ++
            noughtsTurn = false
        }
        else {
            board[row][column] = cross
            counter ++
            noughtsTurn = true
        }
        console.log(counter)
    }
    
    console.log("takeTurn was called with row: "+row+", column:"+column);
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    //console.log(goOn)

    //check for row
    for (const row in board) {
        if (board[row][0] != '' && board[row][0] === board[row][1] && board[row][0] === board[row][2] && board[row][1] === board[row][2]) {
            let winner = board[row][0]
            if (winner == "cross") {
                goOn = false 
                return "star"
                }
            else if (winner == "nought") {
                goOn = false 
                return "moon"}
        }
    }

    //check for column
    for (const col in board) {
        if (board[0][col] != '' && board[0][col] === board[1][col] && board[0][col] === board[2][col] && board[1][col] === board[2][col]) {
            let winner = board[0][col]
            if (winner == "cross") {
                goOn = false
                return "star"}
            else if (winner == "nought") {
                goOn = false
                return "moon"}
        }
    }

    for (let i=0; i<3; i++) {
        if (board[0][2] != '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            let winner = board[0][2]
            if (winner == "cross") {
                goOn = false
                return "star"}
            else if (winner == "nought") {
                goOn = false
                return "moon"}
        }
    }

    for (let i=0; i<3; i++) {
        if (board[0][0] != '' && board[0][0] === board[1][1] && board[2][2] === board[0][0]) {
            let winner = board[0][0]
            if (winner == "cross") {
                goOn = false
                return "star"}
            else if (winner == "nought") {
                goOn = false
                return "moon"}
        }
    }

    if (counter === 9 && goOn === true) {
        goOn = false
        return "nobody"
    }
    
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    goOn = true
    counter = 0
    // clearBoard()
    for (const row in board) {
        for (const col in board) {
            board[row][col] = null
        }
    }

}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    // return [[null, null, null], [null, null, null], [null, null, null]];
    return board
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
