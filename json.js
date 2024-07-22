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
let imageDiv = document.querySelector(".imageDiv");
let computerHand = document.querySelector("#computerHand");

let playrock = document.querySelector("#rockmusic");
let playpaper = document.querySelector("#papermusic");
let playscissor = document.querySelector("#scissorsmusic");

let playrock2 = document.querySelector("#rockmusic2");
let playpaper2 = document.querySelector("#papermusic2");
let playscissor2 = document.querySelector("#scissorsmusic2");

let musicarray2 = [playrock2,playpaper2,playscissor2];

let input = 0;
let count1 = 0;
let count2 = 0;

butRock.onclick = function(){
    yourHandImage.classList.add("shakeAnimation");
    computerHand.classList.add("shakeAnimation");
    result.innerText = "wait!";
    playrock.play();
    yourHandImage.src = array[0];
    computerHandImage.src = array[0];
    setTimeout(function(){
        playrock.pause();
        yourHandImage.classList.remove("shakeAnimation");
        computerHand.classList.remove("shakeAnimation");
        input = 1;
        let comp = Math.floor(Math.random()*3)+1;
        musicarray2[comp-1].play();
        yourHandImage.src = array[input-1];
        computerHandImage.src = array[comp-1];
        myFunction(input,comp);
    },1500)
}

butPaper.onclick = function(){
    yourHandImage.classList.add("shakeAnimation");
    computerHand.classList.add("shakeAnimation");
    playpaper.play();
    result.innerText = "wait!";
    yourHandImage.src = array[0];
    computerHandImage.src = array[0];
    setTimeout(function(){
        playpaper.pause();
        yourHandImage.classList.remove("shakeAnimation");
        computerHand.classList.remove("shakeAnimation");
        let comp = Math.floor(Math.random()*3)+1;
        musicarray2[comp-1].play();
        input = 2;
        yourHandImage.src = array[input-1];
        computerHandImage.src = array[comp-1];
        myFunction(input,comp);
    },1500)
}

butScissor.onclick = function(){
    yourHandImage.classList.add("shakeAnimation");
    computerHand.classList.add("shakeAnimation");
    playscissor.play();
    result.innerText = "wait!";
    yourHandImage.src = array[0];
    computerHandImage.src = array[0];
    setTimeout(function(){
        playscissor.pause();
        yourHandImage.classList.remove("shakeAnimation");
        computerHand.classList.remove("shakeAnimation");
        let comp = Math.floor(Math.random()*3)+1;
        musicarray2[comp-1].play();
        input = 3;
        yourHandImage.src = array[input-1];
        computerHandImage.src = array[comp-1];
        myFunction(input,comp);
    },1500)
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
    setTimeout(function(){
        if(count1 === 5){
            box.innerHTML = "<center><h1>Congrats You Win!</h1></center>";
        }
        if(count2 === 5){
            box.innerHTML = "<center><h1>Try Again!</h1><center>";
        }
    },1500);
}


reset.onclick = function(){
    location.reload();
}
