// Making rock paper scissors game
function game(){ 
    
    const userChoicheInput = prompt('Rock, Paper or Scissors?');
const userChoice= userChoicheInput.toLowerCase();
if(!userChoice){
    return game();
}

if(userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors'){
    console.log('Invalid choice, please choose rock, paper or scissors.');
    return game();}

console.log(`Your choice is: ${userChoice}`);

let computerChoice;
let random = Math.floor(Math.random()*3)+1;


switch(random){
    case 1:
        computerChoice = 'rock';
        break;
    case 2: 
        computerChoice = 'paper';
        break;
    case 3: 
        computerChoice = 'scissors';
    };
console.log(`Opponent  choice is: ${computerChoice}`);


if(
    (userChoice === 'paper' && computerChoice === 'rock')||
    (userChoice === 'rock' && computerChoice === 'scissors')||
    (userChoice === 'scissors' && computerChoice === 'paper')
){
    console.log('You Win!');
}


else if(
    (userChoice === 'rock' && computerChoice === 'paper')||
    (userChoice === 'scissors' && computerChoice === 'rock')||
    (userChoice === 'paper' && computerChoice === 'scissors')
){
    console.log('You Lose!');
}
else if(userChoice === computerChoice){
    console.log('it is a tie!');
}

let playAgainPromt = prompt('Do you want to play again? Yes Or No');
let playAgain = playAgainPromt? playAgainPromt.toLowerCase(): 'no';

if(playAgain === 'yes'){
    game();
}
else{
    console.log('Thanks for playing!');
}
}

game();
