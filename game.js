let random = parseInt(Math.random()*100+1);

const userinput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot =document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startover = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numguess = 1 
 
let playGame = true;


if(playGame){
    submit.addEventListener('click', function(e){
     e.preventDefault();
     let guess = parseInt(userinput.value)
     validatedGuess(guess);
    })
}


function validatedGuess(guess){
 if (isNaN(guess)){
    alert('enter a valid no')}
 else if(guess<1){
     alert('enter a no more than 10')
 }
 else if(guess > 100){
    alert('enter a no less than 100')
 }else{
    prevGuess.push(guess)
    if(numguess >10){
        displayGuesses(guess);
        displayMessage(`Game over . The random no was ${random}`);
        endGame()
    }else{
        displayGuesses(guess);
        checkGuess(guess)
    }
 }
 }


function checkGuess(guesses){
    if(guesses === random){
        displayMessage("you guessed it correct")
        endGame()
    }else if(guesses<random){
        displayMessage("no is too low")
    }else{
        displayMessage('no is too high')
    }

}
 function displayGuesses(guesses){
    userinput.value = '';
    guessSlot.innerHTML += `${guesses} , `;
    numguess++;
    remaining.innerHTML = `${11-numguess}`;

 }
 function displayMessage(message){
   lowOrHi.innerHTML = `<h2>${message}</h2>`
 }
 function endGame(){
    userinput.value ="";
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id = "newGame">Start a new game</h2>';
    startover.appendChild(p);
    playGame = false
    startGame()
 }
 function startGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
random = parseInt(Math.random()*100+1);
prevGuess = [];
numguess = 1
guessSlot.innerHTML = ''
remaining.innerHTML = `${11-numguess}`
userinput.removeAttribute('disabled')
startover.removeChild(p)
playGame = true;
    })

 }
