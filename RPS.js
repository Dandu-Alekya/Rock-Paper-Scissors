function computerPlay(){
    const result=["Rock", "Paper", "Scissors"];
    return result[Math.floor(Math.random()*result.length)];
}

function playround(computerselection,playerselection){
    if(computerselection==="Rock" && playerselection==="scissors")
        return "Computer selected Rock, you lose :( ";
    else if(computerselection==="Rock" && playerselection==="paper")
        return "Computer selected Rock, you win :) ";
    else if(computerselection==="Rock" && playerselection==="rock")
        return "Computer selected Rock, It's a tie :/ ";
    else if(computerselection==="Paper" && playerselection==="scissors")
        return "Computer selected Paper, you win :) ";
    else if(computerselection==="Paper" && playerselection==="rock")
        return "Computer selected Paper, you lose :( ";
    else if(computerselection==="Paper" && playerselection==="paper")
        return "Computer selected Paper, It's a tie :/ ";
    else if(computerselection==="Scissors" && playerselection==="paper")
        return "Computer selected Scissor, you lose :( ";
    else if(computerselection==="Scissors" && playerselection==="rock")
        return "Computer selected Scissors, you win :)";
    else
        return "Computer selected Scissors, It's a tie :/ ";
}

function game(){
    let playerresult=0, computerresult=0;
    for(let i=0;i<5;i++){
        let playerselection=prompt("Select rock paper or scissors");
        let computerselection=computerPlay();
        let result=playround(computerselection, playerselection.toLowerCase());
        console.log(result);
        if(result.includes("you lose"))
            computerresult+=1;
        else    
            playerresult+=1;
    }
    if(computerresult>playerresult)
        console.log("Try again!! Computer won and You lost");
    else
        console.log("YAYYYY!! Computer Lost and You Won :)");
}
 
game()
