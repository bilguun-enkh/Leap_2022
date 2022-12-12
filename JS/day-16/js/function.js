function hello() {
    console.log("Hello world")
}
hello()

function f1(x, y) {
    console.log((x * x) + (y * y))
}
f1(2, 3)
function f2(x, y) {
    console.log(Math.pow(x, 2) + Math.pow(y, 2))
}

f2(2, 3)

function f3(m, c) {
    console.log(m * Math.pow(c, 2))
}

const C = 300000
f3(68, C)

f3(2, 5)


function f4(x) {
    let multi = 1
    for (let i = 1; i <= x; i++) {
        multi = multi + 1
    }
    console.log(multi)
}

f4(5)

function f5(x, y) {
    console.log(Math.cos(x) - Math.sin(x));
}
f5(3, 5)

function f6(x) {
    console.log(Math.pow(x, 2) + Math.pow(x, 2) + (5 * x) + 12)
}
f6(12)

function f7(x) {
    console.log(Math.pow(x, 2))
}
f7(5)

function f9(x) {
    console.log(Math.sqrt(x))
}
f9(121)