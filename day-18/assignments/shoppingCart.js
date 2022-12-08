let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"]

shoppingCart.unshift("Meat")

if (!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar")
}
let allergic = true

if (allergic == true) {
    let x = shoppingCart.indexOf("Honey")
    shoppingCart.splice(x, 1)
}

shoppingCart.splice(3, 1, "Green Tea")
console.log(shoppingCart)