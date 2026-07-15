let userscore=0;
let computerscore=0;

//sobgula choice(rock.paper,scissor) select kora
const choices= document.querySelectorAll(".choice");

//msg add homepage e
const msg = document.querySelector("#msg");

//computer choice(0=rock , 1= paper , 2=scissor (tai 3 diye gun))
const getcompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
};

//draw msg print
const drawgame = () =>{
    console.log("game draw");
    msg.innerText = ("Game draw.Try again");
    msg.style.backgroundColor= "black";
};

//html score gula activated krlm
let userscorepara= document.querySelector("#user");
let compscorepara= document.querySelector("#computer");

//show winner msg
const showwin = (userwin) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win!");
        msg.innerText = "You win";
        msg.style.backgroundColor ="green";
    }else{
        computerscore++;
        compscorepara.innerText = computerscore;
        console.log("you lose!");
        msg.innerText = ("You lose!");
        msg.style.backgroundColor= "red"; // css e krle green ashe cause js er kaj priority pay css er age
    }
};

// condition + winner target
const playgame = (userchoice) => {
    //console.log("user choice = ", userchoice);
    const compchoice = getcompchoice();
    //console.log("computer choice = ", compchoice);

    if(userchoice === compchoice){
    drawgame();
    }else{
    let userwin = true;
    if(userchoice === "rock"){
        userwin = compchoice === "paper" ? false : true;
    }else if(userchoice === "paper"){
        userwin = compchoice === "scissor" ? false : true;

    }else{
        userwin = compchoice === "rock" ? false : true;
    }
    showwin(userwin, userchoice, compchoice);
    }
};

// single(rock ,paper ,scissor) show korbe id wise click krar karone
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);   
    });
});
