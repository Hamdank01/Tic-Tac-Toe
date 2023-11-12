console.log("Welcome to Tic Tac Toe")
let turn = 'X'
let isgameover = false;

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 2, 5.2, 0],
        [3, 4, 5, 2, 15.3, 0],
        [6, 7, 8, 2, 25.3, 0],
        [0, 3, 6, -7.53, 15.35, 90],
        [1, 4, 7, 2.5, 15.35, 90], 
        [2, 5, 8, 12.55, 15.35, 90],
        [2, 4, 6, 2.5, 15, 135],
        [0, 4, 8, 3, 15.6, 45],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.ifwin').getElementsByTagName('img')[0].style.width = "150px";
            document.querySelector(".line").style.width = "25vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    }) 
}

let box = document.getElementsByClassName("box");
Array.from(box).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });
    turn = "X"
    isgameover = false
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
    document.querySelector('.ifwin').getElementsByTagName('img')[0].style.width = "0px"
})
