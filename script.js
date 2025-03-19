let userScore=0;
let CompScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");




const drawGame=()=>{
    // console.log("Game was draw");
    msg.innerText="Game was Draw.Play again!";
    msg.style.backgroundColor=" rgb(127, 137, 69)";


    
}
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}

const showWinner=(userWin,userChoice,compChoice)=>{

    if(userWin){
        // console.log("user you win ");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

        
        
    }else{                                               
        // console.log("user you lose");
        CompScore++;
        compScorePara.innerText=CompScore;
        msg.innerText=`You lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        
        
    }
};
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);

    //generate the computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

      
    if(userChoice===compChoice){
        //draw Game
        drawGame(); 
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice==="paper"?false:true;

        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);

    }
    

    

}

//for user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
    });
});





//dark mode

let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currentMode="light";//dark




modeBtn.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";

        body.classList.add("dark");
        body.classList.remove("light");
        modeBtn.innerHTML="🌙";
        modeText.innerText = "Dark Mode";
        
        
    }else{
        currentMode="light"; 
        body.classList.add("light");
        body.classList.remove("dark");
        modeBtn.innerHTML="🌞";
        modeText.innerText = "Light Mode";


    }
    console.log(currentMode);
});


// reset

let btn1=document.querySelector("#btn");
btn1.addEventListener("click", () => {
    userScore = 0;
    CompScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = CompScore;
    msg.innerText = "Scores have been reset. Play again!";
    msg.style.backgroundColor = "rgb(127, 137, 69)";
});
