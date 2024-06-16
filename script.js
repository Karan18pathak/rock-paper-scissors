let userScore= 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#computer-score")

const genCompChoices = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=> {
    console.log("Game was draw");
    msg.innerText="Game Draw";
    msg.style.backgroundColor="Grey";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor=" Green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Loose");
        msg.innerText=`You Lost . ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}

const playGame = (userChoice)=>{
    console.log("  user choice = ",userChoice);
    const compChoice = genCompChoices();
    console.log("  computer choice = ",compChoice);
    

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice === "paper"? false :true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice === "scissors"? false : true;
        }
        else{
            userWin=compChoice==="rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }   
}

choices.forEach((choice)=>{ 
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})