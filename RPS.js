let computerresult=0;
let playerresult=0;
let computerselection,playerselection;

const start = document.querySelector('.readybutton');
const finalresult = document.querySelector('.result');
const gamesection = document.querySelector('.option');
const playerpoints = document.querySelector("#playerpoint");
const comppoints = document.querySelector("#comppoint");
const current = document.createElement("p");
current.setAttribute('id','current')

start.addEventListener('click',startfunction);
function startfunction(){
    document.getElementById("fullgame").style.display = "block";
}
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.id,computerPlay());
    if(computerresult===5 || playerresult===5)
        gameresult(computerresult,playerresult);
  });
});

function game(playerselection,computerselection){
    const result=playround(computerselection, playerselection);
    if(result === "You Lose"){
        current.textContent= "Uhoh.. You lost this round :( "+ computerselection+ " beats " + playerselection;
        computerresult+=1;
    }
    else if (result === "You Win"){
        current.textContent= "Wohooo!! You won this round :) "+ playerselection+ " beats " + computerselection;
        playerresult+=1;
    }
    gamesection.append(current);
    playerpoints.textContent= "Your points: "+ playerresult;
    comppoints.textContent= "Computer points: "+ computerresult;
}


function computerPlay(){
    const result=["Rock", "Paper", "Scissors","Lizard","Spock"];
    return result[Math.floor(Math.random()*result.length)];
}

function playround(computerselection,playerselection){
    if(computerselection==="Rock" && playerselection==="Scissors" || 
        computerselection==="Paper" && playerselection==="Rock" ||
        computerselection==="Scissors" && playerselection==="Paper"||
        computerselection==="Rock" && playerselection==="Lizard" ||
        computerselection==="Lizard" && playerselection==="Spock" ||
        computerselection==="Spock" && playerselection==="Scissors" ||
        computerselection==="Scissors" && playerselection==="Lizard" ||
        computerselection==="Lizard" && playerselection==="Paper" ||
        computerselection==="Paper" && playerselection==="Spock" ||
        computerselection==="Spock" && playerselection==="Rock" ||
        computerselection==="Rock" && playerselection==="Scissors"
    )
        return "You Lose"
    else if(
        playerselection==="Rock" && computerselection==="Scissors" || 
        playerselection==="Paper" && computerselection==="Rock" ||
        playerselection==="Scissors" && computerselection==="Paper"||
        playerselection==="Rock" && computerselection==="Lizard" ||
        playerselection==="Lizard" && computerselection==="Spock" ||
        playerselection==="Spock" && computerselection==="Scissors" ||
        playerselection==="Scissors" && computerselection==="Lizard" ||
        playerselection==="Lizard" && computerselection==="Paper" ||
        playerselection==="Paper" && computerselection==="Spock" ||
        playerselection==="Spock" && computerselection==="Rock" ||
        playerselection==="Rock" && computerselection==="Scissors"
    )
        return "You Win"
    else
        current.textContent="Its a Tie!! Try again";
        
}

function gameresult(computer,player){
    current.remove();
    const final = document.createElement('p');  
    if(computer>player)
        final.textContent="Try again!! Computer won and You lost";
    else
        final.textContent="YAYYYY!! Computer Lost and You Won :)";
    finalresult.append(final);
    //const playagain = document.createElement('button');
    //finalresult.append(playagain);
    //playagain.addEventListener('click',restartgame);
}

//function restartgame(){
//}





