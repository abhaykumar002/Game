let countYou = document.getElementById("countYou");
let countComputer = document.getElementById("countComputer");
let butRock = document.getElementById("butRock");
let butPaper = document.getElementById("butPaper");
let butScissor = document.getElementById("butScissor");
let result = document.getElementById("result");
let box = document.querySelector(".box");
let yourHandImage = document.querySelector("#yourHandImage");
let array = ["rhand.png","phand.png","shand.png"];
let computerHandImage = document.querySelector("#computerHandImage");
let reset = document.querySelector("#restart");
let imageButton = document.querySelector(".image");


let input = 0;
let count1 = 0;
let count2 = 0;






butRock.onclick = function(){
    input = 1;
    let comp = Math.floor(Math.random()*3)+1;
    yourHandImage.src = array[input-1];
    computerHandImage.src = array[comp-1];
    myFunction(input,comp);
    
}
butPaper.onclick = function(){
    let comp = Math.floor(Math.random()*3)+1;
    input = 2;
    yourHandImage.src = array[input-1];
    computerHandImage.src = array[comp-1];
    myFunction(input,comp);
}
butScissor.onclick = function(){
    let comp = Math.floor(Math.random()*3)+1;
    input = 3;
    yourHandImage.src = array[input-1];
    computerHandImage.src = array[comp-1];
    myFunction(input,comp);
}

function myFunction(input,comp){
    if((input === 1 && comp === 3) || (input === 2 && comp === 1) || (input == 3 && comp == 2)){
        result.innerText = "You Win!";
        count1 ++;
        countYou.innerText = count1;
    }
    else if((input === 1 && comp === 2) || (input === 2 && comp === 3) || (input == 3 && comp == 1)){
        result.innerText = "You Lose!";
        count2 ++;
        countComputer.innerText = count2;
    }
    else{
        result.innerText = "Tie!";
    }
    if(count1 === 5){
        box.innerHTML = "<center><h1>Congrats You Win!</h1></center>";
    }
    if(count2 === 5){
        box.innerHTML = "<center><h1>Try Again!</h1><center>";
    }
}


reset.onclick = function(){
    location.reload();
}