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
     return 'You Chose Paper, Computer Chose Rock. You Win!';

  } else if (computerSelection + playerSelection === "paperscissors") {
      return 'You Chose Scissors, Computer Chose Paper. You Win!';

  } else if (computerSelection + playerSelection === "scissorsrock") {
      return 'You Chose Rock, Computer Chose Scissors. You Win!';

  } else if (computerSelection + playerSelection === "rockscissors") {
      return 'You Chose Scissors, Computer Chose Rock. You Lose!';

  } else if (computerSelection + playerSelection === "paperrock") {
      return 'You Chose Rock, Computer Chose Paper. You Lose!';

  } else if (computerSelection + playerSelection === "scissorspaper") {
      return 'You Chose Paper, Computer Chose Scissors. You Lose!';

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

    const dialogDiv = document.querySelector('div.dialogChange');

    let dialogText = "Go ahead. Choose your weapon!"

    dialogDiv.textContent = dialogText;
};
function removeChoices() {
    const gameChoices = document.querySelector('div.gameChoices');
        
    const removeRock = document.getElementById('data1');
    const removePaper = document.getElementById('data2');
    const removeScissors = document.getElementById('data3');
            
    removeRock.remove();
    removePaper.remove();
    removeScissors.remove();

    const roundOver = document.createElement('button');
    let dialogText = "Click Me! Reset Game!"
    roundOver.textContent = dialogText;
    roundOver.setAttribute('onClick',"reset()")
    roundOver.setAttribute('id', 'reset');
    roundOver.classList.add('resetButton')
    gameChoices.appendChild(roundOver);
    
    const selectResetButton = document.createElement('button.reset');
};
function reset() {
    location.reload();
}
function roundDialog() {
    const dialogDiv = document.querySelector('div.dialogChange');

    let dialogText = arguments[0].toString();

    dialogDiv.textContent = dialogText;
}
function uptScore() {

    let argArray = arguments;
    results = argArray[0].toString();

    const playerScorePara = document.querySelector('p.pNum');
    const computerScorePara = document.querySelector('p.cNum');
    
    x = Number(playerScorePara.textContent);
    y = Number(computerScorePara.textContent);

    if (results.includes("Win")) {
        playerScorePara.textContent = ++x;
    } else if (results.includes("Lose")) {
        computerScorePara.textContent = ++y;
    }
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
    

    roundDialog(roundResults);
    uptScore(roundResults);
    scoreCapReached();
    
    
    function scoreCapReached() {
        const playerScorePara = document.querySelector('p.pNum');
        const computerScorePara = document.querySelector('p.cNum');
        const dialogDiv = document.querySelector('div.dialogChange');

        currentScore = Number(playerScorePara.textContent);
        currentScore2 = Number(computerScorePara.textContent);
        pWin = "You won! Best of 5 rounds Congratulations!"
        cWin = "You lost! Best of 5 rounds. Try again!"




        if (currentScore === +5) {
            dialogDiv.textContent = pWin;
            removeChoices();
            return
        } else if (currentScore2 === 5) {
            dialogDiv.textContent = cWin;
            removeChoices();
            return
        } else
        return
    };
                }
            )
        }
    )
};