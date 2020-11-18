"use strict"
// get all the elements that you will need later for the functions
let userScore = 0;
let npcScore = 0;
let matchScore = 0;
const userScore_p = document.getElementById("userScore");
const npcScore_p = document.getElementById("npcScore");
const matchScore_p = document.getElementById("matchScore")
const results_h2 = document.querySelector("#results");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const choice_div = document.querySelectorAll(".choice");

// get the npc choice and store it
function getNpcChoice() {
    let choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// transform r p s into the words rock paper scissors
function transformInitial(initial) {
    if (initial === "r"){
        return "Rock";
    } else if (initial === "p"){
        return "Paper";
    }
    return "Scissors";
}

// If you win the count and match score will go up and it will tell you your choice beats the npc choice and give you a green glow around your choice.
function win(userChoice, npcChoice) {
    let userChoice_div = document.getElementById(userChoice);
    userScore++
    matchScore++
    userScore_p.innerHTML = userScore;
    matchScore_p.innerHTML = matchScore;
    results_h2.innerHTML = `${transformInitial(userChoice)} beats ${transformInitial(npcChoice)}. You win.`;
    userChoice_div.classList.remove("white-border");
    userChoice_div.classList.add("green-glow");
    setTimeout(function() {userChoice_div.classList.remove("green-glow"); userChoice_div.classList.add("white-border") }, 800);
}

// If you lose the npc's count and match score will go up and it will tell you your choice beats the npc choice and give you a red glow around your choice.
function lose(userChoice, npcChoice) {
    let userChoice_div = document.getElementById(userChoice);
    npcScore++
    matchScore++
    npcScore_p.innerHTML = npcScore;
    matchScore_p.innerHTML = matchScore;
    results_h2.innerHTML = `${transformInitial(userChoice)} loses to ${transformInitial(npcChoice)}. You lose.`;
    userChoice_div.classList.remove("white-border");
    userChoice_div.classList.add("red-glow");
    setTimeout(function() {userChoice_div.classList.remove("red-glow"); userChoice_div.classList.add("white-border");}, 800);
}

// If it is a draw then only the match count will go up and a draw will be declared an you will get a grey glow 
function draw(userChoice, npcChoice) {
    let userChoice_div = document.getElementById(userChoice);
    matchScore++
    npcScore_p.innerHTML = npcScore;
    matchScore_p.innerHTML = matchScore;
    results_h2.innerHTML = `${transformInitial(userChoice)} equals ${transformInitial(npcChoice)}. It's a Draw.`;
    userChoice_div.classList.remove("white-border");
    userChoice_div.classList.add("grey-glow");
    setTimeout(function() {userChoice_div.classList.remove("grey-glow"); userChoice_div.classList.add("white-border") }, 800);
}

// start the game by comparing user and npc choices
function game(userChoice) {
    let npcChoice = getNpcChoice();
    switch(userChoice + npcChoice) {
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, npcChoice);
            break;
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, npcChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, npcChoice);
    };
}

// when img is click to start the game
function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    });
    paper_div.addEventListener('click', function() {
        game("p");
    });
    scissors_div.addEventListener('click', function() {
        game("s");
    });
}
main();