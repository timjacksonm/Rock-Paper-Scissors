function getRandom() {
    return Math.random();
};
function computerPlay() {

 //Randomly return either 'Rock','Paper','Scissors'   

integer = getRandom();

if (integer < 0.33) {
    return "Rock";

} else if (integer <= 0.66) {
    return "Paper";

} else {
    return "Scissors";
    }
};
function playRound() {

    let argArray = arguments;
    playerInput = argArray[0].toString();
    playerSelection = playerInput.toLowerCase();
    let computerInput = computerPlay();
    computerSelection = computerInput.toLowerCase();
    
  if (computerSelection + playerSelection === "rockpaper") {
     return 'Computer Chose Rock, You Chose Paper. You Win!';

  } else if (computerSelection + playerSelection === "paperscissors") {
      return 'Computer Chose Paper, You Chose Scissors. You Win!';

  } else if (computerSelection + playerSelection === "scissorsrock") {
      return 'Computer Chose Scissors, You Chose Rock. You Win!';

  } else if (computerSelection + playerSelection === "rockscissors") {
      return 'Computer Chose Rock, You Chose Scissors. You Lose!';

  } else if (computerSelection + playerSelection === "paperrock") {
      return 'Computer Chose Paper, You Chose Rock. You Lose!';

  } else if (computerSelection + playerSelection === "scissorspaper") {
      return 'Computer Chose Scissors, You Chose Paper. You Lose!';

  } else if (computerSelection + playerSelection === "rockrock") {
      return 'Rock & Rock. TieBreaker!';

  } else if (computerSelection + playerSelection === "paperpaper") {
      return 'Paper & Paper. TieBreaker!';

  } else if (computerSelection + playerSelection === "scissorsscissors") {
      return 'Scissors & Scissors. TieBreaker!';


  } else (computerSelection + playerSelection)
    return 'Not a valid choice!';  
};
function displayChoices() {
    const gameChoices = document.querySelector('div.gameChoices');
        
    const rock = document.createElement('input');
            
    rock.classList.add('resize');
    rock.setAttribute('id', 'data1');
    rock.setAttribute('type', 'image');
    rock.setAttribute('src', './graphics/1.jpg');
    rock.setAttribute('value', "Rock");
    gameChoices.appendChild(rock);
            
        
    const paper = document.createElement('input');
            
    paper.classList.add('resize');
    paper.setAttribute('id', 'data2');
    paper.setAttribute('type', 'image');
    paper.setAttribute('src', './graphics/2.jpg');
    paper.setAttribute('value', "Paper");
    gameChoices.appendChild(paper);
            
    const scissors = document.createElement('input');
            
    scissors.classList.add('resize');
    scissors.setAttribute('id', 'data3');
    scissors.setAttribute('type', 'image');
    scissors.setAttribute('src', './graphics/3.jpg');
    scissors.setAttribute('value', "Scissors");
    gameChoices.appendChild(scissors);

    const button = document.getElementById('startButton');
    button.disabled = true;
};
function startGame() {
    
    displayChoices();

    const buttons = document.querySelectorAll('input');
    buttons.forEach((button) => 
    {
    button.addEventListener('click', (e) => 
    {
    let roundResults = playRound(button.value);
    playRound(button.value);
    
    console.log(roundResults);
                }
            )
        }
    )
};