let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
  score= scoreStr ? JSON.parse(scoreStr) : { 
  // Use of Gaurd Operator
  win: 0,
  lost: 0,
  tie: 0,
};

score.displayScore = function(){
    return `Win: ${score.win} | Lost: ${score.lost} | Tie: ${score.tie}`;
  }; 

showResult();
};

// Get the modal and buttons
let modal = document.getElementById('infoModal');
let infoBtn = document.getElementById('info');
let closeModalBtn = document.getElementById('closeModalBtn');

// Attach event listeners
infoBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}


function generateComputerChoice(){
let choice;
let randomNumber = Math.random()*3;
if(randomNumber > 0 && randomNumber <= 1){
  choice = 'Bat';
}
else if(randomNumber <= 2){
  choice = 'Ball';
}
else{
  choice = 'Wicket';
}
return choice;
}

function getResult(userMove, computerMove){
if(userMove === 'Bat'){
  if(computerMove === 'Bat'){
    score.tie++;
    return `Tie 🤝`;
  }
  else if (computerMove === 'Ball'){
    score.win++;
    return 'You Won🎉';
  }
  else if(computerMove === 'Wicket'){
    score.lost++;
    return `Computer Won🖥️ `;
  }
}

else if(userMove === 'Ball'){
  if (computerMove === 'Wicket'){
    score.win++;
    return `You Won🎉`;
  }
  else if(computerMove === 'Ball'){
    score.tie++;
    return `Tie 🤝`;
  }
  else if(computerMove === 'Bat'){
    score.lost++;
    return `Computer Won🖥️ `;
  }
}

else if(userMove === 'Wicket'){
  if (computerMove === 'Bat'){
    score.win++;
    return `You Won🎉`;
  }
  else if(computerMove === 'Wicket'){
    score.tie++;
    return `Tie 🤝`;
  }
  else if(computerMove === 'Ball'){
    score.lost++;
    return  `Computer Won🖥️ `;
  }
}
}

function showResult(userMove, computerMove, resultMsg){
localStorage.setItem('Score', JSON.stringify(score));

document.querySelector('#user-move').innerText =
userMove !== undefined ? `👤 You have chosen a ${userMove}.` : '';
//Insted of this we can also use default operator.  
// userMove ? `👤 You have chosen a ${userMove}.` : '';

document.querySelector('#computer-move').innerText = 
computerMove !== undefined ? `🤖 Computer choice is a ${computerMove}.` : '';

document.querySelector('#result').innerText = 
resultMsg !== undefined ? `🏆 Result:  ${resultMsg}` : '';

document.querySelector('#score').innerText = `🎯 Score: ${score.displayScore()}`;

// alert(`You have chosen a ${userMove}. Computer choice is a ${computerMove}. 

// And The Result is: ${resultMsg};

// ${score.displayScore()}`);
}