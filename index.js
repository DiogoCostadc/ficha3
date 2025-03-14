

function euro(){
    let num1 = Math.floor(Math.random()*50)

let num2 = Math.floor(Math.random()*50)

let num3 = Math.floor(Math.random()*50)

let num4 = Math.floor(Math.random()*50)

let num5 = Math.floor(Math.random()*50)

let star = Math.floor(Math.random()*12)

let star2 = Math.floor(Math.random()*12)

    document.getElementById("num1").innerHTML = (` Numeros : ${num1} ${num2} ${num3} ${num4} ${num5}`)
    document.getElementById("star").innerHTML = (`Estrelas: ${star} ${star2}`)
}