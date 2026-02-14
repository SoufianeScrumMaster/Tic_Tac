let title = document.querySelector('.title')
let val = "X"
let squares = [];
function affiche(num1,num2,num3){
    title.innerHTML = `${squares[1]} Winner`
        document.getElementById(`item`+num1).style.background = "black"
        document.getElementById(`item`+num2).style.background = "black"
        document.getElementById(`item`+num3).style.background = "black"
        setInterval(function(){
            title.innerHTML += `.`
        },1000)
        setTimeout(function(){
            location.reload()
        },4000)
}
function winner(){
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById(`item${i}`).innerHTML
    }
    if (squares[1] === squares[2] && squares[2] === squares[3] && squares[1] != "") {
        affiche(1,2,3)
    }
    if (squares[4] === squares[5] && squares[5] === squares[6] && squares[4] != "") {
        affiche(4,5,6)
    }
    if (squares[7] === squares[8] && squares[8] === squares[9] && squares[7] != "") {
        affiche(7,8,9)
    }
    if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] != "") {
        affiche(1,4,7)
    }
    if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] != "") {
        affiche(2,5,8)
    }
    if (squares[3] === squares[6] && squares[6] === squares[9] && squares[3] != "") {
        affiche(3,6,9)
    }
    if (squares[1] === squares[5] && squares[5] === squares[9] && squares[1] != "") {
        affiche(1,5,9)
    }
    if (squares[3] === squares[5] && squares[5] === squares[7] && squares[3] != "") {
        affiche(3,5,7)
    }
}
function game(id){
    let ele = document.getElementById(id)
    if (val === "X" && ele.innerHTML === "") {
        ele.innerHTML = "X"
        val = "O"
        title.innerHTML = "O"
    }
    if(val === "O" && ele.innerHTML === ""){
        ele.innerHTML = "O"
        val = "X"
        title.innerHTML = "X"
    }
    winner()
}