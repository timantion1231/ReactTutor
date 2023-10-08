let nums = []

let plusbtn = document.getElementById("btnplus")
let minusbtn = document.getElementById("btnminus")
let divbtn = document.getElementById("btndel")
let umnbtn = document.getElementById("btnumn")
let equalbtn = document.getElementById("btnequal")
let dotbtn = document.getElementById("btndrob")
let erasebtn = document.getElementById("btnerase")
let inparea = document.getElementById("inputarea")
let storarea = document.getElementById("story")
let clearbtn = document.getElementById("btnclear")

inparea.focus()

for (let i = 0; i < 10; i++) {
    nums.push(document.getElementById("btn" + i))
}

function addnum(btn) {
    let currnum = inparea.value
    inparea.value = currnum + btn
    inparea.focus()
}

let val1
let val2
let resval
let operation

inparea.oninput = function () {
    let reg = /[A-Za-zА-Яа-яЁё]/g
    this.value = this.value.replace(reg, '')

erasebtn.onclick = function () {
    inparea.value = inparea.value.slice(0, -1)
    inparea.focus()
}

clearbtn.onclick = function(){
    inparea.value = ""
    inparea.focus()
}

plusbtn.onclick = function () {
    val1 = Number(inparea.value)
    inparea.value = ""
    operation = "+"
    inparea.focus()
}

minusbtn.onclick = function () {
    val1 = Number(inparea.value)
    inparea.value = ""
    operation = "-"
    inparea.focus()
}

umnbtn.onclick = function () {
    val1 = Number(inparea.value)
    inparea.value = ""
    operation = "*"
    inparea.focus()
}

divbtn.onclick = function () {
    val1 = Number(inparea.value)
    inparea.value = ""
    operation = "/"
    inparea.focus()
}

equalbtn.onclick = function () {
    val2 = Number(inparea.value)

    switch (operation) {
        case "+":
            resval = val1 + val2
            break
        case "-":
            resval = val1 - val2
            break
        case "*":
            resval = val1 * val2
            break
        case "/":
            resval = val1 / val2
            break
    }
    
    inparea.focus()
    addstory()
    val1 = undefined
    val2 = undefined
    resval = undefined
    operation = undefined
}

function addstory() {
    storarea.append(val1, " ", operation, " ", val2, " = ", resval, "\n")
    inparea.value = resval
}

