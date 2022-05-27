const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*100)+1;
let guessCount = 1;
let resetButton;

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        play();
    }
})

button.addEventListener("click", play);
function play() {
    const userNumber = document.querySelector("#guess").value;
    if (guessCount === 1) {
        guesses.textContent = "Your turns: ";
        guesses.classList.add("guessesNumbers");
    }
    guesses.textContent += userNumber + ' ';


    if (userNumber < 1 || userNumber > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Ups!',
            text: 'You must enter a number from 1 to 100',
          })
    }
    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Ups!',
            text: 'Enter a number!',
          })  
    }
    else if (guessCount === 10) {
        Swal.fire({
            icon: 'error',
            title: 'Oh no!',
            text: 'Your turns are over! Game over.',
          })
        setGameOver();
    }
    else {
        if (userNumber < answer) {
            Swal.fire('A lot of stars tonight! Your number is too low!')
        }
    else if (userNumber > answer) {
        Swal.fire('Your number is too high!')
    }

    else {
        Swal.fire({
            title: 'Right! Beautiful stars in the sky tonight!',
            width: 600,
            padding: '3em',
            background: '#fff url("https://c.tenor.com/26KgBqLSQUgAAAAC/stars-star-gazing.gif")',
          })
          setGameOver();
    }
}
 guessCount++;
 input.value = ''; 
 input.focus();
}
function setGameOver() {
    input.disabled = true;
    button.disabled = true;
    const newGame = document.querySelector(".play");
    const resetButton = document.createElement("button");
    resetButton.textContent = "New game";
    resetButton.classList.add("btnReset");
    newGame.appendChild(resetButton);
    resetButton.addEventListener("click", () => {
        location.reload();
    });

    const btn = document.querySelector("#btn");
    btn.style.display = "none";
}
function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    input.disabled = false;
    button.disabled = false;
    input.value = '';
    input.focus();
    answer = Math.floor(Math.random() * 100) + 1;
}