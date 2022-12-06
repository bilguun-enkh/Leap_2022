


let tictactoe = [
    ['x', 'o', 'x'],
    ['o', 'o', 'x'],
    ['x', 'x', 'o'],
]

let x = Number(prompt("Enter x"))
let y = Number(prompt("Enter y"))
let z = prompt("x or o?")

tictactoe[x][y] = z


for (let i = 0; i < tictactoe.length; i++) {
    // console.log(tictactoe[i])

    let output = ''
    for (let j = 0; j < tictactoe[i].length; j++) {
        output = output + "  |  " +tictactoe[i][j] + "  |  "
    }
    console.log( output)
}
