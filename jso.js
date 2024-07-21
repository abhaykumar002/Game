let submit = document.getElementById("submit-b");
let hint = document.getElementById("hint-t");
let answer = Math.floor(Math.random() * 100)+1;
// let answer = 70;
let counter = document.getElementById("counter");
let reset = document.getElementById("reset");
let count = 1;


reset.onclick = function(){
    location.reload();
}


let input = document.getElementById("typing");
input.addEventListener('keyup',(e)=>{
    if(e.keyCode === 13){
        counter.innerText = count;
        match(answer,e.target.value);
        if(count == 5){
            if(answer == e.target.value){
                hint.innerText = "Congrats You won!";
                counter.innerText = 'you won in '+(count)+' attempts!';
                submit.style.visibility= "hidden";
                input.style.visibility= "hidden";
            }
            else{
                hint.innerText = "Game Finish You Lost!";
                count = 0;
                submit.style.visibility= "hidden";
                input.style.visibility= "hidden";
            }
        }
        count++;
    }
})




submit.onclick = function(){
    let val = Number(document.getElementById("typing").value);
    counter.innerText = count;
    match(answer,val);

    if(count == 5){
        if(answer == val){
            hint.innerText = "Congrats You won!";
            counter.innerText = 'you won in '+(count)+' attempts!';
            submit.style.visibility= "hidden";
            input.style.visibility= "hidden";



        }
        else{
            hint.innerText = "Game Finish You Lost!";
            count = 0;
            submit.style.visibility= "hidden";
            input.style.visibility= "hidden";

        }
    }
    count++;

    


}

function match(answer,val){
    if(answer == val){
        hint.innerText = "Congrats You won";
        counter.innerText = 'you won in '+(count)+' attempts!';
        submit.style.visibility= "hidden";
        input.style.visibility= "hidden";


    }
    else if(answer-val < 10  && answer-val > 0){
        hint.innerText = "Enter Slightly Bigger number";
    }
    else if(val-answer < 10 && val-answer > 0){
        hint.innerText = "Enter Slightly Smaller number";
    }
    else if(answer > val){
        hint.innerText = "Enter Bigger number";
    }
    else if(answer < val){
        hint.innerText = "Enter Smaller number";
    }

}

