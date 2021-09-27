let computerresult=0;
let playerresult=0;
let computerselection;

const final = document.querySelector('#final');

function computerPlay(){
    const result=["Rock", "Paper", "Scissors","Lizard","Spock"];
    return result[Math.floor(Math.random()*result.length)];
}

function playround(computerselection,playerselection){
    if(computerselection==="Rock" && playerselection==="scissors" || 
        computerselection==="Paper" && playerselection==="rock" ||
        computerselection==="Scissors" && playerselection==="paper"||
        computerselection==="Rock" && playerselection==="lizard" ||
        computerselection==="Lizard" && playerselection==="spock" ||
        computerselection==="Spock" && playerselection==="scissors" ||
        computerselection==="Scissors" && playerselection==="lizard" ||
        computerselection==="Lizard" && playerselection==="paper" ||
        computerselection==="Paper" && playerselection==="spock" ||
        computerselection==="Spock" && playerselection==="rock" ||
        computerselection==="Rock" && playerselection==="scissors"
    )
        return "You Lose"
    else if(
        playerselection==="rock" && computerselection==="Scissors" || 
        playerselection==="paper" && computerselection==="Rock" ||
        playerselection==="scissors" && computerselection==="Paper"||
        playerselection==="rock" && computerselection==="Lizard" ||
        playerselection==="lizard" && computerselection==="Spock" ||
        playerselection==="spock" && computerselection==="Scissors" ||
        playerselection==="scissors" && computerselection==="Lizard" ||
        playerselection==="lizard" && computerselection==="Paper" ||
        playerselection==="paper" && computerselection==="Spock" ||
        playerselection==="spock" && computerselection==="Rock" ||
        playerselection==="rock" && computerselection==="Scissors"
    )
        return "You Win"
    else
        return "Tie"
        
}

const playerpoints = document.querySelector("#playerpoint");
const comppoints = document.querySelector("#comppoint");
const current = document.querySelector("#current");
function game(playerselection){
    while(computerresult<=5 && playerresult<=5){
    computerselection=computerPlay();
    const result=playround(computerselection, playerselection);
    if(result === "You Lose"){
        current.textContent= "Uhoh.. "+ computerselection+ " beats " + playerselection;
        computerresult+=1;
    }
    else {
        current.textContent= "Wohooo "+ playerselection+ " beats " + computerselection;
        playerresult+=1;
    }
    
    playerpoints.textContent= "Your points: "+ playerresult;
    comppoints.textContent= "Computer points: "+ computerresult;
    }
    gameresult(computerresult,playerresult);
}

function gameresult(computer,player){
    if(computer>player)
        final.textContent="Try again!! Computer won and You lost";
    else
        final.textContent="YAYYYY!! Computer Lost and You Won :)";
}

for(let i=0;i<=6;i++){
    game("rock")
}
/*const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {

     });
});
*/




