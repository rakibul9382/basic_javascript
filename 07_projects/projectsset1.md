# DOM projects
## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

# projecte 1
```java script
const selectButton = document.querySelectorAll('.button');
const body = document.querySelector('body')

selectButton.forEach(function(button){
  button.addEventListener('click',function(e){
    console.log(e.target);
    if(e.target.id ==='grey'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id==='white'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id==='blue'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id==='yellow'){
      body.style.backgroundColor = 'yellow';
    }
  })
})
```
# project 2
# solution code 

``` java script
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'plaese give a valid height ';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'plaese give a valid weight ';
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    let bmivalue = parseFloat(BMI); //  convert string to float
    let message = '';
    if (bmivalue < 18.6) {
      message = 'under weight';
    } else if (bmivalue > 18.6 && bmivalue < 24.9) {
      message = 'normal weight';
    } else {
      message = 'over weight weight';
    }
    result.innerHTML = `<span>${BMI}- ${message}</span>`;
  }
})
  ```

  # project 3 
  # solution code
  ``` java script 
  const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```
# project 4
# solution code 
``` javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

'''