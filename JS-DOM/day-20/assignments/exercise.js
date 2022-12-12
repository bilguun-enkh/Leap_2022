console.log(document.getElementById("aimag-101").innerHTML)
console.log(document.getElementById("aimag-522").innerHTML)
document.getElementById("aimag-315").innerHTML = "Bavaria"

document.getElementById("aimagNames").style =
    "font-size: 20px; font-family:Verdana, Geneva, Tahoma, sans-serif;color:black; padding: 20px; margin: 20px; border: 1px solid black"


for (let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++) {

    if (document.getElementById('aimagNames').getElementsByTagName('li')[i].className.includes('kh')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: red;"
    } else if
        (document.getElementById('aimagNames').getElementsByTagName('li')[i].className.includes('baruun')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: green"
    } else if
        (document.getElementById('aimagNames').getElementsByTagName('li')[i].className.includes('zuun')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: blue"
    } else if
        (document.getElementById('aimagNames').getElementsByTagName('li')[i].className.includes('tuv')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: grey"
    } else {
        (document.getElementById('aimagNames').getElementsByTagName('li')[i].className.includes('ulaan'))
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: yellow"
    }

}